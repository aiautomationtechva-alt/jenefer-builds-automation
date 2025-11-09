import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Code, Workflow } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Zapier and Make Automation Specialist",
    description: "Built and optimized automation workflows for small business and freelancers using Zapier and Make.com.",
    features: [
      "Developed customized pipelines and triggers to streamline client communication",
      "Integrated AI-driven automation for content repurposing and social media scheduling",
      "Monitored and optimized automation efficiency for better client engagement"
    ]
  },
  {
    icon: Code,
    title: "API Integration Developer",
    description: "Designed API connections between third-party applications to facilitate data exchange.",
    features: [
      "Created custom API workflows without code",
      "Automated data entry and report generation, saving clients significant time",
      "Troubleshoot and optimized API calls for better performance"
    ]
  },
  {
    icon: Workflow,
    title: "N8N Automation Specialist",
    description: "Built advanced workflow automation using n8n's powerful open-source platform.",
    features: [
      "Designed API connections between third-party applications",
      "Created custom workflows without code",
      "Automated data processes to maximize efficiency"
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-border bg-card"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-card-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
