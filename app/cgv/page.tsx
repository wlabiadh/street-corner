import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CGU / CGV — Street Corner Pontarlier",
  description: "Conditions Générales d'Utilisation et de Vente de Street Corner, restaurant fast food à Pontarlier.",
};

export default function CGVPage() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", color: "#f5f5f5", fontFamily: "Arial, Helvetica, sans-serif" }}>
      <Header />
      <main style={{ maxWidth: "760px", margin: "0 auto", padding: "56px 24px 80px" }}>
        <PageHero
          tag="CGU • CGV"
          title="Conditions Générales"
          titleAccent="d'Utilisation & de Vente"
          subtitle="Dernière mise à jour : 17 juin 2026"
        />

        <Intro>
          Les présentes Conditions Générales d&apos;Utilisation (CGU) et Conditions Générales de Vente (CGV) régissent l&apos;utilisation du site internet de Street Corner ainsi que toute commande passée auprès de l&apos;établissement, que ce soit sur place, à emporter ou en livraison. Toute commande implique l&apos;acceptation sans réserve des présentes conditions.
        </Intro>

        <Article title="1. Identification du professionnel">
          <p>Le site et le service de commande sont exploités par :</p>
          <InfoBlock lines={[
            "Dénomination : Street Corner",
            "Forme juridique : SAS, société par actions simplifiée",
            "Capital social : 1 000,00 €",
            "Adresse : 33 Rue de la Libération, 25300 Pontarlier",
            "SIRET : 10132998500010",
            "N° TVA intracommunautaire : FR18101329985",
            "E-mail : streetcorner.pontarlier@gmail.com",
          ]} />
        </Article>

        <Article title="2. Objet">
          <p>Street Corner est un restaurant de restauration rapide proposant la vente de repas préparés à la demande (tacos, pizzas, baguettes, bowls, panuzzis, desserts, boissons, etc.) à consommer sur place, à emporter ou en livraison à domicile dans la zone définie.</p>
          <p>Les présentes CGU/CGV s&apos;appliquent à toute commande passée directement au restaurant, via le site internet, l&apos;application mobile éventuelle, ou les plateformes de livraison tierces partenaires.</p>
        </Article>

        <Article title="3. Produits et disponibilité">
          <p>Les produits proposés sont ceux figurant sur notre carte au moment de la commande. Street Corner se réserve le droit de modifier sa carte à tout moment, notamment en cas de rupture de stock ou d&apos;indisponibilité d&apos;un ingrédient, sans préavis.</p>
          <p>Les photographies et visuels présentés sont non contractuels et donnés à titre indicatif. Des variations peuvent exister en raison du caractère artisanal et fait-maison de nos préparations.</p>
          <p>Concernant les <strong style={strongStyle}>allergènes</strong> : nos plats sont préparés dans une cuisine pouvant contenir des traces de gluten, lait, œufs, fruits à coque, arachides, soja, sésame, céleri, moutarde, poisson, crustacés, mollusques, lupin et sulfites. Toute allergie doit être signalée impérativement avant la commande.</p>
        </Article>

        <Article title="4. Prix">
          <p>Les prix sont affichés en euros, toutes taxes comprises (TTC), au taux de TVA applicable en vigueur :</p>
          <ul style={ulStyle}>
            <li>5,5 % pour les produits destinés à la vente à emporter ou en livraison (denrées alimentaires).</li>
            <li>10 % pour la consommation sur place.</li>
            <li>20 % pour les boissons alcoolisées (si applicable).</li>
          </ul>
          <p>Street Corner se réserve le droit de modifier ses prix à tout moment. Les prix applicables sont ceux en vigueur au moment de la validation de la commande.</p>
          <p>Des frais de livraison peuvent s&apos;appliquer selon la zone et le canal de commande utilisé. Ces frais sont indiqués avant la confirmation de la commande.</p>
        </Article>

        <Article title="5. Commande">
          <p>La commande est réputée ferme et définitive à partir du moment où le client valide son panier et procède au paiement (ou remet sa commande en caisse pour les commandes sur place).</p>
          <p>Street Corner se réserve le droit de refuser ou d&apos;annuler une commande en cas de :</p>
          <ul style={ulStyle}>
            <li>Produit indisponible ou ingrédient manquant.</li>
            <li>Informations de livraison incomplètes ou incorrectes.</li>
            <li>Problème lié au paiement.</li>
            <li>Commande manifestement abusive ou frauduleuse.</li>
          </ul>
          <p>En cas d&apos;annulation à l&apos;initiative de Street Corner, le client est remboursé intégralement dans les meilleurs délais.</p>
        </Article>

        <Article title="6. Paiement">
          <p>Nous acceptons les modes de paiement suivants :</p>
          <ul style={ulStyle}>
            <li>Espèces (sur place uniquement).</li>
            <li>Carte bancaire (Visa, Mastercard, CB).</li>
            <li>Tout autre mode proposé par les plateformes tierces partenaires.</li>
          </ul>
          <p>Le paiement est exigible immédiatement à la commande. Aucun crédit ou paiement différé n&apos;est consenti.</p>
        </Article>

        <Article title="7. Livraison et retrait">
          <p><strong style={strongStyle}>À emporter :</strong> La commande est disponible au comptoir dès que vous recevez la confirmation de préparation. Le délai indicatif est communiqué au moment de la commande.</p>
          <p><strong style={strongStyle}>Livraison à domicile :</strong> La livraison est assurée par Street Corner ou par des plateformes de livraison partenaires (Uber Eats, Deliveroo, etc.) dans la zone définie. Le délai de livraison est estimatif et peut varier en fonction de la distance, de l&apos;affluence et des conditions de circulation. Street Corner ne peut être tenu responsable de retards indépendants de sa volonté.</p>
          <p>En cas d&apos;absence du client lors de la livraison, le livreur tentera un contact téléphonique. Passé un délai raisonnable sans réponse, la commande ne peut être remboursée.</p>
        </Article>

        <Article title="8. Droit de rétractation">
          <p>Conformément à l&apos;<strong style={strongStyle}>article L221-28 du Code de la consommation</strong>, le droit de rétractation <strong style={strongStyle}>ne s&apos;applique pas</strong> aux contrats de fourniture de biens susceptibles de se détériorer ou de se périmer rapidement, notamment les denrées alimentaires préparées à la commande.</p>
          <p>En conséquence, aucune rétractation, annulation ou remboursement ne peut être accordé après que la préparation du plat a été lancée, sauf en cas d&apos;erreur imputable à Street Corner (produit non conforme à la commande, problème de qualité).</p>
          <p>En cas de non-conformité avérée, le client est invité à nous contacter immédiatement. Un avoir ou un remboursement partiel ou total pourra être proposé à notre discrétion, après vérification.</p>
        </Article>

        <Article title="9. Garanties légales">
          <p>Indépendamment du droit de rétractation, les produits vendus bénéficient des garanties légales suivantes, dans les conditions prévues par le droit français :</p>
          <ul style={ulStyle}>
            <li><strong style={strongStyle}>Garantie légale de conformité</strong> (articles L217-4 et suivants du Code de la consommation).</li>
            <li><strong style={strongStyle}>Garantie contre les vices cachés</strong> (articles 1641 et suivants du Code civil).</li>
          </ul>
          <p>Pour les denrées alimentaires, ces garanties s&apos;apprécient au regard de la nature périssable des produits et des délais de consommation applicables (DLC).</p>
        </Article>

        <Article title="10. Responsabilité">
          <p>Street Corner s&apos;engage à préparer ses produits dans le respect des règles d&apos;hygiène et de sécurité alimentaire en vigueur (règlements CE n°852/2004 et 853/2004, arrêté du 21 décembre 2009).</p>
          <p>Notre responsabilité ne saurait être engagée pour :</p>
          <ul style={ulStyle}>
            <li>Des dommages résultant d&apos;une mauvaise conservation des produits après livraison.</li>
            <li>Des allergies non signalées avant la commande.</li>
            <li>Des retards ou indisponibilités liés à des cas de force majeure (intempéries, grève, panne, etc.).</li>
            <li>Des dysfonctionnements techniques des plateformes tierces de livraison ou de paiement.</li>
          </ul>
        </Article>

        <Article title="11. Propriété intellectuelle">
          <p>L&apos;ensemble des éléments du site internet de Street Corner (logo, visuels, textes, charte graphique, dénomination) sont protégés par le droit de la propriété intellectuelle et sont la propriété exclusive de Street Corner ou de leurs auteurs respectifs.</p>
          <p>Toute reproduction, représentation, modification ou exploitation, même partielle, sans autorisation préalable écrite est strictement interdite.</p>
        </Article>

        <Article title="12. Protection des données personnelles">
          <p>Le traitement des données personnelles collectées dans le cadre de vos commandes est décrit dans notre <a href="/politique-de-confidentialite" style={{ color: "#FFD700", textDecoration: "none", fontWeight: 700 }}>Politique de confidentialité</a>, conforme au Règlement Général sur la Protection des Données (RGPD — UE 2016/679).</p>
        </Article>

        <Article title="13. Médiation et règlement des litiges">
          <p>En cas de litige, le client est invité à contacter Street Corner en priorité pour tenter une résolution amiable à l&apos;adresse <strong style={strongStyle}>streetcorner.pontarlier@gmail.com</strong>.</p>
          <p>À défaut de résolution amiable dans un délai de 30 jours, le consommateur peut recourir à la plateforme européenne de règlement en ligne des litiges :</p>
          <InfoBlock lines={[
            "Plateforme européenne RLL : ec.europa.eu/consumers/odr",
          ]} />
          <p>À défaut, les tribunaux compétents sont ceux du ressort de Besançon (Doubs), conformément au droit français.</p>
        </Article>

        <Article title="14. Loi applicable">
          <p>Les présentes CGU/CGV sont soumises au droit français. Tout litige sera soumis à la compétence exclusive des juridictions françaises, sauf disposition légale impérative contraire applicable au consommateur.</p>
        </Article>

        <LinksBar />
      </main>
      <PageFooter />
    </div>
  );
}

