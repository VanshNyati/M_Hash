import React, { useState } from 'react';
import { testimonials } from '../constants/index.js'; // Import testimonials from the constants file

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the index of the first visible testimonial
  const testimonialsPerView = 3; // Number of testimonials visible at a time

  // Handlers for left and right buttons, increment/decrement by 1
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };

  // Slicing the array to show only the visible testimonials
  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + testimonialsPerView);

  // If there are fewer than `testimonialsPerView` testimonials remaining, append from the beginning
  if (visibleTestimonials.length < testimonialsPerView) {
    visibleTestimonials.push(...testimonials.slice(0, testimonialsPerView - visibleTestimonials.length));
  }

  return (
    <div className="testimonials-section bg-primary px-4 py-20 text-center">
      <h1 className="text-5xl font-bold mb-20">Look at what our customers say :)</h1>

      <div className="flex justify-between items-center">
        {/* Left Button */}
        <button onClick={goToPrevious} className="text-3xl font-bold bg-gray-300 p-4 rounded-full">
          &#8249;
        </button>

        {/* Testimonials */}
        <div className="flex justify-center gap-10 transition-transform duration-700 ease-in-out">
          {visibleTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonials-background text-white p-6 rounded-lg shadow-lg w-80 transform transition-all duration-700 ease-in-out hover:scale-105">
              <div className="flex justify-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full border-4 border-white -mt-14"
                />
              </div>
              <h3 className="text-lg font-bold mt-4">{testimonial.name}</h3>
              <p className="mt-2">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button onClick={goToNext} className="text-3xl font-bold bg-gray-300 p-4 rounded-full">
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
