import React from "react";
import Card from "./Card";
import {motion} from 'framer-motion';
import { styles } from "../styles";
// import './Hero.css';

const Hero = () => {
  return (
    <section className="relative w-full mx-auto">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center mb-8 mt-20">
          <h1 className="text-9xl mt-20 font-extrabold text-white glow">सहयोग</h1>
          <div className="p-6 mt-4 bg-gray-800 text-white rounded-lg shadow-lg">
            <p className="text-lg">Think better with Sahyog,</p>
            <p className="text-lg">your new assistant??</p>
          </div>
        </div>
        <div className="cards-container relative w-full mx-auto">
          <Card
            title="What do we do?"
            text="We offer a wide range of services that cater to the needs of SMEs."
          />
          <Card
            title="Who we are?"
            text="We are a passionate team dedicated to helping small businesses grow."
          />
          <Card
            title="Why us?"
            text="Because we understand your needs and deliver tailor-made solutions."
          />
        </div>
        <div className="relative flex items-center justify-center w-full mt-10">
          <div className="flex-grow border-t border-white"></div>
          <div className="text-center text-xl px-4 w-[50vw] animate-blink text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            similique, delectus nisi enim necessitatibus unde perferendis
            molestias modi voluptas laboriosam deserunt illo eaque quas
            cupiditate fugiat qui dignissimos quo. Quod.
          </div>
          <div className="flex-grow border-t border-white"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
