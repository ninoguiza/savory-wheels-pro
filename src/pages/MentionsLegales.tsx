import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const MentionsLegales = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen bg-background pt-28 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-foreground mb-8">
            Mentions Légales
          </h1>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <section>
              <h2 className="text-xl font-display font-bold text-foreground">1. Éditeur du site</h2>
              <p>
                Le site <strong>Food Truck Solution</strong> est édité par :<br />
                <strong>Food Truck Afrique</strong><br />
                Forme juridique : [À compléter]<br />
                Capital social : [À compléter]<br />
                Siège social : [Adresse à compléter]<br />
                Numéro de TVA intracommunautaire : [À compléter]<br />
                Numéro d'immatriculation : [À compléter]<br />
                
                E-mail : [À compléter]
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground">2. Directeur de la publication</h2>
              <p>[Nom et prénom du directeur de la publication à compléter]</p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground">3. Hébergeur</h2>
              <p>
                Ce site est hébergé par :<br />
                <strong>Lovable / Netlify</strong><br />
                Adresse : San Francisco, CA, États-Unis<br />
                Site web : <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">lovable.dev</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground">4. Propriété intellectuelle</h2>
              <p>
                L'ensemble des contenus (textes, images, vidéos, logos, graphismes) présents sur ce site sont protégés par le droit d'auteur et le droit de la propriété intellectuelle. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable est interdite.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground">5. Limitation de responsabilité</h2>
              <p>
                L'éditeur s'efforce de fournir des informations exactes et à jour. Toutefois, il ne saurait être tenu responsable des erreurs, omissions ou résultats obtenus suite à l'utilisation de ces informations. L'éditeur se réserve le droit de modifier le contenu du site à tout moment et sans préavis.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground">6. Liens hypertextes</h2>
              <p>
                Le site peut contenir des liens vers des sites tiers. L'éditeur n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MentionsLegales;
