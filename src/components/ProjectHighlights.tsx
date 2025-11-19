import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import emailAutomation from "@/assets/portfolio/email-automation.png";
import weatherForecast from "@/assets/portfolio/weather-forecast.png";
import zapierLeads from "@/assets/portfolio/zapier-leads.png";
import slackIntegration from "@/assets/portfolio/slack-integration.png";
import asanaXero from "@/assets/portfolio/asana-xero.png";
import gmailIntegration from "@/assets/portfolio/gmail-integration.png";

const projects = [
  {
    title: "Email Response Automation",
    description: "Automated email categorization and response system using n8n with AI integration",
    image: emailAutomation,
    tools: ["n8n", "Gmail", "AI"]
  },
  {
    title: "Social Media Content Post",
    description: "Automated weather forecast posting to Facebook using n8n and OpenWeatherMap API",
    image: weatherForecast,
    tools: ["n8n", "Facebook", "Weather API"]
  },
  {
    title: "Lead Management System",
    description: "Multi-path lead automation workflow with Zapier connecting forms to CRM and notifications",
    image: zapierLeads,
    tools: ["Zapier", "Google Drive", "Gmail", "Asana"]
  },
  {
    title: "Slack Team Integration",
    description: "Custom webhook to Slack messaging system for team coordination using Make.com",
    image: slackIntegration,
    tools: ["Make.com", "Slack", "Webhooks"]
  },
  {
    title: "Accounting Integration",
    description: "Automated workflow connecting Asana tasks with Xero accounting via Make.com",
    image: asanaXero,
    tools: ["Make.com", "Asana", "Xero", "Google Sheets"]
  },
  {
    title: "Gmail Automation Suite",
    description: "Comprehensive email automation with AI-powered responses and Google Drive integration",
    image: gmailIntegration,
    tools: ["Make.com", "Gmail", "Google Drive", "AI"]
  }
];

export function ProjectHighlights() {
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
                    <div className="relative overflow-hidden group">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6 pb-4 text-left">
                      <h3 className="text-xl font-bold text-card-foreground mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <CardContent className="pt-0 pb-6">
                    <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
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
      </div>
    </section>
  );
}
