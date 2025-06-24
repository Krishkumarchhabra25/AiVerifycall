import { motion } from "framer-motion";
import { AlertTriangle, Bell, TrendingDown } from "lucide-react";

const ScamAlertsSection = () => {
  const stats = [
    { number: "99.9%", label: "Scam Detection Rate" },
    { number: "24/7", label: "Real-time Monitoring" },
    { number: "50M+", label: "Threats Blocked Daily" },
    { number: "<1s", label: "Alert Response Time" }
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
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Scam Alerts
            </span>{" "}
            & Protection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of scammers with our advanced threat detection and real-time alert system
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
              <AlertTriangle className="text-red-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Instant Threat Detection</h3>
            <p className="text-gray-600">
              Advanced AI algorithms detect suspicious patterns and alert you immediately before you answer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
              <Bell className="text-orange-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Notifications</h3>
            <p className="text-gray-600">
              Receive detailed alerts with threat levels, caller information, and recommended actions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
              <TrendingDown className="text-emerald-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Proactive Blocking</h3>
            <p className="text-gray-600">
              Automatically block known scam numbers and suspicious callers before they reach you.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ScamAlertsSection;
