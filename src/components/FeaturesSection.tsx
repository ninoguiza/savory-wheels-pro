import {
  Star,
  ShieldCheck,
  Shield,
  Globe,
  Palette,
  Phone,
} from "lucide-react";

const features = [
  {
    icon: Star,
    title: "Qualité Premium",
    desc: "Matériaux durables et finitions professionnelles pour une longévité maximale.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: ShieldCheck,
    title: "Conformité Garantie",
    desc: "Normes CE, VASP et sanitaires respectées. Homologation assurée.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Shield,
    title: "Garantie Constructeur",
    desc: "Garantie complète sur structure et équipements + SAV réactif.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Globe,
    title: "Import Légal",
    desc: "Support complet pour importation et documentation (Europe & Maghreb).",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Palette,
    title: "Personnalisation Totale",
    desc: "Design, dimensions, équipements : chaque remorque est unique.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Phone,
    title: "Support Local",
    desc: "Accompagnement en français, arabe et anglais. WhatsApp 24/7.",
    color: "from-orange-500 to-red-500",
  },
];

const FeaturesSection = () => {
  return (
    <section id="avantages" className="py-20 lg:py-28 bg-background pattern-maghreb relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Nos Avantages
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Pourquoi Choisir{" "}
            <span className="text-gradient">Food Truck Solution</span> ?
          </h2>
          <p className="text-muted-foreground text-lg">
            Un accompagnement complet du concept à la livraison
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <article
              key={f.title}
              className="group relative bg-card rounded-2xl p-8 border border-border hover-lift hover-glow cursor-default animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <f.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                {f.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
