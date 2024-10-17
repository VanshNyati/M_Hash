import React, { useState } from "react";
import chatbotIcon from '../assets/chatbotIcon.png';
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle popup

  const toggleChatbot = () => {
    setIsOpen(!isOpen); // Toggle the chatbot popup
  };

  return (
    <div>
      <button className="chatbot-button" onClick={toggleChatbot}>
        <img src={chatbotIcon} alt="Chatbot Icon" className="chat-icon rounded-full" /> {/* Replace with your image URL */}
        Chat with us
      </button>

      {isOpen && (
        <div className="chatbot-popup">
          <div className="chatbot-header">
            <h2>Chatbot</h2>
            <button onClick={toggleChatbot} className="close-btn">X</button>
          </div>
          <div className="chatbot-body">
            <p>Hi! How can I assist you today?</p>
            {/* Chatbot content goes here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
