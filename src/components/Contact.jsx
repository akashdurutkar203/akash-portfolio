"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field) => setFocusedField(field);
  const handleBlur = () => setFocusedField(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate empty
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        // Reset success state after a few seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        alert(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit message. Please ensure the API is running.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-cyber-bg">
      {/* Background gradients */}
      <div className="absolute top-[30%] right-[-10%] w-[450px] h-[450px] rounded-full bg-neon-purple/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-neon-cyan/5 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4"
          >
            Get In <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[3px] bg-gradient-to-r from-neon-cyan to-neon-purple"
          />
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex flex-col justify-between gap-8"
          >
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">
                Let&apos;s Connect
              </h3>
              <p className="text-cyber-muted text-sm leading-relaxed">
                Whether you have an exciting project idea, a job opportunity, or just want to chat about modern web development, feel free to reach out! I am always ready to collaborate.
              </p>
            </div>

            {/* Neon Details list */}
            <div className="flex flex-col gap-5 my-4">
              <div className="flex items-center gap-4 p-4 rounded-xl border border-cyber-border bg-cyber-gray/30 backdrop-blur-sm hover:border-neon-cyan/20 transition-all duration-300">
                <div className="text-neon-cyan p-2.5 rounded-lg bg-cyber-bg border border-cyber-border shadow-[0_0_10px_rgba(0,240,255,0.1)]">
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-cyber-muted tracking-wider block">Email Me</span>
                  <a href="mailto:akash@example.com" className="text-sm font-semibold text-slate-800 dark:text-white hover:text-neon-cyan transition-colors duration-300">
                    akash@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-cyber-border bg-cyber-gray/30 backdrop-blur-sm hover:border-neon-purple/20 transition-all duration-300">
                <div className="text-neon-purple p-2.5 rounded-lg bg-cyber-bg border border-cyber-border shadow-[0_0_10px_rgba(217,70,239,0.1)]">
                  <FaMapMarkerAlt size={18} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-cyber-muted tracking-wider block">Location</span>
                  <span className="text-sm font-semibold text-slate-800 dark:text-white">
                    Maharashtra, India
                  </span>
                </div>
              </div>
            </div>

            {/* Socials bar */}
            <div className="flex gap-4">
              {[
                { icon: FaGithub, href: "#", label: "GitHub", glow: "hover:border-neon-cyan/40 hover:text-neon-cyan" },
                { icon: FaLinkedin, href: "#", label: "LinkedIn", glow: "hover:border-neon-purple/40 hover:text-neon-purple" },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <MagneticButton key={idx}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-xl border border-cyber-border bg-cyber-gray/40 backdrop-blur-sm flex items-center justify-center text-slate-300 transition-all duration-300 ${social.glow}`}
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  </MagneticButton>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Form card */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 w-full"
          >
            <div className="glass-card rounded-2xl p-6 md:p-10 border border-cyber-border relative overflow-hidden h-full">
              
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Name Field */}
                      <div className="relative flex flex-col">
                        <label
                          htmlFor="name"
                          className={`text-xs font-semibold uppercase tracking-wider mb-2 transition-all duration-300 ${
                            focusedField === "name" || formData.name ? "text-neon-cyan" : "text-cyber-muted"
                          }`}
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => handleFocus("name")}
                          onBlur={handleBlur}
                          className={`px-5 py-3.5 rounded-xl border bg-cyber-bg/50 text-slate-900 dark:text-white placeholder-slate-600 focus:outline-none transition-all duration-300 ${
                            focusedField === "name"
                              ? "border-neon-cyan shadow-[0_0_12px_rgba(0,240,255,0.15)] bg-cyber-bg/85"
                              : "border-cyber-border hover:border-slate-700"
                          }`}
                          placeholder="John Doe"
                        />
                      </div>

                      {/* Email Field */}
                      <div className="relative flex flex-col">
                        <label
                          htmlFor="email"
                          className={`text-xs font-semibold uppercase tracking-wider mb-2 transition-all duration-300 ${
                            focusedField === "email" || formData.email ? "text-neon-cyan" : "text-cyber-muted"
                          }`}
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => handleFocus("email")}
                          onBlur={handleBlur}
                          className={`px-5 py-3.5 rounded-xl border bg-cyber-bg/50 text-slate-900 dark:text-white placeholder-slate-600 focus:outline-none transition-all duration-300 ${
                            focusedField === "email"
                              ? "border-neon-cyan shadow-[0_0_12px_rgba(0,240,255,0.15)] bg-cyber-bg/85"
                              : "border-cyber-border hover:border-slate-700"
                          }`}
                          placeholder="john@example.com"
                        />
                      </div>

                    </div>

                    {/* Subject Field */}
                    <div className="relative flex flex-col">
                      <label
                        htmlFor="subject"
                        className={`text-xs font-semibold uppercase tracking-wider mb-2 transition-all duration-300 ${
                          focusedField === "subject" || formData.subject ? "text-neon-purple" : "text-cyber-muted"
                        }`}
                      >
                        Subject
                        <span className="text-[10px] text-slate-500 lowercase ml-1">(optional)</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => handleFocus("subject")}
                        onBlur={handleBlur}
                        className={`px-5 py-3.5 rounded-xl border bg-cyber-bg/50 text-slate-900 dark:text-white placeholder-slate-600 focus:outline-none transition-all duration-300 ${
                          focusedField === "subject"
                            ? "border-neon-purple shadow-[0_0_12px_rgba(217,70,239,0.15)] bg-cyber-bg/85"
                            : "border-cyber-border hover:border-slate-700"
                        }`}
                        placeholder="Collaboration query"
                      />
                    </div>

                    {/* Message Field */}
                    <div className="relative flex flex-col">
                      <label
                        htmlFor="message"
                        className={`text-xs font-semibold uppercase tracking-wider mb-2 transition-all duration-300 ${
                          focusedField === "message" || formData.message ? "text-neon-cyan" : "text-cyber-muted"
                        }`}
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => handleFocus("message")}
                        onBlur={handleBlur}
                        className={`px-5 py-3.5 rounded-xl border bg-cyber-bg/50 text-slate-900 dark:text-white placeholder-slate-600 focus:outline-none resize-none transition-all duration-300 ${
                          focusedField === "message"
                            ? "border-neon-cyan shadow-[0_0_12px_rgba(0,240,255,0.15)] bg-cyber-bg/85"
                            : "border-cyber-border hover:border-slate-700"
                        }`}
                        placeholder="Hello Akash, let's design a new app..."
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="mt-2 w-fit">
                      <MagneticButton>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-bold rounded-full shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:shadow-[0_0_35px_rgba(217,70,239,0.4)] disabled:opacity-75 disabled:cursor-not-allowed hover:scale-[1.02] transition-all duration-300"
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <FaPaperPlane size={14} />
                            </>
                          )}
                        </button>
                      </MagneticButton>
                    </div>

                  </motion.form>
                ) : (
                  // Success Message Card
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-12 gap-5"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                    >
                      <FaCheckCircle size={64} />
                    </motion.div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        Transmission Received!
                      </h3>
                      <p className="text-cyber-muted text-sm max-w-sm">
                        Thank you for reaching out! Your message has been sent successfully. I will get back to you shortly.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
