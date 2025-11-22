import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Experience } from "@/components/Experience";
import { ProjectHighlights } from "@/components/ProjectHighlights";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { AnimatedRobot3D } from "@/components/AnimatedRobot3D";
import { MagicalCursor } from "@/components/MagicalCursor";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <MagicalCursor />
      <Header />
      <Hero />
      <About />
      <Services />
      <Experience />
      <ProjectHighlights />
      <Testimonials />
      <Contact />
      <Footer />
      <AnimatedRobot3D />
    </div>
  );
};

export default Index;
