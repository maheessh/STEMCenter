import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, GraduationCap, Briefcase } from "lucide-react";

const committeeMembers = [
  {
    name: "Dr. Patricia Williams",
    organization: "Southeastern Louisiana University",
    role: "Committee Chair",
    type: "education",
  },
  {
    name: "Robert Martinez",
    organization: "Northshore Technical Community College",
    role: "Vice Chair",
    type: "education",
  },
  {
    name: "Jennifer Adams",
    organization: "St. Tammany Parish Schools",
    role: "K-12 Representative",
    type: "education",
  },
  {
    name: "David Wilson",
    organization: "Tangipahoa Parish Schools",
    role: "K-12 Representative",
    type: "education",
  },
  {
    name: "Lisa Chang",
    organization: "Chevron",
    role: "Industry Partner",
    type: "industry",
  },
  {
    name: "Mark Thompson",
    organization: "NASA Stennis Space Center",
    role: "Industry Partner",
    type: "industry",
  },
  {
    name: "Sarah Brown",
    organization: "St. Tammany Economic Development",
    role: "Community Partner",
    type: "community",
  },
  {
    name: "Dr. James Lee",
    organization: "Louisiana STEM Council",
    role: "State Representative",
    type: "community",
  },
];

const AdvisoryCommittee = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case "education":
        return <GraduationCap className="w-5 h-5" />;
      case "industry":
        return <Briefcase className="w-5 h-5" />;
      default:
        return <Building2 className="w-5 h-5" />;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case "education":
        return "bg-blue-500";
      case "industry":
        return "bg-emerald-500";
      default:
        return "bg-amber-500";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Advisory Committee
              </h1>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Our advisory committee brings together leaders from education, industry, and the community 
                to guide the strategic direction of STEM initiatives across the Northshore region.
              </p>
            </div>

            <div className="max-w-4xl mx-auto mb-16">
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground mb-6">
                  The Advisory Committee works to ensure that STEM education in the Northshore region 
                  aligns with workforce needs, promotes equity and access, and prepares students for 
                  success in an increasingly technological world.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-blue-500" />
                    </div>
                    <span className="font-medium text-foreground">Education Partners</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-emerald-500" />
                    </div>
                    <span className="font-medium text-foreground">Industry Partners</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-amber-500" />
                    </div>
                    <span className="font-medium text-foreground">Community Partners</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {committeeMembers.map((member, index) => (
                <div
                  key={member.name}
                  className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className={`w-10 h-10 ${getColor(member.type)} rounded-lg flex items-center justify-center mb-4 text-white`}>
                    {getIcon(member.type)}
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.organization}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AdvisoryCommittee;
