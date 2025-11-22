import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import emailAutomation from "@/assets/portfolio/email-automation.png";
import weatherForecast from "@/assets/portfolio/weather-forecast.png";
import zapierLeads from "@/assets/portfolio/zapier-leads.png";
import slackIntegration from "@/assets/portfolio/slack-integration.png";
import asanaXero from "@/assets/portfolio/asana-xero.png";
import gmailIntegration from "@/assets/portfolio/gmail-integration.png";

const projects = [
  {
    title: "Email Response Automation",
    description: "Smart email handling system that automatically categorizes incoming emails, analyzes content using AI, and generates contextually appropriate responses. This workflow reduces manual email processing time by 80% and ensures consistent, professional communication.",
    image: emailAutomation,
    tools: ["n8n", "Gmail", "AI"]
  },
  {
    title: "Social Media Content Post",
    description: "Fully automated weather content system that fetches real-time weather data, generates engaging posts with weather insights, and publishes to Facebook on a schedule. Perfect for local businesses wanting consistent social media presence.",
    image: weatherForecast,
    tools: ["n8n", "Facebook", "Weather API"]
  },
  {
    title: "Lead Management System",
    description: "Comprehensive lead capture and distribution workflow that collects form submissions, stores data in Google Drive, sends instant email notifications to sales team, and creates organized tasks in Asana. Ensures no lead falls through the cracks.",
    image: zapierLeads,
    tools: ["Zapier", "Google Drive", "Gmail", "Asana"]
  },
  {
    title: "Slack Team Integration",
    description: "Real-time team notification system that receives webhook data from various sources and delivers formatted, actionable messages to specific Slack channels. Keeps teams instantly informed of critical events and updates.",
    image: slackIntegration,
    tools: ["Make.com", "Slack", "Webhooks"]
  },
  {
    title: "Accounting Integration",
    description: "Seamless financial workflow connecting project management with accounting. Automatically syncs completed Asana tasks to Xero invoices, updates Google Sheets for reporting, and maintains accurate financial records without manual data entry.",
    image: asanaXero,
    tools: ["Make.com", "Asana", "Xero", "Google Sheets"]
  },
  {
    title: "Gmail Automation Suite",
    description: "Advanced email processing system featuring AI-powered response generation, automatic attachment handling with Google Drive storage, intelligent email categorization, and smart reply suggestions. Transforms email management from hours to minutes.",
    image: gmailIntegration,
    tools: ["Make.com", "Gmail", "Google Drive", "AI"]
  }
];

export function ProjectHighlights() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Project Highlights</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Real automation workflows built with Zapier, Make.com, and n8n
        </p>
        <Accordion type="single" collapsible className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AccordionItem 
              key={index}
              value={`project-${index}`}
              className="border-none"
            >
              <Card className="hover:shadow-xl transition-all duration-300 border-border bg-card overflow-hidden">
                <AccordionTrigger className="hover:no-underline p-0 [&[data-state=open]>div]:ring-2 [&[data-state=open]>div]:ring-primary/50">
                  <div className="w-full">
                    <div 
                      className="relative overflow-hidden group cursor-zoom-in"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage({ src: project.image, title: project.title });
                      }}
                    >
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-semibold text-sm bg-black/50 px-4 py-2 rounded-full">
                          Click to enlarge
                        </span>
                      </div>
                    </div>
                    <div className="p-6 pb-4 text-left">
                      <h3 className="text-xl font-bold text-card-foreground mb-3">{project.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{project.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <CardContent className="pt-0 pb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>
          ))}
        </Accordion>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-[98vw] max-h-[98vh] w-fit h-fit p-0 overflow-hidden border-0">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 rounded-full bg-black/70 p-3 text-white hover:bg-black/90 transition-colors"
              aria-label="Close"
            >
              <X className="h-8 w-8" />
            </button>
            {selectedImage && (
              <div className="relative flex items-center justify-center bg-black/95 min-h-[98vh]">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-auto h-auto max-w-[98vw] max-h-[98vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <h3 className="text-white text-3xl font-bold">{selectedImage.title}</h3>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
