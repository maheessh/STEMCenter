import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Cpu, Zap, Wifi, Code, CircuitBoard, Server } from "lucide-react";

const hardwareItems = [
  {
    name: "Arduino",
    description: "Open-source electronics platform based on easy-to-use hardware and software. Perfect for beginners learning electronics and programming.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    features: [
      "ATmega328P microcontroller",
      "14 digital I/O pins",
      "6 analog inputs",
      "USB connection for programming",
      "Open-source IDE with extensive libraries"
    ],
    uses: [
      "Interactive art projects",
      "Sensor-based experiments",
      "Home automation prototypes",
      "Robotics foundations",
      "Data logging systems"
    ],
    color: "teal"
  },
  {
    name: "Raspberry Pi",
    description: "A small, affordable computer that teaches programming and enables creation of hardware projects. Runs a full Linux operating system.",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400&h=300&fit=crop",
    features: [
      "Quad-core ARM Cortex-A72 processor",
      "Up to 8GB RAM",
      "40-pin GPIO header",
      "Dual micro-HDMI ports",
      "Gigabit Ethernet & Wi-Fi"
    ],
    uses: [
      "Programming education (Python, Scratch)",
      "Media centers and retro gaming",
      "Web servers and databases",
      "Computer vision projects",
      "IoT gateway devices"
    ],
    color: "rose"
  },
  {
    name: "NVIDIA Jetson Nano",
    description: "A powerful AI computing platform that enables you to run modern AI workloads, machine learning models, and computer vision applications.",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=400&h=300&fit=crop",
    features: [
      "128-core NVIDIA Maxwell GPU",
      "Quad-core ARM A57 CPU",
      "4GB LPDDR4 memory",
      "CUDA support for AI acceleration",
      "Multiple camera inputs (CSI)"
    ],
    uses: [
      "Image classification & object detection",
      "Natural language processing",
      "Autonomous robots & drones",
      "Real-time video analytics",
      "Edge AI applications"
    ],
    color: "emerald"
  }
];

const Hardware = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Cpu className="w-10 h-10 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Hardware Lab
              </h1>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Explore our collection of microcontrollers and single-board computers. 
                From Arduino basics to AI-powered Jetson Nano projects, we have the tools 
                to bring your ideas to life.
              </p>
            </div>
          </div>
        </section>

        {/* Hardware Items */}
        {hardwareItems.map((item, index) => (
          <section key={item.name} className={`py-16 ${index % 2 === 1 ? 'bg-muted/30' : ''}`}>
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <h2 className="text-3xl font-bold text-foreground mb-4">{item.name}</h2>
                    <p className="text-muted-foreground mb-6">{item.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                        <CircuitBoard className="w-5 h-5 text-primary" />
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {item.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Zap className="w-4 h-4 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Code className="w-5 h-5 text-primary" />
                        Common Uses
                      </h3>
                      <ul className="space-y-2">
                        {item.uses.map((use) => (
                          <li key={use} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                            {use}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="rounded-xl w-full shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Borrowing Info */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Equipment Lending Program</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Teachers and registered student groups can borrow hardware kits for classroom 
                projects and competitions. Contact us to learn about our lending program.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="/#contact">Request Equipment</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Hardware;
