import { useState } from "react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlowingSphere from "../src/components/GlowingSphere";
// import DashBoard from "./Dashboard";
import {
  About,
  Chatbot,
  Diagram,
  Footer,
  Hero,
  Login,
  Navbar,
  Signup,
  Testimonials,
  // Questionnaire,
} from "./components";

const App = () => {
  const [showPopup, setShowPopup] = useState(""); // track which popup is active
  const [isLoggedIn, setIsLoggedIn] = useState(false); // track login status

  const togglePopup = (popupType) => setShowPopup(popupType);

  // On successful login or signup, set the user as logged in
  const handleLoginSignup = () => {
    setIsLoggedIn(true);
    setShowPopup(""); // close popup
  };

  // if (isLoggedIn) {
  //   return <DashBoard />;
  // }

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <GlowingSphere />
          <Navbar togglePopup={togglePopup} />
          <Hero />
        </div>
      </div>
      <Diagram />
      <About />
      <Testimonials />
      <div className="relative z-0">
        <Footer />
      </div>
      
      {showPopup === "signup" && <Signup onSignup={handleLoginSignup} />}
      {showPopup === "login" && <Login onLogin={handleLoginSignup} />}
      
      <Chatbot />

      
    </BrowserRouter>
  );
};

export default App;
