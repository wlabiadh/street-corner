"use client";

import { useState, useEffect, useRef } from "react";

const MENU_CATEGORIES = [
  {
    id: "sale",
    label: "🍽️ Salé",
    items: [
      {
        name: "Tacos à Composer",
        emoji: "🌮",
        description: "2 sauces + 1 viande + frites + sauce fromagère + supplément + gratinage",
        tag: "Bestseller",
        variants: [
          { label: "Taille M", price: "7€20" },
          { label: "Taille L (2 viandes)", price: "9€20" },
          { label: "Taille XL (3 viandes)", price: "13€20" },
          { label: "Taille XXL (4 viandes)", price: "16€20" },
          { label: "Giga Tacos (5 viandes)", price: "23€20" },
        ],
      },
      {
        name: "Bowl à Composer",
        emoji: "🥣",
        description: "1 sauce + 1 viande + sauce fromagère maison + gratinage au choix",
        tag: "À composer",
        price: "6€90",
      },
      {
        name: "Back to Baguette",
        emoji: "🥖",
        description: "Baguette généreuse garnie, sauce fromagère maison, gratinée à la perfection",
        tag: "Nouveauté",
        variants: [
          { label: "L'Ultime Tenders Mozza Bacon", price: "8,90€" },
          { label: "Le Curry Cheddar Bacon", price: "8,90€" },
          { label: "Le Tandoori Mozza Cheddar", price: "8,90€" },
        ],
      },
      {
        name: "Pizza Pâte Fraîche",
        emoji: "🍕",
        description: "Ingrédients frais, sauce / fromage / viande / crudité au choix",
        tag: "Fait maison",
        price: "À partir de 5€90",
      },
      {
        name: "Pizza Moitié-Moitié",
        emoji: "🍕",
        description: "Choisis 2 pizzas et on te les met dans la même ! Pâte fraîche.",
        tag: "Unique",
        price: "À partir de 5€90",
      },
      {
        name: "Roulé Pâte à Pizza",
        emoji: "🥙",
        description: "Viande + sauce + sauce fromagère + crudité + gratinage au choix",
        tag: "À composer",
        price: "7€20",
      },
      {
        name: "Panuzzi Dolce Vita",
        emoji: "🫓",
        description: "Roquette fraîche, bacon de bœuf fumé, burrata fondante, sauce pesto verte, crème balsamique",
        tag: "Premium",
        price: "8€90",
      },
      {
        name: "Panuzzi Ultra Gourmand",
        emoji: "🫓",
        description: "Roquette fraîche, bacon de bœuf fumé, burrata fondante, sauce pesto verte, crème balsamique",
        tag: "Ultra Gourmand",
        price: "8€90",
      },
    ],
  },
  {
    id: "sucre",
    label: "🍰 Sucré",
    items: [
      {
        name: "Sundae à Composer",
        emoji: "🍦",
        description: "Base + sauce + topping + bonbons + supplément croustillant. Mixé avec du lait.",
        tag: "À composer",
        price: "4€90",
      },
      {
        name: "Cheesecake Philadelphia",
        emoji: "🎂",
        description: "100% Philadelphia. Goûts : Speculoos, Oreo, Nutella, Fruits rouges",
        tag: "Fait maison",
        price: "À partir de 5€90",
      },
      {
        name: "Tiramisu",
        emoji: "🍮",
        description: "Goûts au choix : Classique, Speculoos, Kinder, Nutella",
        tag: "Fait maison",
        price: "À partir de 3€90",
      },
      {
        name: "Choco Bomb Sucrée",
        emoji: "💣",
        description: "6 pièces — Boule de pâte à pizza dorée, cœur fondant : Nutella, Pistache ou autre douceur",
        tag: "6 pièces",
        price: "À partir de 3€90",
      },
      {
        name: "Tacos Sucrée",
        emoji: "🌮",
        description: "Mascarpone + Nutella + Pain brioché + Sucre glace",
        tag: "Gourmand",
        price: "4€90",
      },
      {
        name: "Dubaï Gourmandises",
        emoji: "✨",
        description: "Milkshake Dubaï, Sundae Dubaï, Donut Dubaï — Saveurs pistache irrésistibles",
        tag: "Tendance",
        price: "À partir de 3€50",
      },
    ],
  },
  {
    id: "offres",
    label: "🔥 Offres",
    items: [
      {
        name: "3 Pizzas = 1 Offerte",
        emoji: "🍕",
        description: "3 pizzas achetées = 1 pizza offerte. Valable sur app, à emporter et en livraison.",
        tag: "Offre spéciale",
        price: "Via l'app",
        highlight: true,
      },
      {
        name: "4 Pizzas + Coca 1,5L",
        emoji: "🥤",
        description: "4 pizzas au choix + 1 Coca-Cola 1,5L. Valable sur app, à emporter et en livraison.",
        tag: "Pack famille",
        price: "29€90",
        highlight: true,
      },
    ],
  },
];

