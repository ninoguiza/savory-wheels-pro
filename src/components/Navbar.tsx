import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, Phone, MessageCircle, Home, ShoppingBag, Users, FileText } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Accueil", href: "/", icon: Home },
  { label: "Catalogue", href: "/catalogue", icon: ShoppingBag },
  { label: "À propos", href: "/a-propos", icon: Users },
  { label: "Devis", href: "/#devis", icon: FileText },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setSheetOpen(false);
    if (href.startsWith("/#")) {
      const hash = href.substring(1);
      if (location.pathname !== "/") {
        navigate("/" + hash);
      } else {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href.startsWith("/")) {
      navigate(href);
    } else if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/" + href);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    if (href.startsWith("/#")) return false;
    return location.pathname === href;
  };

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
        <button onClick={() => handleNavClick("/")} className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl gradient-warm flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-lg">FT</span>
          </div>
          <span className="font-display font-bold text-lg sm:text-xl text-foreground">
            Food Truck<span className="text-gradient"> Afrique</span>
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/32484081551"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl gradient-warm text-primary-foreground font-semibold text-sm hover-glow transition-all duration-300 hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            WhatsApp
          </a>
          <a
            href="https://t.me/+32484081551"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[hsl(200,80%,50%)] text-primary-foreground font-semibold text-sm hover:bg-[hsl(200,80%,45%)] transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
            Telegram
          </a>
        </div>

        {/* Mobile Sheet */}
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <button
              className="lg:hidden p-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
              aria-label="Ouvrir le menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] flex flex-col">
            <SheetHeader className="pb-6 border-b border-border">
              <SheetTitle className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg gradient-warm flex items-center justify-center">
                  <span className="text-primary-foreground font-display font-bold text-sm">FT</span>
                </div>
                <span className="font-display font-bold text-foreground">
                  Food Truck<span className="text-gradient"> Afrique</span>
                </span>
              </SheetTitle>
            </SheetHeader>

            <nav className="flex-1 py-6">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.href}>
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-left font-medium transition-all duration-200 ${
                          isActive(link.href)
                            ? "text-primary bg-primary/10"
                            : "text-foreground hover:bg-secondary"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        {link.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-border">
              <a
                href="https://wa.me/32484081551"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl gradient-warm text-primary-foreground font-semibold"
              >
                <Phone className="w-4 h-4" />
                WhatsApp 24/7
              </a>
              <a
                href="https://t.me/+32484081551"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[hsl(200,80%,50%)] text-primary-foreground font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                Telegram
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navbar;