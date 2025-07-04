import { motion } from "framer-motion";

const mockups = [
  {
    src: "/images/callerid.png",
    label: "", // No label for first image
  },
  {
    src: "/images/straightmokeup.png",
    label: "Even with No Caller ID", // Label for second image
  },
];

const RightHeroCarousel = () => {
  return (
    <div
      className="relative w-full h-full overflow-visible
                 px-4 sm:px-6 md:px-10
                 flex flex-col md:flex-row items-center justify-center
                 gap-10 md:gap-6 lg:gap-10 xl:gap-16"
    >
      {/* First Image (callerid.png) */}
      <div
        className="relative flex-shrink-0 mb-10 md:mb-0
                   transform rotate-3 md:rotate-6 md:translate-x-27
                   md:-translate-y-6 lg:-translate-y-10
                   z-10"
      >
        <img
          src={mockups[0].src}
          alt="Caller ID Mockup"
          className="w-full max-w-[200px] sm:max-w-[230px] md:max-w-[280px] lg:max-w-[320px]
                     drop-shadow-2xl mx-auto block"
        />
      </div>

      {/* Second Image (straightmockup.png) with label */}
      <div
        className="relative flex-shrink-0
                   transform -rotate-3 md:-rotate-6
                   z-20"
      >
        {/* Label */}
        {mockups[1].label && (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ type: "spring", stiffness: 400, damping: 90, delay: 0.8 }}
    className="absolute flex justify-center w-full z-30
               -top-12 sm:-top-14 md:-top-16 lg:-top-10 left-1/2 -translate-x-1/2"
  >
    <div
      className="text-xs sm:text-sm md:text-base lg:text-lg
                 font-semibold text-white bg-gray-800/90
                 px-3 py-1.5 rounded-md shadow
                 whitespace-nowrap"
    >
      {mockups[1].label}
    </div>
  </motion.div>
)}

        <img
          src={mockups[1].src}
          alt="Even with No Caller ID Mockup"
          className="w-full max-w-[200px] sm:max-w-[230px] md:max-w-[280px] lg:max-w-[320px]
                     drop-shadow-2xl mx-auto block"
        />
      </div>
    </div>
  );
};

export default RightHeroCarousel;
