import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    content: "Jenefer transformed our workflow completely! The automation she set up saved us hours every week and reduced errors significantly.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Marketing Manager",
    content: "The API integrations Jenefer built for our team were seamless. She understood our needs perfectly and delivered beyond expectations.",
    rating: 5
  },
  {
    name: "Emma Rodriguez",
    role: "Freelance Consultant",
    content: "Working with Jenefer was a game-changer. Her expertise in Make.com and n8n helped automate my entire content pipeline.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-border bg-card"
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-card-foreground mb-4 italic">{testimonial.content}</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
