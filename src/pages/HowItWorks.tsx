import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Brain, Shield, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: Phone,
      title: "Incoming Call Detected",
      description: "When you receive a call, VerifyCall immediately captures the caller information and begins the verification process.",
      color: "indigo"
    },
    {
      step: "02",
      icon: Brain,
      title: "AI Analysis",
      description: "Our advanced AI system analyzes the caller's identity against our global database of verified contacts and known threats.",
      color: "purple"
    },
    {
      step: "03",
      icon: Shield,
      title: "Security Check",
      description: "Multiple security layers including spam detection, fraud analysis, and identity verification are applied in real-time.",
      color: "green"
    },
    {
      step: "04",
      icon: CheckCircle,
      title: "Instant Verification",
      description: "You receive immediate notification about the caller's verification status, allowing you to make informed decisions.",
      color: "blue"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="px-6 py-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            VerifyCall
          </Link>
          <Link to="/" className="text-gray-600 hover:text-indigo-600">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            How <span className="text-indigo-600">VerifyCall</span> Works
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our sophisticated AI-powered system works behind the scenes to verify every call in real-time, 
            giving you peace of mind with every conversation.
          </motion.p>
        </div>
      </div>

      {/* Steps */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-4">
                    <span className={`text-${step.color}-600 text-6xl font-bold mr-4`}>
                      {step.step}
                    </span>
                    <step.icon className={`text-${step.color}-600`} size={48} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} flex justify-center`}>
                  <div className={`w-80 h-80 bg-gradient-to-br from-${step.color}-100 to-${step.color}-200 rounded-3xl flex items-center justify-center shadow-lg`}>
                    <step.icon className={`text-${step.color}-600`} size={120} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
