import { Target, Sparkles, Rocket } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Meeting Standards, Having Fun",
    description: "Engaging, standards-aligned activities that meet all learners where they are.",
  },
  {
    icon: Sparkles,
    title: "Excite, Engage and Inspire",
    description: "Hands-on, playful learning that turns curiosity into discovery.",
  },
  {
    icon: Rocket,
    title: "Everything you need to succeed",
    description: "Scaffolding, PD, and a community to support teachers and students.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center p-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-16 h-16 bg-stem-teal-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
