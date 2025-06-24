import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, Users, BarChart3, Shield, CheckCircle } from "lucide-react";

const ForOrganizations = () => {
  const features = [
    {
      icon: Building2,
      title: "Enterprise Security",
      description: "Advanced security protocols designed for large organizations with multiple communication channels."
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Centralized dashboard to manage verification settings for all team members and departments."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Comprehensive insights into call patterns, threats blocked, and security metrics."
    },
    {
      icon: Shield,
      title: "Custom Protection Rules",
      description: "Configure organization-specific verification rules and whitelist trusted contacts."
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              >
                Enterprise <span className="text-indigo-600">Security</span> Solutions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-600 mb-8"
              >
                Protect your organization with enterprise-grade call verification and advanced security features designed for businesses of all sizes.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg"
              >
                Request Demo
              </motion.button>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl p-8"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={24} />
                  <span>SOC 2 Type II Certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={24} />
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={24} />
                  <span>99.99% Uptime SLA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={24} />
                  <span>24/7 Enterprise Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Enterprise Features</h2>
            <p className="text-xl text-gray-600">Everything you need to secure your organization's communications</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <feature.icon className="text-indigo-600 mb-4" size={48} />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForOrganizations;
