"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX, HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "@/components/ThemeContext";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Monitor scrolling to add background shading on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver to auto-update active section based on view
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // Detect when section is in the middle of the viewport
      threshold: 0,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-cyber-bg/70 backdrop-blur-md border-b border-cyber-border shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo/Name */}
        <a 
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="relative group text-xl font-bold tracking-widest text-slate-900 dark:text-white transition duration-300"
        >
          <span className="text-neon-cyan">A</span>KASH
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-neon-cyan to-neon-purple transition-all duration-300 group-hover:w-full" />
        </a>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center gap-1 bg-cyber-gray/30 p-1.5 rounded-full border border-cyber-border backdrop-blur-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative px-5 py-2 text-sm font-medium transition duration-300 rounded-full ${
                  isActive ? "text-slate-900 dark:text-white" : "text-cyber-muted hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/30 rounded-full z-[-1]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* CTA (Hire Me / Contact) & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-cyber-border bg-cyber-gray/30 hover:border-neon-cyan/40 text-cyber-muted hover:text-neon-cyan transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.05)] cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <HiSun size={20} /> : <HiMoon size={20} />}
          </button>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="px-6 py-2 rounded-full border border-neon-cyan/50 text-neon-cyan text-sm font-semibold tracking-wider hover:bg-neon-cyan hover:text-black transition-all duration-500 shadow-[0_0_15px_rgba(0,240,255,0.1)] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)]"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Toggle button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-cyber-muted hover:text-neon-cyan transition duration-300 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-cyber-bg/95 border-b border-cyber-border backdrop-blur-lg overflow-hidden absolute top-full left-0 w-full shadow-2xl"
          >
            <nav className="flex flex-col gap-2 px-6 py-6 max-h-[80vh] overflow-y-auto">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 border-neon-cyan/40 text-cyber-text shadow-[inset_0_0_12px_rgba(0,240,255,0.05)]"
                        : "border-transparent text-cyber-muted hover:bg-white/5 hover:text-cyber-text"
                    }`}
                  >
                    <span className="font-semibold text-lg">{item.name}</span>
                    {isActive && (
                      <span className="w-2.5 h-2.5 rounded-full bg-neon-cyan shadow-[0_0_8px_#00f0ff]" />
                    )}
                  </a>
                );
              })}
              
              {/* Theme Toggle in Mobile Drawer */}
              <button
                onClick={toggleTheme}
                className="mt-4 flex items-center justify-center gap-2 py-3 rounded-xl border border-cyber-border bg-cyber-gray/40 text-cyber-muted hover:text-neon-cyan transition-all duration-300 cursor-pointer"
              >
                {theme === "dark" ? (
                  <>
                    <HiSun size={20} /> Light Mode
                  </>
                ) : (
                  <>
                    <HiMoon size={20} /> Dark Mode
                  </>
                )}
              </button>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="mt-2 text-center py-3 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-bold tracking-wider hover:opacity-90 shadow-[0_0_20px_rgba(0,240,255,0.2)]"
              >
                Hire Me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
