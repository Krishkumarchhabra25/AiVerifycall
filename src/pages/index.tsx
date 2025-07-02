"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import Hero from "@/components/HeroSection";
import RightHeroCarousel from "@/components/VerticalCrouselEffect";
import WhySection from "@/components/WhySection";
import BenefitsSection from "@/components/Benefits";
import Footer from "@/components/Footer";

const Index = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Why VerifyCall", href: "#why-verifycall" },
    { name: "Benefits", href: "#benefits" },
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
      <section className="pt-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white relative overflow-x-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-tr from-emerald-500/10 to-blue-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[90vh] px-4 sm:px-8 lg:px-28">
          <div className="order-2 lg:order-1 w-full">
            <Hero />
          </div>

          <div className="order-1 lg:order-2">
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

      <section id="benefits" className="bg-gray-900">
        <BenefitsSection />
      </section>

      <Footer />
    </div>
  );
};

export default Index;
