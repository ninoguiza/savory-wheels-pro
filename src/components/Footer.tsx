import { Truck, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-warm flex items-center justify-center">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-lg">Food Truck Solution</span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              Fabricant et importateur de remorques alimentaires sur mesure pour l'Europe et l'Afrique du Nord.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><a href="#hero" className="hover:text-background transition-colors">Accueil</a></li>
              <li><a href="#avantages" className="hover:text-background transition-colors">Avantages</a></li>
              <li><a href="#processus" className="hover:text-background transition-colors">Processus</a></li>
              <li><a href="#temoignages" className="hover:text-background transition-colors">Témoignages</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li>Remorques sur mesure</li>
              <li>Homologation CE</li>
              <li>Import Maghreb</li>
              <li>Formation & SAV</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Suivez-nous</h4>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors duration-200"
                  aria-label="Réseau social"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center text-sm text-background/40">
          <p>© {new Date().getFullYear()} Food Truck Solution. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
