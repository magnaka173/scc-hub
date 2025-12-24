import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  opacity: number;
  duration: number; // Added duration property
}

const StarButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [stars, setStars] = useState<Star[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const starCounter = useRef(0);

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const generateStars = useCallback(() => {
    if (!buttonRef.current) return;

    // Generate random number of stars between 5 and 10
    const starCount = Math.floor(Math.random() * 6) + 5; // 5-10 inclusive
    const buttonRect = buttonRef.current.getBoundingClientRect();
    const newStars: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: Date.now() + starCounter.current++,
        // Random position within button bounds only (no padding)
        x: Math.random() * buttonRect.width,
        y: Math.random() * buttonRect.height,
        // Slightly varied size: 16-24px
        size: Math.random() * 8 + 16,
        rotation: Math.random() * 360,
        // All stars fully visible
        opacity: 1,
        // Random duration between 0.3 and 0.7 seconds
        duration: Math.random() * 0.4 + 0.3,
      });
    }

    // Replace existing stars with new ones
    setStars(newStars);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);

    // Generate initial stars immediately
    generateStars();

    // Generate new stars every 0.5 seconds while hovered
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      generateStars();
    }, 500); // Changed from 1000ms to 500ms
  };

  const handleMouseLeave = () => {
    setIsHovered(false);

    // Clear stars immediately
    setStars([]);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div className="relative inline-block">
      {/* Button Container */}
      <motion.button
        ref={buttonRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-10 relative overflow-visible bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 px-12 py-6 text-xl font-bold shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/60 transition-all duration-300 rounded-xl group"
        // REMOVED all motion animations from the button itself
      >
        <span className="relative z-10 flex flex-row items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-sparkles mr-3 h-6 w-6"
          >
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
            <path d="M20 3v4"></path>
            <path d="M22 5h-4"></path>
            <path d="M4 17v2"></path>
            <path d="M5 18H3"></path>
          </svg>
          Join the Waitlist
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-arrow-right ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </span>
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 215, 0, 0.125) 0%, transparent 70%)",
            filter: "blur(8px)",
            opacity: "0",
          }}
        ></div>
      </motion.button>

      {/* Stars Container - positioned absolutely above the button */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-visible">
        <AnimatePresence>
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute pointer-events-none"
              style={{
                left: `${star.x}px`,
                top: `${star.y}px`,
                width: `${star.size}px`,
                height: `${star.size}px`,
              }}
              initial={{
                opacity: 0,
                scale: 0.3,
                rotate: star.rotation,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.3, 1, 0.3],
                rotate: [star.rotation, star.rotation + 180],
              }}
              exit={{
                opacity: 0,
                scale: 0,
              }}
              transition={{
                duration: star.duration, // Use randomized duration for each star
                ease: "easeInOut",
                times: [0, 0.5, 1],
              }}
            >
              {/* Star SVG - yellow color only */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-full h-full text-yellow-400"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>

              {/* REMOVED the additional glow/twinkle effect */}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default StarButton;
