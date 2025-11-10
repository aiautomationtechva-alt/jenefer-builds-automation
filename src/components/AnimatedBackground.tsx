import { useEffect, useRef } from 'react';

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface Bubble {
  x: number;
  y: number;
  radius: number;
  speed: number;
  opacity: number;
}

export const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Track scroll position for parallax
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);

    // Get CSS color values
    const styles = getComputedStyle(document.documentElement);
    const primaryColor = styles.getPropertyValue('--primary').trim();
    const mutedColor = styles.getPropertyValue('--muted-foreground').trim();

    // Create dots
    const dots: Dot[] = [];
    const numDots = Math.floor((canvas.width * canvas.height) / 15000);
    
    for (let i = 0; i < numDots; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: 3.5
      });
    }

    // Create bubbles
    const bubbles: Bubble[] = [];
    const numBubbles = Math.floor((canvas.width * canvas.height) / 20000);
    
    for (let i = 0; i < numBubbles; i++) {
      bubbles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 30 + 20,
        speed: Math.random() * 0.5 + 0.3,
        opacity: Math.random() * 0.1 + 0.05
      });
    }

    // Animation loop
    let animationFrameId: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const parallaxOffset = scrollRef.current * 0.5;

      // Update and draw bubbles
      bubbles.forEach((bubble) => {
        // Move bubble upward
        bubble.y -= bubble.speed;

        // Mouse interaction - bubbles drift away from cursor
        const dx = bubble.x - mouseRef.current.x;
        const dy = (bubble.y - parallaxOffset) - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          bubble.x += (dx / distance) * force * 0.5;
        }

        // Reset bubble to bottom when it goes off screen
        if (bubble.y + bubble.radius < 0) {
          bubble.y = canvas.height + bubble.radius;
          bubble.x = Math.random() * canvas.width;
        }

        // Draw bubble with parallax
        const bubbleY = bubble.y - parallaxOffset * 0.3;
        ctx.beginPath();
        ctx.arc(bubble.x, bubbleY, bubble.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${primaryColor} / ${bubble.opacity})`;
        ctx.fill();
        ctx.strokeStyle = `hsl(${primaryColor} / ${bubble.opacity * 1.5})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      // Update and draw dots
      dots.forEach((dot, i) => {
        // Update position
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Mouse interaction - dots are attracted to cursor
        const dx = mouseRef.current.x - dot.x;
        const dy = mouseRef.current.y - (dot.y - parallaxOffset * 0.6);
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          const force = (200 - distance) / 200;
          dot.x += (dx / distance) * force * 0.3;
          dot.y += (dy / distance) * force * 0.3;
        }

        // Bounce off edges
        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

        // Draw dot with parallax
        const dotY = dot.y - parallaxOffset * 0.6;
        ctx.beginPath();
        ctx.arc(dot.x, dotY, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${primaryColor} / 0.4)`;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[j].x - dot.x;
          const dy = (dots[j].y - parallaxOffset * 0.6) - dotY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(dot.x, dotY);
            ctx.lineTo(dots[j].x, dots[j].y - parallaxOffset * 0.6);
            const opacity = (1 - distance / 150) * 0.2;
            ctx.strokeStyle = `hsl(${mutedColor} / ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};
