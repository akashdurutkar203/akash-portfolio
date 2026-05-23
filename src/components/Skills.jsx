"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaPython,
  FaGithub,
  FaLightbulb
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Stack",
    skills: [
      { name: "HTML", icon: FaHtml5, color: "hover:text-[#e34f26]", borderGlow: "hover:border-[#e34f26]/40", level: 70 },
      { name: "CSS", icon: FaCss3Alt, color: "hover:text-[#1572b6]", borderGlow: "hover:border-[#1572b6]/40", level: 65 },
      { name: "JavaScript", icon: FaJs, color: "hover:text-[#f7df1e]", borderGlow: "hover:border-[#f7df1e]/40", level: 70 },
      { name: "React", icon: FaReact, color: "hover:text-[#61dafb]", borderGlow: "hover:border-[#61dafb]/40", level: 60 },
      { name: "Next.js", icon: SiNextdotjs, color: "hover:text-[#ffffff]", borderGlow: "hover:border-[#ffffff]/40", level: 50 },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "hover:text-[#06b6d4]", borderGlow: "hover:border-[#06b6d4]/40", level: 50 },
    ]
  },
  {
    title: "Languages & Core",
    skills: [
      { name: "Java", icon: FaJava, color: "hover:text-[#f89820]", borderGlow: "hover:border-[#f89820]/40", level: 50 },
      { name: "Python", icon: FaPython, color: "hover:text-[#3776ab]", borderGlow: "hover:border-[#3776ab]/40", level: 50 },
    ]
  },
  {
    title: "Tools & Strengths",
    skills: [
      { name: "GitHub", icon: FaGithub, color: "hover:text-[#fafafa]", borderGlow: "hover:border-[#fafafa]/40", level: 65 },
      { name: "Problem Solving", icon: FaLightbulb, color: "hover:text-[#eab308]", borderGlow: "hover:border-[#eab308]/40", level: 60 },
    ]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-cyber-bg/50">
      {/* Visual highlights */}
      <div className="absolute top-[30%] left-[-5%] w-[400px] h-[400px] rounded-full bg-neon-cyan/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-neon-purple/5 blur-[120px] pointer-events-none z-0" />

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
            My <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[3px] bg-gradient-to-r from-neon-cyan to-neon-purple"
          />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card rounded-2xl p-6 border border-cyber-border bg-cyber-gray/40 backdrop-blur-sm flex flex-col gap-6"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white border-b border-cyber-border pb-3 tracking-wide">
                {category.title}
              </h3>

              <div className="flex flex-col gap-5">
                {category.skills.map((skill, skillIdx) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skillIdx}
                      variants={itemVariants}
                      className={`group p-4 rounded-xl border border-cyber-border bg-cyber-bg/40 flex flex-col gap-3 transition-all duration-300 ${skill.color} ${skill.borderGlow}`}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <Icon size={24} className="text-slate-400 group-hover:scale-110 transition-transform duration-300" />
                          <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-slate-500 dark:text-cyber-muted group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="w-full h-1.5 bg-cyber-gray rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                          className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full shadow-[0_0_8px_rgba(0,240,255,0.4)]"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
