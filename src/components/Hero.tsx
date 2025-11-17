import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            Workflow Automation Specialist
          </h1>
          <p className="text-xl text-muted-foreground">
            Transforming business processes with smart automation solutions using Zapier, Make.com, and n8n.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="border-primary text-primary hover:bg-primary/10 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
          <div className="flex flex-col gap-2 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>jenefergado.techva@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+639695182763</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Manila, Philippines</span>
            </div>
          </div>
        </div>
        
        <div className="animate-scale-in flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
            <img
              src={profilePhoto}
              alt="Jenefer Gado - Workflow Automation Specialist"
              className="relative rounded-full w-96 h-96 object-cover object-[center_20%] shadow-2xl ring-4 ring-white transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
