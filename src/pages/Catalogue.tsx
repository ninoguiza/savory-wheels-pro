import { ArrowRight, ChefHat, Flame, Coffee, IceCream, Sandwich, CakeSlice } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

import snackImg from "@/assets/catalogue/snack-fastfood.jpg";
import pizzaImg from "@/assets/catalogue/pizza.jpg";
import crepesImg from "@/assets/catalogue/crepes-gaufres.jpg";
import tacosImg from "@/assets/catalogue/tacos-kebab.jpg";
import cafeImg from "@/assets/catalogue/cafe-boissons.jpg";
import patisserieImg from "@/assets/catalogue/patisserie.jpg";

const catalogueItems = [
  {
    title: "Remorque Snack / Fast-Food",
    description: "La solution polyvalente par excellence. Idéale pour burgers, frites, sandwiches et bien plus. Équipée de friteuses, plancha et hotte professionnelle.",
    image: snackImg,
    icon: Sandwich,
    features: ["Friteuse professionnelle", "Plancha inox", "Hotte aspirante", "Comptoir de service"],
    budget: "À partir de 8 000€",
  },
  {
    title: "Remorque Pizza",
    description: "Votre pizzeria mobile avec four à bois ou à gaz intégré. Plan de travail spacieux pour la préparation et vitrine réfrigérée pour les ingrédients.",
    image: pizzaImg,
    icon: Flame,
    features: ["Four à bois / gaz", "Plan de travail marbre", "Vitrine réfrigérée", "Stockage farine"],
    budget: "À partir de 12 000€",
  },
  {
    title: "Remorque Crêpes / Gaufres",
    description: "Conception optimisée pour la préparation de crêpes et gaufres. Plaques professionnelles, réfrigération et espace de présentation attractif.",
    image: crepesImg,
    icon: IceCream,
    features: ["Plaques à crêpes pro", "Gaufrier double", "Vitrine garnitures", "Éclairage ambiance"],
    budget: "À partir de 7 000€",
  },
  {
    title: "Remorque Tacos / Kebab",
    description: "Tout l'équipement nécessaire pour tacos, kebabs et grillades. Broche verticale, grill et espace de préparation optimisé.",
    image: tacosImg,
    icon: ChefHat,
    features: ["Broche à kebab", "Grill professionnel", "Bain-marie", "Réfrigération intégrée"],
    budget: "À partir de 10 000€",
  },
  {
    title: "Remorque Café / Boissons",
    description: "Votre café mobile élégant. Machine expresso professionnelle, broyeur, réfrigérateur à boissons et comptoir design pour accueillir vos clients.",
    image: cafeImg,
    icon: Coffee,
    features: ["Machine expresso pro", "Broyeur à grains", "Réfrigérateur vitré", "Comptoir bar"],
    budget: "À partir de 9 000€",
  },
  {
    title: "Remorque Pâtisserie",
    description: "Vitrine réfrigérée élégante pour présenter vos créations. Espace de finition, stockage adapté et éclairage valorisant vos produits.",
    image: patisserieImg,
    icon: CakeSlice,
    features: ["Vitrine réfrigérée LED", "Plan de finition", "Stockage isotherme", "Éclairage premium"],
    budget: "À partir de 10 000€",
  },
];

const Catalogue = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 gradient-hero pattern-maghreb">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4 animate-fade-up">
            Nos Modèles
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6 animate-fade-up delay-100">
            Catalogue <span className="text-gradient">Food Trucks</span>
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto animate-fade-up delay-200">
            Découvrez nos modèles de remorques professionnelles, entièrement personnalisables selon votre activité et vos besoins.
          </p>
        </div>
      </section>

      {/* Catalogue Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catalogueItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group glass rounded-3xl overflow-hidden hover-lift animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <div className="w-10 h-10 rounded-xl gradient-warm flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <span className="text-primary-foreground font-display font-bold text-sm bg-black/30 backdrop-blur-sm px-3 py-1 rounded-lg">
                        {item.budget}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <ul className="grid grid-cols-2 gap-2 mb-6">
                      {item.features.map((f) => (
                        <li key={f} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={`/#devis`}
                      className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300"
                    >
                      Demander un devis <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Vous ne trouvez pas votre modèle ?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Nous concevons aussi des remorques 100% sur-mesure. Parlez-nous de votre projet !
          </p>
          <a
            href="/#devis"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl gradient-warm text-primary-foreground font-display font-bold text-lg hover-glow hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Demander un devis personnalisé <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Catalogue;
