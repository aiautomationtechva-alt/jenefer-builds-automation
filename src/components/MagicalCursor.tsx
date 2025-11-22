import { useEffect, useState } from "react";

export function MagicalCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    let particleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });

      // Create sparkle particles occasionally
      if (Math.random() > 0.85) {
        const newParticle = {
          id: particleId++,
          x: e.clientX,
          y: e.clientY,
        };
        setParticles((prev) => [...prev, newParticle]);

        // Remove particle after animation
        setTimeout(() => {
          setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
        }, 1000);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Main magical cursor */}
      <div
        className="pointer-events-none fixed z-[9999]"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Outer glow */}
        <div className="absolute inset-0 w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/40 blur-2xl animate-pulse" />
        
        {/* Middle ring */}
        <div className="absolute inset-0 w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-3 border-yellow-400/60 animate-ping" />
        
        {/* Center dot */}
        <div className="absolute inset-0 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.9)]" />
      </div>

      {/* Sparkle particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="pointer-events-none fixed z-[9998] w-2 h-2 rounded-full bg-yellow-400 animate-fade-out"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            boxShadow: "0 0 12px rgb(250, 204, 21)",
            animation: "fade-out 1s ease-out forwards, scale-out 1s ease-out forwards",
          }}
        />
      ))}

      {/* Custom cursor styles */}
      <style>{`
        * {
          cursor: none !important;
        }
        
        a, button, [role="button"], input, textarea, select {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}
