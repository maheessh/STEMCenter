import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Lightbulb, Target, Users, Star } from "lucide-react";

const STEMScholars = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-rose-500/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                STEM Scholars Program
              </h1>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                An enrichment program designed to inspire and prepare high-achieving students 
                for careers in Science, Technology, Engineering, and Mathematics.
              </p>
              <Button variant="hero" size="lg">
                Apply Now
              </Button>
            </div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">Program Overview</h2>
                  <p className="text-muted-foreground mb-4">
                    The STEM Scholars Program identifies and nurtures talented students from across 
                    the Northshore region, providing them with advanced learning opportunities, 
                    mentorship, and hands-on experiences in STEM fields.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Selected scholars participate in workshops, research projects, field trips, 
                    and college preparation activities throughout the academic year. The program 
                    serves students in grades 8-12 who demonstrate exceptional aptitude and 
                    interest in STEM subjects.
                  </p>
                  <p className="text-muted-foreground">
                    Our goal is to build a pipeline of diverse, well-prepared students ready 
                    to pursue STEM degrees and careers that will drive innovation in Louisiana 
                    and beyond.
                  </p>
                </div>
                <div className="bg-rose-500/10 rounded-2xl p-8">
                  <img
                    src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=500&h=400&fit=crop"
                    alt="STEM Scholars in lab"
                    className="rounded-xl w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Components */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Program Components</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: BookOpen,
                  title: "Advanced Workshops",
                  description: "Monthly sessions covering topics from coding to biotechnology, taught by university faculty and industry professionals."
                },
                {
                  icon: Lightbulb,
                  title: "Research Projects",
                  description: "Scholars conduct original research with mentors, developing skills in experimental design and scientific writing."
                },
                {
                  icon: Users,
                  title: "Mentorship",
                  description: "One-on-one pairing with STEM professionals who provide guidance on academics and career paths."
                },
                {
                  icon: Target,
                  title: "College Preparation",
                  description: "SAT/ACT prep, college application workshops, and campus visits to top STEM universities."
                },
                {
                  icon: Star,
                  title: "Competitions",
                  description: "Participation in regional and national STEM competitions including science fairs and olympiads."
                },
                {
                  icon: GraduationCap,
                  title: "Scholarship Support",
                  description: "Assistance identifying and applying for STEM scholarships and summer programs."
                },
              ].map((component, index) => (
                <div
                  key={component.title}
                  className="bg-card rounded-xl p-6 shadow-card animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-rose-500/10 rounded-lg flex items-center justify-center mb-4">
                    <component.icon className="w-6 h-6 text-rose-500" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{component.title}</h3>
                  <p className="text-sm text-muted-foreground">{component.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Eligibility Requirements</h2>
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <ul className="space-y-4">
                  {[
                    "Currently enrolled in grades 8-11 at a school within the Northshore STEM Center region",
                    "Minimum 3.5 GPA with strong performance in math and science courses",
                    "Demonstrated interest in STEM through coursework, extracurriculars, or personal projects",
                    "Recommendation from a math or science teacher",
                    "Commitment to attend monthly workshops and program activities",
                    "Completion of application including personal statement"
                  ].map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Application CTA */}
        <section className="py-16 bg-rose-500/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Become a STEM Scholar?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Applications for the 2025-2026 cohort open in Spring 2025. 
              Contact us to learn more or be notified when applications open.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="/#contact">Get Notified</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default STEMScholars;
