"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  ThumbsUp,
  AlertTriangle,
  UserCheck,
} from "lucide-react";

const orgPoints = [
  {
    icon: ShieldCheck,
    title: "Trust Is the Root of All Scams",
    text: `All scams happen by callers gaining trust and establishing authenticity. VerifyCall takes that away from the scammers.`,
  },
  {
    icon: AlertTriangle,
    title: "Proactive Risk Prevention",
    text: `Risk teams can proactively prevent fraud, reducing reputational damage and reinforcing institutional trust.`,
  },
  {
    icon: UserCheck,
    title: "Lower Liability for Banks",
    text: `Once recommended to customers, institutions reduce their accountability in fraud cases where customers ignore call validation.`,
  },
  {
    icon: ThumbsUp,
    title: "Customer Confidence Boost",
    text: `Customers feel reassured knowing every incoming call is verified. It removes reliance on gut feeling.`,
  },
];

const ForOrganisations = () => {
  return (
    <section
      id="for-organisations"
      className="relative bg-[#0e1217] text-white py-24 px-6 sm:px-10 overflow-hidden"
    >
      {/* Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centered Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16"
        >
          For{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
            Organisations
          </span>
        </motion.h2>

        {/* 2x2 Grid of Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-24">
          {orgPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex gap-4 items-start"
            >
              <div className="p-3 bg-[#1a1f27] rounded-xl border border-gray-700">
                <point.icon className="text-purple-400" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{point.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{point.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subheading + Content With Image in 2-column */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
              How does VerifyCall do it
            </h3>

            <div className="text-gray-300 space-y-5 text-[15px] leading-relaxed">
              <p>
                When we set out to develop a solution, we knew it had to be infallible and dependable—
                something banks and institutions could recommend to their customers with complete confidence.
              </p>

              <p>To achieve this, we followed four key principles:</p>

              <ul className="space-y-2 pl-4">
                {[
                  "It must not rely on analysis, guesswork, or trial and error.",
                  "It must be immune to manipulation, misuse, or impersonation.",
                  "It must respect data privacy and align with the cybersecurity standards of banks and institutions.",
                  "It must be robust, secure, reliable—and above all, trustworthy.",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-purple-400 mt-1">●</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <p>
                Guided by these principles, we developed a novel technical solution that we are proud to say
                meets every one of these criteria.
              </p>

              <p className="font-medium text-white">
                This is our secret sauce, and we’re happy to share the details in confidence.{" "}
                <span className="text-blue-400 inline-flex items-center gap-1">
                  👉 Please contact us to learn more.
                </span>
              </p>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForOrganisations;
