// Index.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import Hero from "@/components/HeroSection";
import RightHeroCarousel from "@/components/VerticalCrouselEffect";
import WhySection from "@/components/WhySection";
import Footer from "@/components/Footer";
import HowItWorksSection from "./HowItWorks";
import ForOrganisations from "./TheCompany";

const Index = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Why VerifyCall", href: "#why-verifycall" },
    { name: "For Organisations", href: "#fororganisations" },
    { name: "How It Works", href: "#howitworks" },
    { name: "Scam Alerts", href: "#scam-alerts" },
    { name: "The Company", href: "#the-company" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white transition-colors duration-300 overflow-x-hidden">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 bg-gray-900/80 backdrop-blur-xl border-b border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            VerifyCall
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden lg:flex items-center space-x-6 xl:space-x-8"
          >
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ y: -2 }}
                className="text-sm xl:text-base text-gray-300 hover:text-blue-400 font-medium transition-all duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </motion.button>
            ))}
          </motion.div>

          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-white"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white"
            >
              <X size={28} />
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center space-y-8 text-white text-xl font-medium">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  scrollToSection(item.href);
                  setMobileMenuOpen(false);
                }}
                className="hover:text-purple-400 transition"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      {/* Removed the absolute positioned background divs from here */}
<section className="bg-[#0e1217] text-white relative overflow-x-hidden pt-20 min-h-screen flex items-center">
  <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center md:space-x-8">
    {/* Left: Hero */}
    <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0 relative z-10">
      <Hero />
    </div>

    {/* Right: Carousel */}
    <div className="w-full md:w-1/2 flex justify-center md:justify-end relative z-10">
      <RightHeroCarousel />
    </div>
  </div>
</section>


     

      <section
        id="why-verifycall"
        className=" bg-gradient-to-br from-gray-900 via-gray-950 to-black"
      >
        <WhySection />
      </section>


 <section
        id="fororganisations"
        className=" bg-gradient-to-br from-gray-900 via-gray-950 to-black"
      >
        <ForOrganisations />
      </section>
      <section id="benefits" className="bg-gray-900"></section>
      <section
        id="howitworks"
        className=" bg-gradient-to-br from-gray-900 via-gray-950 to-black"
      >
        <HowItWorksSection />
      </section>
      <section id="benefits" className="bg-gray-900"></section>


      <section id="benefits" className="bg-gray-900"></section>

      <Footer />
    </div>
  );
};

export default Index;