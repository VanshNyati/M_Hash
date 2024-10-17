import os
import openai
import nest_asyncio
import chromadb
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from llama_index.core.schema import TextNode
from llama_index.core import VectorStoreIndex, StorageContext
from llama_index.vector_stores.chroma import ChromaVectorStore
from llama_index.core.memory import ChatMemoryBuffer
from pymongo import MongoClient


# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS

app.template_folder = 'templates'
# Load and process data
with open("MSME_final.txt", 'r', encoding='utf-8') as file:
    content = file.read()

chunks = [chunk.strip() for chunk in content.split('--------------------------------------') if chunk.strip()]

# Set up OpenAI API key
openai.api_key = os.environ.get("OPENAI_API_KEY")

# Create nodes
nodes = [TextNode(text=chunk) for chunk in chunks]

# Set up Chroma
nest_asyncio.apply()
chroma_client = chromadb.EphemeralClient()
chroma_collection = chroma_client.create_collection("quickstart2")

# Set up vector store and index
vector_store = ChromaVectorStore(chroma_collection=chroma_collection)
storage_context = StorageContext.from_defaults(vector_store=vector_store)
index = VectorStoreIndex(nodes, storage_context=storage_context)

# Set up chat engine
chat_engine_1 = index.as_chat_engine(
    chat_mode="context",
    system_prompt=(
        "You are a chatbot, able to have normal interactions, as well as give "
        "detailed explanations of different MSME schemes in the form of:"
        "Scheme Description: "
        "Nature of Assistance: "
        "How to apply: "
        "Who can apply: "
        "\n\nIf you receive input in the form of a list with 5 elements, interpret it as follows:"
        "\n1. Business Location: 'Rural SME' means it's a rural small/medium enterprise"
        "\n2. Business Size: 'Very small', 'Small', or 'Medium'"
        "\n3. Yearly Income: '<5 lakh' means less than ₹5 lakh, '5-50 lakh' means ₹5-50 lakh, '>50 lakh' means more than ₹50 lakh"
        "\n4. Seeking Funds: 'yes' or 'no'"
        "\n5. Main Challenge: One of 'No money', 'No workers', 'No market', 'No raw materials', 'Transport issues', 'Too much competition', or 'No equipment'"
        "\nUse this information to tailor your responses and recommend appropriate MSME schemes."
    ),
)

memory = ChatMemoryBuffer.from_defaults(token_limit=1500)
chat_engine_2 = index.as_chat_engine(
    chat_mode="context",
    memory=memory,
    system_prompt=(
        "You are a chatbot, able to have normal interactions, as well as give"
        "detailed explanations of different MSME schemes"
        "After the answer explain in brief pointers why the policy will be beneficial for the user"
    ),
)

Text_file_output = ['Rural SME','Small','<5 lakh','yes','No raw materials']
concatenated_output = ' '.join(Text_file_output)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    message = data.get('message', '')
    conversation_count = data.get('conversation_count', 0)

    if conversation_count == 0:
        chat_response = chat_engine_1.chat(concatenated_output)
    else:
        chat_response = chat_engine_2.chat(message)

    response = {
        'response': str(chat_response),
        'conversation_count': conversation_count + 1
    }
    
    return jsonify(response)

@app.route('/reset_conversation', methods=['POST'])
def reset_conversation():
    try:
        initial_topic = "Credit Guarantee Scheme"
        response = chat_engine_1.chat(initial_topic)
        
        return jsonify({
            'message': str(response),
            'conversation_count': 1,
            'initial_topic': initial_topic
        })
    except Exception as e:
        app.logger.error(f"Error in reset_conversation: {str(e)}")
        return jsonify({'error': f"An error occurred: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
