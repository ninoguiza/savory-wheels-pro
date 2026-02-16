import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Karim B.",
    role: "Food Truck Tacos — Bruxelles",
    text: "Excellent service ! Ma remorque est arrivée conforme, bien équipée et en parfait état. L'équipe m'a accompagné de A à Z.",
    rating: 5,
  },
  {
    name: "Fatima Z.",
    role: "Crêperie Mobile — Casablanca",
    text: "Import depuis la Belgique sans aucun souci grâce à leur expertise. Qualité irréprochable et prix imbattable.",
    rating: 5,
  },
  {
    name: "Marc D.",
    role: "Pizza Truck — Lyon",
    text: "J'ai comparé plusieurs fournisseurs. Food Truck Solution offre le meilleur rapport qualité-prix avec un vrai suivi.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="temoignages" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Ce Que Disent <span className="text-gradient">Nos Clients</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative bg-card rounded-3xl p-8 sm:p-12 border border-border shadow-xl">
            <Quote className="absolute top-6 left-6 w-10 h-10 text-primary/15" />

            <div className="flex gap-1 mb-6 justify-center">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <p className="text-lg sm:text-xl text-foreground text-center leading-relaxed mb-8 italic">
              "{t.text}"
            </p>

            <div className="text-center">
              <p className="font-display font-bold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === current ? "bg-primary w-8" : "bg-border"
                    }`}
                    aria-label={`Témoignage ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
                aria-label="Témoignage suivant"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
