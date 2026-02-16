import { MessageSquare, Wrench, RocketIcon } from "lucide-react";

const steps = [
  {
    num: "1",
    icon: MessageSquare,
    title: "Concevoir ensemble",
    desc: "Échangez avec nos experts pour définir votre concept : modèle, équipements, design et conformité.",
  },
  {
    num: "2",
    icon: Wrench,
    title: "Produire sur mesure",
    desc: "Fabrication premium en 4 à 12 semaines avec matériaux pro et documentation d'homologation.",
  },
  {
    num: "3",
    icon: RocketIcon,
    title: "Lancer sereinement",
    desc: "Livraison en Europe ou Afrique du Nord, garantie 2 ans et support technique continu.",
  },
];

const StepsSection = () => {
  return (
    <section id="processus" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Notre Processus
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Votre Projet en{" "}
            <span className="text-gradient">3 Étapes Simples</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          {steps.map((step, i) => (
            <div
              key={step.num}
              className="relative flex flex-col items-center text-center animate-fade-up"
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <div className="relative z-10 mb-6">
                <div className="w-20 h-20 rounded-full gradient-warm flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                  <step.icon className="w-9 h-9 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-display font-bold">
                  {step.num}
                </div>
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
