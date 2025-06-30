import BenefitsSection from "@/components/Benefits";
import Footer from "@/components/Footer";
import Hero from "@/components/HeroSection";
/* import OrganizationsSection from "@/components/OrganizationSection";
import PhoneMockup from "@/components/PhoneMokeUp";
import ProcessFlow from "@/components/ProcessFlow";
import ScamAlertsSection from "@/components/ScamAlerts"; */
import ThemeToggle from "@/components/ThemeToggle";
import VerticalImageCarousel from "@/components/VerticalCrouselEffect";
import WhySection from "@/components/WhySection";
import { motion } from "framer-motion";



const Index = () => {
  const navItems = [
    { name: "Why VerifyCall", href: "#why-verifycall" },
    { name: "Benefits", href: "#benefits" },
  /*   { name: "How it Works", href: "#how-it-works" },
    { name: "For Organizations", href: "#for-organizations" },
    { name: "Scam Alerts", href: "#scam-alerts" },
    { name: "The Company", href: "#the-company" }, */
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Enhanced Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            VerifyCall
          </motion.div>
          
          {/* Navigation Links */}
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
                className="text-sm xl:text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-2 sm:space-x-4"
          >
            <ThemeToggle />
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Sign In
            </motion.button>
          </motion.div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[90vh]">
  <div className="order-2 lg:order-2 ml-28 w-full ">
    <Hero />
  </div>
  <div className="order-1 lg:order-2 flex justify-center items-center">
    <VerticalImageCarousel />
  </div>
</div>
      </section>

      {/* How it Works Section - COMMENTED OUT */}
      {/* 
      <section id="how-it-works" className="bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProcessFlow />
        </div>
      </section>
      */}

      {/* Why VerifyCall Section */}
      <section id="why-verifycall" className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <WhySection />
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="bg-white dark:bg-gray-900">
        <BenefitsSection />
      </section>

      {/* For Organizations Section - COMMENTED OUT */}
      {/* 
      <section id="for-organizations" className="bg-white dark:bg-gray-900">
        <OrganizationsSection />
      </section>
      */}

      {/* Scam Alerts Section - COMMENTED OUT */}
      {/* 
      <section id="scam-alerts" className="bg-gradient-to-br from-purple-50 to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <ScamAlertsSection />
      </section>
      */}

      {/* The Company Section */}
  {/*     <section id="the-company" className="bg-white dark:bg-gray-900">
        <CompanySection />
      </section> */}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
