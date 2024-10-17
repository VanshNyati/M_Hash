import React, { useState } from 'react';
import { io } from 'socket.io-client';
import Chatbot from 'react-simple-chatbot';

const Dashboard = () => {
  const [isLiveChatOpen, setIsLiveChatOpen] = useState(false);
  const [isBusinessDirectoryOpen, setIsBusinessDirectoryOpen] = useState(false);
  const [isMarketplaceOpen, setIsMarketplaceOpen] = useState(false);

  // Initialize Socket connection (replace with your server URL)
  const socket = io('http://localhost:5000'); // Modify the server URL

  const handleLiveChat = () => {
    setIsLiveChatOpen(true);
  };

  const handleBusinessDirectory = () => {
    setIsBusinessDirectoryOpen(true);
  };

  const handleMarketplace = () => {
    setIsMarketplaceOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="flex justify-between items-center p-6 bg-gray-800">
        <h1 className="text-xl font-bold">सहयोग</h1>
        <ul className="flex space-x-8">
          <li className="hover:underline cursor-pointer">Features</li>
          <li className="hover:underline cursor-pointer">Customers</li>
          <li className="hover:underline cursor-pointer">Pricing</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </ul>
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
            YB
          </div>
        </div>
      </nav>

      <div className="px-10 py-6">
        <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Live Chat Button */}
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg cursor-pointer hover:shadow-lg"
            onClick={handleLiveChat}
          >
            <h3 className="text-2xl font-bold">LIVE CHAT</h3>
            <div className="text-4xl">💬</div>
          </div>

          {/* Business Directory Button */}
          <div
            className="bg-gradient-to-r from-pink-500 to-purple-500 p-6 rounded-lg cursor-pointer hover:shadow-lg"
            onClick={handleBusinessDirectory}
          >
            <h3 className="text-2xl font-bold">BUSINESS DIRECTORY</h3>
            <div className="text-4xl">👥</div>
          </div>

          {/* Marketplace Button */}
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg cursor-pointer hover:shadow-lg"
            onClick={handleMarketplace}
          >
            <h3 className="text-2xl font-bold">MARKETPLACE</h3>
            <div className="text-4xl">🌐</div>
          </div>
        </div>

        {/* Revenue and Order Value Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white text-black p-6 rounded-lg">
            <h3>Revenue</h3>
            <p className="text-2xl">₹2,107</p>
            <p className="text-red-500">-1.18% From last month</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3>AVG. Order Value</h3>
            <p className="text-2xl">₹770.21</p>
            <p className="text-green-500">+3.16% From last month</p>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h3>Overall Sales</h3>
            <p className="text-2xl">₹348,253.65</p>
            <p className="text-green-500">+13.02% This month</p>
          </div>
        </div>
      </div>

      {/* Fullscreen Popup for Live Chat */}
      {isLiveChatOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center">
          <div className="bg-white text-black p-6 rounded-lg w-full h-full flex flex-col">
            <h2 className="text-2xl font-bold mb-4">Live Chat</h2>
            <div className="flex-grow h-64 border p-4 overflow-y-auto">
              {/* Socket.IO chatbox implementation */}
              <p>Connected to live chat...</p>
            </div>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
              onClick={() => setIsLiveChatOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Fullscreen Popup for Business Directory (Chatbot) */}
      {isBusinessDirectoryOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center">
          <div className="bg-white text-black p-6 rounded-lg w-full h-full flex flex-col">
            <h2 className="text-2xl font-bold mb-4">Business Directory Chatbot</h2>
            <div className="flex-grow">
              <Chatbot
                steps={[
                  {
                    id: '1',
                    message: 'Welcome to the Business Directory! How can I assist you?',
                    trigger: '2',
                  },
                  {
                    id: '2',
                    options: [
                      { value: 1, label: 'Find a business', trigger: '3' },
                      { value: 2, label: 'Get more info', trigger: '4' },
                    ],
                  },
                  {
                    id: '3',
                    message: 'Business Directory functionality is under construction.',
                    end: true,
                  },
                  {
                    id: '4',
                    message: 'Please contact support for more information.',
                    end: true,
                  },
                ]}
              />
            </div>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
              onClick={() => setIsBusinessDirectoryOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Fullscreen Popup for Marketplace */}
      {isMarketplaceOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center">
          <div className="bg-white text-black p-6 rounded-lg w-full h-full flex flex-col">
            <h2 className="text-2xl font-bold mb-4">Marketplace</h2>
            <div className="flex-grow">
              <p>The Marketplace is under construction...</p>
            </div>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
              onClick={() => setIsMarketplaceOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
