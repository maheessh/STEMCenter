import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Glasses, Monitor, Gamepad2, GraduationCap, Globe, Sparkles } from "lucide-react";

const VirtualReality = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-purple-500/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Glasses className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Virtual Reality Lab
              </h1>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Step into immersive learning experiences with our Meta Quest 3S headsets. 
                Explore virtual worlds, create 3D content, and discover new ways to understand 
                complex concepts.
              </p>
            </div>
          </div>
        </section>

        {/* Meta Quest 3S */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">Meta Quest 3S</h2>
                  <p className="text-muted-foreground mb-6">
                    The Meta Quest 3S is our featured VR headset, offering an affordable yet powerful 
                    mixed reality experience. With improved passthrough cameras, a faster Snapdragon XR2 
                    Gen 2 processor, and access to thousands of apps, it's the perfect tool for 
                    educational VR experiences.
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Key Specifications</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { label: "Display", value: "1832 x 1920 per eye" },
                          { label: "Processor", value: "Snapdragon XR2 Gen 2" },
                          { label: "Storage", value: "128GB / 256GB" },
                          { label: "Refresh Rate", value: "Up to 120Hz" },
                          { label: "Tracking", value: "6DOF Inside-out" },
                          { label: "Battery", value: "~2.5 hours active" },
                        ].map((spec) => (
                          <div key={spec.label} className="bg-muted/50 rounded-lg p-3">
                            <span className="text-xs text-muted-foreground block">{spec.label}</span>
                            <span className="text-sm font-medium text-foreground">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-2xl p-4">
                  <img
                    src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500&h=400&fit=crop"
                    alt="VR Headset"
                    className="rounded-xl w-full shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Applications */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Educational Applications</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                VR transforms abstract concepts into tangible experiences, making learning more 
                engaging and effective.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: Globe,
                  title: "Virtual Field Trips",
                  description: "Visit the Great Wall of China, explore the Amazon rainforest, or walk on Mars—all without leaving the classroom.",
                  examples: ["Google Earth VR", "National Geographic Explore VR", "Mars 2030"]
                },
                {
                  icon: GraduationCap,
                  title: "Science & Anatomy",
                  description: "Explore the human body in 3D, conduct virtual chemistry experiments, or study molecular structures up close.",
                  examples: ["Human Anatomy VR", "MEL Chemistry VR", "Nanome"]
                },
                {
                  icon: Monitor,
                  title: "3D Design & Creation",
                  description: "Create 3D art, design architectural spaces, or build virtual prototypes using intuitive VR tools.",
                  examples: ["Tilt Brush", "Gravity Sketch", "ShapesXR"]
                },
                {
                  icon: Sparkles,
                  title: "History & Culture",
                  description: "Walk through ancient civilizations, experience historical events, and explore world heritage sites.",
                  examples: ["Traveling While Black", "Anne Frank House VR", "Versailles VR"]
                },
                {
                  icon: Gamepad2,
                  title: "STEM Simulations",
                  description: "Conduct physics experiments, program robots in virtual environments, and explore engineering concepts.",
                  examples: ["Universe Sandbox", "VR Robotics Simulator", "Job Simulator"]
                },
                {
                  icon: Glasses,
                  title: "Mixed Reality",
                  description: "Blend virtual content with the real world using passthrough mode for unique learning experiences.",
                  examples: ["First Encounters", "PianoVision", "Spatial Computing Apps"]
                },
              ].map((app, index) => (
                <div
                  key={app.title}
                  className="bg-card rounded-xl p-6 shadow-card animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                    <app.icon className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{app.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{app.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {app.examples.map((example) => (
                      <span key={example} className="text-xs px-2 py-1 bg-purple-500/10 text-purple-600 rounded">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VR Lab Access */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Using the VR Lab</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card rounded-2xl p-6 shadow-card">
                  <h3 className="text-xl font-semibold text-foreground mb-4">For Educators</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      Schedule VR sessions for your class at our facility
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      Borrow headsets for classroom use (training required)
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      Attend VR integration workshops
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      Access curated educational app recommendations
                    </li>
                  </ul>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-card">
                  <h3 className="text-xl font-semibold text-foreground mb-4">For Students</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      Participate in VR clubs and after-school programs
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      Create VR content for science fair projects
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      Explore career paths in VR/AR development
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      Join VR game design workshops
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-purple-500/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Enter Virtual Reality?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Contact us to schedule a VR demonstration for your class or learn about 
              our equipment lending program.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="/#contact">Schedule a Demo</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VirtualReality;
