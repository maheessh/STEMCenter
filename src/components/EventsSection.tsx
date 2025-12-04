import { Calendar, MapPin, ExternalLink, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    day: "17",
    month: "January",
    year: "2026",
    title: "VEX V5 Robotics Competition",
    subtitle: "Roomie's Robo Rampage - MS and HS Teams Welcome",
    time: "Saturday",
    location: "Southeastern Louisiana University",
    price: "$85.00",
    capacity: "40 teams",
    availability: "50%+ Available",
    registrationDeadline: "January 9, 2026",
    eventCode: "RE-V5RC-25-2433",
    link: "https://www.robotevents.com/de/robot-competitions/vex-robotics-competition/RE-V5RC-25-2433.html"
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Upcoming Events
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join us for exciting STEM competitions and events across the region.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden animate-slide-up"
            >
              <div className="bg-gradient-to-r from-stem-accent to-stem-accent/80 p-6 text-white">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{event.title}</h3>
                    <p className="text-white/90">{event.subtitle}</p>
                  </div>
                  <div className="bg-white/20 rounded-xl px-6 py-3 text-center">
                    <span className="block text-4xl font-bold">{event.day}</span>
                    <span className="text-sm font-medium">{event.month} {event.year}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <span className="text-sm text-muted-foreground block">Location</span>
                        <span className="font-medium text-foreground">{event.location}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <span className="text-sm text-muted-foreground block">Registration Deadline</span>
                        <span className="font-medium text-foreground">{event.registrationDeadline}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <span className="text-sm text-muted-foreground block">Capacity</span>
                        <span className="font-medium text-foreground">{event.capacity} • {event.availability}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded bg-emerald-500 flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs font-bold">$</span>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground block">Registration Fee</span>
                        <span className="font-medium text-foreground">{event.price}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">
                    Event Code: <span className="font-mono text-foreground">{event.eventCode}</span>
                  </span>
                  <Button variant="hero" asChild>
                    <a href={event.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Register Now
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
