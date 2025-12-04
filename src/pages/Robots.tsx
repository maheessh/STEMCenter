import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Bot, Trophy, Users, Wrench, Calendar, Target } from "lucide-react";

const roboticsPrograms = [
  {
    name: "VEX Robotics",
    description: "The world's largest and fastest-growing robotics competition. Students design, build, and program robots to compete in game-based engineering challenges.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=350&fit=crop",
    levels: ["VEX IQ (Elementary & Middle School)", "VEX V5 (Middle & High School)", "VEX U (University)"],
    skills: ["Mechanical design", "Programming (VEXcode)", "Strategic thinking", "Teamwork"],
    color: "red"
  },
  {
    name: "FIRST Robotics",
    description: "Inspiring young people to be science and technology leaders through mentor-based programs that build STEM skills and teach life skills.",
    image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=500&h=350&fit=crop",
    levels: ["FIRST LEGO League (Ages 4-16)", "FIRST Tech Challenge (Grades 7-12)", "FIRST Robotics Competition (Grades 9-12)"],
    skills: ["Engineering design", "Programming", "Project management", "Fundraising & marketing"],
    color: "blue"
  },
  {
    name: "SeaPerch",
    description: "An underwater robotics program where students build ROVs (Remotely Operated Vehicles) to complete underwater challenges.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=350&fit=crop",
    levels: ["Middle School Division", "High School Division"],
    skills: ["Marine engineering", "Electrical systems", "Problem-solving", "Technical writing"],
    color: "cyan"
  }
];

const Robots = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-stem-accent/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-stem-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Bot className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Robotics Programs
              </h1>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                From underwater ROVs to competition robots, our robotics programs teach 
                engineering principles, programming, and teamwork while inspiring the next 
                generation of innovators.
              </p>
            </div>
          </div>
        </section>

        {/* Why Robotics */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Robotics?</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Wrench, title: "Hands-On Learning", description: "Build real machines that move, sense, and respond" },
                { icon: Target, title: "Problem Solving", description: "Tackle engineering challenges with creative solutions" },
                { icon: Users, title: "Teamwork", description: "Collaborate with peers and mentors on complex projects" },
                { icon: Trophy, title: "Competition", description: "Test your skills against teams from around the world" },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-16 h-16 bg-stem-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-stem-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs */}
        {roboticsPrograms.map((program, index) => (
          <section key={program.name} className={`py-16 ${index % 2 === 0 ? 'bg-muted/30' : ''}`}>
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className={`grid md:grid-cols-2 gap-12 items-center`}>
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <h2 className="text-3xl font-bold text-foreground mb-4">{program.name}</h2>
                    <p className="text-muted-foreground mb-6">{program.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">Competition Levels</h3>
                      <ul className="space-y-2">
                        {program.levels.map((level) => (
                          <li key={level} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-stem-accent rounded-full flex-shrink-0" />
                            {level}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Skills Developed</h3>
                      <div className="flex flex-wrap gap-2">
                        {program.skills.map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-stem-accent/10 text-stem-accent rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <div className="bg-gradient-to-br from-stem-accent/20 to-stem-accent/5 rounded-2xl p-4">
                      <img
                        src={program.image}
                        alt={program.name}
                        className="rounded-xl w-full shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Start a Team */}
        <section className="py-16 bg-stem-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Start a Robotics Team</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                The STEM Center provides training, equipment loans, and ongoing support 
                for schools and community organizations starting robotics programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <a href="/#contact">Contact Us</a>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <a href="/#events">View Upcoming Events</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Robots;
