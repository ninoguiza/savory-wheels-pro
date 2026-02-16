import { Heart, Users, Handshake, History, Target, Award, Globe, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import heroImg from "@/assets/catalogue-hero.png";

const valeurs = [
  {
    icon: Heart,
    title: "Passion",
    desc: "Chaque remorque est conçue avec amour du métier et un souci du détail irréprochable.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "Nous visons la qualité premium dans chaque soudure, chaque finition, chaque livraison.",
  },
  {
    icon: Globe,
    title: "Accessibilité",
    desc: "Rendre le food truck accessible à tous les entrepreneurs, en Europe comme en Afrique.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Nous intégrons les dernières tendances pour des remorques modernes et fonctionnelles.",
  },
];

const equipe = [
  {
    name: "Karim B.",
    role: "Fondateur & Directeur",
    desc: "15 ans d'expérience dans l'import-export et la restauration mobile.",
  },
  {
    name: "Sophie L.",
    role: "Responsable Design",
    desc: "Architecte d'intérieur spécialisée dans l'aménagement de food trucks.",
  },
  {
    name: "Mehdi A.",
    role: "Chef de Production",
    desc: "Expert en fabrication métallique et conformité aux normes européennes.",
  },
  {
    name: "Fatima Z.",
    role: "Relation Client",
    desc: "Accompagne chaque client du premier appel jusqu'à la livraison finale.",
  },
];

const partenaires = [
  "Fournisseurs d'équipements professionnels certifiés",
  "Transporteurs internationaux agréés",
  "Bureaux d'homologation CE & VASP",
  "Réseaux de restaurateurs & franchises",
  "Organismes de financement partenaires",
  "Chambres de commerce locales",
];

const APropos = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <img
          src={heroImg}
          alt="Food truck"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4 animate-fade-up">
            À Propos
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-4 animate-fade-up delay-100">
            Notre <span className="text-gradient">Histoire</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto animate-fade-up delay-200">
            Découvrez l'équipe, les valeurs et les partenaires qui font de Food Truck Afrique un leader de la remorque alimentaire.
          </p>
        </div>
      </section>

      {/* Histoire */}
      <section id="histoire" className="py-20 lg:py-28 bg-background pattern-maghreb">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl gradient-warm flex items-center justify-center">
                <History className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
                Notre <span className="text-gradient">Histoire</span>
              </h2>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                Fondée en 2015, <strong className="text-foreground">Food Truck Afrique</strong> est née d'une conviction simple : chaque entrepreneur mérite un outil de travail de qualité professionnelle, accessible et adapté à ses besoins.
              </p>
              <p>
                Notre fondateur, passionné de street food et expert en import-export, a identifié un manque criant sur le marché : des remorques alimentaires fiables, conformes aux normes européennes, et accessibles aux entrepreneurs du Maghreb et d'Afrique subsaharienne.
              </p>
              <p>
                Depuis, nous avons accompagné <strong className="text-foreground">plus de 500 entrepreneurs</strong> dans la concrétisation de leur rêve. De la Belgique au Maroc, de la France à la Tunisie, nos remorques roulent sur les routes de deux continents.
              </p>
              <p>
                Aujourd'hui, nous sommes fiers d'être reconnus comme un acteur majeur dans la fabrication et l'importation de remorques alimentaires sur mesure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section id="valeurs" className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl gradient-warm flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              Nos <span className="text-gradient">Valeurs</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Les piliers qui guident chacune de nos actions
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valeurs.map((v, i) => (
              <article
                key={v.title}
                className="group bg-card rounded-2xl p-8 border border-border hover-lift hover-glow text-center animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl gradient-warm flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <v.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section id="equipe" className="py-20 lg:py-28 bg-background pattern-maghreb">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl gradient-warm flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              Notre <span className="text-gradient">Équipe</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Des experts passionnés à votre service
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipe.map((m, i) => (
              <article
                key={m.name}
                className="group bg-card rounded-2xl p-8 border border-border hover-lift text-center animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-20 h-20 rounded-full gradient-warm flex items-center justify-center mx-auto mb-5 text-white font-display font-bold text-2xl">
                  {m.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="text-lg font-display font-bold text-foreground">{m.name}</h3>
                <p className="text-primary font-semibold text-sm mb-2">{m.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section id="partenaires" className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl gradient-warm flex items-center justify-center">
                <Handshake className="w-6 h-6 text-white" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              Nos <span className="text-gradient">Partenaires</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Un réseau solide pour vous offrir le meilleur
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {partenaires.map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-card rounded-2xl p-6 border border-border hover-lift animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Handshake className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground font-medium text-sm">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default APropos;
