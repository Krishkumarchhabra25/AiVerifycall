import { motion } from "framer-motion";
import { Shield, AlertTriangle, TrendingDown, Users } from "lucide-react";

const WhySection = () => {
  const impactPoints = [
    {
      icon: AlertTriangle,
      title: "Impersonation is exploding",
      description: "Spoofed numbers & fake call-centers slip through existing tools.",
      color: "red"
    },
    {
      icon: TrendingDown,
      title: "Detection is too late",
      description: "Fraud is only caught after money moves and the damage is done",
      color: "orange"
    },
    {
      icon: Users,
      title: "Training consumers doesn't scale",
      description: "Even your most tech-savvy customers fall victims of remote fraud",
      color: "amber"
    },
    {
      icon: Shield,
      title: "Fighting yesterday's battles",
      description: "Banks are relying on solutions that act after the criminal has made first contact.",
      color: "gray"
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
            Why <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">VerifyCall</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Understanding the challenge and our innovative solution
          </p>
        </motion.div>

        {/* The Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8 text-center">
            The Impact
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {impactPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 bg-${point.color}-100 dark:bg-${point.color}-900/30 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6`}>
                  <point.icon className={`text-${point.color}-600 dark:text-${point.color}-400`} size={24} />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">{point.title}</h4>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Solution Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
            The Solution
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-blue-200 dark:border-blue-800 shadow-xl"
            >
              <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
                Verify Call: the proactive shield that ends the call before the con.
              </h4>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Verify Call embeds a real-time verification layer between every inbound call and your customers, 
                ending impersonation attempts before a word is spoken. No guesswork, no post-transaction clean-up.
              </p>
              
              <div className="mt-6 md:mt-8 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Shield className="text-white" size={32} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhySection;