/* ---- sub-components ---- */

const ulStyle: React.CSSProperties = { color: "rgba(255,255,255,0.55)", paddingLeft: "20px", lineHeight: 1.85, fontSize: "0.92rem", margin: "12px 0" };
const strongStyle: React.CSSProperties = { color: "rgba(255,255,255,0.85)", fontWeight: 700 };

function Header() {
  return (
    <header style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, background: "rgba(10,10,10,0.97)", zIndex: 50 }}>
      <a href="/"><img src="/gallery/logo/Logo Street Corner.svg" alt="Street Corner" style={{ height: "44px", width: "auto" }} /></a>
      <a href="/" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}>← Retour au site</a>
    </header>
  );
}

function PageHero({ tag, title, titleAccent, subtitle }: { tag: string; title: string; titleAccent: string; subtitle: string }) {
  return (
    <div style={{ marginBottom: "48px" }}>
      <span style={{ background: "rgba(255,215,0,0.15)", color: "#FFD700", border: "1px solid rgba(255,215,0,0.3)", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", padding: "3px 12px", borderRadius: "100px", display: "inline-block", marginBottom: "16px" }}>{tag}</span>
      <h1 style={{ fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", textTransform: "uppercase", lineHeight: 1.1, margin: "0 0 12px" }}>
        {title} <span style={{ color: "#FFD700" }}>{titleAccent}</span>
      </h1>
      <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.85rem", margin: 0 }}>{subtitle}</p>
      <div style={{ height: "1px", background: "linear-gradient(90deg, #FFD700, transparent)", opacity: 0.3, marginTop: "24px" }} />
    </div>
  );
}

function Intro({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "rgba(255,215,0,0.05)", border: "1px solid rgba(255,215,0,0.15)", borderRadius: "14px", padding: "20px 24px", marginBottom: "40px", color: "rgba(255,255,255,0.6)", fontSize: "0.92rem", lineHeight: 1.8 }}>
      {children}
    </div>
  );
}

function Article({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article style={{ marginBottom: "36px" }}>
      <h2 style={{ fontWeight: 900, fontSize: "1rem", textTransform: "uppercase", letterSpacing: "1px", color: "#FFD700", marginBottom: "14px" }}>{title}</h2>
      <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.92rem", lineHeight: 1.8 }}>{children}</div>
    </article>
  );
}

function InfoBlock({ lines }: { lines: string[] }) {
  return (
    <div style={{ background: "rgba(255,215,0,0.05)", border: "1px solid rgba(255,215,0,0.15)", borderRadius: "12px", padding: "16px 20px", marginTop: "12px" }}>
      {lines.map((l, i) => <p key={i} style={{ margin: i === 0 ? "0 0 4px" : "4px 0", fontSize: "0.88rem", color: "rgba(255,255,255,0.65)" }}>{l}</p>)}
    </div>
  );
}

function LinksBar() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "48px" }}>
      {[
        { label: "Support", href: "/support" },
        { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
        { label: "Retour à l'accueil", href: "/" },
      ].map(l => (
        <a key={l.href} href={l.href} style={{ display: "inline-block", padding: "8px 18px", borderRadius: "100px", border: "1px solid rgba(255,215,0,0.3)", color: "#FFD700", textDecoration: "none", fontSize: "0.82rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>
          {l.label}
        </a>
      ))}
    </div>
  );
}

function PageFooter() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "24px", textAlign: "center" }}>
      <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.8rem", margin: 0 }}>
        © {new Date().getFullYear()} Street Corner — 33 Rue de la Libération, 25300 Pontarlier
        {" · "}<a href="/support" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>Support</a>
        {" · "}<a href="/politique-de-confidentialite" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>Confidentialité</a>
      </p>
    </footer>
  );
}
