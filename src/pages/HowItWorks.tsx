"use client";
import { motion } from "framer-motion";
import { Phone, Brain, Shield, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Download & Activate",
    description:
      "Install the VerifyCall app and authenticate your mobile or landline number. The app runs silently in the background.",
    color: "blue",
  },
  {
    icon: Brain,
    title: "Smart Detection",
    description:
      "Our AI listens for every inbound call and instantly checks if it’s from a verified organisation.",
    color: "purple",
  },
  {
    icon: Shield,
    title: "Trust Layer Engaged",
    description:
      "If verified, you get a real-time notification. If not—no alert. No popup means no trust.",
    color: "green",
  },
  {
    icon: CheckCircle,
    title: "Peace of Mind",
    description: "You make confident decisions. No scams. Just trust.",
    color: "teal",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="howitworks"
      className="relative z-10 text-white py-24 px-6 sm:px-10 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at center, #121625 0%, #0e1217 100%)",
      }}
    >
     

      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          How{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            VerifyCall
          </span>{" "}
          Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto mt-6"
        >
          A real-time fraud prevention app that places a “trust layer” over every inbound call from a verified organisation.
        </motion.p>
      </div>

      {/* Steps Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 relative z-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex flex-col items-center text-center space-y-6"
          >
            <div className="w-20 h-20 rounded-full flex items-center justify-center bg-[#1a1f27] border border-gray-700 shadow-md">
              <step.icon className={`text-${step.color}-400`} size={32} />
            </div>
            <h3 className="text-xl font-semibold text-white">{step.title}</h3>
            <p className="text-sm text-gray-400 max-w-xs">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
