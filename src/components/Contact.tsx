import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Video } from "lucide-react";
import { useEffect } from "react";

export function Contact() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="py-20 px-6 bg-card">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Get In Touch</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Ready to streamline your business? Book a free discovery call to discuss your automation needs.
        </p>
        
        <Card className="bg-background border-border">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Pick a Date</p>
                  <p className="text-sm text-muted-foreground">Choose your preferred day</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">30-Min Call</p>
                  <p className="text-sm text-muted-foreground">Free consultation session</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Video className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Video Meeting</p>
                  <p className="text-sm text-muted-foreground">Via Google Meet or Zoom</p>
                </div>
              </div>
            </div>

            {/* Calendly Embed */}
            <div 
              className="calendly-inline-widget rounded-xl overflow-hidden" 
              data-url="https://calendly.com/YOUR_CALENDLY_USERNAME/discovery-call"
              style={{ minWidth: "320px", height: "700px" }}
            />
            
            <p className="text-center text-sm text-muted-foreground mt-6">
              Can't find a suitable time? Email me at{" "}
              <a href="mailto:jenefergado.techva@gmail.com" className="text-primary hover:underline">
                jenefergado.techva@gmail.com
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
