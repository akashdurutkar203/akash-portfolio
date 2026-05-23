"use client";

import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import MagneticButton from "./MagneticButton";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-cyber-border bg-cyber-bg/90 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        
        {/* Logo/Name */}
        <div className="text-sm text-cyber-muted font-medium">
          &copy; {currentYear} <span className="text-slate-900 dark:text-white font-bold">Akash</span>. All rights reserved.
        </div>

        {/* Social Badges */}
        <div className="flex gap-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyber-muted hover:text-neon-cyan transition-colors duration-300"
            aria-label="GitHub Profile"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyber-muted hover:text-neon-purple transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Scroll back to top */}
        <div>
          <MagneticButton>
            <button
              onClick={handleScrollTop}
              className="p-3.5 rounded-xl border border-cyber-border bg-cyber-gray/40 text-slate-300 hover:text-neon-cyan hover:border-neon-cyan/40 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.2)]"
              aria-label="Scroll to top"
            >
              <FaArrowUp size={16} className="animate-pulse" />
            </button>
          </MagneticButton>
        </div>

      </div>
    </footer>
  );
}
