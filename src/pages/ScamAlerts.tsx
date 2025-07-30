"use client";
import { motion } from "framer-motion";

const scamPosts = [
  {
    title: '“You Missed Jury Duty!” – The Fake Court Call That Tricks Thousands',
    desc: 'Find out how scammers impersonate court officials and demand fines via phone or gift cards.',
    date: '2025-07-10',
    image: '/src/assets/images/scam1.jpg',
    tags: ['#legalScams'],
    tag: ['ScamAlert'],
  },
  {
    title: 'The WhatsApp “Friend in Trouble” Scam: Don’t Fall for It!',
    desc: 'Learn how scammers pretend to be your friend or family needing urgent money on WhatsApp.',
    date: '2025-07-06',
    image: '/src/assets/images/scam2.jpg',
    tags: ['#whatsAppScams', '#impersonation'],
    tag: ['ScamAlert'],
  },
  {
    title: 'Amazon Delivery Scam Calls Are Back — Here’s What They Sound Like',
    desc: 'Scammers claim your package couldn’t be delivered and request personal info or payment verification.',
    date: '2025-06-30',
    image: '/src/assets/images/scam3.jpg',
    tags: ['#amazonScams', '#deliveryFraud'],
    tag: ['ScamAlert'],
  },
];

const ScamAlertsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-8 text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
          Recent <span className="text-[#6D44FA]">Scam</span> Alerts
        </h2>

        <p className="text-base text-gray-300">Stay One Step Ahead of Scammers</p>
        <p className="text-sm text-gray-400 mt-4 sm:mt-6 max-w-2xl mx-auto">
          Every day, thousands of people fall victim to phone scams. VerifyCall helps you stay safe by identifying fraudulent calls and warning you instantly—before you even pick up.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {scamPosts.map((post, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-6"
          >
            {/* Image Box */}
            <div
              className="w-full md:w-[345px] h-[226px] flex-shrink-0 rounded-[30px] border border-cyan-100 bg-cover bg-center"
              style={{
                backgroundImage: `url(${post.image})`,
              }}
            />

            {/* Content Box */}
            <div className="w-full md:w-[672px] flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-[28px] md:text-[32px] font-medium mb-2">{post.title}</h3>
                <p className="text-sm sm:text-base text-white/70 mb-3">{post.desc}</p>

                {/* Hashtags */}
                <div className="flex gap-2 flex-wrap text-sm text-white/50">
                  {post.tags.map((tag, j) => (
                    <span key={j}>{tag}</span>
                  ))}
                </div>

                {/* Date + Source */}
                <div className="flex flex-wrap justify-between items-center gap-y-4 mt-4 text-sm text-gray-400">
                  <div>{post.date} | VerifyCall</div>
                </div>

                {/* Bubble Tag */}
                <div className="flex gap-2 flex-wrap mt-4">
                  {post.tag.map((tag, j) => (
                    <span
                      key={j}
                      className="px-4 py-1 border border-white/30 rounded-full text-sm font-semibold text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-14">
        <button className="text-sm border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
          Load More
        </button>
      </div>
    </section>
  );
};

export default ScamAlertsSection;
