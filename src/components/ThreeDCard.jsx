"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ThreeDCard({ children, className = "" }) {
  const ref = useRef(null);

  // Motion values to track normal mouse coordinates (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring animations for X and Y rotations with smooth dampening
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), {
    damping: 25,
    stiffness: 150,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), {
    damping: 25,
    stiffness: 150,
  });

  // Spring values for a glare overlay effect (opacity and position)
  const glareOpacity = useSpring(useTransform(y, [-0.5, 0.5], [0.15, 0]), {
    damping: 25,
    stiffness: 150,
  });
  
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Relative position from -0.5 to 0.5
    const relativeX = (e.clientX - rect.left) / width - 0.5;
    const relativeY = (e.clientY - rect.top) / height - 0.5;

    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseLeave = () => {
    // Reset rotations to center
    x.set(0);
    y.set(0);
  };

  return (
    <div className="perspective-[1000px] w-full h-full">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`glass-card rounded-2xl relative select-none w-full h-full ${className}`}
      >
        {/* Dynamic glare layer */}
        <motion.div
          style={{
            opacity: glareOpacity,
            background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 80%)",
          }}
          className="absolute inset-0 pointer-events-none rounded-2xl z-10"
        />

        {/* 3D Popout container */}
        <div 
          className="h-full w-full"
          style={{ 
            transform: "translateZ(40px)", 
            transformStyle: "preserve-3d" 
          }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
