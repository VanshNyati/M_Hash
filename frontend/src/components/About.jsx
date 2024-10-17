import React, { useState } from "react";
import livechat from "../assets/livechat.png";

const About = () => {
  // State to track the current active section
  const [activeSection, setActiveSection] = useState("Feature");
  const [activeMpSection, setActiveMpSection] = useState("Feature");
  const [activeBdSection, setActiveBdSection] = useState("Feature");

  // Function to render content based on active section
  const renderContent = (activeSection) => {
    switch (activeSection) {
      case "Feature":
        return {
          title: "Chat instantly with our personnel",
          description:
            "Lorem ipsum odor amet, consectetur adipiscing elit. Mauris maximus in nibh ligula nisl curabitur. Dui fermentum fames aliquam scelerisque lobortis class amet.",
        };
      case "Implementation":
        return {
          title: "Implementation of live chat systems",
          description:
            "Our live chat system is built on a scalable architecture, ensuring efficient communication between users and personnel. It is secure and supports real-time messaging.",
        };
      case "Analysis":
        return {
          title: "Analysis of chat interactions",
          description:
            "We provide detailed analysis of chat interactions, allowing businesses to gain insights into customer needs, response times, and overall satisfaction.",
        };
      default:
        return {
          title: "Chat instantly with our personnel",
          description:
            "Lorem ipsum odor amet, consectetur adipiscing elit. Mauris maximus in nibh ligula nisl curabitur. Dui fermentum fames aliquam scelerisque lobortis class amet.",
        };
    }
  };

  // Content for each section
  const content = renderContent(activeSection);
  const mpContent = renderContent(activeMpSection);
  const bdContent = renderContent(activeBdSection);

  return (
    <>
      {/* First Section: Live Chat */}
      <section className="bg-primary text-white py-16 px-4 flex justify-center">
        <div className="px-7 py-3">
          {/* Heading */}
          <h1 className="text-6xl font-bold mb-4 text-start">Live Chat</h1>

          {/* Navigation Buttons */}
          <div className="flex space-x-4 mb-8">
            <button
              className={`bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${
                activeSection === "Feature" ? "bg-gray-700" : ""
              }`}
              onClick={() => setActiveSection("Feature")}
            >
              Feature
            </button>
            <button
              className={`bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${
                activeSection === "Implementation" ? "bg-gray-700" : ""
              }`}
              onClick={() => setActiveSection("Implementation")}
            >
              Implementation
            </button>
            <button
              className={`bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${
                activeSection === "Analysis" ? "bg-gray-700" : ""
              }`}
              onClick={() => setActiveSection("Analysis")}
            >
              Analysis
            </button>
          </div>

          {/* Content Section */}
          <div className="livechat-background w-[100%] py-3 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start">
              {/* Text Section */}
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4 text-start">
                  {content.title}
                </h3>
                <p className="mb-6 text-start">{content.description}</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Sign Up
                </button>
              </div>

              {/* Image Section */}
              <div className="md:w-1/2">
                <img
                  src={livechat}
                  alt="Live Chat Illustration"
                  className="w-[80%] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section: Market Place */}
      <section className="bg-primary text-white py-16 px-4 flex justify-center">
        <div className="px-7 py-3">
          {/* Heading */}
          <h1 className="text-6xl font-bold mb-4 text-start">Market Place</h1>

          {/* Navigation Buttons */}
          <div className="flex space-x-4 mb-8">
            <button
              className={`bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${
                activeMpSection === "Feature" ? "bg-gray-700" : ""
              }`}
              onClick={() => setActiveMpSection("Feature")}
            >
              Feature
            </button>
            <button
              className={`bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${
                activeMpSection === "Implementation" ? "bg-gray-700" : ""
              }`}
              onClick={() => setActiveMpSection("Implementation")}
            >
              Implementation
            </button>
            <button
              className={`bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${
                activeMpSection === "Analysis" ? "bg-gray-700" : ""
              }`}
              onClick={() => setActiveMpSection("Analysis")}
            >
              Analysis
            </button>
          </div>

          {/* Content Section */}
          <div className="livechat-background w-[100%] py-3 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start">
              {/* Image Section */}
              <div className="md:w-1/2">
                <img
                  src={livechat}
                  alt="Live Chat Illustration"
                  className="w-[80%] h-auto"
                />
              </div>
              {/* Text Section */}
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4 text-start">
                  {mpContent.title}
                </h3>
                <p className="mb-6 text-start">{mpContent.description}</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section: Business Development */}
      <section className="bg-primary text-white py-16 px-4 flex justify-center">
        <div className="px-7 py-3">
          {/* Heading */}
          <h1 className="text-6xl font-bold mb-4 text-start">
            Business Directory
          </h1>

          {/* Navigation Buttons */}
          <div className="flex space-x-4 mb-8">
            <button
              className={`bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${
                activeBdSection === "Feature" ? "bg-gray-700" : ""
              }`}
              onClick={() => setActiveBdSection("Feature")}
            >
              Feature
            </button>
            <button
              className={`bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${
                activeBdSection === "Implementation" ? "bg-gray-700" : ""
              }`}
              onClick={() => setActiveBdSection("Implementation")}
            >
              Implementation
            </button>
            <button
              className={`bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${
                activeBdSection === "Analysis" ? "bg-gray-700" : ""
              }`}
              onClick={() => setActiveBdSection("Analysis")}
            >
              Analysis
            </button>
          </div>

          {/* Content Section */}
          <div className="livechat-background w-[100%] py-3 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start">
              {/* Text Section */}
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4 text-start">
                  {bdContent.title}
                </h3>
                <p className="mb-6 text-start">{bdContent.description}</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Sign Up
                </button>
              </div>

              {/* Image Section */}
              <div className="md:w-1/2">
                <img
                  src={livechat}
                  alt="Live Chat Illustration"
                  className="w-[80%] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-primary relative flex items-center justify-center w-full">
        <div className="flex-grow border-t border-white"></div>
        <div className="text-center text-3xl font-bold px-4 w-[50vw] animate-blink text-white">
          TESTIMONIALS
        </div>
        <div className="flex-grow border-t border-white"></div>
      </div>
    </>
  );
};

export default About;
