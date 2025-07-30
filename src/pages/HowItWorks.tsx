"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const points = [
  "It must not rely on analysis, guesswork, or trial and error.",
  "It must be immune to manipulation, misuse, or impersonation.",
  "It must respect data privacy and align with cybersecurity standards.",
  "It must be robust, secure, reliable — and above all, trustworthy.",
];

const HowItWorks = () => {
  return (
    <section
      id="howitworks"
      className="relative z-10 py-24 px-6 sm:px-10 text-white overflow-hidden"

    >
      {/* Centered Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          How{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            VerifyCall
          </span>{" "}
          works?
        </h2>

 
      </motion.div>

      {/* Two-column layout */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div
            className="rounded-xl border border-gray-700"
            style={{
              width: "500px",
              height: "500px",
              aspectRatio: "98 / 67",
              background:
                "url('/src/assets/images/howverifycallwork.jpg') lightgray -140.075px 2px / 133.446% 97.593% no-repeat",
            }}
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
                 <p className="text-gray-300 leading-relaxed mb-6">
          When we set out to develop a solution, we knew it had to be infallible and dependable — something banks and institutions could recommend to their customers with complete confidence.
        </p>
          <p className="text-white font-semibold mb-5 ">
            To achieve this, we followed four key principles:
          </p>

          <ul className="space-y-4 mb-8">
            {points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="text-purple-500 mt-1" size={20} />
                <span className="text-gray-300">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-white text-[14px] mb-5 ">

          Guided by these principles, we developed a novel technical solution that we are proud to say meets every one of these criteria.
</p>
          <p className="text-white text-[14px] mb-3 ">

This is our secret sauce, and we’re happy to share the details in confidence.
</p>
          <button className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-full hover:opacity-90 transition">
            Learn More →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
