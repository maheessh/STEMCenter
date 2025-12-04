import { Button } from "@/components/ui/button";

const FutureSection = () => {
  return (
    <section className="py-20 bg-stem-navy relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-white rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-white rounded-full" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The future is in their hands
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Our hands-on programs connect students to STEM concepts, unlocking 
              aha moments, supporting teachers with standards-aligned lessons, 
              and engaging whole classrooms.
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white hover:text-stem-navy"
            >
              See programs
            </Button>
          </div>
          
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt4c64c3285742fd27/67dbe385632b931c29d48f67/lego-education-brand-hero-video-thumbnail_(2).jpg?locale=en-us&auto=webp&format=jpeg&width=1800&quality=90&fit=bounds"
                alt="Students engaged in hands-on STEM learning"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
