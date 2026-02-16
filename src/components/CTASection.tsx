import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import interiorImage from "@/assets/food-truck-interior.jpg";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-95" />
      <div className="absolute inset-0 pattern-maghreb opacity-20" />

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground/80 text-sm font-semibold mb-6">
              Démarrez Maintenant
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6 leading-tight">
              Prêt à Lancer Votre{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                Food Truck
              </span>{" "}
              ?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 leading-relaxed max-w-lg">
              Contactez-nous pour un devis gratuit et personnalisé. Notre équipe
              vous accompagne dans chaque étape de votre projet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="https://wa.me/32470123456"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl gradient-warm text-primary-foreground font-display font-bold text-lg hover-glow hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Devis Gratuit
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Phone className="w-5 h-5 text-amber-400" />
                <span>+32 470 123 456</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Mail className="w-5 h-5 text-amber-400" />
                <span>contact@foodtrucksolution.com</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span>Bruxelles, Belgique — Livraison Europe & Maghreb</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={interiorImage}
                alt="Intérieur professionnel d'un food truck équipé en acier inoxydable"
                className="w-full h-80 lg:h-[28rem] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 glass-dark rounded-2xl px-6 py-4 animate-float">
              <p className="text-primary-foreground font-display font-bold text-2xl">200+</p>
              <p className="text-primary-foreground/60 text-sm">Remorques livrées</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
