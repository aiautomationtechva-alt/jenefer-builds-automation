import { useEffect, useState } from "react";
import robotImage from "@/assets/cute-robot.png";

export function FlyingRobot() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 pointer-events-none">
      <div className="animate-float">
        <img
          src={robotImage}
          alt="Friendly AI Robot Assistant"
          className="w-32 h-32 md:w-40 md:h-40 animate-wave drop-shadow-2xl"
        />
      </div>
    </div>
  );
}
