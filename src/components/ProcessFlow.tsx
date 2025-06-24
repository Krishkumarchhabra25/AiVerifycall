import { motion } from "framer-motion";
import { CheckCircle, Shield, Zap } from "lucide-react";

const ProcessFlow = () => {
  const steps = [
    {
      icon: CheckCircle,
      title: "Sign Up & Verify",
      description: "Create your secure account and verify your phone number with advanced authentication.",
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    },
    {
      icon: Zap,
      title: "Smart Detection",
      description: "AI-powered system instantly identifies and verifies incoming calls from trusted sources.",
      color: "text-amber-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    },
    {
      icon: Shield,
      title: "Secure Actions",
      description: "Make confident decisions with verified caller information and enhanced security features.",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    }
  ];

  return (
    <div className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          How VerifyCall Works
        </h2>
        <p className="text-xl text-gray-600">
          Simple, secure, and seamless call verification in three steps
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="relative"
          >
            {/* Step Number */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
              {index + 1}
            </div>

            {/* Card */}
            <div className={`${step.bgColor} ${step.borderColor} border rounded-2xl p-8 text-gray-900 h-full shadow-lg hover:shadow-xl transition-all duration-300`}>
              <div className="mb-6">
                <step.icon className={`${step.color} mb-4`} size={48} />
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>

              {/* Progress indicator for middle step */}
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 2, delay: 1 }}
                  viewport={{ once: true }}
                  className="mt-6"
                >
                  <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 2, delay: 1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-amber-400 to-orange-400 h-full rounded-full"
                    />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Connection Line */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 transform -translate-y-1/2 z-10" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProcessFlow;
