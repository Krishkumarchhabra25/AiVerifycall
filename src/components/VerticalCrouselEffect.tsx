import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const mockups = [
  {
    src: "/images/callerid.png",
    label: "", // No text for 1st image
  },
  {
    src: "/images/straightmokeup.png",
    label: "Even with No Caller ID",
  },
];

const RightHeroCarousel = () => {
  const [index, setIndex] = useState(0);
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    setShowLabel(false); // reset text visibility on image switch

    const labelTimeout = setTimeout(() => {
      if (mockups[index].label) {
        setShowLabel(true); // show label after zoom
      }
    }, 1200); // delay after zoom completes

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % mockups.length);
    }, 5000);

    return () => {
      clearTimeout(labelTimeout);
      clearInterval(interval);
    };
  }, [index]);

  return (
    <div className="relative w-full h-full flex justify-center items-center mt-16 lg:mt-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={mockups[index].src}
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          {/* Zoom-in to notification effect */}
          <motion.img
            src={mockups[index].src}
            alt={`Mockup ${index}`}
            initial={{ scale: 0.92, y: 20 }}
            animate={{ scale: 1.05, y: -5 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-[200px] sm:w-[230px] md:w-[340px]  drop-shadow-2xl"
          />

          {/* Only for 2nd image */}
          {mockups[index].label && showLabel && (
            <motion.div
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="absolute md:top-20 left-24 w-full sm:left-auto sm:right-[150px] md:right-[-200px] flex items-center gap-2"
>

              <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <div className="text-sm sm:text-[12px] font-semibold text-white bg-gray-800/90 p-2 md:px-3 py-1 rounded-md shadow">
                {mockups[index].label}
              </div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RightHeroCarousel;
