import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-students.jpeg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-primary">
                LaSTEM Region 9 • Northshore
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Southeastern Northshore STEM Center
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              The Louisiana Regional Science, Technology, Engineering, and Math (LaSTEM) 
              Network connects communities to improve STEM education, opportunity, and 
              advancement. The Northshore Regional STEM Center supports LaSTEM's mission 
              across Livingston, St. Helena, St. Tammany, Tangipahoa, and Washington Parishes.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                Explore programs
              </Button>
              <Button variant="hero-outline" size="lg">
                Contact us
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-stem-teal-light rounded-lg -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-lg -z-10" />
              
              <img
                src={heroImage}
                alt="Students collaborating on a STEM robotics activity"
                className="rounded-xl shadow-card-hover w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
