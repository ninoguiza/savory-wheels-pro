import { useState } from "react";
import { z } from "zod";
import { Send, Phone, MessageCircle, CheckCircle } from "lucide-react";

const devisSchema = z.object({
  nom: z.string().trim().min(2, "Minimum 2 caractères").max(100, "Maximum 100 caractères"),
  email: z.string().trim().email("Email invalide").max(255),
  telephone: z.string().trim().min(8, "Numéro trop court").max(20, "Numéro trop long"),
  ville: z.string().trim().min(2, "Minimum 2 caractères").max(100),
  typeRemorque: z.string().min(1, "Veuillez choisir un type"),
  budget: z.string().min(1, "Veuillez sélectionner un budget"),
  message: z.string().trim().max(1000, "Maximum 1000 caractères").optional(),
});

type DevisData = z.infer<typeof devisSchema>;

const typeOptions = [
  "Remorque snack / fast-food",
  "Remorque pizza",
  "Remorque crêpes / gaufres",
  "Remorque tacos / kebab",
  "Remorque café / boissons",
  "Remorque pâtisserie",
  "Autre (précisez dans le message)",
];

const budgetOptions = [
  "5 000€ – 10 000€",
  "10 000€ – 20 000€",
  "20 000€ – 35 000€",
  "35 000€ +",
];

const DevisForm = () => {
  const [formData, setFormData] = useState<Partial<DevisData>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof DevisData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof DevisData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = devisSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof DevisData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof DevisData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    // Build WhatsApp message
    const msg = [
      `🚚 *Demande de Devis Food Truck*`,
      `👤 Nom: ${result.data.nom}`,
      `📧 Email: ${result.data.email}`,
      `📞 Tél: ${result.data.telephone}`,
      `📍 Ville: ${result.data.ville}`,
      `🍽️ Type: ${result.data.typeRemorque}`,
      `💰 Budget: ${result.data.budget}`,
      result.data.message ? `💬 Message: ${result.data.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/32484081551?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="devis" className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl text-center">
          <div className="glass rounded-3xl p-12 animate-fade-up">
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Merci pour votre demande !
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Notre équipe vous contactera sous 24h. Vous pouvez aussi nous joindre directement :
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/32484081551"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl gradient-warm text-primary-foreground font-semibold hover:scale-105 transition-transform"
              >
                <Phone className="w-5 h-5" /> WhatsApp
              </a>
              <a
                href="https://t.me/+32484081551"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-semibold hover:scale-105 transition-transform"
              >
                <MessageCircle className="w-5 h-5" /> Telegram
              </a>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({});
              }}
              className="mt-6 text-sm text-muted-foreground underline hover:text-foreground transition-colors"
            >
              Envoyer une autre demande
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="devis" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4">
            Devis Gratuit
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Demandez Votre{" "}
            <span className="text-gradient">Devis Personnalisé</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Remplissez le formulaire et recevez un devis détaillé sous 24h. Sans engagement.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="max-w-3xl mx-auto glass rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl"
        >
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            {/* Nom */}
            <div>
              <label htmlFor="nom" className="block text-sm font-semibold text-foreground mb-2">
                Nom complet *
              </label>
              <input
                id="nom"
                name="nom"
                type="text"
                value={formData.nom || ""}
                onChange={handleChange}
                placeholder="Votre nom"
                className={`w-full px-4 py-3 rounded-xl bg-background border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors ${
                  errors.nom ? "border-destructive" : "border-input"
                }`}
              />
              {errors.nom && <p className="text-destructive text-xs mt-1">{errors.nom}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email || ""}
                onChange={handleChange}
                placeholder="votre@email.com"
                className={`w-full px-4 py-3 rounded-xl bg-background border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors ${
                  errors.email ? "border-destructive" : "border-input"
                }`}
              />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Téléphone */}
            <div>
              <label htmlFor="telephone" className="block text-sm font-semibold text-foreground mb-2">
                Téléphone *
              </label>
              <input
                id="telephone"
                name="telephone"
                type="tel"
                value={formData.telephone || ""}
                onChange={handleChange}
                placeholder="+32 484 08 15 51"
                className={`w-full px-4 py-3 rounded-xl bg-background border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors ${
                  errors.telephone ? "border-destructive" : "border-input"
                }`}
              />
              {errors.telephone && <p className="text-destructive text-xs mt-1">{errors.telephone}</p>}
            </div>

            {/* Ville */}
            <div>
              <label htmlFor="ville" className="block text-sm font-semibold text-foreground mb-2">
                Ville / Pays *
              </label>
              <input
                id="ville"
                name="ville"
                type="text"
                value={formData.ville || ""}
                onChange={handleChange}
                placeholder="Bruxelles, Belgique"
                className={`w-full px-4 py-3 rounded-xl bg-background border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors ${
                  errors.ville ? "border-destructive" : "border-input"
                }`}
              />
              {errors.ville && <p className="text-destructive text-xs mt-1">{errors.ville}</p>}
            </div>

            {/* Type de remorque */}
            <div>
              <label htmlFor="typeRemorque" className="block text-sm font-semibold text-foreground mb-2">
                Type de remorque *
              </label>
              <select
                id="typeRemorque"
                name="typeRemorque"
                value={formData.typeRemorque || ""}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl bg-background border text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors ${
                  errors.typeRemorque ? "border-destructive" : "border-input"
                }`}
              >
                <option value="">Sélectionnez un type</option>
                {typeOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              {errors.typeRemorque && <p className="text-destructive text-xs mt-1">{errors.typeRemorque}</p>}
            </div>

            {/* Budget */}
            <div>
              <label htmlFor="budget" className="block text-sm font-semibold text-foreground mb-2">
                Budget estimé *
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget || ""}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl bg-background border text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors ${
                  errors.budget ? "border-destructive" : "border-input"
                }`}
              >
                <option value="">Sélectionnez un budget</option>
                {budgetOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              {errors.budget && <p className="text-destructive text-xs mt-1">{errors.budget}</p>}
            </div>
          </div>

          {/* Message */}
          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
              Message (optionnel)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message || ""}
              onChange={handleChange}
              placeholder="Décrivez votre projet, dimensions souhaitées, équipements..."
              className={`w-full px-4 py-3 rounded-xl bg-background border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors resize-none ${
                errors.message ? "border-destructive" : "border-input"
              }`}
            />
            {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl gradient-warm text-primary-foreground font-display font-bold text-lg hover-glow hover:scale-[1.02] transition-all duration-300 shadow-lg"
          >
            <Send className="w-5 h-5" />
            Envoyer ma demande via WhatsApp
          </button>

          <p className="text-center text-muted-foreground text-xs mt-4">
            Vos données sont utilisées uniquement pour votre devis. Réponse garantie sous 24h.
          </p>
        </form>
      </div>
    </section>
  );
};

export default DevisForm;
