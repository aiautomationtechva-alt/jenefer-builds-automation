export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-card">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">About Me</h2>
        <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
          <p className="text-lg text-foreground leading-relaxed">
            Workflow Automation Specialist with specialized training and hands-on proficiency in building efficient, 
            multi-step integrations using Zapier, Make.com, and n8n. Highly skilled in process mapping and identifying 
            redundant manual effort. Successfully designed a mock lead-routing system that connected Google Forms to a 
            CRM and Slack, reducing data entry time by an estimated 75%. Eager to leverage low-code/no-code expertise 
            to streamline business operations and drive immediate efficiency gains.
          </p>
        </div>
      </div>
    </section>
  );
}
