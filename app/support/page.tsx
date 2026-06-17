import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support & Aide — Street Corner Pontarlier",
  description: "Contactez Street Corner pour toute question sur vos commandes, livraisons ou nos produits.",
};

export default function SupportPage() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", color: "#f5f5f5", fontFamily: "Arial, Helvetica, sans-serif" }}>
      {/* Header */}
      <header style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, background: "rgba(10,10,10,0.97)", zIndex: 50 }}>
        <a href="/">
          <img src="/gallery/logo/Logo Street Corner.svg" alt="Street Corner" style={{ height: "44px", width: "auto" }} />
        </a>
        <a href="/" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none", letterSpacing: "0.5px" }}>
          ← Retour au site
        </a>
      </header>

      <main style={{ maxWidth: "760px", margin: "0 auto", padding: "56px 24px 80px" }}>
        {/* Hero */}
        <div style={{ marginBottom: "48px" }}>
          <span style={{ background: "rgba(255,215,0,0.15)", color: "#FFD700", border: "1px solid rgba(255,215,0,0.3)", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", padding: "3px 12px", borderRadius: "100px", display: "inline-block", marginBottom: "16px" }}>
            Aide & Contact
          </span>
          <h1 style={{ fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3rem)", textTransform: "uppercase", lineHeight: 1, margin: "0 0 16px" }}>
            Support <span style={{ color: "#FFD700" }}>Client</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>
            Notre équipe est là pour vous aider. Retrouvez ci-dessous nos coordonnées et les réponses aux questions les plus fréquentes.
          </p>
        </div>

        {/* Contact cards */}
        <Section title="📍 Nous contacter">
          <Grid>
            <Card>
              <CardTitle>E-mail</CardTitle>
              <p style={{ color: "rgba(255,255,255,0.55)", margin: "6px 0 0", fontSize: "0.9rem", lineHeight: 1.6 }}>
                Pour toute demande écrite :<br />
                <strong style={{ color: "#FFD700" }}>streetcorner.pontarlier@gmail.com</strong><br />
                <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.35)" }}>Réponse sous 24–48h ouvrées</span>
              </p>
            </Card>
            <Card>
              <CardTitle>Adresse</CardTitle>
              <p style={{ color: "rgba(255,255,255,0.55)", margin: "6px 0 0", fontSize: "0.9rem", lineHeight: 1.6 }}>
                33 Rue de la Libération<br />
                25300 Pontarlier<br />
                <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.35)" }}>Ouvert 7j/7</span>
              </p>
            </Card>
          </Grid>
        </Section>

        <Divider />

        {/* Horaires */}
        <Section title="🕐 Horaires d'ouverture">
          <HoursTable />
        </Section>

        <Divider />

        {/* FAQ */}
        <Section title="❓ Questions fréquentes">
          <Faq items={[
            {
              q: "Comment passer une commande ?",
              a: "Vous pouvez commander directement au restaurant (sur place ou à emporter), via notre application mobile, ou via les plateformes de livraison partenaires (Uber Eats, Deliveroo…)."
            },
            {
              q: "Quelles sont les zones de livraison ?",
              a: "Nous livrons dans Pontarlier et ses environs proches. La zone de livraison exacte est indiquée sur l'application au moment de votre commande."
            },
            {
              q: "J'ai un problème avec ma commande, que faire ?",
              a: "Contactez-nous immédiatement par téléphone pendant les heures d'ouverture, ou par e-mail. Conservez votre reçu ou capture d'écran de la commande. Nous traitons chaque réclamation individuellement dans les meilleurs délais."
            },
            {
              q: "Proposez-vous des options pour les allergies alimentaires ?",
              a: "Oui. Nos équipes peuvent vous renseigner sur les allergènes présents dans chaque plat. Merci de nous signaler toute allergie au moment de la commande. Cependant, nos plats sont préparés dans une cuisine pouvant contenir des traces d'allergènes courants (gluten, lait, œuf, fruits à coque, sésame)."
            },
            {
              q: "Puis-je modifier ou annuler ma commande ?",
              a: "Toute modification ou annulation doit être signalée avant la préparation du plat. Passé ce délai, la commande ne peut plus être annulée. Contactez-nous le plus tôt possible par téléphone."
            },
            {
              q: "Quels moyens de paiement acceptez-vous ?",
              a: "Nous acceptons les paiements en espèces et par carte bancaire (Visa, Mastercard). Certaines plateformes de livraison peuvent proposer d'autres modes de paiement."
            },
            {
              q: "Comment obtenir une facture ?",
              a: "Un ticket de caisse est remis automatiquement à chaque commande sur place. Pour une facture détaillée (notamment pour les professionnels), contactez-nous par e-mail en précisant la date, le montant et votre adresse de facturation."
            },
          ]} />
        </Section>

        <Divider />

        <Section title="🔗 Liens utiles">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {[
              { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
              { label: "CGU / CGV", href: "/cgv" },
              { label: "Retour à l'accueil", href: "/" },
            ].map(l => (
              <a key={l.href} href={l.href} style={{
                display: "inline-block",
                padding: "8px 18px",
                borderRadius: "100px",
                border: "1px solid rgba(255,215,0,0.3)",
                color: "#FFD700",
                textDecoration: "none",
                fontSize: "0.82rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}>
                {l.label}
              </a>
            ))}
          </div>
        </Section>
      </main>

      <PageFooter />
    </div>
  );
}

/* ---- sub-components ---- */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: "40px" }}>
      <h2 style={{ fontWeight: 900, fontSize: "1.15rem", textTransform: "uppercase", letterSpacing: "1px", color: "#FFD700", marginBottom: "20px" }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "16px" }}>{children}</div>;
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,215,0,0.1)", borderRadius: "16px", padding: "20px" }}>
      {children}
    </div>
  );
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return <h3 style={{ fontWeight: 800, fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "1px", color: "rgba(255,255,255,0.7)", margin: 0 }}>{children}</h3>;
}

