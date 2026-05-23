"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiTerminal } from "react-icons/hi";
import { HiOutlineCpuChip } from "react-icons/hi2";

const logsList = [
  "SYS: Init credentials...",
  "SYS: Load .env.local config...",
  "SYS: Pack: mongoose, framer-motion",
  "DB: Connecting to MongoDB...",
  "DB: Cached pool resolved [Mongoose]",
  "DB: Model registered: 'Message'",
  "DB: Status: CONNECTED [ok]",
  "SRV: Next.js App started on port 3000",
  "SRV: Turbopack initialized...",
  "SRV: Allowed dev network origins...",
  "COMP: Route '/' compiled in 670ms",
  "COMP: Route '/api/contact' compiled",
  "NET: Local -> http://localhost:3000",
  "NET: Host -> 192.168.1.100:3000",
  "HUD: Sweep active. Status: OK",
];

export default function HudConsole() {
  const [logs, setLogs] = useState([]);
  const [logIndex, setLogIndex] = useState(0);
  const [waveOffset, setWaveOffset] = useState(0);
  const [mounted, setMounted] = useState(false);
  const terminalContainerRef = useRef(null);

  // 1. Loop log lines typing output
  useEffect(() => {
    const interval = setInterval(() => {
      setLogs((prev) => {
        const newLog = {
          id: `${logsList[logIndex]}-${Date.now()}-${Math.random()}`,
          text: logsList[logIndex],
        };
        const nextLogs = [...prev, newLog];
        // Limit display buffer to last 8 lines
        if (nextLogs.length > 8) {
          nextLogs.shift();
        }
        return nextLogs;
      });

      setLogIndex((prev) => (prev + 1) % logsList.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [logIndex]);

  // Auto-scroll terminal logs container to bottom without scrolling parent window
  useEffect(() => {
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
    }
  }, [logs]);

  // 2. Animate Oscilloscope Wave
  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setWaveOffset((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Generate dynamic path points for Oscilloscope Wave
  const wavePoints = [];
  const width = 160;
  const height = 40;
  for (let i = 0; i <= 50; i++) {
    const x = 20 + (i / 50) * width;
    // Layer two sine waves for complex radar scan visual
    const y =
      height / 2 +
      Math.sin((i + waveOffset) * 0.3) * 6 +
      Math.cos((i * 1.5 - waveOffset) * 0.15) * 3;
    wavePoints.push(`${x},${y}`);
  }
  const wavePathD = mounted
    ? `M ${wavePoints.join(" L ")}`
    : "M 20,20 L 180,20";

  return (
    <div className="glass-card rounded-2xl p-5 border border-cyber-border/40 backdrop-blur-md shadow-2xl relative w-full max-w-[450px] aspect-[4/3] overflow-hidden flex flex-col gap-4 font-mono select-none">
      
      {/* 1. Header Row */}
      <div className="flex justify-between items-center pb-2.5 border-b border-cyber-border/40 text-[10px] text-cyber-muted font-bold tracking-wider">
        <div className="flex items-center gap-1.5">
          <HiOutlineCpuChip className="text-neon-cyan animate-pulse" size={14} />
          <span>SYSTEM DIAGNOSTICS [v1.0]</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-ping shadow-[0_0_8px_#00f0ff]" />
          <span className="text-neon-cyan">ACTIVE</span>
        </div>
      </div>

      {/* 2. Body Grid Split */}
      <div className="grid grid-cols-12 gap-4 flex-grow items-center">
        
        {/* Left Col: Radar Scanner SVG */}
        <div className="col-span-4 flex flex-col items-center justify-center gap-2">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center rounded-full border border-cyber-border bg-cyber-bg/50 overflow-hidden">
            {/* Spinning Radar Sweep */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-neon-cyan/25 rounded-full animate-spin-slow" style={{ animationDuration: "5s" }} />
            
            {/* Concentric rings */}
            <div className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-neon-cyan/15" />
            <div className="absolute w-[50%] h-[50%] rounded-full border border-cyber-border" />
            <div className="absolute w-[20%] h-[20%] rounded-full border border-neon-purple/20" />
            
            {/* Crosshairs */}
            <div className="absolute w-full h-[1px] bg-cyber-border/30" />
            <div className="absolute h-full w-[1px] bg-cyber-border/30" />

            {/* Blinking Node targets */}
            <span className="absolute top-[25%] left-[60%] w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse shadow-[0_0_6px_#00f0ff]" />
            <span className="absolute bottom-[30%] left-[25%] w-1 h-1 rounded-full bg-neon-purple animate-pulse shadow-[0_0_6px_#d946ef]" style={{ animationDelay: "1s" }} />
          </div>
          <span className="text-[8px] text-cyber-muted font-bold uppercase tracking-widest">Radar Sweep</span>
        </div>

        {/* Right Col: Animating Terminal Logs */}
        <div className="col-span-8 h-28 sm:h-32 rounded-xl bg-cyber-bg/75 border border-cyber-border/30 p-3.5 overflow-hidden flex flex-col gap-1.5 justify-start text-[9px] sm:text-[10px] leading-relaxed shadow-inner">
          <div className="flex items-center gap-1 text-neon-cyan font-bold border-b border-cyber-border/20 pb-1 mb-1 text-[8px] uppercase tracking-widest">
            <HiTerminal size={11} />
            <span>Terminal Log Feed</span>
          </div>
          
          <div 
            ref={terminalContainerRef}
            className="flex-grow overflow-y-auto pr-1 flex flex-col gap-1 scrollbar-none scroll-smooth"
          >
            {logs.map((log) => {
              const isDatabase = log.text.startsWith("DB:");
              const isServer = log.text.startsWith("SRV:");
              const isCompiled = log.text.startsWith("COMP:");
              const isNet = log.text.startsWith("NET:");
              
              let colorClass = "text-slate-400 dark:text-slate-300";
              if (isDatabase) colorClass = "text-amber-400";
              if (isServer) colorClass = "text-neon-blue";
              if (isCompiled) colorClass = "text-emerald-400";
              if (isNet) colorClass = "text-neon-cyan";

              return (
                <motion.div
                  key={log.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`font-mono whitespace-pre-wrap break-words ${colorClass}`}
                >
                  {log.text}
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>

      {/* 3. Bottom Row: Moving Oscilloscope Chart */}
      <div className="border-t border-cyber-border/40 pt-2 flex flex-col gap-1 justify-center">
        <div className="flex justify-between items-center text-[8px] text-cyber-muted font-bold tracking-widest uppercase">
          <span>Signal Throughput</span>
          <span className="text-neon-purple animate-pulse">482 KB/S</span>
        </div>
        
        {/* SVG Live Oscilloscope Wave */}
        <div className="w-full h-8 rounded-lg bg-cyber-bg/40 border border-cyber-border/20 overflow-hidden flex justify-center items-center">
          <svg viewBox="0 0 200 40" fill="none" className="w-full h-full">
            <path
              d={wavePathD}
              stroke="url(#waveGrad)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="waveGrad" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="var(--neon-cyan-val)" stopOpacity="0.4" />
                <stop offset="50%" stopColor="var(--neon-cyan-val)" />
                <stop offset="80%" stopColor="var(--neon-purple-val)" />
                <stop offset="100%" stopColor="var(--neon-purple-val)" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

    </div>
  );
}
