import { motion } from "framer-motion";
import { Shield, Zap, Phone, Users } from "lucide-react";

const leftBenefits = [
  {
    icon: Zap,
    title: "Instant call authentication",
    description:
      'Real-time validation tells customers "Verified Call" before they even say "hello".',
  },
  {
    icon: Shield,
    title: "Omnichannel scam shield",
    description:
      "Blocks impersonations from banks, govt agencies & more through one integration.",
  },
];

const rightBenefits = [
  {
    icon: Phone,
    title: "Protects beyond mobile",
    description: "Even scam calls on landlines are verified and stopped.",
  },
  {
    icon: Users,
    title: "Zero-friction experience",
    description:
      "No extra steps. Just a silent check and a trust badge. Better NPS, less hassle.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-[#0e1217] text-white py-28 relative overflow-hidden">
      {/* Glowing Blobs */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full z-0" />

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 text-center z-10 relative">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold"
        >
         <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
  <span className="text-white">The </span>
  <span className="bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
    Benefits
  </span>
</h2>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent"
        >
          Empowering Trust, Preventing Fraud
        </motion.p>
      </div>

      {/* Grid Layout */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-4 items-center z-10 relative">
        {/* Left Benefits */}
        <div className="space-y-10">
          {leftBenefits.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-[#1a1f27] rounded-xl border border-gray-700">
                  <Icon className="text-indigo-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Center Image with glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative flex justify-center items-center"
        >
          <div className="absolute w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-indigo-500/20 to-purple-600/10 blur-[100px] rounded-full z-0" />
          <img
            src="/images/benefitss.png"
            alt="Benefits Mockup"
            className="w-[180px] sm:w-[220px] md:w-[280px] drop-shadow-2xl z-10"
          />
        </motion.div>

        {/* Right Benefits */}
        <div className="space-y-10">
          {rightBenefits.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-[#1a1f27] rounded-xl border border-gray-700">
                  <Icon className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
