import React, { useEffect, useState } from 'react';
// import './Card.css'; // Create a separate CSS file for styling

const Card = ({ title, text }) => {
  const [displayText, setDisplayText] = useState('');
  const [words, setWords] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Split the text into words
    setWords(text.split(' '));
  }, [text]);

  useEffect(() => {
    // Add each word one by one to displayText
    if (index < words.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + ' ' + words[index]);
        setIndex(index + 1);
      }, 300); // 300ms delay between each word
      return () => clearTimeout(timeout);
    }
  }, [index, words]);

  return (
    <div className="card card-glow">
      <h2>{title}</h2>
      <p>{displayText.trim()}</p>
    </div>
  );
};

export default Card;
