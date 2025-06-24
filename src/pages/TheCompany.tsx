import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Award, Globe, Heart } from "lucide-react";

const TheCompany = () => {
  const values = [
    {
      icon: Users,
      title: "People First",
      description: "We believe in putting our users and team members at the center of everything we do."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our technology and service delivery."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Our mission is to make secure communication accessible to everyone, everywhere."
    },
    {
      icon: Heart,
      title: "Trust & Integrity",
      description: "We build trust through transparency, reliability, and unwavering commitment to privacy."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      description: "Former cybersecurity executive with 15 years of experience in telecommunications security."
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      description: "AI researcher and engineer who led machine learning initiatives at major tech companies."
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of AI Research",
      description: "PhD in Computer Science with expertise in natural language processing and fraud detection."
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
            About <span className="text-indigo-600">VerifyCall</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Founded in 2020, VerifyCall was born from a simple mission: to make phone communication 
            safe and trustworthy for everyone. We're pioneering the future of call verification technology.
          </motion.p>
        </div>
      </div>

      {/* Mission */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                In an era where phone scams cost consumers billions of dollars annually, we're committed 
                to restoring trust in voice communication. Our AI-powered platform protects millions 
                of users from fraudulent calls while ensuring legitimate communications get through.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision a world where every phone call is verified, secure, and trustworthy - 
                where people can answer their phones with confidence, knowing they're protected 
                by the most advanced call verification technology available.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-indigo-600 text-white rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4">By the Numbers</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold">10M+</div>
                  <div className="text-indigo-200">Protected Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">5.2M</div>
                  <div className="text-indigo-200">Scam Calls Blocked Monthly</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">99.9%</div>
                  <div className="text-indigo-200">Accuracy Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">150+</div>
                  <div className="text-indigo-200">Countries Served</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            Our Values
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <value.icon className="text-indigo-600 mb-4" size={48} />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            Leadership Team
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-24 h-24 bg-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="text-indigo-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-indigo-600 font-semibold mb-3">{member.role}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheCompany;
