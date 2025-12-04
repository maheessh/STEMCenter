import { ArrowRight, Users, Award, FlaskConical, Anchor, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  {
    title: "Staff",
    icon: Users,
    color: "bg-blue-500",
    href: "/staff",
  },
  {
    title: "Advisory Committee",
    icon: Award,
    color: "bg-emerald-500",
    href: "/advisory-committee",
  },
  {
    title: "Region VIII Science Fair",
    icon: FlaskConical,
    color: "bg-amber-500",
    href: "/science-fair",
  },
  {
    title: "SeaPerch",
    icon: Anchor,
    color: "bg-cyan-500",
    href: "/seaperch",
  },
  {
    title: "STEM Scholars",
    icon: GraduationCap,
    color: "bg-rose-500",
    href: "/stem-scholars",
  },
];

const ExploreSection = () => {
  return (
    <section id="explore" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our programs and initiatives across the Northshore.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {programs.map((program, index) => (
            <Link
              key={program.title}
              to={program.href}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 ${program.color} rounded-lg flex items-center justify-center mb-4`}>
                <program.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {program.title}
              </h3>
              <div className="flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
