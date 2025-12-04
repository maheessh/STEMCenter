import ntccLogo from "@/assets/logos/ntcc-logo.png";
import lastemLogo from "@/assets/logos/lastem-logo.png";

const LogoBanner = () => {
  const logos = [
    { src: ntccLogo, alt: "Northshore Technical Community College" },
    { src: lastemLogo, alt: "LaSTEM" },
    { src: ntccLogo, alt: "NTCC" },
    { src: lastemLogo, alt: "LaSTEM Regions" },
  ];

  return (
    <section className="border-y border-border bg-muted/30 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-10 md:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoBanner;
