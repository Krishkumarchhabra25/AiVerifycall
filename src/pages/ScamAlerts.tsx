import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AlertTriangle, Shield, Eye } from "lucide-react";

const ScamAlerts = () => {
  const alerts = [
    {
      type: "High Risk",
      title: "IRS Impersonation Scam",
      description: "Scammers claiming to be from the IRS demanding immediate payment. The IRS never calls to demand immediate payment.",
      location: "Nationwide",
      reports: "2,847",
      date: "Today"
    },
    {
      type: "Medium Risk",
      title: "Tech Support Fraud",
      description: "Fake tech support calls claiming your computer is infected. Microsoft and Apple don't make unsolicited calls.",
      location: "California, Texas",
      reports: "1,432",
      date: "Yesterday"
    },
    {
      type: "High Risk",
      title: "Medicare Scam Calls",
      description: "Fraudulent calls about Medicare benefits or coverage. Always verify through official Medicare channels.",
      location: "Florida, Arizona",
      reports: "956",
      date: "2 days ago"
    }
  ];

  const tips = [
    "Never give personal information to unsolicited callers",
    "Verify caller identity through official channels",
    "Be wary of urgent payment requests",
    "Don't trust caller ID - it can be spoofed",
    "Report suspicious calls to authorities"
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
      <div className="bg-gradient-to-br from-red-50 via-white to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            <span className="text-red-600">Scam Alerts</span> & Protection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Stay informed about the latest phone scams and learn how to protect yourself from fraudulent calls.
          </motion.p>
        </div>
      </div>

      {/* Stats */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-red-600 mb-2">5.2M</div>
              <div className="text-gray-600">Scam Calls Blocked This Month</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-orange-600 mb-2">$2.1B</div>
              <div className="text-gray-600">Losses Prevented</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-green-600 mb-2">99.7%</div>
              <div className="text-gray-600">Detection Accuracy</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Recent Alerts */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            Recent Scam Alerts
          </motion.h2>

          <div className="space-y-6">
            {alerts.map((alert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <AlertTriangle 
                        className={alert.type === 'High Risk' ? 'text-red-500' : 'text-orange-500'} 
                        size={24} 
                      />
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        alert.type === 'High Risk' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        {alert.type}
                      </span>
                      <span className="text-gray-500 text-sm">{alert.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{alert.title}</h3>
                    <p className="text-gray-600 mb-3">{alert.description}</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <span>📍 {alert.location}</span>
                      <span>📊 {alert.reports} reports</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Protection Tips */}
      <div className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            Protection Tips
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {tips.map((tip, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Shield className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{tip}</span>
                </div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-sm"
            >
              <Eye className="text-indigo-600 mb-4" size={48} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Vigilant</h3>
              <p className="text-gray-600 leading-relaxed">
                Scammers constantly evolve their tactics. VerifyCall's AI continuously learns and adapts 
                to new threats, but staying informed and cautious is your best defense.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScamAlerts;
