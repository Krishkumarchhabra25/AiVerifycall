import { motion } from "framer-motion";
import { Shield, Brain, Clock, Users } from "lucide-react";

const WhySection = () => {
  const features = [
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Military-grade encryption and AI-powered threat detection protect every call.",
      color: "emerald"
    },
    {
      icon: Brain,
      title: "Smart AI Technology",
      description: "Our AI learns and adapts to new threats, ensuring maximum protection.",
      color: "blue"
    },
    {
      icon: Clock,
      title: "Real-time Verification",
      description: "Instant call verification with zero delay to your communication flow.",
      color: "purple"
    },
    {
      icon: Users,
      title: "Trusted by Millions",
      description: "Join millions of users who trust VerifyCall for their communication security.",
      color: "amber"
    }
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">VerifyCall</span>?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience unmatched security and reliability with our cutting-edge call verification technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className={`w-16 h-16 bg-${feature.color}-100 dark:bg-${feature.color}-900/30 rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className={`text-${feature.color}-600 dark:text-${feature.color}-400`} size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhySection;
