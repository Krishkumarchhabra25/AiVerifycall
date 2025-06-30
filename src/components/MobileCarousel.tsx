import { motion, AnimatePresence } from "framer-motion";
import { Phone, Shield, AlertTriangle, CheckCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

const MobileCarousel = () => {
  const [currentMockup, setCurrentMockup] = useState(0);

  const mockups = [
    // No Caller ID - Notification
    {
      id: 1,
      title: "Unknown Call Alert",
      description: "Notification before unknown call",
      isNotification: true,
      content: (
        <div className="text-center">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="text-red-600 dark:text-red-400" size={20} />
                <span className="text-red-800 dark:text-red-300 font-semibold text-sm">Unverified Caller</span>
              </div>
              <X className="text-gray-400" size={16} />
            </div>
            <div className="text-left">
              <p className="text-red-700 dark:text-red-400 text-xs mb-1">+1 (XXX) XXX-XXXX</p>
              <p className="text-red-600 dark:text-red-500 text-xs">⚠️ Potential risk - proceed with caution</p>
            </div>
          </div>
          
          <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Phone className="text-white" size={24} />
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Incoming call in 3 seconds...</p>
        </div>
      )
    },
    // No Caller ID - Call Screen
    {
      id: 2,
      title: "No Caller ID",
      description: "Unknown number calling",
      content: (
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg animate-pulse">
            <Phone className="text-white" size={32} />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-gray-900">Unknown Caller</h3>
          <p className="text-gray-600">+1 (XXX) XXX-XXXX</p>
          <p className="text-sm text-gray-500 mt-1">No Caller ID</p>
          
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mt-4">
            <div className="flex items-center space-x-2 mb-2">
              <AlertTriangle className="text-red-600 dark:text-red-400" size={16} />
              <span className="text-red-800 dark:text-red-300 font-semibold text-sm">Potential Risk</span>
            </div>
            <p className="text-red-700 dark:text-red-400 text-xs">Unverified caller - proceed with caution</p>
          </div>
        </div>
      )
    },
    // Verified Call - Notification
    {
      id: 3,
      title: "Verified Call Alert",
      description: "Safe call notification",
      isNotification: true,
      content: (
        <div className="text-center">
          <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-emerald-600 dark:text-emerald-400" size={20} />
                <span className="text-emerald-800 dark:text-emerald-300 font-semibold text-sm">Verified Call</span>
              </div>
              <X className="text-gray-400" size={16} />
            </div>
            <div className="text-left">
              <p className="text-emerald-700 dark:text-emerald-400 text-xs mb-1">HSBC Bank</p>
              <p className="text-emerald-600 dark:text-emerald-500 text-xs">✓ Safe to answer - Account verification</p>
            </div>
          </div>
          
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-emerald-600 font-bold text-sm">H</span>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Incoming call in 3 seconds...</p>
        </div>
      )
    },
    // Verified Call - Call Screen
    {
      id: 4,
      title: "Verified Caller ID",
      description: "Legitimate business calling",
      content: (
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-emerald-600 font-bold text-lg">H</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-2 text-gray-900">HSBC Bank</h3>
          <p className="text-gray-600">+1 (555) 123-4567</p>
          
          <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4 mt-4">
            <div className="flex items-center space-x-2 mb-2">
              <CheckCircle className="text-emerald-600 dark:text-emerald-400" size={16} />
              <span className="text-emerald-800 dark:text-emerald-300 font-semibold text-sm">Verified Authentic</span>
            </div>
            <p className="text-emerald-700 dark:text-emerald-400 text-xs">Safe to answer</p>
            <p className="text-emerald-700 dark:text-emerald-400 text-xs">Purpose: Account verification</p>
          </div>
        </div>
      )
    },
    // Landline Protection - Notification
    {
      id: 5,
      title: "Landline Protection Alert",
      description: "Landline call verification",
      isNotification: true,
      content: (
        <div className="text-center">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Shield className="text-blue-600 dark:text-blue-400" size={20} />
                <span className="text-blue-800 dark:text-blue-300 font-semibold text-sm">Landline Protected</span>
              </div>
              <X className="text-gray-400" size={16} />
            </div>
            <div className="text-left">
              <p className="text-blue-700 dark:text-blue-400 text-xs mb-1">Home Landline</p>
              <p className="text-blue-600 dark:text-blue-500 text-xs">🛡️ Real-time monitoring active</p>
            </div>
          </div>
          
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Shield className="text-white" size={24} />
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Landline protection enabled</p>
        </div>
      )
    },
    // Landline Protection - Active Screen
    {
      id: 6,
      title: "Landline Protection",
      description: "Real-time monitoring active",
      content: (
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
            <Shield className="text-white" size={32} />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-gray-900">Active Protection</h3>
          <p className="text-gray-600">Real-time monitoring</p>
          
          <div className="space-y-3 mt-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
              <div className="flex justify-between text-sm">
                <span className="text-blue-700 dark:text-blue-300">Scams Blocked</span>
                <span className="text-blue-600 dark:text-blue-400 font-bold">247</span>
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
              <div className="flex justify-between text-sm">
                <span className="text-green-700 dark:text-green-300">Last Verified Call</span>
                <span className="text-green-600 dark:text-green-400 font-bold">2 min ago</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMockup((prev) => (prev + 1) % mockups.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Phone Frame */}
      <div className="bg-gray-900 dark:bg-gray-800 rounded-[2.5rem] p-3 shadow-2xl">
        <div className="bg-white dark:bg-gray-100 rounded-[2rem] w-80 h-[600px] overflow-hidden relative">
          {/* Phone Screen Content */}
          <div className="p-6 h-full flex flex-col">
            {/* Status Bar */}
            <div className="flex justify-between items-center mb-8">
              <span className="text-sm font-medium text-gray-900">9:41</span>
              <div className="flex space-x-1">
                <div className="w-4 h-2 bg-gray-900 rounded-sm"></div>
                <div className="w-1 h-2 bg-gray-900 rounded-sm"></div>
                <div className="w-6 h-2 bg-gray-900 rounded-sm"></div>
              </div>
            </div>

            {/* Animated Content */}
            <div className="flex-1 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMockup}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  {mockups[currentMockup].content}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Action Buttons - Only show for call screens, not notifications */}
            {!mockups[currentMockup].isNotification && (
              <div className="mt-auto flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-red-500 text-white py-3 rounded-full font-semibold hover:bg-red-600 transition-colors shadow-lg"
                >
                  Decline
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-emerald-500 text-white py-3 rounded-full font-semibold hover:bg-emerald-600 transition-colors shadow-lg"
                >
                  Accept
                </motion.button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mockup Description */}
      <motion.div
        className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center"
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMockup}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              {mockups[currentMockup].title}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {mockups[currentMockup].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default MobileCarousel;
