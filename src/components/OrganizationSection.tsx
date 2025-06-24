import { motion } from "framer-motion";
import { Building2, TrendingUp, Shield } from "lucide-react";

const OrganizationsSection = () => {
  const benefits = [
    {
      icon: Building2,
      title: "Enterprise Security",
      description: "Comprehensive security solutions tailored for large organizations and enterprises."
    },
    {
      icon: TrendingUp,
      title: "Improved Productivity",
      description: "Reduce false alarms and focus on genuine business communications."
    },
    {
      icon: Shield,
      title: "Compliance Ready",
      description: "Meet industry standards and regulatory requirements with ease."
    }
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black-900 mb-6">
              Built for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Organizations
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Protect your business communications with enterprise-grade security and seamless integration capabilities.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8"
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building2 className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-6">Join thousands of organizations protecting their communications</p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationsSection;
