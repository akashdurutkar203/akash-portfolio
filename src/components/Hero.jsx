"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiArrowRight, HiDownload } from "react-icons/hi";
import MagneticButton from "./MagneticButton";
import HudConsole from "./HudConsole";


const words = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "UI/UX Designer",
  "System Designer",
  "Problem Solver",
];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const activeWord = words[currentWordIndex];

    if (isDeleting) {
      // Deleting speed
      setTypingSpeed(60);
      timer = setTimeout(() => {
        setCurrentText(activeWord.substring(0, currentText.length - 1));
      }, typingSpeed);
    } else {
      // Typing speed
      setTypingSpeed(120);
      timer = setTimeout(() => {
        setCurrentText(activeWord.substring(0, currentText.length + 1));
      }, typingSpeed);
    }

    // Word typed completely, wait before deleting
    if (!isDeleting && currentText === activeWord) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    }
    // Word deleted completely, move to next
    else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Gradient Mesh */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-neon-cyan/10 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-neon-purple/10 blur-[120px] pointer-events-none z-0" />

      {/* Cyber Grid background */}
      <div className="absolute inset-0 cyber-grid pointer-events-none z-0 opacity-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 relative">

        {/* Left Side: Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 px-4 py-1.5 rounded-full border border-neon-cyan/20 w-fit">
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse shadow-[0_0_8px_#00f0ff]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-neon-cyan">
              Available for Freelance & Part-time
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-neon-cyan via-blue-500 to-neon-purple bg-clip-text text-transparent text-glow-cyan">
              Akash
            </span>
          </h1>

          <div className="h-10 sm:h-12 flex items-center">
            <span className="text-xl sm:text-3xl font-medium text-cyber-text">
              I am a <span className="text-neon-cyan font-bold underline decoration-neon-purple/40">{currentText}</span>
              <span className="animate-pulse text-neon-cyan font-bold">|</span>
            </span>
          </div>

          <p className="text-cyber-muted text-base sm:text-lg max-w-lg leading-relaxed">
            I am a passionate software engineer specializing in building high-performance
            full stack web applications. I design responsive, accessible, and
            interactive experiences with AI-Driven Modern Technology Stacks.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 mt-4">
            <MagneticButton>
              <button
                onClick={() => handleScrollTo("projects")}
                className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-blue text-black font-bold rounded-full shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:shadow-[0_0_35px_rgba(0,240,255,0.5)] transition-all duration-300 hover:scale-[1.02]"
              >
                Explore Work
                <HiArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" size={18} />
              </button>
            </MagneticButton>

            <MagneticButton>
              <button
                onClick={() => handleScrollTo("contact")}
                className="flex items-center gap-2 px-8 py-4 bg-cyber-gray/40 border border-cyber-border text-slate-900 dark:text-white font-bold rounded-full backdrop-blur-sm hover:bg-cyber-gray/70 hover:border-neon-purple/40 transition-all duration-300 hover:scale-[1.02]"
              >
                Contact Me
              </button>
            </MagneticButton>
          </div>
        </motion.div>

        {/* Right Side: Futuristic Animated Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center items-center lg:justify-end z-0 w-full"
        >
          <HudConsole />
        </motion.div>

      </div>
    </section>
  );
}
