import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const ProcessStep = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col items-center text-center space-y-3 max-w-xs">
    <div
      className="flex justify-center items-center w-20 h-20 p-[22px]"
      style={{
        borderRadius: "40px",
        border: "1.5px solid #98F9FF",
        background:
          "radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(165, 239, 255, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%), radial-gradient(60.09% 46.26% at 3.8% 4.72%, rgba(255, 255, 255, 0.06) 0%, rgba(153, 153, 153, 0.06) 100%)",
        backdropFilter: "blur(40px)",
        WebkitBackdropFilter: "blur(40px)",
      }}
    >
      <img src={icon} alt={title} className="w-7 h-7 object-contain" />
    </div>
    <h4 className="font-semibold text-white text-base sm:text-lg">{title}</h4>
    <p className="text-gray-300 text-sm">{description}</p>
  </div>
);


const Footer = () => {
  return (
    <footer className="text-white pt-16 sm:pt-20 pb-10 px-4 sm:px-6">
      {/* Our Process */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Our <span className="text-purple-400">Process</span>
        </h2>
        <p className="text-gray-300 mt-2 text-sm sm:text-base max-w-xl mx-auto">
          A real-time fraud prevention app that places a "trust layer" over every inbound call from a verified organisation.
        </p>

        {/* Process Steps */}
     <div className="relative mt-14 mb-20">
  {/* Horizontal line */}
  <div className="hidden md:block absolute top-10 left-[10%] w-[80%] h-px border-t border-[#98F9FF] z-0" />

  <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 justify-items-center">
    <ProcessStep
      icon="/src/assets/images/download.svg"
      title="Download & Activate"
      description="Install the VerifyCall app and authenticate your mobile or landline number. The app runs silently in the background."
    />
    <ProcessStep
      icon="/src/assets/images/chip.svg"
      title="Smart Detection"
      description="Our AI listens for every inbound call and instantly checks if it’s from a verified organisation."
    />
    <ProcessStep
      icon="/src/assets/images/layer.svg"
      title="Trust Layer Engaged"
      description="If verified, you get a real-time notification. If not—no alert. No popup means no trust."
    />
    <ProcessStep
      icon="/src/assets/images/mind.svg"
      title="Peace of Mind"
      description="You make confident decisions. No scams. Just trust."
    />
  </div>
</div>

      </div>

      {/* Footer Content */}
    <div className="pt-10">
  <div className="max-w-6xl mx-auto h-[1px] bg-gradient-to-r from-[#6D44FA] via-[#9F6BFF] to-[#6D44FA]" />
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm mt-20">
          {/* Left Column */}
          <div className="text-center md:text-left">
            <img src="/src/assets/images/Frame.svg" alt="Verify Icon" className="w-40 mb-3 " />

            <div className="flex justify-center md:justify-start gap-4 text-lg">
              <FaFacebookF className="hover:text-purple-400 cursor-pointer" />
              <FaInstagram className="hover:text-purple-400 cursor-pointer" />
              <FaTwitter className="hover:text-purple-400 cursor-pointer" />
              <FaYoutube className="hover:text-purple-400 cursor-pointer" />
            </div>
            <p className="text-gray-400 text-xs mt-6">
              © 2024 VerifyCall. All Rights Reserved.
            </p>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="flex flex-wrap justify-center gap-12  text-center md:text-left">
            <div>
              <h4 className="font-semibold text-2xl mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["Features", "Pricing", "Documentation", "Certificates"].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-purple-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 invisible">Spacer</h4>
              <ul className="space-y-2">
                {["Help Center", "Status", "Community", "Terms And Conditions"].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-purple-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Contact */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-2xl mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex justify-center md:justify-start items-center gap-3">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex justify-center md:justify-start items-center gap-3">
                <Mail size={16} />
                <span>hello@verifycall.com</span>
              </div>
              <div className="flex justify-center md:justify-start items-center gap-3">
                <MapPin size={16} />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
