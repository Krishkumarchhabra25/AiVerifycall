// Hero.tsx (No changes needed here for this specific issue)
import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

const Hero = () => {
  return (
    // Removed the background decoration divs from here as well, they are now consolidated in Index.tsx
    <div className="text-gray-900 dark:text-gray-100 px-4 sm:px-6 md:px-0 md:text-left">
      <div className="relative z-10">
   <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-white font-bold text-[50px] leading-[141.81%] mb-6 max-w-[588px]"
>
  Stops{" "}
  <span className="text-[#6D44FA]">phone-based fraud</span>{" "}
  before the conversation starts.
</motion.h1>

<motion.p
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="text-white text-opacity-70 font-normal text-[20px] leading-[172.342%] max-w-[588px] mb-10"
>
  VerifyCall is the real-time call-validation layer built to prevent cyber fraud. VerifyCall instantly authenticates every inbound call, shutting down impersonation scams, reducing fraud losses and restoring customer trust.
</motion.p>

        {/* App Store Download Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col gap-4 items-start"
        >
          {/* Mobile version: icon-only */}
          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm md:hidden">
            <div className="flex items-center gap-1 whitespace-nowrap">
              <Smartphone size={16} />
              <span className="font-medium">For Customer:</span>
            </div>

            <div className="flex items-center gap-2">
              {/* App Store icon */}
              <a
                href="#"
                className="w-9 h-9 p-1.5 rounded-md flex items-center justify-center
                bg-gray-100 dark:bg-white/10 text-black dark:text-white
                hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
                title="App Store"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </a>

              {/* Google Play icon */}
              <a
                href="#"
                className="w-9 h-9 p-1.5 rounded-md flex items-center justify-center
                bg-gray-100 dark:bg-white/10 text-black dark:text-white
                hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
                title="Google Play"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Desktop version: full buttons */}
          <div className="hidden md:flex items-center gap-4 text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Smartphone size={20} />
              <span className="font-medium">For Customers:</span>
            </div>

            <div className="flex gap-3">
              {/* App Store full button */}
              <a
                href="#"
                className="flex items-center space-x-3 bg-white dark:bg-white/10 text-black dark:text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-white/20 transition-colors shadow"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </a>

              {/* Google Play full button */}
              <a
                href="#"
                className="flex items-center space-x-3 bg-white dark:bg-white/10 text-black dark:text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-white/20 transition-colors shadow"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;