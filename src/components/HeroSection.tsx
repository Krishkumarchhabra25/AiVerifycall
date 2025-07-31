import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

const Hero = () => {
  return (
    <div className="text-gray-900 dark:text-gray-100 px-4 sm:px-6 md:px-8 text-left w-full">
      <div className="relative z-10 max-w-2xl mx-auto md:mx-0">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white font-bold text-4xl sm:text-5xl lg:text-5xl leading-tight sm:leading-tight mb-6"
        >
          Stops <span className="text-[#6D44FA]">phone-based fraud</span>{" "}
          before the conversation starts.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-opacity-70 text-base sm:text-lg lg:text-xl leading-relaxed mb-10"
        >
          VerifyCall is the real-time call-validation layer built to prevent
          cyber fraud. VerifyCall instantly authenticates every inbound call,
          shutting down impersonation scams, reducing fraud losses and
          restoring customer trust.
        </motion.p>

        {/* App Store Download Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col gap-4"
        >
          {/* Mobile: icon-only */}
          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm md:hidden">
            <div className="flex items-center gap-1">
              <Smartphone size={16} />
              <span className="text-[12px]">For Customers:</span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="w-16 h-16 p-1.5 rounded-md flex items-center justify-center transition-colors"
              >
                <img
                  src="/src/assets/images/appstore.svg"
                  alt="App Store"
                  className="w-full h-full object-contain"
                />
              </a>
              <a
                href="#"
                className="w-16 h-16 p-1.5 rounded-md flex items-center justify-center transition-colors"
              >
                <img
                  src="/src/assets/images/playstore.svg"
                  alt="Google Play"
                  className="w-full h-full object-contain"
                />
              </a>
            </div>
          </div>

          {/* Desktop: full buttons with SVGs */}
          <div className="hidden md:flex items-center gap-4 text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Smartphone size={20} />
              <span className="font-medium">For Customers:</span>
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex items-center px-5 py-3 rounded-xl font-semibold transition-colors shadow"
              >
                <img
                  src="/src/assets/images/appstore.svg"
                  alt="App Store"
                  className="w-[120px] h-auto object-contain"
                />
              </a>
              <a
                href="#"
                className="flex items-center  px-5 py-3 rounded-xl transition-colors shadow"
              >
                <img
                  src="/src/assets/images/playstore.svg"
                  alt="Google Play"
                  className="w-[135px] h-auto object-contain"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
