"use client";
import { motion } from "framer-motion";

const scamPosts = [
  {
    title: '“You Missed Jury Duty!” – The Fake Court Call That Tricks Thousands',
    desc: 'Find out how scammers impersonate court officials and demand fines via phone or gift cards.',
    date: '2025-07-10',
    image: '/src/assets/images/scam1.jpg',
    tags: ['#legalScams'],
     tag: ['ScamAlert']
  },
  {
    title: 'The WhatsApp “Friend in Trouble” Scam: Don’t Fall for It!',
    desc: 'Learn how scammers pretend to be your friend or family needing urgent money on WhatsApp.',
    date: '2025-07-06',
    image: '/src/assets/images/scam2.jpg',
    tags: ['#whatsAppScams', '#impersonation'],
     tag: ['ScamAlert']
  },
  {
    title: 'Amazon Delivery Scam Calls Are Back — Here’s What They Sound Like',
    desc: 'Scammers claim your package couldn’t be delivered and request personal info or payment verification.',
    date: '2025-06-30',
    image: '/src/assets/images/scam3.jpg',
    tags: ['#amazonScams', '#deliveryFraud'],
    tag: ['ScamAlert']
  },
];

const ScamAlertsSection = () => {
  return (
    <section className="py-40 px-6 sm:px-10  text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center max-w-[802px] mx-auto mb-16"
      >
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
  Recent{" "}
  <span className="text-[#6D44FA]">
    Scam
  </span>{" "}
  Alerts
</h2>

        <p className="text-base text-gray-300">
          Stay One Step Ahead of Scammers
        </p>
        <p className="text-sm text-gray-400 mt-6 max-w-2xl mx-auto">
          Every day, thousands of people fall victim to phone scams. VerifyCall helps you stay safe by identifying fraudulent calls and warning you instantly—before you even pick up.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="max-w-[1017px] mx-auto flex flex-col gap-8">
        {scamPosts.map((post, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            {/* Left Image Box */}
            <div
              className="flex-shrink-0"
              style={{
                width: "345px",
                height: "226px",
                borderRadius: "29.935px",
                border: "1.5px solid #98F9FF",
                background: `url(${post.image}) lightgray 50% / cover no-repeat`,
                backdropFilter: "blur(29.935px)",
              }}
            />

            {/* Right Content Box */}
            <div
              style={{
                width: "672px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "Poppins",
                    fontSize: "32px",
                    fontWeight: 500,
                    lineHeight: "normal",
                    marginBottom: "10px",
                  }}
                >
                  {post.title}
                </h3>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.70)",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "normal",
                    marginBottom: "10px",
                  }}
                >
                  {post.desc}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {post.tags.map((tag, j) => (
                    <span
                      key={j}
                     
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                   {/* Footer */}
              <div className="flex flex-wrap justify-between items-center gap-y-4">
                <div className="text-sm text-gray-400">
                  {post.date} | VerifyCall
                </div>
              
              </div>

                <div className="flex gap-2 flex-wrap mt-4">
                  {post.tag.map((tag, j) => (
                    <span
                      key={j}
                          style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "130.141px",
                        height: "30.986px",
                        padding: "7.746px",
                        color: "rgba(255, 255, 255, 0.70)",
                        fontFamily: "Poppins",
                        fontSize: "16px",
                        fontWeight: 600,
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        borderRadius: "9999px",
                      }}
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
