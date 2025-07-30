import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const ProcessStep = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col items-center text-center space-y-3 max-w-xs">
    <div className="bg-white/10 w-12 h-12 flex items-center justify-center rounded-full text-white text-xl">
      {icon}
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
          <div className="hidden md:block absolute top-6 left-0 w-full h-px bg-white/20 z-0" />
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 justify-items-center">
            <ProcessStep
              icon={<span className="text-xl">⬇️</span>}
              title="Download & Activate"
              description="Install the VerifyCall app and authenticate your number. The app runs silently."
            />
            <ProcessStep
              icon={<span className="text-xl">⚙️</span>}
              title="Smart Detection"
              description="App listens to inbound calls and checks if it’s from a verified organisation."
            />
            <ProcessStep
              icon={<span className="text-xl">🛡️</span>}
              title="Trust Layer Engaged"
              description="If verified, you get notified. If not—no alert, no popup means no trust."
            />
            <ProcessStep
              icon={<span className="text-xl">✅</span>}
              title="Peace of Mind"
              description="Make confident decisions. No scams. Just trust."
            />
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="border-t border-white/10 pt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
          {/* Left Column */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">
              Verif<span className="text-purple-400">yC</span>all
            </h3>
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
          <div className="flex flex-wrap justify-center gap-12 text-center md:text-left">
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
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
              <h4 className="font-semibold mb-4 invisible">Spacer</h4>
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
            <h4 className="font-semibold mb-4">Contact Us</h4>
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
