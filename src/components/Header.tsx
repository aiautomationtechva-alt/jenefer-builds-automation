import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">JENEFER GADO</h1>
        
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-primary transition-colors duration-300"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-foreground hover:text-primary transition-colors duration-300"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-foreground hover:text-primary transition-colors duration-300"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-foreground hover:text-primary transition-colors duration-300"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-foreground hover:text-primary transition-colors duration-300"
          >
            Contact
          </button>
          <ThemeToggle />
        </nav>

        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
