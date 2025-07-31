"use client";

import { motion } from "framer-motion";


const orgPoints = [
  {
    icon: "/src/assets/images/tickmark.svg",
    title: "Trust Is the Root of All Scams",
    text: `All scams happen by callers gaining trust and establishing authenticity. VerifyCall takes that away from the scammers.`,
  },
  {
    icon: "/src/assets/images/tickmark.svg",
    title: "Proactive Risk Prevention",
    text: `Risk teams can proactively prevent fraud, reducing reputational damage and reinforcing institutional trust.`,
  },
  {
    icon: "/src/assets/images/tickmark.svg",
    title: "Lower Liability for Banks",
    text: `Once recommended to customers, institutions reduce their accountability in fraud cases where customers ignore call validation.`,
  },
  {
    icon: "/src/assets/images/tickmark.svg",
    title: "Customer Confidence Boost",
    text: `Customers feel reassured knowing every incoming call is verified. It removes reliance on gut feeling.`,
  },
];

const ForOrganisations = () => {
  return (
    <section className="relative  text-white py-24 px-6 sm:px-10 overflow-hidden font-[Poppins]">
    

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centered Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[48px] md:text-[56px] font-bold text-center mb-16"
        >
          Built for{" "}
          <span className="text-[#6D44FA]">Organisations</span>
        </motion.h2>

        {/* Grid: Left Content + Right Image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="px-4 sm:px-6 lg:px-12"
          >
            <div className="space-y-10">
              {orgPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="flex items-start gap-4"
                >
                  {/* Icon */}
                  <div className="">
                    <img src={point.icon}  alt="tickimages" className="h-9" />
                  </div>

                  {/* Text Block */}
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[20px] font-semibold text-white leading-normal">
                      {point.title}
                    </h3>
                    <p className="text-[14px] font-normal text-white/70 leading-relaxed">
                      {point.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-lg border border-white/10"
          >
            <img
              src="/src/assets/images/organization.jpg" // replace with your actual image
              alt="Organisations"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForOrganisations;
