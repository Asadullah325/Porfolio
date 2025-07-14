import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

import { TextPlugin } from "gsap/TextPlugin";

// Register the plugin
gsap.registerPlugin(TextPlugin);

const words = ['WEB DEVELOPER', 'UI DESIGNER', 'CREATIVE THINKER', 'TECH ENTHUSIAST'];

const WordAnimate = () => {
  const textRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typeWord = (word) => {
      const chars = word.split('');
      gsap.to(textRef.current, { text: '', duration: 0 }); // Clear text

      chars.forEach((char, i) => {
        gsap.to(textRef.current, {
          duration: 0,
          delay: i * 0.1,
          onUpdate: () => {
            textRef.current.textContent += char;
          }
        });
      });

      // After typing, wait, then delete
      gsap.delayedCall(chars.length * 0.1 + 1, () => eraseWord(word));
    };

    const eraseWord = (word) => {
      const chars = word.split('');
      chars.forEach((_, i) => {
        gsap.to(textRef.current, {
          duration: 0,
          delay: i * 0.05,
          onUpdate: () => {
            textRef.current.textContent = word.slice(0, word.length - i - 1);
          }
        });
      });

      gsap.delayedCall(chars.length * 0.05 + 0.5, () => {
        setIndex((prev) => (prev + 1) % words.length);
      });
    };

    typeWord(words[index]);
  }, [index]);

  return (
    <h1
      ref={textRef}
      className="text-4xl md:text-6xl font-bold mb-4 text-center md:text-left text-[#9B177E] dark:text-[#FF69B4] min-h-[60px]"
    />
  );
};

export default WordAnimate;
