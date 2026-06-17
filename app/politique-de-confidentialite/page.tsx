import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Street Corner Pontarlier",
  description: "Politique de confidentialité et de protection des données personnelles de Street Corner, conformément au RGPD.",
};

export default function PrivacyPage() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", color: "#f5f5f5", fontFamily: "Arial, Helvetica, sans-serif" }}>
      <Header />
      <main style={{ maxWidth: "760px", margin: "0 auto", padding: "56px 24px 80px" }}>
        <PageHero
          tag="RGPD • Vie privée"
          title="Politique de"
          titleAccent="Confidentialité"
          subtitle="Dernière mise à jour : 17 juin 2026"
        />

        <Article title="1. Responsable du traitement">
          <p>Le responsable du traitement des données personnelles collectées via le présent site et dans le cadre de l&apos;activité commerciale est :</p>
          <InfoBlock lines={[
            "Street Corner — SAS, société par actions simplifiée",
            "33 Rue de la Libération, 25300 Pontarlier",
            "SIRET : 10132998500010",
            "N° TVA intracommunautaire : FR18101329985",
            "E-mail : streetcorner.pontarlier@gmail.com",
          ]} />
        </Article>

        <Article title="2. Données collectées et finalités">
          <p>Dans le cadre de notre activité, nous sommes susceptibles de collecter les données personnelles suivantes :</p>
          <Table rows={[
            ["Données d'identité", "Nom, prénom", "Gestion des commandes et du service client"],
            ["Coordonnées", "Adresse postale, téléphone, e-mail", "Livraison à domicile, confirmation de commande, suivi client"],
            ["Données de commande", "Produits commandés, montant, date, mode de paiement", "Exécution du contrat, facturation, obligations légales"],
            ["Données de navigation", "Adresse IP, pages visitées, durée de visite (via cookies)", "Amélioration du site, statistiques anonymisées"],
          ]} />
        </Article>

        <Article title="3. Bases légales du traitement">
          <p>Les traitements de données reposent sur les bases légales suivantes (article 6 du RGPD) :</p>
          <ul style={ulStyle}>
            <li><strong style={strongStyle}>Exécution du contrat</strong> : pour traiter vos commandes et assurer la livraison.</li>
            <li><strong style={strongStyle}>Obligation légale</strong> : pour la conservation des données de facturation (10 ans, article L.123-22 du Code de commerce).</li>
            <li><strong style={strongStyle}>Intérêt légitime</strong> : pour améliorer nos services, gérer la relation client et prévenir la fraude.</li>
            <li><strong style={strongStyle}>Consentement</strong> : pour l&apos;envoi de communications commerciales (si applicable) et les cookies non essentiels.</li>
          </ul>
        </Article>

        <Article title="4. Durée de conservation">
          <Table rows={[
            ["Données clients actifs", "3 ans à compter du dernier contact"],
            ["Données de facturation", "10 ans (obligation légale)"],
            ["Données de navigation / cookies", "13 mois maximum"],
            ["Réclamations et litiges", "5 ans à compter de la clôture du dossier"],
          ]} />
        </Article>

        <Article title="5. Destinataires des données">
          <p>Vos données personnelles sont destinées exclusivement aux membres habilités de l&apos;équipe Street Corner pour les finalités décrites ci-dessus. Elles ne sont ni vendues, ni louées, ni cédées à des tiers.</p>
          <p>Dans le cadre de la livraison, elles peuvent être partagées avec nos prestataires logistiques (plateformes de livraison tierces telles que Uber Eats, Deliveroo, etc.) dans la stricte limite nécessaire à l&apos;exécution de votre commande. Ces prestataires sont soumis à des obligations de confidentialité et ne peuvent utiliser vos données à d&apos;autres fins.</p>
          <p>Aucun transfert de données hors de l&apos;Union européenne n&apos;est effectué.</p>
        </Article>

        <Article title="6. Vos droits">
          <p>Conformément aux articles 15 à 22 du RGPD, vous disposez des droits suivants sur vos données personnelles :</p>
          <ul style={ulStyle}>
            <li><strong style={strongStyle}>Droit d&apos;accès</strong> : obtenir la confirmation que des données vous concernant sont traitées et en recevoir une copie.</li>
            <li><strong style={strongStyle}>Droit de rectification</strong> : corriger des données inexactes ou incomplètes.</li>
            <li><strong style={strongStyle}>Droit à l&apos;effacement</strong> (« droit à l&apos;oubli ») : demander la suppression de vos données, sous réserve des obligations légales de conservation.</li>
            <li><strong style={strongStyle}>Droit à la limitation</strong> : restreindre temporairement le traitement de vos données.</li>
            <li><strong style={strongStyle}>Droit à la portabilité</strong> : recevoir vos données dans un format structuré et lisible par machine.</li>
            <li><strong style={strongStyle}>Droit d&apos;opposition</strong> : s&apos;opposer à tout moment au traitement fondé sur l&apos;intérêt légitime ou à des fins de prospection commerciale.</li>
            <li><strong style={strongStyle}>Droit de retirer le consentement</strong> : à tout moment, sans que cela n&apos;affecte la licéité du traitement antérieur.</li>
          </ul>
          <p>Pour exercer ces droits, contactez-nous à l&apos;adresse : <strong style={strongStyle}>streetcorner.pontarlier@gmail.com</strong> en joignant une copie d&apos;un justificatif d&apos;identité. Nous répondrons dans un délai d&apos;un mois (pouvant être prolongé de deux mois en cas de demande complexe).</p>
        </Article>

        <Article title="7. Cookies et traceurs">
          <p>Notre site est susceptible d&apos;utiliser des cookies à des fins :</p>
          <ul style={ulStyle}>
            <li><strong style={strongStyle}>Techniques / essentiels</strong> : nécessaires au bon fonctionnement du site (session, sécurité). Aucun consentement requis.</li>
            <li><strong style={strongStyle}>Analytiques</strong> : mesure d&apos;audience anonymisée (ex. : nombre de visiteurs, pages consultées). Soumis à votre consentement préalable.</li>
          </ul>
          <p>Vous pouvez à tout moment désactiver les cookies non essentiels via les paramètres de votre navigateur. Cette désactivation n&apos;affecte pas la navigation sur le site.</p>
        </Article>

        <Article title="8. Sécurité des données">
          <p>Nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, divulgation, altération ou destruction, conformément à l&apos;article 32 du RGPD.</p>
        </Article>

        <Article title="9. Réclamations auprès de la CNIL">
          <p>Si vous estimez que le traitement de vos données ne respecte pas la réglementation applicable, vous avez le droit d&apos;introduire une réclamation auprès de l&apos;autorité de contrôle compétente :</p>
          <InfoBlock lines={[
            "Commission Nationale de l'Informatique et des Libertés (CNIL)",
            "3 Place de Fontenoy – TSA 80715 – 75334 Paris Cedex 07",
            "www.cnil.fr",
          ]} />
        </Article>

        <Article title="10. Mise à jour de la présente politique">
          <p>La présente politique de confidentialité peut être modifiée à tout moment pour refléter des évolutions légales, réglementaires ou liées à nos pratiques. La date de mise à jour figurant en haut de cette page sera actualisée en conséquence. Nous vous encourageons à la consulter régulièrement.</p>
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
      <h1 style={{ fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3rem)", textTransform: "uppercase", lineHeight: 1.1, margin: "0 0 12px" }}>
        {title} <span style={{ color: "#FFD700" }}>{titleAccent}</span>
      </h1>
      <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.85rem", margin: 0 }}>{subtitle}</p>
      <div style={{ height: "1px", background: "linear-gradient(90deg, #FFD700, transparent)", opacity: 0.3, marginTop: "24px" }} />
    </div>
  );
}

function Article({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article style={{ marginBottom: "40px" }}>
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

function Table({ rows }: { rows: string[][] }) {
  return (
    <div style={{ overflowX: "auto", marginTop: "12px" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem" }}>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: i % 2 === 0 ? "rgba(255,255,255,0.025)" : "transparent" }}>
              {row.map((cell, j) => (
                <td key={j} style={{ padding: "10px 14px", color: j === 0 ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.45)", fontWeight: j === 0 ? 700 : 400, verticalAlign: "top" }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function LinksBar() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "48px" }}>
      {[
        { label: "Support", href: "/support" },
        { label: "CGU / CGV", href: "/cgv" },
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
        {" · "}<a href="/cgv" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>CGU/CGV</a>
      </p>
    </footer>
  );
}
