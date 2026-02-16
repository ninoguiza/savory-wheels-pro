import { ArrowRight, CheckCircle, Truck } from "lucide-react";
import heroImage from "@/assets/hero-food-truck.jpg";

const badges = [
  "Conformité CE garantie",
  "Personnalisation complète",
  "Livraison Europe & Maghreb",
];

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Food truck professionnel sur mesure avec cuisine équipée"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 gradient-hero opacity-80" />
        <div className="absolute inset-0 pattern-maghreb opacity-30" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground/90 text-sm font-medium mb-6 animate-fade-up backdrop-blur-sm">
            <Truck className="w-4 h-4" />
            Fabricant & Importateur depuis 2018
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-up delay-100">
            Transformez Votre Rêve en{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              Business Rentable
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/80 max-w-2xl mb-4 animate-fade-up delay-200 leading-relaxed">
            Remorques alimentaires équipées, conformes et personnalisées pour
            l'Europe et l'Afrique du Nord.
          </p>

          <p className="text-2xl sm:text-3xl font-display font-bold text-amber-400 mb-8 animate-fade-up delay-300">
            À partir de 5 000€ HTVA
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-up delay-400">
            <a
              href="#devis"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl gradient-warm text-primary-foreground font-display font-bold text-lg hover-glow hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Demander un devis gratuit
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#avantages"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-all duration-300"
            >
              En savoir plus
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 animate-fade-up delay-500">
            {badges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 text-sm text-primary-foreground/80"
              >
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
