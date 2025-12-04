import { MapPin, Phone, Mail, User } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contact Us
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-card">
              <h3 className="font-semibold text-foreground text-lg mb-6">
                Southeastern Northshore STEM Center
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-foreground">SLU Box 10345</p>
                    <p className="text-muted-foreground">Hammond, LA 70402</p>
                  </div>
                </div>
                
                <a
                  href="tel:+19855493306"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  (985) 549-3306
                </a>
                
                <a
                  href="mailto:stemcenter@southeastern.edu"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  stemcenter@southeastern.edu
                </a>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-8 shadow-card">
              <h3 className="font-semibold text-foreground text-lg mb-6">
                Director
              </h3>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-stem-teal-light rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Jordan Smith-Kenning</p>
                  <p className="text-muted-foreground text-sm">STEM Center Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