const OFFRES_CATS = [
  { id: "all",      label: "Tout",       emoji: "✨" },
  { id: "tacos",    label: "Tacos",      emoji: "🌮" },
  { id: "pizza",    label: "Pizza",      emoji: "🍕" },
  { id: "burger",   label: "Burger",     emoji: "🍔" },
  { id: "bowls",    label: "Bowls",      emoji: "🥣" },
  { id: "sandwichs",label: "Sandwichs",  emoji: "🥖" },
  { id: "desserts", label: "Desserts",   emoji: "🍰" },
  { id: "boissons", label: "Boissons",   emoji: "🥤" },
];

const OFFRES_ITEMS = [
  { img: "23.jpeg", cat: "tacos",     name: "Tacos à Composer",       price: "7€20" },
  { img: "10.jpeg", cat: "pizza",     name: "3 Pizzas = 1 Offerte",   price: "🔥 Offre" },
  { img: "12.jpeg", cat: "pizza",     name: "Pizza Moitié-Moitié",    price: "5€90" },
  { img: "15.jpeg", cat: "pizza",     name: "O'Zapwitch Pizza",       price: "7€20" },
  { img: "16.jpeg", cat: "pizza",     name: "Pizza Pâte Fraîche",     price: "5€90" },
  { img: "18.jpeg", cat: "pizza",     name: "Roulé Pâte à Pizza",     price: "7€20" },
  { img: "2.jpeg",  cat: "burger",    name: "Burger Chaud & Fondant", price: "3€50" },
  { img: "9.jpeg",  cat: "burger",    name: "O'Burgers",              price: "3€90" },
  { img: "1.jpeg",  cat: "bowls",     name: "Bowl à Composer",        price: "6€90" },
  { img: "24.jpeg", cat: "bowls",     name: "Salade à Composer",      price: "6€90" },
  { img: "4.jpeg",  cat: "sandwichs", name: "Back to Baguette",       price: "8,90€" },
  { img: "8.jpeg",  cat: "sandwichs", name: "Fricassé Tunisienne",    price: "4€90" },
  { img: "11.jpeg", cat: "sandwichs", name: "O'Makloub",              price: "7€20" },
  { img: "13.jpeg", cat: "sandwichs", name: "O'Paninis",              price: "5€50" },
  { img: "14.jpeg", cat: "sandwichs", name: "Panuzzi Dolce Vita",     price: "8€90" },
  { img: "19.jpeg", cat: "sandwichs", name: "Panuzzi Ultra Gourmand", price: "8€90" },
  { img: "20.jpeg", cat: "sandwichs", name: "Sandwich Baguette",      price: "8€90" },
  { img: "25.jpeg", cat: "sandwichs", name: "Wrap à Composer",        price: "4€90" },
  { img: "3.jpeg",  cat: "desserts",  name: "Cheesecake & Tiramisu",  price: "3€90" },
  { img: "6.jpeg",  cat: "desserts",  name: "Choco Bomb Sucrée",      price: "3€90" },
  { img: "22.jpeg", cat: "desserts",  name: "Sundae à Composer",      price: "4€90" },
  { img: "31.jpeg", cat: "desserts",  name: "Tacos Sucrée",           price: "4€90" },
  { img: "5.jpeg",  cat: "boissons",  name: "Dubaï Gourmandises",     price: "3€50" },
  { img: "7.jpeg",  cat: "boissons",  name: "Milkshake à Composer",   price: "5€90" },
  { img: "21.jpeg", cat: "boissons",  name: "Smoothie au Choix",      price: "4€" },
];

