import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import menu from "../assets/menu.svg";
import logoSVG from "../assets/logoSVG.svg";
import logoTxt from "../assets/logoTxt.svg";
import close from "../assets/close.svg";
import Signup from "./Signup"; // Import Signup component
import Login from "./Login"; // Import Login component

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [showPopup, setShowPopup] = useState(null); // To manage which popup to show
  const navigate = useNavigate(); // For navigation
  const popupRef = useRef(null); // Reference for the popup

  // Close the popup when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef]);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[#00172b]`} style={{ fontFamily: 'Roboto, sans-serif' }}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={() => setActive("")}>
          <img src={logoSVG} alt="logo" className="w-12 h-12 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Project &nbsp; <span className="sm:block hidden">| Sahyog</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-transform transform hover:scale-110"
            onClick={() => setShowPopup("signup")}
          >
            Signup
          </button>
          <button
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-transform transform hover:scale-110"
            onClick={() => setShowPopup("login")}
          >
            Login
          </button>
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>

      {/* Popup for Signup/Login */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-30 bg-black bg-opacity-50">
          <div ref={popupRef} className="bg-white rounded-lg shadow-md p-8 w-full max-w-lg relative">
            {showPopup === "signup" ? <Signup onClose={() => setShowPopup(null)} onLoginSuccess={() => navigate("/dashboard")} /> : <Login onClose={() => setShowPopup(null)} onLoginSuccess={() => navigate("/dashboard")} />}
            <button className="absolute top-2 right-2 text-gray-500" onClick={() => setShowPopup(null)}>
              &times; {/* Close button */}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
