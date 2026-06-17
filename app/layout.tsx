import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Street Corner — Y'en a pour tous les goûts | Pontarlier",
  description: "Fast food à Pontarlier. Tacos, Pizzas, Baguettes, Bowls, Panuzzi et bien plus. Livraison et à emporter. 33 Rue de la Libération, 25300 Pontarlier.",
  keywords: "fast food Pontarlier, tacos Pontarlier, pizza Pontarlier, Street Corner, livraison Pontarlier",
  openGraph: {
    title: "Street Corner — Y'en a pour tous les goûts",
    description: "Fast food à Pontarlier. Tacos, Pizzas, Baguettes, Bowls et plus.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
