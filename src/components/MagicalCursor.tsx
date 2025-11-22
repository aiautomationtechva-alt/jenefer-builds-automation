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
        <div className="absolute inset-0 w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/40 blur-2xl animate-pulse" />
        
        {/* Star wand */}
        <svg
          className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 animate-pulse"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Star shape */}
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="#facc15"
            stroke="#fef08a"
            strokeWidth="1"
            filter="url(#glow)"
          />
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
        </svg>
        
        {/* Sparkles around star */}
        <div className="absolute inset-0 w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-yellow-400/50 animate-ping" />
      </div>

      {/* Sparkle particles */}
      {particles.map((particle) => (
        <svg
          key={particle.id}
          className="pointer-events-none fixed z-[9998] w-3 h-3 animate-fade-out"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            animation: "fade-out 1s ease-out forwards, scale-out 1s ease-out forwards",
          }}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="#facc15"
            style={{ filter: "drop-shadow(0 0 4px rgb(250, 204, 21))" }}
          />
        </svg>
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
