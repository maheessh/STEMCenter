import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, Linkedin } from "lucide-react";

const staffMembers = [
  {
    name: "Dr. Sarah Mitchell",
    title: "STEM Center Director",
    email: "smitchell@southeastern.edu",
    phone: "(985) 549-2100",
    bio: "Dr. Mitchell has over 15 years of experience in STEM education and research. She leads the center's strategic initiatives and partnerships with regional schools.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    title: "Robotics Program Coordinator",
    email: "mchen@southeastern.edu",
    phone: "(985) 549-2101",
    bio: "Michael oversees all robotics programs including VEX competitions and SeaPerch. He brings industry experience from 10 years in automation engineering.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Dr. Amanda Rodriguez",
    title: "Science Fair Coordinator",
    email: "arodriguez@southeastern.edu",
    phone: "(985) 549-2102",
    bio: "Dr. Rodriguez coordinates the Region VIII Science Fair and mentors students through the scientific research process from hypothesis to presentation.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "James Thompson",
    title: "Technology & Innovation Specialist",
    email: "jthompson@southeastern.edu",
    phone: "(985) 549-2103",
    bio: "James manages the center's 3D printing lab, VR equipment, and hardware resources. He develops curriculum for technology integration in classrooms.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
  },
];

const Staff = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our Team
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Meet the dedicated professionals who drive STEM education across the Northshore region.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {staffMembers.map((member, index) => (
                <div
                  key={member.name}
                  className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex gap-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-xl object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium mb-3">{member.title}</p>
                      <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                          {member.email}
                        </a>
                        <a
                          href={`tel:${member.phone}`}
                          className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          {member.phone}
                        </a>
                      </div>
                    </div>
                  </div>
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

export default Staff;
