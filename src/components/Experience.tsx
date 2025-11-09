export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-card">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Work Experience</h2>
        <div className="space-y-8">
          <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary">
            <h3 className="text-2xl font-bold text-foreground mb-2">Workflow Automation Specialist</h3>
            <p className="text-muted-foreground mb-4">Freelance & Small Business Projects</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span className="text-foreground">Built and optimized automation workflows using Zapier, Make.com, and n8n for diverse clients</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span className="text-foreground">Designed mock lead-routing system connecting Google Forms to CRM and Slack, reducing data entry time by 75%</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span className="text-foreground">Integrated AI-driven automation for content repurposing and social media scheduling</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span className="text-foreground">Created custom API workflows facilitating seamless data exchange between applications</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-secondary/30 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold text-foreground mb-4">Languages</h3>
            <div className="flex gap-6">
              <div>
                <span className="font-semibold text-foreground">Tagalog</span>
                <p className="text-sm text-muted-foreground">Native</p>
              </div>
              <div>
                <span className="font-semibold text-foreground">English</span>
                <p className="text-sm text-muted-foreground">Conversational</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
