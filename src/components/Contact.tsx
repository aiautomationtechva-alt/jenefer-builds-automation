import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarIcon, Clock, Video, Send } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM"
];

export function Contact() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDate && selectedTime && name && email) {
      const bookingDetails = {
        date: format(selectedDate, "PPP"),
        time: selectedTime,
        name,
        email
      };
      console.log("Booking submitted:", bookingDetails);
      alert(`Discovery call booked for ${format(selectedDate, "PPP")} at ${selectedTime}. We'll send a confirmation to ${email}.`);
      // Reset form
      setSelectedDate(undefined);
      setSelectedTime(undefined);
      setName("");
      setEmail("");
    }
  };

  const isFormValid = selectedDate && selectedTime && name && email;

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
                  <CalendarIcon className="h-6 w-6 text-primary" />
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

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Calendar */}
                <div className="flex flex-col items-center">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Select a Date</h3>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                    className={cn("rounded-xl border border-border p-3 pointer-events-auto")}
                  />
                </div>

                {/* Time Slots */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Select a Time</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        type="button"
                        variant={selectedTime === time ? "default" : "outline"}
                        className={cn(
                          "text-sm",
                          selectedTime === time && "bg-primary text-primary-foreground"
                        )}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Selected Summary */}
              {(selectedDate || selectedTime) && (
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <p className="text-sm text-foreground">
                    <span className="font-semibold">Selected:</span>{" "}
                    {selectedDate ? format(selectedDate, "EEEE, MMMM do, yyyy") : "No date selected"}
                    {selectedTime && ` at ${selectedTime}`}
                  </p>
                </div>
              )}

              <Button 
                type="submit" 
                size="lg" 
                className="w-full"
                disabled={!isFormValid}
              >
                <Send className="mr-2 h-5 w-5" />
                Book Discovery Call
              </Button>
            </form>
            
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
