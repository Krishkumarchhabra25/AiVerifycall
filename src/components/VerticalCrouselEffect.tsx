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
      className="relative w-full h-auto overflow-visible
                 px-4 sm:px-6 md:px-10
                 flex flex-col md:flex-row items-center justify-center
                 gap-10 md:gap-6 lg:gap-10 xl:gap-16"
    >
      {/* 🎨 SVG Background */}
      <div className="  pointer-events-none">
        {/* Blue Background Wave */}
        <svg
          viewBox="0 0 821 345"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-0 w-full"
        >
          <path
            d="M318.706 281.876C308.318 284.311 297.664 285.922 286.758 286.533C256.428 288.228 225.706 282.099 196.885 269.443C168.066 256.785 142.011 237.04 120.317 211.391C98.6236 185.743 81.9084 154.916 70.9893 121.359C60.0717 87.8016 55.1936 52.3607 56.7423 17.1166C57.2556 5.25321 66.7147 -3.87036 78.5418 -3.99392L812.128 -11.8313C823.683 -11.9536 832.924 -1.14094 832.265 10.3928C830.246 44.4093 824.731 78.3273 815.834 111.156C806.935 143.987 794.687 175.309 779.407 204.262C764.125 233.213 745.909 259.553 725.122 282.438C704.335 305.322 681.093 324.535 656.004 339.334C630.914 354.133 604.16 364.402 576.426 369.586C548.691 374.77 520.267 374.763 492.555 369.565C464.843 364.368 438.057 354.023 413.703 338.95C389.349 323.877 367.718 304.332 349.795 281.817C344.832 275.597 336.978 274.313 329.573 276.921C325.842 278.227 322.264 279.764 318.706 281.876Z"
            fill="#B5F6FF"
            fillOpacity="0.4"
          />
        </svg>

        {/* Purple Wave Overlay */}
        <svg
          viewBox="0 0 766 158"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[220px] right-[-100px] w-[600px]"
        >
          <path
            d="M766 35.1544C703.726 57.0132 640.594 69.7584 576.854 73.1528C497.938 77.3423 419.216 66.9415 339.118 66.9818C259.02 67.0221 178.838 77.5033 99.1472 82.1244C66.848 83.9797 34.442 83.7295 2.10205 81.3768L2.10205 162.038C78.4552 163.715 154.622 160.832 230.4 153.404C313.507 145.168 395.995 129.413 478.694 121.305C540.894 115.02 603.478 116.239 666.145 114.89C696.883 114.235 727.613 112.944 757.965 109.14L766 35.1544Z"
            fill="#6D44FA"
            fillOpacity="0.5"
          />
        </svg>

        {/* Purple Glow Blur */}
        <div className="absolute right-[100px] bottom-[60px] w-[300px] h-[240px] bg-[#6D44FA] opacity-30 blur-[100px] rounded-full" />
      </div>

      {/* 📱 First Phone */}
      <div className="relative z-10 flex-shrink-0 mb-10 md:mb-0 transform rotate-3 md:rotate-6 md:translate-x-10 md:-translate-y-6 lg:-translate-y-10">
        <img
          src={mockups[0].src}
          alt="Caller ID Mockup"
          className="w-full max-w-[200px] sm:max-w-[230px] md:max-w-[280px] lg:max-w-[320px] drop-shadow-2xl mx-auto block"
        />
      </div>

      {/* 📱 Second Phone + Label */}
      <div className="relative z-20 flex-shrink-0 transform -rotate-3 md:-rotate-6">
        {mockups[1].label && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 90, delay: 0.8 }}
            className="absolute flex justify-center w-full z-30 -top-12 sm:-top-14 md:-top-16 lg:-top-10 left-1/2 -translate-x-1/2"
          >
            <div className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white bg-gray-800/90 px-3 py-1.5 rounded-md shadow whitespace-nowrap">
              {mockups[1].label}
            </div>
          </motion.div>
        )}

        <img
          src={mockups[1].src}
          alt="Even with No Caller ID Mockup"
          className="w-full max-w-[200px] sm:max-w-[230px] md:max-w-[280px] lg:max-w-[320px] drop-shadow-2xl mx-auto block"
        />
      </div>
    </div>
  );
};

export default RightHeroCarousel;
