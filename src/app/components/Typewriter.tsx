"use client";
import { useEffect, useState } from "react";

interface TypewriterProps {
  texts: string[]; // An array of texts to type one after the other
  speed?: number; // Typing speed in milliseconds for each character (default: 100ms)
  initialDelay?: number; // Initial delay before starting the effect (default: 0ms)
  betweenTextDelay?: number; // Delay between each text in the array (default: 1000ms)
  className?: string; // Custom class names for styling using Tailwind CSS or any other styles
}

// Custom hook to create the typewriter effect for multiple texts
const useTypewriter = (
  texts: string[],
  speed: number = 100,
  initialDelay: number = 0,
  betweenTextDelay: number = 1000
): string => {
  const [displayedText, setDisplayedText] = useState(""); // Current text being displayed
  const [currentIndex, setCurrentIndex] = useState(0); // Index of the current text in `texts`
  const [charIndex, setCharIndex] = useState(0); // Index of the current character within the text

  useEffect(() => {
    // Check if there are texts to display
    if (texts.length === 0) return;

    let charTimeout: NodeJS.Timeout;
    let textTimeout: NodeJS.Timeout;

    // Function to start typing
    const startTyping = () => {
      charTimeout = setTimeout(() => {
        if (charIndex < texts[currentIndex].length) {
          setDisplayedText((prev) => prev + texts[currentIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          // After finishing typing the current text, move to the next one after `betweenTextDelay`
          textTimeout = setTimeout(() => {
            setDisplayedText(""); // Clear displayed text
            setCharIndex(0); // Reset character index to 0
            setCurrentIndex((prev) => (prev + 1) % texts.length); // Cycle through texts continuously
          }, betweenTextDelay);
        }
      }, speed);
    };

    // Start typing after initial delay
    const initialTimeout = setTimeout(() => {
      startTyping();
    }, initialDelay);

    // Clean up timeouts on unmount or dependency change
    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(charTimeout);
      clearTimeout(textTimeout);
    };
  }, [texts, charIndex, currentIndex, speed, initialDelay, betweenTextDelay]);

  return displayedText;
};

const Typewriter: React.FC<TypewriterProps> = ({
  texts,
  speed = 100,
  initialDelay = 0,
  betweenTextDelay = 1000,
  className = "",
}) => {
  // Use the custom hook to get the display text with the typing effect for multiple texts
  const displayText = useTypewriter(
    texts,
    speed,
    initialDelay,
    betweenTextDelay
  );

  return <p className={className}>A {displayText}</p>;
};

export default Typewriter;
