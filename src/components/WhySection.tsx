import { motion } from "framer-motion";
import { Shield, AlertTriangle, TrendingDown, Users  , Phone ,  Zap} from "lucide-react";

const featuresLeft = [
  {
    icon: AlertTriangle,
    title: "Impersonation is exploding",
    description: "Spoofed numbers & fake call-centers slip through existing tools.",
  },
  {
    icon: TrendingDown,
    title: "Detection is too late",
    description: "Fraud is only caught after money moves and the damage is done.",
  },
  {
    icon: Users,
    title: "Training doesn't scale",
    description: "Even your most tech-savvy customers fall victim to remote fraud.",
  },
];

const featuresRight = [
  {
    icon: Shield,
    title: "Fighting yesterday’s battles",
    description: "Banks rely on solutions that act after the criminal has made first contact.",
  },
  {
    icon: Shield,
    title: "Lack of proactive barriers",
    description: "There is no smart filter that blocks risky calls before they begin.",
  },
  {
    icon: Shield,
    title: "No real-time verification",
    description: "Calls are not verified until the user is already engaged.",
  },
];



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


const WhySection = () => {
  return (
    <section className="bg-[#0e1217] text-white py-28">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold"
        >
          Why <span className="text-indigo-500">VerifyCall</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10"
        >
          <p className="text-3xl sm:text-4xl font-bold tracking-wide drop-shadow-lg animate-pulse">
         ⚠️ The <span className="text-indigo-500">Impact</span> 
          </p>
        </motion.div>
      </div>

      {/* Impact Grid */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-4 items-center">
        {/* Left Impact Points */}
        <div className="space-y-10">
          {featuresLeft.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="p-3 bg-[#1a1f27] rounded-xl border border-gray-700">
                <feature.icon className="text-indigo-400" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center items-center"
        >
          <div className="absolute w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[480px] md:h-[480px] bg-gradient-to-br from-red-500/20 to-purple-600/10 blur-[100px] rounded-full z-0" />
          <img
            src="/images/moneyloss.png"
            alt="Money Loss Impact"
            className="relative z-10 w-[240px] sm:w-[300px] md:w-[360px] drop-shadow-2xl"
          />
        </motion.div>

        {/* Right Impact Points */}
        <div className="space-y-10">
          {featuresRight.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="p-3 bg-[#1a1f27] rounded-xl border border-gray-700">
                <feature.icon className="text-indigo-400" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

{/* ✅ Only ONE Solution section */}
<div className="relative mt-40 z-10">
  {/* Background gradients */}
  <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full z-0" />
  <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full z-0" />

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 px-6 items-center relative z-10">
    {/* Text Content */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
  <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
  <span className="text-white">The </span>
  <span className="bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
    Solution
  </span>
</h2>

      <p className="text-xl font-semibold bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text mb-4">
        Proactive prevention, not reactive detection.
      </p>
      <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
        <strong className="text-white">Verify Call</strong> is the proactive shield that ends the call before the con.
        It embeds a real-time verification layer between every inbound call and your customers —
        ending impersonation attempts <strong>before a word is spoken</strong>.
        <br /><br />
        No guesswork. No post-transaction clean-up. Just trust — delivered in real time.
      </p>
    </motion.div>

    {/* Image + Floating Labels */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative flex justify-center"
    >
      <div className="relative w-fit">
        {/* Background Blur */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-500/10 to-indigo-500/10 blur-[100px] rounded-3xl z-0" />

        {/* Image */}
        <img
          src="/images/solution.png"
          alt="Verify Call Solution"
          className="relative z-10 w-[240px] sm:w-[320px] md:w-[400px] drop-shadow-2xl rounded-xl"
        />

    
      </div>
    </motion.div>
  </div>
</div>

{/* only Benfits section */}
<div className="relative mt-40 z-10">
     {/* Background gradients */}
  <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full z-0" />
  <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full z-0" />

  
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
            className="text-xl font-semibold bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text mb-4"
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
</div>
    </section>
  );
};

export default WhySection;
