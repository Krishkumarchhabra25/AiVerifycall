import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Zap, Users, TrendingUp } from "lucide-react";

const WhyVerifyCall = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Military-grade encryption and AI-powered threat detection keep your communications secure."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Real-time verification in milliseconds, never miss an important call again."
    },
    {
      icon: Users,
      title: "Trusted by Millions",
      description: "Join over 10 million users who trust VerifyCall for their communication security."
    },
    {
      icon: TrendingUp,
      title: "99.9% Accuracy",
      description: "Industry-leading verification accuracy with continuous AI learning and improvement."
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

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Why Choose <span className="text-indigo-600">VerifyCall</span>?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            In a world of increasing phone scams and fraud, VerifyCall stands as your trusted guardian, 
            ensuring every call you receive is verified and secure.
          </motion.p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <benefit.icon className="text-indigo-600 mb-4" size={48} />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-12"
          >
            Trusted Worldwide
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-sm"
            >
              <div className="text-4xl font-bold text-indigo-600 mb-2">10M+</div>
              <div className="text-gray-600">Active Users</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-sm"
            >
              <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-sm"
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Protection</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyVerifyCall;
