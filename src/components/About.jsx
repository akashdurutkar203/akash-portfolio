"use client";

import { motion } from "framer-motion";

export default function About() {
  const terminalCode = `{
  "name": "Akash Durutkar",
  "role": "Full Stack Developer",
  "education": {
    "current": "B.Tech in CSE",
    "college": "Karanjekar College of Engineering",
    "previous": "Diploma in Computer Technology",
    "polytechnic": "Government Polytechnic Sakoli"
  },
  "passions": [
    "Full Stack Engineering",
    "Modern Web Architecture",
    "Problem Solving",
    "Continuous Learning"
  ],
  "locales": ["Web", "Localhost"]
}`;

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-cyber-bg">
      {/* Background gradients */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-neon-purple/5 blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-neon-cyan/5 blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4"
          >
            About <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[3px] bg-gradient-to-r from-neon-cyan to-neon-purple"
          />
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Interactive Code Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 w-full"
          >
            <div className="w-full rounded-2xl border border-cyber-border bg-cyber-gray/60 backdrop-blur-md shadow-2xl overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-cyber-gray/95 border-b border-cyber-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                </div>
                <div className="text-xs text-cyber-muted font-mono tracking-wider">
                  akash.json
                </div>
                <div className="w-10" /> {/* Spacer */}
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto text-slate-300">
                <pre className="whitespace-pre">
                  {terminalCode.split("\n").map((line, idx) => {
                    // Quick custom syntax highlighting for rendering JSON
                    let highlightedLine = line
                      .replace(/"([^"]+)":/g, '<span class="text-neon-cyan font-semibold">"$1"</span>:')
                      .replace(/: "([^"]+)"/g, ': <span class="text-amber-300">"$1"</span>')
                      .replace(/: (\[[^\]]+\])/g, ': <span class="text-purple-300">$1</span>')
                      .replace(/: ({)/g, ': <span class="text-yellow-400">{</span>')
                      .replace(/(})/g, '<span class="text-yellow-400">}</span>');

                    return (
                      <div key={idx} className="table-row">
                        <span className="table-cell text-right pr-6 select-none opacity-20 text-xs w-6">{idx + 1}</span>
                        <span
                          className="table-cell"
                          dangerouslySetInnerHTML={{ __html: highlightedLine }}
                        />
                      </div>
                    );
                  })}
                </pre>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">
              Fusing Technology & Creative Solutions
            </h3>

            <p className="text-cyber-muted leading-relaxed">
              I am Akash, currently pursuing my <strong className="text-slate-900 dark:text-white">B.Tech in Computer Science and Engineering</strong> at Karanjekar College of Engineering and Management, Sakoli. Prior to this, I completed a <strong className="text-slate-900 dark:text-white">Diploma in Computer Technology</strong> from Government Polytechnic Sakoli.
            </p>

            <p className="text-cyber-muted leading-relaxed">
              My academic journey has built a strong foundation in computer science core principles, algorithms, and databases. I have developed a strong passion for full-stack engineering, allowing me to bridge the gap between design and functionality. I enjoy learning modern frameworks, optimizing layouts, and engineering responsive backend logic.
            </p>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="glass-card rounded-xl p-4 flex flex-col border border-cyber-border">
                <span className="text-3xl font-extrabold text-neon-cyan text-glow-cyan">
                  3+
                </span>
                <span className="text-xs text-cyber-muted font-semibold uppercase tracking-wider mt-1">
                  Projects Completed
                </span>
              </div>
              <div className="glass-card rounded-xl p-4 flex flex-col border border-cyber-border">
                <span className="text-3xl font-extrabold text-neon-purple text-glow-purple">
                  10+
                </span>
                <span className="text-xs text-cyber-muted font-semibold uppercase tracking-wider mt-1">
                  Skills Mastered
                </span>
              </div>
            </div>

            <p className="text-sm italic text-neon-cyan/80 mt-2">
              &quot;Code is like humor. When you have to explain it, it’s bad.&quot; – Cory House
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
