import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Box, Layers, Settings, BookOpen, Lightbulb, CheckCircle } from "lucide-react";

const Print3D = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-blue-500/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Box className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                3D Printing Lab
              </h1>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Transform your digital designs into physical objects with our MakerBot Sketch 
                3D printers. Perfect for prototyping, STEM projects, and bringing creative 
                ideas to life.
              </p>
            </div>
          </div>
        </section>

        {/* MakerBot Sketch */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-2xl p-4">
                  <img
                    src="https://images.unsplash.com/photo-1631972079928-44f5ca5f4d52?w=500&h=400&fit=crop"
                    alt="MakerBot Sketch 3D Printer"
                    className="rounded-xl w-full shadow-lg"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">MakerBot Sketch</h2>
                  <p className="text-muted-foreground mb-6">
                    The MakerBot Sketch is designed specifically for education. With its enclosed 
                    build chamber, HEPA filtration, and intuitive interface, it provides a safe and 
                    reliable 3D printing experience for students of all ages. The cloud-connected 
                    platform allows teachers to manage prints and curriculum from anywhere.
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Key Specifications</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { label: "Build Volume", value: "150 × 150 × 150 mm" },
                          { label: "Layer Resolution", value: "100-400 microns" },
                          { label: "Filament", value: "MakerBot PLA" },
                          { label: "Connectivity", value: "Wi-Fi, USB, Cloud" },
                          { label: "Enclosure", value: "Fully Enclosed" },
                          { label: "Filtration", value: "HEPA + Carbon" },
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
              </div>
            </div>
          </div>
        </section>

        {/* Why 3D Printing */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Why 3D Printing in Education?</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: Lightbulb,
                  title: "Design Thinking",
                  description: "Students learn to iterate on designs, fail fast, and improve solutions."
                },
                {
                  icon: Layers,
                  title: "Tangible Learning",
                  description: "Abstract concepts become physical objects students can hold and examine."
                },
                {
                  icon: Settings,
                  title: "Technical Skills",
                  description: "Exposure to CAD software, slicing programs, and manufacturing processes."
                },
                {
                  icon: BookOpen,
                  title: "Cross-Curricular",
                  description: "Applications in science, math, art, engineering, and more."
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="bg-card rounded-xl p-6 shadow-card animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Ideas */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Project Ideas</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    category: "Science",
                    projects: ["Molecular models", "Cell organelle replicas", "Topographic maps", "Fossil reproductions"]
                  },
                  {
                    category: "Engineering",
                    projects: ["Bridge stress testing", "Gear mechanisms", "Robot parts", "Prosthetic prototypes"]
                  },
                  {
                    category: "Math",
                    projects: ["Geometric solids", "Tessellation tiles", "Fractals", "Graph visualizations"]
                  },
                  {
                    category: "Art & Design",
                    projects: ["Sculptures", "Jewelry", "Architectural models", "Custom chess pieces"]
                  },
                ].map((cat) => (
                  <div key={cat.category} className="bg-card rounded-xl p-6 shadow-card">
                    <h3 className="text-lg font-semibold text-foreground mb-4">{cat.category}</h3>
                    <ul className="space-y-2">
                      {cat.projects.map((project) => (
                        <li key={project} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Getting Started</h2>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Learn CAD Basics",
                    description: "Start with free tools like TinkerCAD or Fusion 360 to create 3D models. We offer workshops for beginners."
                  },
                  {
                    step: "2",
                    title: "Design Your Model",
                    description: "Create or download a 3D model file (.STL format). Think about size, complexity, and print time."
                  },
                  {
                    step: "3",
                    title: "Submit for Printing",
                    description: "Upload your file through our request system. We'll review it and provide feedback if needed."
                  },
                  {
                    step: "4",
                    title: "Pick Up Your Print",
                    description: "Once printed, pick up your creation at the STEM Center. Standard prints take 1-3 days."
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-500/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Print?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Contact us to schedule a 3D printing workshop or submit a print request.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="/#contact">Get Started</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Print3D;
