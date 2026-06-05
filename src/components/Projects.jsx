"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ThreeDCard from "./ThreeDCard";

const projectsList = [
  {
    title: "News Website",
    description: "A dynamic, high-performance news website featuring categorizations, search filters, and an interactive reader mode. Built with React.js, responsive layouts, and Tailwind CSS.",
    tags: ["React.js", "Tailwind CSS", "GNews API"],
    github: "https://github.com/akashdurutkar203/akash-news",
    live: "https://akash-news.vercel.app/",
    // Code-based vector mockup
    mockup: (
      <div className="w-full h-full bg-cyber-bg/60 rounded-t-xl border-b border-cyber-border p-4 flex flex-col gap-3 relative overflow-hidden group-hover:bg-cyber-gray/40 transition-colors duration-300">
        <div className="flex justify-between items-center pb-2 border-b border-cyber-border/40">
          <span className="text-[10px] font-bold text-neon-cyan tracking-wider">GLOBAL NEWS</span>
          <div className="flex gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
            <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
            <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 flex-grow">
          <div className="col-span-2 bg-cyber-gray/80 border border-cyber-border/50 rounded p-2 flex flex-col justify-between">
            <div className="w-full h-1.5 bg-neon-cyan/30 rounded" />
            <div className="w-3/4 h-1.5 bg-slate-600/50 rounded" />
            <div className="w-1/2 h-1 bg-slate-600/30 rounded" />
            <div className="flex justify-between mt-2">
              <div className="w-8 h-2 bg-neon-purple/20 rounded" />
              <div className="w-4 h-2 bg-slate-600/40 rounded" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-cyber-gray/80 border border-cyber-border/30 rounded p-1.5 flex flex-col justify-between flex-grow">
              <div className="w-full h-1 bg-slate-500 rounded" />
              <div className="w-full h-1 bg-slate-600/50 rounded" />
              <div className="w-1/2 h-1 bg-slate-600/30 rounded" />
            </div>
            <div className="bg-cyber-gray/80 border border-cyber-border/30 rounded p-1.5 flex flex-col justify-between flex-grow">
              <div className="w-full h-1 bg-slate-500 rounded" />
              <div className="w-full h-1 bg-slate-600/50 rounded" />
              <div className="w-1/2 h-1 bg-slate-600/30 rounded" />
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Portfolio Website",
    description: "A dark futuristic premium portfolio built to showcase creative work, featuring smooth 3D tilt effects, magnetic buttons, custom canvas particles, and scroll-triggered animations.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/akashdurutkar203/Ak-portfolio",
    live: "https://ak-old-portfolio.vercel.app/",
    mockup: (
      <div className="w-full h-full bg-cyber-bg/60 rounded-t-xl border-b border-cyber-border p-4 flex flex-col justify-between relative overflow-hidden group-hover:bg-cyber-gray/40 transition-colors duration-300">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-bold text-neon-purple tracking-widest">AKASH.DEV</span>
          <span className="w-4 h-4 rounded-full border border-neon-cyan flex items-center justify-center text-[7px] text-neon-cyan">A</span>
        </div>
        <div className="flex flex-col items-center gap-2 my-auto">
          <div className="w-16 h-16 rounded-full border border-dashed border-neon-cyan/40 flex items-center justify-center animate-spin-slow">
            <div className="w-12 h-12 rounded-full border border-neon-purple/40 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-neon-cyan to-neon-purple opacity-80" />
            </div>
          </div>
          <div className="w-24 h-1.5 bg-gradient-to-r from-neon-cyan to-neon-purple rounded" />
          <div className="w-16 h-1 bg-slate-600/40 rounded" />
        </div>
        <div className="flex justify-between items-center pt-2 border-t border-cyber-border/40">
          <div className="w-10 h-1 bg-slate-600/40 rounded" />
          <div className="w-6 h-3 bg-neon-cyan/20 border border-neon-cyan/30 rounded-full" />
        </div>
      </div>
    )
  },
  {
    title: "Attendance Management System",
    description: "A comprehensive attendance management application featuring real-time check-in, dashboard analytics, visual progress rings, and structured databases for administration.",
    tags: ["React", "Next.js", "Chart.js", "Tailwind CSS"],
    github: "#",
    live: "#",
    mockup: (
      <div className="w-full h-full bg-cyber-bg/60 rounded-t-xl border-b border-cyber-border p-4 flex flex-col gap-3 relative overflow-hidden group-hover:bg-cyber-gray/40 transition-colors duration-300">
        <div className="flex justify-between items-center pb-2 border-b border-cyber-border/40">
          <span className="text-[10px] font-bold text-emerald-400 tracking-wider">ATTENDENCE SYSTEM</span>
          <span className="text-[9px] px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full">Active</span>
        </div>
        <div className="grid grid-cols-2 gap-3 flex-grow items-center">
          <div className="flex flex-col gap-1.5">
            <div className="text-[10px] text-slate-400">Monthly Avg</div>
            <div className="text-lg font-bold text-slate-900 dark:text-white leading-none">84.8%</div>
            <div className="w-12 h-1 bg-emerald-400 rounded" />
          </div>
          {/* SVG Circular Progress Ring */}
          <div className="flex justify-center">
            <svg width="50" height="50" viewBox="0 0 36 36" className="drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
              <path
                className="text-slate-700"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-emerald-400"
                strokeWidth="3.5"
                strokeDasharray="84, 100"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
          </div>
        </div>
      </div>
    )
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-cyber-bg">
      {/* Background radial elements */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-neon-cyan/5 blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-neon-purple/5 blur-[150px] pointer-events-none z-0" />

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
            Featured <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[3px] bg-gradient-to-r from-neon-cyan to-neon-purple"
          />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="flex h-full"
            >
              <ThreeDCard className="w-full flex flex-col overflow-hidden h-full group">

                {/* Visual mockup block */}
                <div className="h-44 w-full bg-cyber-gray/20">
                  {project.mockup}
                </div>

                {/* Project Info details */}
                <div className="p-6 flex flex-col flex-grow justify-between gap-5">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-neon-cyan transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-cyber-muted text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="text-[10px] px-2.5 py-1 rounded-full border border-cyber-border bg-cyber-gray/30 text-slate-700 dark:text-slate-300 font-medium tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-4 pt-2 border-t border-cyber-border/40">
                      <a
                        href={project.github}
                        className="flex items-center gap-1.5 text-xs text-cyber-muted hover:text-slate-900 dark:hover:text-white font-bold transition duration-300"
                        aria-label={`Github source for ${project.title}`}
                      >
                        <FaGithub size={15} />
                        Source
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center gap-1.5 text-xs text-neon-cyan hover:text-slate-900 dark:hover:text-white font-bold transition duration-300 ml-auto"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        Live Demo
                        <FaExternalLinkAlt size={11} />
                      </a>
                    </div>
                  </div>

                </div>

              </ThreeDCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
