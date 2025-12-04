const Footer = () => {
  return (
    <footer className="bg-stem-navy py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">S</span>
            </div>
            <span className="font-semibold text-white">
              Southeastern Northshore STEM Center
            </span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#about" className="text-white/70 hover:text-white transition-colors text-sm">
              About
            </a>
            <a href="#explore" className="text-white/70 hover:text-white transition-colors text-sm">
              Programs
            </a>
            <a href="#events" className="text-white/70 hover:text-white transition-colors text-sm">
              Events
            </a>
            <a href="#contact" className="text-white/70 hover:text-white transition-colors text-sm">
              Contact
            </a>
          </div>
          
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} LaSTEM Region 9
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
