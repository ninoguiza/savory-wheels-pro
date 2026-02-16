import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const navLinks = [
{ label: "Accueil", href: "#hero" },
{ label: "Catalogue", href: "/catalogue" },
{ label: "À propos", href: "/a-propos" },
{ label: "Avantages", href: "#avantages" },
{ label: "Processus", href: "#processus" },
{ label: "Témoignages", href: "#temoignages" },
{ label: "Devis", href: "#devis" },
{ label: "Contact", href: "#contact" }];


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/")) {
      navigate(href);
    } else if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/" + href);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "glass shadow-lg py-2" : "bg-transparent py-4"}`
      }>

      <nav className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        <a href="#hero" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl gradient-warm flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-lg">FT</span>
          </div>
          <span className="font-display font-bold text-lg sm:text-xl text-foreground">
            Food Truck<span className="text-gradient"> Afrique</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
          <li key={link.href}>
              <button
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200">
                {link.label}
              </button>
            </li>
          )}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/32484081551"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl gradient-warm text-primary-foreground font-semibold text-sm hover-glow transition-all duration-300 hover:scale-105">
            <Phone className="w-4 h-4" />
            WhatsApp
          </a>
          <a
            href="https://t.me/+32484081551"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[hsl(200,80%,50%)] text-primary-foreground font-semibold text-sm hover:bg-[hsl(200,80%,45%)] transition-all duration-300 hover:scale-105">
            <MessageCircle className="w-4 h-4" />
            Telegram
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
          aria-label="Toggle menu">

          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen &&
      <div className="lg:hidden glass border-t border-border animate-fade-up">
          <ul className="flex flex-col p-4 gap-1">
            {navLinks.map((link) =>
          <li key={link.href}>
                <button
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left px-4 py-3 rounded-lg text-foreground font-medium hover:bg-secondary transition-colors">
                  {link.label}
                </button>
              </li>
          )}
            <li className="mt-2 flex flex-col gap-2">
              <a
              href="https://wa.me/32484081551"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl gradient-warm text-primary-foreground font-semibold">
                <Phone className="w-4 h-4" />
                WhatsApp 24/7
              </a>
              <a
              href="https://t.me/+32484081551"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[hsl(200,80%,50%)] text-primary-foreground font-semibold">
                <MessageCircle className="w-4 h-4" />
                Telegram
              </a>
            </li>
          </ul>
        </div>
      }
    </header>);

};

export default Navbar;