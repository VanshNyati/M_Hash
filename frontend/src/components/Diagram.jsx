import React from "react";
import diagram from "../assets/diagram.png";

const Diagram = () => {
  return (
    <div className="bg-primary">
      <div className="diagram-container bg-primary flex justify-center">
        <img src={diagram} alt="diagram" className="w-[65%] h-auto" />
      </div>
      <div className="relative flex items-center justify-center w-full mt-10">
          <div className="flex-grow border-t border-white"></div>
          <div className="text-center text-2xl font-bold px-4 w-[50vw] animate-blink text-white">
            WHAT WE OFFER
          </div>
          <div className="flex-grow border-t border-white"></div>
        </div>
    </div>
  );
};

export default Diagram;
