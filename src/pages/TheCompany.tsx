"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ThumbsUp, AlertTriangle, UserCheck } from "lucide-react";

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
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Text Column */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-extrabold mb-8"
            >
              For <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">Organisations</span>
            </motion.h2>

            <div className="space-y-8">
              {orgPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex gap-5 items-start"
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
          </div>

          {/* Image Column */}
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