const OFFRES_GROUPS = [
  { id: "sale",  emoji: "🧆", label: "Salé",              cats: ["tacos", "pizza", "burger", "bowls", "sandwichs"] },
  { id: "sucre", emoji: "🍰", label: "Sucré & Boissons",   cats: ["desserts", "boissons"] },
];

const HOURS = [
  { day: "Lundi", h: "11h–14h / 18h–23h" },
  { day: "Mardi", h: "11h–14h / 18h–23h" },
  { day: "Mercredi", h: "11h–14h / 18h–23h" },
  { day: "Jeudi", h: "11h–14h / 18h–00h" },
  { day: "Vendredi", h: "11h–13h30 / 17h–01h" },
  { day: "Samedi", h: "11h–14h / 17h–01h" },
  { day: "Dimanche", h: "11h–14h / 17h–00h" },
];

function useIntersection(ref: React.RefObject<HTMLElement | null>, threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

function SplashScreen({ onDone }: { onDone: () => void }) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setLeaving(true), 2000);
    const t2 = setTimeout(() => {
      document.body.style.overflow = "";
      onDone();
    }, 2800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, [onDone]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "28px",
        opacity: leaving ? 0 : 1,
        transform: leaving ? "scale(1.04)" : "scale(1)",
        transition: "opacity 0.75s ease, transform 0.75s ease",
        pointerEvents: leaving ? "none" : "all",
      }}
    >
      {/* Pulsing glow */}
      <div style={{
        position: "absolute",
        width: "520px",
        height: "520px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,215,0,0.16) 0%, transparent 70%)",
        animation: "splashGlow 2.6s ease-in-out infinite",
      }} />
      {/* Expanding ring */}
      <div style={{
        position: "absolute",
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        border: "1px solid rgba(255,215,0,0.3)",
        animation: "splashRing 2.2s ease-out infinite",
      }} />

      {/* Perspective wrapper for coin flip */}
      <div style={{ perspective: "900px", position: "relative" }}>
        <img
          src="/gallery/logo/Logo Street Corner.svg"
          alt="Street Corner"
          className="coin-flip-in"
          style={{ width: "min(72vw, 320px)", height: "auto", display: "block" }}
        />
      </div>

      <p
        className="slogan-reveal-in"
        style={{
          color: "rgba(255,255,255,0.42)",
          fontSize: "0.78rem",
          textTransform: "uppercase",
          fontWeight: 700,
          position: "relative",
          textAlign: "center",
        }}
      >
        Y&apos;en a pour tous les goûts
      </p>
    </div>
  );
}

