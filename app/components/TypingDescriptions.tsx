"use client";
import React, { useState, useEffect } from "react";

const TypingEffect = () => {
  const descriptions = [
    { text: "crocheter", emoji: "🧶" },
    { text: "cat mom", emoji: "🐈‍⬛" },
    { text: "tennis novice", emoji: "🎾" },
    { text: "writer", emoji: "🖊️" },
    { text: "trader joe's enthusiast", emoji: "🛒" },
    { text: "bookworm", emoji: "📚" },
    { text: "puzzler", emoji: "🧩" },
    { text: "beginner yogi", emoji: "🧘🏻‍♀️" },
  ];

  const [displayedDescriptionIndex, setDisplayedDescriptionIndex] = useState(0);
  const [displayedDescription, setDisplayedDescription] = useState("");
  const [typingCompleted, setTypingCompleted] = useState(false);

  useEffect(() => {
    const typingInterval = 100; // 100ms per character
    let currentIndex = 0;

    const typingIntervalId = setInterval(() => {
      setDisplayedDescription(
        descriptions[displayedDescriptionIndex].text.slice(0, currentIndex)
      );
      currentIndex++;

      if (currentIndex > descriptions[displayedDescriptionIndex].text.length) {
        clearInterval(typingIntervalId);
        setTypingCompleted(true);
      }
    }, typingInterval);
    return () => {
      clearInterval(typingIntervalId);
    };
  }, [displayedDescriptionIndex]);

  useEffect(() => {
    if (typingCompleted) {
      const nextIndex = (displayedDescriptionIndex + 1) % descriptions.length;
      setTimeout(() => {
        setTypingCompleted(false);
        setDisplayedDescriptionIndex(nextIndex);
        setDisplayedDescription("");
      }, 1500); // Wait for 1.5 seconds after the word is fully rendered before transitioning to the next word
    }
  }, [displayedDescriptionIndex, typingCompleted, descriptions]);
  return (
    <div className="rotating-word flex items-center text-lg tablet:text-4xl space-x-2">
      <p>{displayedDescription}</p>
      <p className="emoji">{descriptions[displayedDescriptionIndex].emoji}</p>
    </div>
  );
};

export default TypingEffect;
