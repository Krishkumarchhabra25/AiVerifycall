import { motion } from "framer-motion";

const mockups = [
  {
    src: "/images/straightmokeup.png", // This is the "No Caller ID" phone
  },
  {
    src: "/images/callerid.png",
  },
];

const RightHeroCarousel = () => {
  return (
    <div
      className="relative w-full h-auto overflow-visible
                 px-4 sm:px-6 
                 flex flex-col md:flex-row items-center justify-center
                 gap-12 md:gap-6 lg:gap-10 xl:gap-16 mt-20"
    >
  
      <img
        src="/src/assets/images/arrowblue.svg"
        alt="Flow lines"
        className="absolute z-[25] top-[1%] right-[-30%] w-[600px] sm:w-[700px] md:w-[900px] lg:w-[460px]"
      />
      <img
        src="/src/assets/images/secondblue.svg"
        alt="Flow lines"
        className="absolute z-[25] top-[10%] right-[-30%] w-[600px] sm:w-[700px] md:w-[900px] lg:w-[478px]"
      />
      <img
        src="/src/assets/images/thirdblue.svg"
        alt="Flow lines"
        className="absolute z-[25] top-[10%] right-[-30%] w-[600px] sm:w-[700px] md:w-[900px] lg:w-[478px]"
      />
      <img
        src="/src/assets/images/lightblue.svg"
        alt="Flow lines"
        className="absolute z-[25] top-[10%] right-[-30%] w-[600px] sm:w-[700px] md:w-[900px] lg:w-[478px]"
      />

      {/* 📱 Phones + Glow */}
      <div className="relative z-10 flex flex-col md:flex-row items-end justify-center gap-6 sm:gap-8 md:gap-0">
        {/* Radial Gradient Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] sm:w-[500px] h-[66px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.17)_0%,rgba(255,255,255,0)_100%)] blur-[5.35px] z-0" />

        {/* 📱 Left Phone (Background) */}
        <div className="relative z-10 transform -rotate-[15deg] md:-rotate-[12deg] -translate-y-6 md:-translate-y-8 -mr-0 md:-mr-10 scale-[1.05]">
          {/* Floating Label */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 z-20 text-center"
          >
            <span className="text-white text-sm sm:text-base md:text-[14px] font-medium">
              Even with No
              <br />
              <span className="text-[16px]">Caller ID</span>
            </span>
          </motion.div>

          {/* Arrow SVG */}
          <motion.img
            src="/src/assets/images/arrowcalled.svg"
            alt="Arrow pointing to phone text"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="absolute top-2 left-1/2 -translate-x-1/2 w-6 sm:w-8 md:w-16 rotate-[20deg] z-10"
          />

          <img
            src={mockups[0].src}
            alt="No Caller ID Mockup"
            className="w-full max-w-[180px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[310px] drop-shadow-2xl mx-auto block"
          />
        </div>

        {/* 📱 Right Phone (Foreground) */}
        <div className="relative z-40 transform rotate-[15deg] md:rotate-[12deg] -translate-y-6 md:-translate-y-10 -ml-0 md:-ml-8">
          <img
            src={mockups[1].src}
            alt="Caller ID Mockup"
            className="w-full max-w-[180px] sm:max-w-[210px] md:max-w-[260px] lg:max-w-[310px] drop-shadow-2xl block"
          />
        </div>
      </div>
    </div>
  );
};

export default RightHeroCarousel;
