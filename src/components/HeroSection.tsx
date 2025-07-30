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
          Stops{" "}
          <span className="text-[#6D44FA]">phone-based fraud</span>{" "}
          before the conversation starts.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-opacity-70 text-base sm:text-lg lg:text-xl leading-relaxed mb-10"
        >
          VerifyCall is the real-time call-validation layer built to prevent cyber fraud. VerifyCall instantly authenticates every inbound call, shutting down impersonation scams, reducing fraud losses and restoring customer trust.
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
              <span className="font-medium">For Customers:</span>
            </div>
            <div className="flex items-center gap-2">
              {/* App Store icon */}
              <a href="#" className="w-9 h-9 p-1.5 rounded-md flex items-center justify-center bg-gray-100 dark:bg-white/10 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-white/20 transition-colors">
                {/* SVG */}
              </a>
              {/* Google Play icon */}
              <a href="#" className="w-9 h-9 p-1.5 rounded-md flex items-center justify-center bg-gray-100 dark:bg-white/10 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-white/20 transition-colors">
                {/* SVG */}
              </a>
            </div>
          </div>

          {/* Desktop: full buttons */}
          <div className="hidden md:flex items-center gap-4 text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Smartphone size={20} />
              <span className="font-medium">For Customers:</span>
            </div>
            <div className="flex gap-3">
              {/* Full App Store button */}
              <a
                href="#"
                className="flex items-center space-x-3 bg-white dark:bg-white/10 text-black dark:text-white px-5 py-3 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-white/20 transition-colors shadow"
              >
                {/* SVG */}
                <div className="text-left">
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </a>

              {/* Full Google Play button */}
              <a
                href="#"
                className="flex items-center space-x-3 bg-white dark:bg-white/10 text-black dark:text-white px-5 py-3 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-white/20 transition-colors shadow"
              >
                {/* SVG */}
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
