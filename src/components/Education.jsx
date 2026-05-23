"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

const timelineData = [
  {
    institution: "K.C.E.M, Sakoli.",
    degree: "B.Tech in Computer Science and Engineering",
    duration: "2024 - Present",
    description: "Currently pursuing engineering studies, focusing on advanced algorithms, software development paradigms, computer architecture, databases, and full stack web technologies.",
    highlight: "Pursuing",
    type: "B.Tech"
  },
  {
    institution: "Government Polytechnic College, Sakoli",
    degree: "Diploma in Computer Technology",
    duration: "2021 - 2024",
    description: "Completed fundamental training in computer science. Built core understanding of object-oriented programming, data structures, operating systems, networking, and web design.",
    highlight: "Completed",
    type: "Diploma"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-cyber-bg/50">
      {/* Background gradients */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-neon-cyan/5 blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-neon-purple/5 blur-[100px] pointer-events-none z-0" />

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
            My <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">Education</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[3px] bg-gradient-to-r from-neon-cyan to-neon-purple"
          />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto flex flex-col items-center">

          {/* Animated Center Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-[2px] bg-gradient-to-b from-neon-cyan via-neon-blue to-neon-purple z-0 h-full origin-top shadow-[0_0_10px_rgba(0,240,255,0.3)]"
          />

          {/* Timeline Nodes */}
          <div className="w-full flex flex-col gap-12 z-10">
            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row w-full items-start md:items-center relative ${isEven ? "md:justify-start" : "md:justify-end"
                    }`}
                >

                  {/* Glowing Node Dot on the center line */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="absolute left-4 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-[12px] h-[12px] rounded-full bg-cyber-bg border-2 border-neon-cyan z-20 shadow-[0_0_12px_#00f0ff]"
                  >
                    <div className="absolute inset-0.5 rounded-full bg-neon-cyan animate-pulse" />
                  </motion.div>

                  {/* Card Section */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isEven ? -60 : 60,
                      y: 20
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      y: 0
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 100, damping: 14, delay: 0.1 }}
                    className={`w-full md:w-[45%] pl-10 md:pl-0 ${isEven ? "md:pr-10" : "md:pl-10"
                      }`}
                  >
                    <div className="glass-card rounded-2xl p-6 border border-cyber-border hover:border-neon-cyan/30 transition-all duration-300 relative group">

                      {/* Floating status tag */}
                      <span className={`absolute top-4 right-4 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${item.type === "btech"
                          ? "bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan"
                          : "bg-neon-purple/10 border border-neon-purple/30 text-neon-purple"
                        }`}>
                        {item.highlight}
                      </span>

                      {/* Header info */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 rounded-lg bg-cyber-gray border border-cyber-border group-hover:border-neon-cyan/20 group-hover:bg-neon-cyan/5 transition-colors duration-300 text-neon-cyan">
                          <FaGraduationCap size={20} />
                        </div>
                        <div>
                          <span className="text-xs text-neon-purple font-semibold tracking-wide block uppercase">
                            {item.degree}
                          </span>
                          <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight mt-0.5 group-hover:text-neon-cyan transition-colors duration-300">
                            {item.institution}
                          </h3>
                        </div>
                      </div>

                      {/* Date details */}
                      <div className="flex items-center gap-1.5 text-xs text-cyber-muted mb-3 font-semibold">
                        <FaCalendarAlt size={12} className="text-neon-cyan/60" />
                        <span>{item.duration}</span>
                      </div>

                      {/* Paragraph */}
                      <p className="text-cyber-muted text-sm leading-relaxed">
                        {item.description}
                      </p>

                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
