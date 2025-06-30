import { motion } from "framer-motion";
import {  Shield, Zap, Phone, Users } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Instant call authentication",
      description: "Reverse the \"too-late\" problem. Real-time validation tells customers \"Verified Call\" before they even say \"hello\".",
      color: "emerald"
    },
    {
      icon: Shield,
      title: "Omnichannel scam shield",
      description: "Blocking Banks, Government or Debt-agencies impersonations with one integration.",
      color: "blue"
    },
    {
      icon: Phone,
      title: "Protects Customers not only on mobile phone",
      description: "Protects against scam calls received on Landlines.",
      color: "purple"
    },
    {
      icon: Users,
      title: "Zero-friction customer experience",
      description: "Reverse the trade-off between security and CX. One silent background check, no extra steps for legitimate calls, and a visible badge that boosts trust and NPS.",
      color: "amber"
    }
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
            Benefits
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive protection and enhanced customer experience through advanced call verification
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 bg-${benefit.color}-100 dark:bg-${benefit.color}-900/30 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6`}>
                <benefit.icon className={`text-${benefit.color}-600 dark:text-${benefit.color}-400`} size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
                {benefit.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
