import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import regionMap from "@/assets/region-map.png";

const AboutSection = () => {
  const parishes = [
    "Livingston",
    "St. Helena",
    "St. Tammany",
    "Tangipahoa",
    "Washington",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Northshore Regional STEM Center
            </h2>
            
            <p className="text-muted-foreground mb-4 leading-relaxed">
              The region's five parishes (Livingston, St. Helena, St. Tammany, 
              Tangipahoa, and Washington) have been designated as the LaSTEM Region 9. 
              Led by Southeastern Louisiana University and Northshore Technical 
              Community College in partnership with LaSTEM, the Southeastern 
              Northshore STEM Center supports the mission and goals of LaSTEM.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Hosting the Southeastern Northshore STEM Network Center is the natural 
              progression of an already existing, well developed partnership between 
              Southeastern, NTCC, and STEM-related industries, government, educational, 
              and community organizations.
            </p>
            
            <Button variant="outline" className="group">
              Learn more about LaSTEM
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <img
              src={regionMap}
              alt="LaSTEM Region 9 Map showing the five parishes"
              className="rounded-xl shadow-card w-full"
            />
            
            <div className="mt-6 flex flex-wrap gap-2">
              {parishes.map((parish) => (
                <span
                  key={parish}
                  className="px-3 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                >
                  {parish}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
