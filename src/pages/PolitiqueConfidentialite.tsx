import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const PolitiqueConfidentialite = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen bg-background pt-28 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-foreground mb-8">
            Politique de Confidentialité
          </h1>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <section>
              <h2 className="text-xl font-display font-bold text-foreground">1. Responsable du traitement</h2>
              <p>
                Le responsable du traitement des données personnelles est :<br />
                <strong>Food Truck Afrique</strong><br />
                [Adresse à compléter]<br />
                E-mail : [À compléter]<br />
                Téléphone : +32 484 08 15 51
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground">2. Données collectées</h2>
              <p>Dans le cadre de l'utilisation du site, les données suivantes peuvent être collectées :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Nom et prénom</li>
                <li>Adresse e-mail</li>
                <li>Numéro de téléphone</li>
                <li>Ville et pays</li>
                <li>Informations relatives au projet (type de remorque, budget, etc.)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground">3. Finalité du traitement</h2>
              <p>Les données collectées sont utilisées pour :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Répondre aux demandes de devis</li>
                <li>Assurer le suivi commercial</li>
                <li>Améliorer l'expérience utilisateur</li>
                <li>Envoyer des communications commerciales (avec consentement)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground">4. Base légale</h2>
              <p>
                Le traitement est fondé sur le consentement de l'utilisateur (Article 6.1.a du RGPD) et l'exécution de mesures précontractuelles (Article 6.1.b du RGPD).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground">5. Durée de conservation</h2>
              <p>
                Les données personnelles sont conservées pendant une durée maximale de 3 ans à compter du dernier contact avec l'utilisateur, sauf obligation légale contraire.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground">6. Droits des utilisateurs</h2>
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la portabilité</li>
                <li>Droit d'opposition</li>
                <li>Droit à la limitation du traitement</li>
              </ul>
              <p>
                Pour exercer ces droits, contactez-nous à : [E-mail à compléter]
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground">7. Cookies</h2>
              <p>
                Ce site n'utilise pas de cookies de suivi ou publicitaires. Seuls des cookies techniques essentiels au fonctionnement du site peuvent être utilisés.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground">8. Transfert de données</h2>
              <p>
                Vos données ne sont pas transférées en dehors de l'Union européenne, sauf nécessité liée à l'hébergement (serveurs sécurisés conformes au RGPD).
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PolitiqueConfidentialite;
