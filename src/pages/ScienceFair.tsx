import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FlaskConical, Calendar, Award, FileText, Users, MapPin } from "lucide-react";

const ScienceFair = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-amber-500/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FlaskConical className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Region VIII Science Fair
              </h1>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                The premier science competition for students across the Northshore, 
                fostering scientific inquiry and innovation from grades 4-12.
              </p>
              <Button variant="hero" size="lg">
                Register for 2025 Fair
              </Button>
            </div>
          </div>
        </section>

        {/* About the Fair */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-amber-500/10 rounded-2xl p-8">
                  <img
                    src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&h=400&fit=crop"
                    alt="Science Fair Display"
                    className="rounded-xl w-full"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">About the Fair</h2>
                  <p className="text-muted-foreground mb-4">
                    The Region VIII Science Fair is part of Louisiana's statewide science fair 
                    system, serving students in St. Tammany, Tangipahoa, Washington, St. Helena, 
                    Livingston parishes and beyond.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Students develop original research projects following the scientific method, 
                    present their findings to judges, and compete for advancement to the Louisiana 
                    State Science Fair and beyond.
                  </p>
                  <p className="text-muted-foreground">
                    The fair is hosted annually at Southeastern Louisiana University and draws 
                    hundreds of participants from across the region.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Project Categories</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Students may enter projects in any of the following ISEF categories.
              </p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                "Animal Sciences",
                "Behavioral & Social Sciences",
                "Biochemistry",
                "Biomedical & Health Sciences",
                "Cellular & Molecular Biology",
                "Chemistry",
                "Computational Biology",
                "Earth & Environmental Sciences",
                "Embedded Systems",
                "Energy",
                "Engineering Mechanics",
                "Environmental Engineering",
                "Materials Science",
                "Mathematics",
                "Microbiology",
                "Physics & Astronomy",
                "Plant Sciences",
                "Robotics & Intelligent Machines",
                "Systems Software",
                "Translational Medical Science",
              ].map((category) => (
                <div
                  key={category}
                  className="bg-card rounded-lg px-4 py-3 shadow-sm text-center"
                >
                  <span className="text-sm font-medium text-foreground">{category}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">2025 Timeline</h2>
              <div className="space-y-6">
                {[
                  {
                    date: "September 2024",
                    title: "Registration Opens",
                    description: "Students and schools can begin registering for the 2025 fair."
                  },
                  {
                    date: "December 2024",
                    title: "Project Approval Deadline",
                    description: "All project proposals must be submitted for review and approval."
                  },
                  {
                    date: "January 2025",
                    title: "Registration Closes",
                    description: "Final deadline for fair registration and paperwork submission."
                  },
                  {
                    date: "February 2025",
                    title: "Region VIII Science Fair",
                    description: "Competition held at Southeastern Louisiana University."
                  },
                  {
                    date: "March 2025",
                    title: "State Science Fair",
                    description: "Regional winners advance to compete at the state level."
                  },
                ].map((event, index) => (
                  <div key={event.date} className="flex gap-6 items-start">
                    <div className="w-32 flex-shrink-0">
                      <span className="text-sm font-semibold text-amber-500">{event.date}</span>
                    </div>
                    <div className="flex-1 pb-6 border-l-2 border-amber-500/30 pl-6 relative">
                      <div className="absolute left-[-9px] top-0 w-4 h-4 bg-amber-500 rounded-full" />
                      <h3 className="text-lg font-semibold text-foreground mb-1">{event.title}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Resources</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: FileText,
                  title: "Project Guidelines",
                  description: "Download the official rules and guidelines for science fair projects."
                },
                {
                  icon: Users,
                  title: "Mentor Program",
                  description: "Connect with STEM professionals who can guide your research."
                },
                {
                  icon: Award,
                  title: "Award Categories",
                  description: "Learn about the awards and recognition available to participants."
                },
              ].map((resource) => (
                <div
                  key={resource.title}
                  className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4">
                    <resource.icon className="w-6 h-6 text-amber-500" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-amber-500/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Questions About the Science Fair?</h2>
            <p className="text-muted-foreground mb-6">
              Contact our Science Fair Coordinator for assistance.
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

export default ScienceFair;
