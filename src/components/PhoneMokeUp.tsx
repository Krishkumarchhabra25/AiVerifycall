import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Shield, Phone, User, Clock,  } from "lucide-react";
import { useState, useEffect } from "react";

const PhoneMockup = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Incoming Call",
      subtitle: "Unknown Number",
      description: "Receiving call from +1 (555) 123-4567",
      icon: Phone,
      bgColor: "from-gray-400 to-gray-600",
      content: (
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg animate-pulse">
            <Phone className="text-white" size={32} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Incoming Call</h3>
          <p className="text-gray-600">+1 (555) 123-4567</p>
          <p className="text-sm text-gray-500 mt-1">Unknown Number</p>
        </div>
      )
    },
    {
      id: 2,
      title: "AI Processing",
      subtitle: "Verifying Caller",
      description: "AI analyzing caller identity and reputation",
      icon: Clock,
      bgColor: "from-amber-400 to-orange-500",
      content: (
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
            <Clock className="text-white animate-spin" size={32} />
          </div>
          <h3 className="text-lg font-semibold mb-2">AI Processing</h3>
          <p className="text-gray-600">Verifying caller identity...</p>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Database Check</span>
              <span className="text-amber-600">Processing...</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div 
                className="bg-gradient-to-r from-amber-400 to-orange-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ duration: 1.5 }}
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Verification Complete",
      subtitle: "Legitimate Business",
      description: "Caller verified as legitimate business",
      icon: CheckCircle,
      bgColor: "from-emerald-500 to-green-600",
      content: (
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
            <CheckCircle className="text-white" size={32} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Verified Caller</h3>
          <p className="text-gray-600">+1 (555) 123-4567</p>
          
          <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4 mt-4">
            <div className="flex items-center space-x-2 mb-2">
              <User className="text-emerald-600 dark:text-emerald-400" size={16} />
              <span className="text-emerald-800 dark:text-emerald-300 font-semibold text-sm">Tech Solutions Inc.</span>
            </div>
            <p className="text-emerald-700 dark:text-emerald-400 text-xs">Purpose: Account verification</p>
            <p className="text-emerald-700 dark:text-emerald-400 text-xs">Verified Business</p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Security Active",
      subtitle: "Protected Call",
      description: "Full security features enabled for this call",
      icon: Shield,
      bgColor: "from-blue-500 to-purple-600",
      content: (
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
            <Shield className="text-white" size={32} />
          </div>
          <h3 className="text-lg font-semibold mb-2">AI Protection Active</h3>
          <p className="text-gray-600">Call is fully secured</p>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-blue-700 dark:text-blue-300">Spam Detection</span>
                <span className="text-blue-600 dark:text-blue-400">✓ Clear</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-blue-700 dark:text-blue-300">Identity Verified</span>
                <span className="text-blue-600 dark:text-blue-400">✓ Confirmed</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-blue-700 dark:text-blue-300">Encryption</span>
                <span className="text-blue-600 dark:text-blue-400">✓ Active</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  // Auto-advance steps
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="relative"
    >
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

            {/* Step Indicator */}
            <div className="flex justify-center space-x-2 mb-6">
              {steps.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentStep ? 'bg-blue-500 w-6' : 'bg-gray-300'
                  }`}
                  animate={{
                    scale: index === currentStep ? 1.2 : 1,
                  }}
                />
              ))}
            </div>

            {/* Animated Content */}
            <div className="flex-1 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  {steps[currentStep].content}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Action Buttons */}
            <motion.div 
              className="mt-auto flex space-x-4"
              animate={{
                opacity: currentStep === steps.length - 1 ? 1 : 0.5
              }}
            >
              <motion.button
                whileHover={{ scale: currentStep === steps.length - 1 ? 1.05 : 1 }}
                whileTap={{ scale: currentStep === steps.length - 1 ? 0.95 : 1 }}
                className="flex-1 bg-red-500 text-white py-3 rounded-full font-semibold hover:bg-red-600 transition-colors shadow-lg"
                disabled={currentStep !== steps.length - 1}
              >
                Decline
              </motion.button>
              <motion.button
                whileHover={{ scale: currentStep === steps.length - 1 ? 1.05 : 1 }}
                whileTap={{ scale: currentStep === steps.length - 1 ? 0.95 : 1 }}
                className="flex-1 bg-emerald-500 text-white py-3 rounded-full font-semibold hover:bg-emerald-600 transition-colors shadow-lg"
                disabled={currentStep !== steps.length - 1}
              >
                Accept
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

 
    </motion.div>
  );
};

export default PhoneMockup;
