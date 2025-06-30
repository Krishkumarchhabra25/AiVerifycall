// components/VerticalImageCarousel.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";


const images = [
  "/images/Image (1).jpg", // Update with actual image paths
  "/images/nocallerid.jpg",
  "/images/phone-3.png",
];

const VerticalImageCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-[280px] h-[560px] rounded-2xl shadow-2xl overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`carousel-${index}`}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 w-full h-full object-contain roundex-2xl"
        />
      </AnimatePresence>
    </div>
  );
};

export default VerticalImageCarousel;