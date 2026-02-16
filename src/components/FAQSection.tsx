import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quels sont les prix de vos remorques alimentaires ?",
    answer:
      "Nos remorques démarrent à partir de 5 000€ HTVA pour les modèles standards. Le prix varie selon les dimensions, les équipements choisis et le niveau de personnalisation. Contactez-nous pour un devis gratuit adapté à votre projet.",
  },
  {
    question: "Quels types de food trucks proposez-vous ?",
    answer:
      "Nous proposons des remorques snack/fast-food, pizza, crêpes/gaufres, tacos/kebab, café/boissons, pâtisserie et bien plus. Chaque remorque est entièrement personnalisable selon votre concept et vos besoins.",
  },
  {
    question: "Vos remorques sont-elles conformes aux normes européennes ?",
    answer:
      "Oui, toutes nos remorques sont conformes aux normes CE et VASP. Nous fournissons l'ensemble de la documentation nécessaire pour l'homologation et les contrôles sanitaires en Europe et au Maghreb.",
  },
  {
    question: "Quelle est la qualité des matériaux utilisés ?",
    answer:
      "Nous utilisons exclusivement de l'acier inoxydable de qualité alimentaire, des châssis renforcés et des équipements professionnels certifiés. Chaque remorque est conçue pour durer et résister à une utilisation intensive quotidienne.",
  },
  {
    question: "Quel est le délai de fabrication et de livraison ?",
    answer:
      "Le délai de fabrication est de 4 à 12 semaines selon la complexité du projet. La livraison est assurée dans toute l'Europe et l'Afrique du Nord avec un suivi complet de l'expédition.",
  },
  {
    question: "Proposez-vous une garantie sur vos remorques ?",
    answer:
      "Oui, toutes nos remorques bénéficient d'une garantie constructeur de 2 ans couvrant la structure et les équipements. Notre service après-vente est disponible 7j/7 via WhatsApp et Telegram.",
  },
  {
    question: "Puis-je personnaliser entièrement ma remorque ?",
    answer:
      "Absolument ! Dimensions, agencement intérieur, équipements de cuisine, design extérieur (covering, habillage, enseigne) — tout est personnalisable. Nous travaillons avec vous pour créer la remorque idéale.",
  },
  {
    question: "Comment se déroule le processus de commande ?",
    answer:
      "C'est simple : 1) Échangez avec nos experts pour définir votre projet, 2) Recevez un devis détaillé sous 24h, 3) Validez et suivez la fabrication, 4) Réceptionnez votre remorque livrée et prête à l'emploi.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Questions{" "}
            <span className="text-gradient">Fréquentes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Retrouvez les réponses aux questions les plus posées par nos clients.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass rounded-2xl px-6 border-none"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5 text-base sm:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
