import { useState, useEffect } from "react";

const SlidingText = () => {
  const texts = ["Abuja", "Kano", "Kaduna"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 3 seconds
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="flex items-center justify-center text-[--seed]">
      <div className="relative overflow-hidden h-auto w-full">
        {/* Text */}
        <div
          key={currentIndex}
          className="text-7xl font-bold text-center animate-slide-up"
        >
          {texts[currentIndex]}
        </div>
      </div>
    </div>
  );
};

export default SlidingText;
