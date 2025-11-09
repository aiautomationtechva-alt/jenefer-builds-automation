import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-card">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Get In Touch</h2>
        <Card className="bg-background border-border">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Let's Connect</h3>
                <p className="text-muted-foreground mb-6">
                  Ready to streamline your business processes? I'm here to help you automate and optimize your workflows.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:jenefergado.techva@gmail.com"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">jenefergado.techva@gmail.com</p>
                    </div>
                  </a>

                  <a 
                    href="tel:+639695182763"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">+639695182763</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 text-foreground">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">Manila, Philippines</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-secondary/20 rounded-xl p-6 space-y-4">
                  <h4 className="font-semibold text-foreground">Quick Response</h4>
                  <p className="text-sm text-muted-foreground">
                    I typically respond within 24 hours. Let me know how I can help optimize your workflows!
                  </p>
                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                    onClick={() => window.location.href = 'mailto:jenefergado.techva@gmail.com'}
                  >
                    Send Email
                  </Button>
                </div>
                
                <div className="bg-accent/10 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-2">Available For</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      Automation Consulting
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      Workflow Optimization
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      API Integrations
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      Process Automation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
