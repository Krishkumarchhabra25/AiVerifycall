import { motion } from "framer-motion";





const impactFeatures = [
  {
    icon: "/src/assets/images/icon1.png",
    title: "Impersonation is exploding",
    description: "Spoofed numbers & fake call-centers slip through existing tools.",
  },
  {
    icon: "/src/assets/images/icon2.png",
    title: "Detection is too late",
    description: "Fraud is only caught after money moves and the damage is done.",
  },
  {
      icon: "/src/assets/images/icon3.png",
    title: "Training doesn't scale",
    description: "Even your most tech-savvy customers fall victim to remote fraud.",
  },
  {
      icon: "/src/assets/images/icon4.png",
    title: "Fighting yesterday’s battles",
    description: "Banks rely on solutions that act after the criminal has made first contact.",
  },
  {
  icon: "/src/assets/images/icon5.png",
    title: "Lack of proactive barriers",
    description: "There is no smart filter that blocks risky calls before they begin.",
  },
  {
   icon: "/src/assets/images/icon6.png",
    title: "No real-time verification",
    description: "Calls are not verified until the user is already engaged.",
  },
];


const benefitsLeft = [
  {
    title: "Instant call authentication",
    desc: "Real-time validation tells customers ‘Verified Call’ before they even say ‘hello.’",
  },
  {
    title: "Omnichannel scam shield",
    desc: "Blocks impersonations from banks, govt agencies & more through one integration.",
  },
  {
    title: "Real-Time Caller Authentication",
    desc: "Verified organisation shown at the start — no delay, no spoof risk.",
  },
];

const benefitsRight = [
  {
    title: "Protects beyond mobile",
    desc: "Even scam calls on landlines are verified and stopped.",
  },
  {
    title: "Zero-friction experience",
    desc: "No extra steps. Just a silent check and a trust badge.",
  },
  {
    title: "Effortless Always-On Protection",
    desc: "Every call is automatically verified. Peace of mind, no setup needed.",
  },
];


const WhySection = () => {
  return (
    <section   style={{
    background: "linear-gradient(to right, #000000, #0C364A)",
  }} className="  md:py-12">
      {/* Heading */}
    <div className="max-w-7xl mx-auto px-4 mt-20">
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl sm:text-4xl md:text-5xl font-bold text-center"
  >
    Why should you use <span className="text-[#6D44FA]">VerifyCall?</span>
  </motion.h2>

  <div className="mt-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
    {impactFeatures.map((feature, idx) => {
      const Icon = feature.icon;
      return (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="flex flex-col items-start gap-4 w-full max-w-[461px] p-[59px_50px] rounded-[40px] border border-[#98F9FF]"
          style={{
            background:
              "radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(165, 239, 255, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%), radial-gradient(60.09% 46.26% at 3.8% 4.72%, rgba(255, 255, 255, 0.06) 0%, rgba(153, 153, 153, 0.06) 100%)",
            backdropFilter: "blur(40px)",
          }}
        >
          <img src={Icon}  className="w-[116px] h-[100px]" />
          <h3 className="text-xl font-bold text-white">{feature.title}</h3>
          <p className="text-sm text-white/70">{feature.description}</p>
        </motion.div>
      );
    })}
  </div>
</div>


 
     {/* Solution Section */}
<section className="relative  md:mt-50 px-4">
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-70 "
  >
    What Is  <span className="text-[#6D44FA]">The Solution</span>
  </motion.h2>
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mt-15 md:mt-35  items-center">
    {/* Left Image */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center"
    >
      <img
        src="/src/assets/images/solution.jpg" // replace with actual image path
        alt="Maze door light"
        className="rounded-[20px] border border-[#6D44FA] w-full max-w-[500px] shadow-2xl"
      />
    </motion.div>
 {/* Right Content */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="text-left"
    >
      <h2 className=" text-3xl md:text-4xl sm:text-5xl font-bold text-white mb-6">
        Proactive <span className="text-[#6D44FA]">Prevention</span> not<br />
        Reactive <span className="text-[#6D44FA]">Detection</span>.
      </h2>

      <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-6">
        <strong className="text-white">VerifyCall</strong> is the proactive shield that ends the call before the con.
        It embeds a real-time verification layer between every inbound call and your customers —
        ending impersonation attempts <strong>before a word is spoken</strong>.
      </p>

      <ul className="space-y-3 text-sm sm:text-base text-white/90">
        <li className="flex items-center gap-3">
          <span className="w-6 h-6 bg-[#6D44FA] text-white rounded-full flex items-center justify-center text-sm font-bold">✓</span>
          No guesswork
        </li>
        <li className="flex items-center gap-3">
          <span className="w-6 h-6 bg-[#6D44FA] text-white rounded-full flex items-center justify-center text-sm font-bold">✓</span>
          No post-transaction clean-up.
        </li>
        <li className="flex items-center gap-3">
          <span className="w-6 h-6 bg-[#6D44FA] text-white rounded-full flex items-center justify-center text-sm font-bold">✓</span>
          Just trust – Delivered in real time.
        </li>
      </ul>
    </motion.div>


  </div>
</section>


<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="relative flex flex-col items-center justify-center text-white w-full mt-80"
>
  <div className="text-center mb-12 px-4">
    <h2 className="text-4xl sm:text-5xl font-bold mb-2">
      The Benefits of using <span className="text-[#6D44FA]">VerifyCall</span>
    </h2>
    <p className="text-lg text-white/70">Empowering Trust, Preventing Fraud.</p>
  </div>

  {/* Container */}
  <div className="relative w-full max-w-[700px] aspect-square mx-auto">
    {/* SVG connector lines */}
    <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
      {[...benefitsLeft, ...benefitsRight].map((_, i, all) => {
        const angle = (360 / all.length) * i - 90;
        const r = 200; // smaller radius for line endpoint
        const cx = 350, cy = 350; // center of 700x700 box
        const x = cx + r * Math.cos((angle * Math.PI) / 180);
        const y = cy + r * Math.sin((angle * Math.PI) / 180);
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={x}
            y2={y}
            stroke="#ffffff"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
        );
      })}
    </svg>

    {/* Center Image */}
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <div className="rounded-full border-4 border-[#6D44FA] p-2 bg-[#1b2452]">
        <img
          src="/src/assets/images/organization.jpg"
          alt="center"
          className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover"
        />
      </div>
    </div>

    {/* Benefits Around Circle */}
    {[...benefitsLeft, ...benefitsRight].map((item, i, all) => {
      const angle = (360 / all.length) * i - 90;
      const r = 240;
      const x = r * Math.cos((angle * Math.PI) / 180);
      const y = r * Math.sin((angle * Math.PI) / 180);
      const align =
        angle > 90 || angle < -90
          ? "items-end text-right"
          : "items-start text-left";

      return (
        <div
          key={i}
          className={`absolute flex gap-3 ${align} max-w-[220px]`}
          style={{
            top: `calc(50% + ${y}px)`,
            left: `calc(50% + ${x}px)`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="bg-[#6D44FA] w-6 h-6 rounded-full flex items-center justify-center mt-1">
            <span className="text-white text-sm font-bold">✓</span>
          </div>
          <div>
            <h3 className="font-bold text-sm sm:text-base">{item.title}</h3>
            <p className="text-xs sm:text-sm text-white/70">{item.desc}</p>
          </div>
        </div>
      );
    })}
  </div>
</motion.div>


    </section>
  );
};

export default WhySection;
