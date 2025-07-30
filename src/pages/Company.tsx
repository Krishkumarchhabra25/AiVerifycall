"use client";
import { motion } from "framer-motion";

const CompanySection = () => {
  return (
    <section id="about" className="w-full text-white py-24 px-4 sm:px-8">
      <div className="max-w-[1216px] mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-[48px] text-center font-extrabold mb-16"
        >
          About The <span className="text-[#9877FF] font-extrabold">Company</span>
        </motion.h2>

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_345px] gap-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">The VerifyCall Story</h3>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-4">
              At VerifyCall, we’re transforming how people interact with phone calls—by making every conversation safer, smarter, and scam-free.
            </p>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-4">
              Since our inception, we’ve focused on one simple mission: to empower people with truth before they pick up the phone. Whether it’s identifying scam signals in real time or giving context to unknown numbers, VerifyCall puts trust and transparency at the core of mobile communication.
            </p>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-4">
              With advanced AI-powered call identification, real-time fraud detection, and a growing global community of users, we’re creating a future where no one has to answer in fear.
            </p>
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              Today, thousands rely on VerifyCall to spot scams, block unwanted calls, and connect confidently.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-[16px] overflow-hidden max-w-full"
          >
            <img
              src="/src/assets/images/company1.jpg"
              alt="Team working"
              className="w-full h-auto rounded-[16px] object-cover"
            />
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-[345px_1fr] gap-10 mt-16">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-[16px] overflow-hidden max-w-full"
          >
            <img
              src="/src/assets/images/conpany2.jpg"
              alt="Mission Image"
              className="w-full h-auto rounded-[16px] object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col text-right"
          >
            <h4 className="text-[#9877FF] text-sm md:text-base font-semibold mb-2">
              Mission and Vision
            </h4>
            <h3 className="text-2xl sm:text-3xl md:text-[42px] font-bold mb-4 leading-snug">
              Empowering safe voice connections <br className="hidden sm:block" />
              with intelligence and trust
            </h3>
            <p className="text-white/70 text-base md:text-lg mb-2">
              VerifyCall protects users from spam and fraud, enables smarter caller ID experiences, and builds a future where people can connect without fear.
            </p>
            <p className="text-white/70 text-base md:text-lg">
              We modernize phone calls by making them contextual, secure, and user-first.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
