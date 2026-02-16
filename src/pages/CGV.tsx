import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const CGV = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen bg-background pt-28 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-foreground mb-8">
            Conditions Générales de Vente
          </h1>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <section>
              <h2 className="text-xl font-display font-bold text-foreground">1. Objet</h2>
              <p>
                Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre <strong>Food Truck Afrique</strong> (ci-après « le Vendeur ») et tout client professionnel ou particulier (ci-après « l'Acheteur ») dans le cadre de la vente de remorques alimentaires et services associés.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground">2. Prix</h2>
              <p>
                Les prix sont indiqués en euros hors taxes (HTVA). La TVA applicable sera ajoutée selon la législation en vigueur dans le pays de livraison. Les prix peuvent être modifiés à tout moment, mais les commandes confirmées restent au prix convenu lors de la validation du devis.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground">3. Commande et devis</h2>
              <p>
                Toute commande est précédée d'un devis détaillé établi gratuitement. Le devis est valable 30 jours à compter de sa date d'émission. La commande est considérée comme ferme après acceptation écrite du devis et versement de l'acompte.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground">4. Paiement</h2>
              <p>Les modalités de paiement sont les suivantes :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Acompte de 40 % à la commande</li>
                <li>30 % à la validation des plans de fabrication</li>
                <li>Solde de 30 % à la livraison</li>
              </ul>
              <p>
                Les paiements peuvent être effectués par virement bancaire. Tout retard de paiement entraînera l'application de pénalités conformément à la réglementation en vigueur.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground">5. Délais de fabrication et livraison</h2>
              <p>
                Les délais de fabrication sont communiqués à titre indicatif et varient selon la complexité du projet (généralement 4 à 8 semaines). Le Vendeur s'engage à informer l'Acheteur de tout retard éventuel. La livraison est effectuée en Europe et en Afrique du Nord selon les conditions convenues dans le devis.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground">6. Conformité et garantie</h2>
              <p>
                Toutes les remorques sont livrées conformes aux normes CE en vigueur. Une garantie constructeur de 2 ans est offerte sur la structure et les équipements installés, hors usure normale et mauvaise utilisation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground">7. Rétractation et annulation</h2>
              <p>
                Les remorques étant fabriquées sur mesure, le droit de rétractation de 14 jours ne s'applique pas (Article L221-28 du Code de la consommation). En cas d'annulation après le début de la fabrication, l'acompte versé restera acquis au Vendeur à titre de dédommagement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground">8. Réserve de propriété</h2>
              <p>
                Le Vendeur conserve la propriété de la remorque jusqu'au paiement intégral du prix convenu.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground">9. Litiges</h2>
              <p>
                En cas de litige, les parties s'engagent à rechercher une solution amiable. À défaut, le litige sera soumis aux tribunaux compétents du siège social du Vendeur. Le droit belge est applicable.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CGV;
