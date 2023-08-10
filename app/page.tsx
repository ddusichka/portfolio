"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const descriptions = [
  { text: "crocheter", emoji: "🧶" },
  { text: "cat mom", emoji: "🐈‍⬛" },
  { text: "tennis novice", emoji: "🎾" },
  { text: "writer", emoji: "🖊️" },
  { text: "trader joe's enthusiast", emoji: "🛒" },
  { text: "bookworm", emoji: "📚" },
  { text: "puzzler", emoji: "🧩" },
];

export default function Home() {
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
  }, [displayedDescriptionIndex, typingCompleted]);

  return (
    <div className="flex justify-center my-4 laptop:my-8">
      <div className="w-[90%] laptop:w-[75%]">
        <div className="flex justify-between">
          <div className="mt-16 text-2xl">
            <h1 className="text-6xl mb-6">{"Hi, I'm Dessy!"}</h1>
            <h3 className="text-3xl">student, developer, and </h3>
            <div className="rotating-word flex items-center text-3xl space-x-2">
              {/* Use flex to align description and emoji in the same line */}
              <p>{displayedDescription}</p>
              <p className="emoji">
                {descriptions[displayedDescriptionIndex].emoji}
              </p>
            </div>
          </div>
          <Image src="/dessy.jpeg" alt="logo" width={300} height={300} />
        </div>
        <div>
          <Image
            src="/succulent.png"
            alt="succulent"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
