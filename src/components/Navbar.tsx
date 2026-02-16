import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "Avantages", href: "#avantages" },
  { label: "Processus", href: "#processus" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        <a href="#hero" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl gradient-warm flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-lg">FT</span>
          </div>
          <span className="font-display font-bold text-lg sm:text-xl text-foreground">
            Food Truck<span className="text-gradient"> Solution</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/32470123456"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl gradient-warm text-primary-foreground font-semibold text-sm hover-glow transition-all duration-300 hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden glass border-t border-border animate-fade-up">
          <ul className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-lg text-foreground font-medium hover:bg-secondary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="https://wa.me/32470123456"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl gradient-warm text-primary-foreground font-semibold"
              >
                <Phone className="w-4 h-4" />
                WhatsApp 24/7
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