function Logo() {
  return (
    <img
      src="/gallery/logo/Logo Street Corner.svg"
      alt="Street Corner"
      style={{ height: "80px", width: "auto" }}
    />
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#accueil",  label: "Accueil" },
    { href: "#carte",    label: "Notre Carte" },
    { href: "#offres",   label: "Nos Offres" },
    { href: "#boutique", label: "La Boutique" },
    { href: "#propos",   label: "À Propos" },
    { href: "#contact",  label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "py-3" : "py-5"
    }`}
      style={{ background: scrolled ? "rgba(0,0,0,0.97)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none" }}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Logo />
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="nav-link text-white/80 font-semibold text-sm tracking-wider uppercase">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:0363560232" className="text-sm font-bold tracking-wide transition-colors"
            style={{ color: "rgba(255,255,255,0.7)" }}
            onMouseOver={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#FFD700"; }}
            onMouseOut={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)"; }}>
            📞 03 63 56 02 32
          </a>
          <a href="#contact" className="yellow-btn px-5 py-2 rounded-full text-sm font-black">
            Nous Trouver
          </a>
        </div>
        <button className="md:hidden text-white p-2 flex flex-col gap-1.5" onClick={() => setMobileOpen(!mobileOpen)}>
          <div className={`w-6 h-0.5 bg-white transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 bg-white transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-white transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden px-6 py-4" style={{ background: "rgba(0,0,0,0.98)", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          {links.map(l => (
            <a key={l.href} href={l.href} className="block py-3 text-white/80 font-semibold border-b border-white/5"
              onClick={() => setMobileOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="block mt-4 yellow-btn px-5 py-3 rounded-full text-center font-black">
            Nous Trouver
          </a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section id="accueil" className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #FFD700, transparent)" }} />
        <div className="absolute bottom-1/3 left-0 w-64 h-64 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #FFA500, transparent)" }} />
        {["🍕", "🌮", "🥙", "🍦", "🥣"].map((emoji, i) => (
          <div key={i} className="absolute text-5xl animate-float" style={{
            opacity: 0.08,
            left: `${8 + i * 20}%`,
            top: `${15 + (i % 3) * 22}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${3 + i * 0.4}s`,
          }}>{emoji}</div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="tag inline-block mb-6 animate-fade-up">🔥 Fast Food — Pontarlier</div>

        <h1 className="animate-fade-up delay-100 font-black text-white leading-none mb-4"
          style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}>
          STREET<br />
          <span style={{ color: "#FFD700", textShadow: "0 0 60px rgba(255,215,0,0.4)" }}>CORNER</span>
        </h1>

        <div className="animate-fade-up delay-200 flex justify-center gap-1 mb-6" style={{ minHeight: "40px" }}>
          {mounted && Array.from({ length: 11 }).map((_, i) => (
            <div key={i} className="w-1.5 rounded-full" style={{
              height: `${18 + Math.abs(Math.sin(i * 0.8)) * 22}px`,
              background: "linear-gradient(to bottom, #FFD700, #FFA500)",
              opacity: 0.5 + Math.cos(i) * 0.3,
            }} />
          ))}
        </div>

        <p className="animate-fade-up delay-300 text-xl md:text-2xl font-light italic mb-10" style={{ color: "rgba(255,255,255,0.65)" }}>
          Y&apos;en a pour tous les goûts
        </p>

        <div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
          <div className="relative">
            <div className="pulse-ring" />
            <a href="#carte" className="yellow-btn relative px-10 py-4 rounded-full text-lg font-black animate-glow">
              Voir la Carte
            </a>
          </div>
          <a href="#offres" className="px-10 py-4 rounded-full text-lg font-bold text-white transition-all"
            style={{ border: "2px solid rgba(255,255,255,0.2)" }}
            onMouseOver={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#FFD700"; (e.currentTarget as HTMLAnchorElement).style.color = "#FFD700"; }}
            onMouseOut={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.2)"; (e.currentTarget as HTMLAnchorElement).style.color = "white"; }}>
            Nos Offres →
          </a>
        </div>

        <div className="animate-fade-up delay-500 flex justify-center items-center gap-10 flex-wrap">
          {[{ v: "7j/7", l: "Ouvert" }, { v: "100%", l: "Frais" }, { v: "🚴", l: "Livraison" }].map((s, i) => (
            <div key={i} className="text-center">
              <div className="stat-number text-2xl font-black">{s.v}</div>
              <div className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>{s.l}</div>
            </div>
          ))}
          <div style={{ width: "1px", height: "40px", background: "rgba(255,255,255,0.1)" }} className="hidden sm:block" />
          <img src="/gallery/logo/halal-badge.svg" alt="Halal Certifié" style={{ height: "72px", width: "72px" }} />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full flex items-start justify-center p-1.5"
          style={{ border: "2px solid rgba(255,255,255,0.25)" }}>
          <div className="w-1 h-2.5 rounded-full animate-float" style={{ background: "rgba(255,255,255,0.5)" }} />
        </div>
      </div>
    </section>
  );
}

function MenuSection() {
  const [activeTab, setActiveTab] = useState("sale");
  const ref = useRef<HTMLElement>(null);
  const visible = useIntersection(ref);
  const activeCategory = MENU_CATEGORIES.find(c => c.id === activeTab)!;

  return (
    <section id="carte" ref={ref} className="py-24 px-6" style={{ background: "rgba(0,0,0,0.5)" }}>
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="tag inline-block mb-4">Notre Carte</span>
          <h2 className="font-black text-white uppercase" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Nos <span style={{ color: "#FFD700" }}>Spécialités</span>
          </h2>
          <div className="section-divider mt-6 max-w-xs mx-auto" />
        </div>

        <div className={`flex justify-center gap-6 mb-12 flex-wrap pb-2 ${visible ? "animate-fade-up delay-200" : "opacity-0"}`}
          style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          {MENU_CATEGORIES.map(cat => (
            <button key={cat.id}
              className={`menu-tab text-sm md:text-base ${activeTab === cat.id ? "active" : ""}`}
              onClick={() => setActiveTab(cat.id)}>
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeCategory.items.map((item, i) => (
            <div key={item.name}
              className={`glass-card rounded-2xl p-6 card-hover ${visible ? "animate-fade-up" : "opacity-0"}`}
              style={{
                animationDelay: `${0.05 + i * 0.07}s`,
                background: (item as {highlight?: boolean}).highlight ? "rgba(255,215,0,0.06)" : undefined,
                borderColor: (item as {highlight?: boolean}).highlight ? "rgba(255,215,0,0.25)" : undefined,
              }}>
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{item.emoji}</span>
                <span className="tag text-xs">{item.tag}</span>
              </div>
              <h3 className="font-black text-white text-lg mb-2 uppercase tracking-wide">{item.name}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>{item.description}</p>
              {(item as {variants?: {label: string; price: string}[]}).variants ? (
                <div className="space-y-2">
                  {(item as {variants: {label: string; price: string}[]}).variants.map(v => (
                    <div key={v.label} className="flex justify-between items-center text-sm">
                      <span style={{ color: "rgba(255,255,255,0.55)" }}>{v.label}</span>
                      <span className="font-black" style={{ color: "#FFD700" }}>{v.price}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="price-tag">{(item as {price?: string}).price}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TickerStrip() {
  const items = ["🌮 Tacos", "🍕 Pizza Fraîche", "🍔 Burger", "🥣 Bowl", "🥖 Baguette", "🍰 Desserts", "🥤 Milkshake", "🫓 Panuzzi", "🌮 Tacos", "🍕 Pizza Fraîche", "🍔 Burger", "🥣 Bowl", "🥖 Baguette", "🍰 Desserts", "🥤 Milkshake", "🫓 Panuzzi"];
  return (
    <div className="overflow-hidden py-3 relative" style={{ background: "#FFD700" }}>
      <div className="ticker-track animate-ticker flex gap-12">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-black font-black text-sm uppercase tracking-widest flex-shrink-0 flex items-center gap-2">
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-black/30 inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
}

type OffreItem = typeof OFFRES_ITEMS[0];

function OffreCardH({ item, index, onClick }: { item: OffreItem; index: number; onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 10;
    const y = ((e.clientY - r.top)  / r.height - 0.5) * -10;
    el.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) scale(1.04)`;
  };

  const onLeave = () => {
    const el = cardRef.current;
    if (el) el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      ref={cardRef}
      className="offre-card flex-shrink-0 rounded-2xl animate-scale-in-up group"
      style={{
        animationDelay: `${index * 0.06}s`,
        transition: "transform 0.13s ease, box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={`/gallery/offres/${item.img}`}
          alt={item.name}
          style={{ height: "340px", width: "auto", display: "block" }}
        />
        {/* hover overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, transparent 55%)" }}
        >
          <p className="text-white font-black text-sm uppercase tracking-wide leading-tight mb-1.5">{item.name}</p>
          <span className="inline-block px-3 py-0.5 rounded-full text-xs font-black w-fit"
            style={{ background: "rgba(255,215,0,0.18)", color: "#FFD700", border: "1px solid rgba(255,215,0,0.4)" }}>
            {item.price}
          </span>
        </div>
      </div>
    </div>
  );
}

function Lightbox({ item, onClose }: { item: OffreItem; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="relative max-h-[90vh] max-w-lg w-full mx-4 flex flex-col items-center"
        onClick={e => e.stopPropagation()}>
        <button
          className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider flex items-center gap-2"
          onClick={onClose}>
          Fermer ✕
        </button>
        <img
          src={`/gallery/offres/${item.img}`}
          alt={item.name}
          className="rounded-2xl max-h-[80vh] w-full object-contain"
          style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.6)" }}
        />
        <div className="mt-4 text-center">
          <p className="text-white font-black text-lg uppercase tracking-wide">{item.name}</p>
          <span className="mt-2 inline-block px-4 py-1 rounded-full font-black text-sm"
            style={{ background: "linear-gradient(135deg,#FFD700,#FFA500)", color: "#000" }}>
            {item.price}
          </span>
        </div>
      </div>
    </div>
  );
}

function OffresSection() {
  const [lightbox, setLightbox] = useState<OffreItem | null>(null);
  const ref = useRef<HTMLElement>(null);
  const visible = useIntersection(ref, 0.05);

  const rows = OFFRES_GROUPS.map(g => ({
    ...g,
    items: OFFRES_ITEMS.filter(i => g.cats.includes(i.cat)),
  }));

  return (
    <section id="offres" ref={ref} className="py-24" style={{ background: "#050505" }}>
      {lightbox && <Lightbox item={lightbox} onClose={() => setLightbox(null)} />}

      {/* Header */}
      <div className={`text-center mb-16 px-6 ${visible ? "animate-fade-up" : "opacity-0"}`}>
        <span className="tag inline-block mb-4">Nos Spécialités</span>
        <h2 className="font-black text-white uppercase" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
          Nos{" "}
          <span style={{
            background: "linear-gradient(135deg, #FFD700, #FFA500, #FF6B00)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>Offres</span>
        </h2>
        <div className="section-header-line mt-6 max-w-xs mx-auto" />
        <p className="mt-4 text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
          Cliquez sur un plat pour voir l&apos;affiche complète
        </p>
      </div>

      {/* Netflix rows */}
      <div className="space-y-12">
        {rows.map((row, ri) => (
          <div
            key={row.id}
            className={visible ? "animate-fade-up" : "opacity-0"}
            style={{ animationDelay: `${ri * 0.08}s` }}
          >
            {/* Row label */}
            <div className="flex items-center gap-3 mb-5 px-6">
              <span className="text-xl">{row.emoji}</span>
              <h3 className="font-black text-white text-base uppercase tracking-widest">{row.label}</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.35)" }}>
                {row.items.length}
              </span>
              <div className="flex-1" style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />
            </div>

            {/* Horizontal scroll row */}
            <div
              className="flex gap-4 overflow-x-auto px-6 pb-3"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {row.items.map((item, i) => (
                <OffreCardH
                  key={item.img}
                  item={item}
                  index={i}
                  onClick={() => setLightbox(item)}
                />
              ))}
              {/* Fade-out sentinel */}
              <div className="flex-shrink-0 w-8" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function GallerySection() {
  const ref = useRef<HTMLElement>(null);
  const visible = useIntersection(ref);

  const photos = [
    { src: "/gallery/interieur-comptoir.jpg", alt: "Notre salle principale", span: "md:col-span-2", ratio: "16/9" },
    { src: "/gallery/bornes-commande.jpg", alt: "Bornes de commande", span: "", ratio: "3/4" },
    { src: "/gallery/facade.jpg", alt: "Notre façade", span: "", ratio: "3/4" },
    { src: "/gallery/interieur-lounge.jpg", alt: "Notre espace lounge", span: "md:col-span-2", ratio: "16/9" },
  ];

  return (
    <section id="boutique" ref={ref} className="py-24 px-6" style={{ background: "#080808" }}>
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="tag inline-block mb-4">En Images</span>
          <h2 className="font-black text-white uppercase" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            La <span style={{ color: "#FFD700" }}>Boutique</span>
          </h2>
          <div className="section-divider mt-6 max-w-xs mx-auto" />
          <p className="mt-4 text-base" style={{ color: "rgba(255,255,255,0.45)" }}>
            Venez nous rendre visite au cœur de Pontarlier
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl ${photo.span} ${visible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.12}s`, aspectRatio: photo.ratio }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-5"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)" }}
              >
                <span className="text-white text-sm font-semibold tracking-wide">{photo.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const visible = useIntersection(ref);

  const values = [
    { icon: "🌿", title: "Ingrédients Frais", desc: "Produits frais sélectionnés chaque jour pour garantir qualité et saveur." },
    { icon: "🔥", title: "Fait avec Passion", desc: "Chaque plat préparé avec soin par notre équipe dédiée." },
    { icon: "🎨", title: "Recettes Uniques", desc: "Créations originales qui mélangent les saveurs du monde." },
    { icon: "🚀", title: "Service Rapide", desc: "Livraison express ou à emporter, on s'adapte à votre rythme." },
  ];

  return (
    <section id="propos" ref={ref} className="py-24 px-6" style={{ background: "#0d0d0d" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={visible ? "animate-fade-left" : "opacity-0"}>
            <span className="tag inline-block mb-4">Notre Histoire</span>
            <h2 className="font-black text-white uppercase mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              À Propos de<br /><span style={{ color: "#FFD700" }}>Street Corner</span>
            </h2>
            <p className="text-lg leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
              Street Corner, c&apos;est le fast food qui ose tout mélanger. Tacos, pizzas, baguettes farcies,
              bowls gourmands, panuzzis italiens… Ici, y&apos;en a vraiment pour tous les goûts.
            </p>
            <p className="leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
              Installés au cœur de Pontarlier, on propose une carte généreuse avec des produits frais,
              des recettes uniques et des portions XXL. Du salé au sucré, on a tout ce qu&apos;il faut
              pour combler les plus grandes faims.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Tacos", "Pizzas", "Bowls", "Baguettes", "Panuzzis", "Desserts"].map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
          <div className={`grid grid-cols-2 gap-4 ${visible ? "animate-fade-right" : "opacity-0"}`}>
            {values.map((v, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 card-hover" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-3xl mb-3">{v.icon}</div>
                <h4 className="font-bold text-white mb-2 text-sm uppercase tracking-wide">{v.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const visible = useIntersection(ref);

  const dayNames = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  const todayName = dayNames[new Date().getDay()];
  const todayHours = HOURS.find(h => h.day === todayName);

  return (
    <section id="contact" ref={ref} className="py-24 px-6" style={{ background: "rgba(0,0,0,0.6)" }}>
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="tag inline-block mb-4">Nous Trouver</span>
          <h2 className="font-black text-white uppercase" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Horaires & <span style={{ color: "#FFD700" }}>Contact</span>
          </h2>
          <div className="section-divider mt-6 max-w-xs mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className={`space-y-5 ${visible ? "animate-fade-left" : "opacity-0"}`}>
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl">📍</span>
                <div>
                  <h3 className="font-bold text-white uppercase tracking-wide mb-2">Adresse</h3>
                  <p style={{ color: "rgba(255,255,255,0.6)" }}>33 Rue de la Libération</p>
                  <p style={{ color: "rgba(255,255,255,0.6)" }}>25300 Pontarlier</p>
                  <a href="https://maps.google.com/?q=33+Rue+de+la+Liberation+25300+Pontarlier"
                    target="_blank" rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm font-bold transition-colors"
                    style={{ color: "#FFD700" }}>
                    Voir sur Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {todayHours && (
              <div className="rounded-2xl p-4" style={{ background: "rgba(255,215,0,0.08)", border: "1px solid rgba(255,215,0,0.3)" }}>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-sm font-bold uppercase tracking-wide">Aujourd&apos;hui</span>
                </div>
                <p className="font-bold text-white">{todayHours.day} : {todayHours.h}</p>
              </div>
            )}

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl">📱</span>
                <div>
                  <h3 className="font-bold text-white uppercase tracking-wide mb-2">Commandez en ligne</h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.55)" }}>
                    Livraison à domicile et commande à emporter via notre application.
                    3 pizzas achetées = 1 offerte sur l&apos;app !
                  </p>
                  <span className="tag">Livraison disponible 🚴</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`glass-card rounded-2xl overflow-hidden ${visible ? "animate-fade-right" : "opacity-0"}`}>
            <div className="px-6 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <h3 className="font-black text-white uppercase tracking-wide flex items-center gap-2">
                <span>🕐</span> Horaires d&apos;Ouverture
              </h3>
            </div>
            <div>
              {HOURS.map((h) => {
                const isToday = h.day === todayName;
                return (
                  <div key={h.day}
                    className="flex justify-between items-center px-6 py-3.5 transition-colors"
                    style={{
                      background: isToday ? "rgba(255,215,0,0.08)" : undefined,
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                    }}>
                    <span className="font-semibold text-sm" style={{ color: isToday ? "#FFD700" : "rgba(255,255,255,0.65)" }}>
                      {isToday && <span className="mr-2">●</span>}{h.day}
                    </span>
                    <span className="text-sm" style={{ color: isToday ? "white" : "rgba(255,255,255,0.45)", fontWeight: isToday ? "700" : "400" }}>
                      {h.h}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className={`rounded-2xl overflow-hidden ${visible ? "animate-fade-up delay-400" : "opacity-0"}`}
          style={{ height: "320px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701!2d6.3560!3d46.9025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDU0JzA5LjAiTiA2wrAyMScyMS42IkU!5e0!3m2!1sfr!2sfr!4v1"
            width="100%" height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Street Corner Pontarlier"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 px-6" style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Logo />
        <div className="text-center">
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
            © {new Date().getFullYear()} Street Corner — Tous droits réservés
          </p>
          <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.2)" }}>
            33 Rue de la Libération, 25300 Pontarlier
          </p>
          <div className="flex justify-center gap-4 mt-2">
            {[
              { label: "Support", href: "/support" },
              { label: "Confidentialité", href: "/politique-de-confidentialite" },
              { label: "CGU / CGV", href: "/cgv" },
            ].map(l => (
              <a key={l.href} href={l.href} className="text-xs transition-colors"
                style={{ color: "rgba(255,255,255,0.22)", textDecoration: "none" }}
                onMouseOver={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#FFD700"; }}
                onMouseOut={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.22)"; }}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>Ouvert 7j/7</span>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <main style={{ minHeight: "100vh", background: "#0a0a0a" }}>
      {!splashDone && <SplashScreen onDone={() => setSplashDone(true)} />}
      <Navbar />
      <Hero />
      <TickerStrip />
      <GallerySection />
      <MenuSection />
      <OffresSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
