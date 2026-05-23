"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/components/ThemeContext";

export default function ParticlesBg() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particlesArray = [];
    let mouse = {
      x: null,
      y: null,
      radius: 120, // Interaction radius
    };

    const isDark = theme === "dark";

    // Dynamic color configurations
    const colors = isDark
      ? [
          "rgba(0, 240, 255, 0.7)",  // neon cyan
          "rgba(217, 70, 239, 0.7)", // neon purple
          "rgba(59, 130, 246, 0.7)"  // neon blue
        ]
      : [
          "rgba(13, 148, 136, 0.55)", // tech teal
          "rgba(134, 25, 143, 0.55)", // tech purple
          "rgba(29, 78, 216, 0.55)"   // tech blue
        ];

    const connectColor = isDark ? "rgba(0, 240, 255, " : "rgba(13, 148, 136, ";
    const mouseColor = isDark ? "rgba(217, 70, 239, " : "rgba(134, 25, 143, ";

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    // Initial setup
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        
        // Add subtle shadow glows in dark mode, clear vectors in light mode
        if (isDark) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = this.color;
        } else {
          ctx.shadowBlur = 0;
        }
        
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow for lines
      }

      update() {
        // Keep particles inside canvas bounds
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        // Mouse proximity interaction (push away gently)
        if (mouse.x !== null && mouse.y !== null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius + this.size) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const maxForce = 3;
            const force = (mouse.radius - distance) / mouse.radius;
            const directionX = forceDirectionX * force * maxForce;
            const directionY = forceDirectionY * force * maxForce;

            this.x -= directionX;
            this.y -= directionY;
          }
        }

        // Move particle
        this.x += this.directionX;
        this.y += this.directionY;

        this.draw();
      }
    }

    function init() {
      particlesArray = [];
      const numberOfParticles = Math.min(
        Math.floor((canvas.width * canvas.height) / 11000),
        100
      );

      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2 + 0.5;
        const x = Math.random() * (canvas.width - size * 2 - 10) + size * 2;
        const y = Math.random() * (canvas.height - size * 2 - 10) + size * 2;
        const directionX = (Math.random() * 0.8) - 0.4;
        const directionY = (Math.random() * 0.8) - 0.4;
        const color = colors[Math.floor(Math.random() * colors.length)];

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    function connect() {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let dx = particlesArray[a].x - particlesArray[b].x;
          let dy = particlesArray[a].y - particlesArray[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 110) {
            opacityValue = 1 - distance / 110;
            ctx.strokeStyle = `${connectColor}${opacityValue * (isDark ? 0.15 : 0.07)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }

        // Draw line from mouse to particle
        if (mouse.x !== null && mouse.y !== null) {
          let dx = mouse.x - particlesArray[a].x;
          let dy = mouse.y - particlesArray[a].y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            opacityValue = 1 - distance / mouse.radius;
            ctx.strokeStyle = `${mouseColor}${opacityValue * (isDark ? 0.25 : 0.1)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(particlesArray[a].x, particlesArray[a].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]); // Re-run effect when theme switches to swap colors

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
}
