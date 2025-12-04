import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Anchor, Users, Trophy, Wrench, Calendar, MapPin } from "lucide-react";

const SeaPerch = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-cyan-500/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Anchor className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                SeaPerch Program
              </h1>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                An innovative underwater robotics program that equips students with the skills 
                to build Remotely Operated Vehicles (ROVs) while learning about science, technology, 
                engineering, and mathematics.
              </p>
              <Button variant="hero" size="lg">
                Register Your Team
              </Button>
            </div>
          </div>
        </section>

        {/* What is SeaPerch */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">What is SeaPerch?</h2>
                  <p className="text-muted-foreground mb-4">
                    SeaPerch is a national program created by the Office of Naval Research (ONR) 
                    that teaches students how to build an underwater Remotely Operated Vehicle (ROV) 
                    using low-cost, easy-to-assemble materials.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Students learn engineering concepts, problem-solving skills, and teamwork while 
                    constructing their ROVs from PVC pipe, motors, and simple electronics. The program 
                    culminates in regional and national competitions where teams demonstrate their 
                    ROVs' capabilities.
                  </p>
                  <p className="text-muted-foreground">
                    The Northshore STEM Center serves as a regional hub for SeaPerch, providing 
                    training, materials, and competition opportunities for schools across our 
                    seven-parish region.
                  </p>
                </div>
                <div className="bg-cyan-500/10 rounded-2xl p-8">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=400&fit=crop"
                    alt="Students building ROV"
                    className="rounded-xl w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Benefits */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Program Benefits</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: Wrench,
                  title: "Hands-On Learning",
                  description: "Students physically build their own ROV, gaining practical engineering experience."
                },
                {
                  icon: Users,
                  title: "Teamwork Skills",
                  description: "Collaborative projects teach communication and project management."
                },
                {
                  icon: Trophy,
                  title: "Competition Ready",
                  description: "Compete at regional and national levels against teams across the country."
                },
                {
                  icon: Calendar,
                  title: "Year-Round Support",
                  description: "Access to training, materials, and mentorship throughout the school year."
                },
              ].map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="bg-card rounded-xl p-6 shadow-card animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-cyan-500" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">How to Get Started</h2>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Attend Coach Training",
                    description: "Teachers and mentors attend our New Coaches Training workshop to learn how to lead a SeaPerch team."
                  },
                  {
                    step: "2",
                    title: "Register Your Team",
                    description: "Register your school or organization's team through the official SeaPerch website."
                  },
                  {
                    step: "3",
                    title: "Build Your ROV",
                    description: "Use the provided curriculum and materials to guide students through the building process."
                  },
                  {
                    step: "4",
                    title: "Practice & Compete",
                    description: "Test your ROV's capabilities and compete at regional competitions hosted at Southeastern."
                  },
                ].map((step) => (
                  <div key={step.step} className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-cyan-500/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Dive In?</h2>
            <p className="text-muted-foreground mb-6">
              Contact us to learn more about starting a SeaPerch team at your school.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="/#contact">Contact Us</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SeaPerch;