function Divider() {
  return <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,215,0,0.2), transparent)", margin: "40px 0" }} />;
}

function HoursTable() {
  const hours = [
    { day: "Lundi",     h: "11h–14h / 18h–23h" },
    { day: "Mardi",     h: "11h–14h / 18h–23h" },
    { day: "Mercredi",  h: "11h–14h / 18h–23h" },
    { day: "Jeudi",     h: "11h–14h / 18h–00h" },
    { day: "Vendredi",  h: "11h–13h30 / 17h–01h" },
    { day: "Samedi",    h: "11h–14h / 17h–01h" },
    { day: "Dimanche",  h: "11h–14h / 17h–00h" },
  ];
  return (
    <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,215,0,0.1)", borderRadius: "16px", overflow: "hidden" }}>
      {hours.map((h, i) => (
        <div key={h.day} style={{ display: "flex", justifyContent: "space-between", padding: "12px 20px", borderBottom: i < hours.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none", background: i % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent" }}>
          <span style={{ fontWeight: 600, color: "rgba(255,255,255,0.65)", fontSize: "0.9rem" }}>{h.day}</span>
          <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9rem" }}>{h.h}</span>
        </div>
      ))}
    </div>
  );
}

function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {items.map((item, i) => (
        <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "14px", padding: "18px 20px" }}>
          <p style={{ fontWeight: 800, fontSize: "0.92rem", color: "rgba(255,255,255,0.85)", margin: "0 0 8px" }}>{item.q}</p>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{item.a}</p>
        </div>
      ))}
    </div>
  );
}

function PageFooter() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "24px", textAlign: "center" }}>
      <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.8rem", margin: 0 }}>
        © {new Date().getFullYear()} Street Corner — 33 Rue de la Libération, 25300 Pontarlier
        {" · "}<a href="/politique-de-confidentialite" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>Confidentialité</a>
        {" · "}<a href="/cgv" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>CGU/CGV</a>
      </p>
    </footer>
  );
}
