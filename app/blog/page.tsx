"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const categories = ["Todo", "Redes Sociales", "Pornografía", "Salud Digital", "Fe & Tecnología", "Oración"];

const posts = [
  {
    slug: "instagram-disenado-para-robarte-la-atencion",
    category: "Redes Sociales",
    date: "Oct 2, 2026",
    title: "Instagram fue diseñado para robarte la atención — y funciona",
    excerpt: "Los ingenieros de Meta no diseñaron una red social. Diseñaron una máquina de dopamina. Aquí está la ciencia detrás de cada función que te tiene pegado a la pantalla.",
    color: "#e8f0fe",
  },
  {
    slug: "pornografia-cerebro-lo-que-la-ciencia-dice",
    category: "Pornografía",
    date: "Sep 28, 2026",
    title: "Lo que la pornografía le hace a tu cerebro: la neurociencia lo explica",
    excerpt: "La pornografía activa los mismos circuitos de recompensa que la cocaína. No es una metáfora — es neurología.",
    color: "#fce8e8",
  },
  {
    slug: "tiktok-scroll-infinito-dopamina",
    category: "Redes Sociales",
    date: "Sep 20, 2026",
    title: "TikTok y el scroll infinito: cómo destruyen tu concentración",
    excerpt: "El scroll infinito fue inventado por un ingeniero que lo llama 'el mayor error de su vida'.",
    color: "#fff0e0",
  },
  {
    slug: "movil-al-despertar-destruye-tu-dia",
    category: "Salud Digital",
    date: "Sep 15, 2026",
    title: "Por qué revisar el móvil al despertar destruye literalmente tu día",
    excerpt: "Los primeros 30 minutos del día determinan tu estado mental las siguientes horas.",
    color: "#e8f5e9",
  },
  {
    slug: "facebook-experimento-emocional",
    category: "Redes Sociales",
    date: "Sep 8, 2026",
    title: "Facebook manipuló las emociones de 700.000 usuarios sin decirles nada",
    excerpt: "En 2014, Facebook publicó un estudio confesando que había manipulado los feeds de casi un millón de personas.",
    color: "#f3e8ff",
  },
  {
    slug: "notificaciones-trampa-dopamina",
    category: "Salud Digital",
    date: "Sep 1, 2026",
    title: "La trampa de las notificaciones: por qué no puedes ignorarlas",
    excerpt: "Cada notificación activa una pequeña descarga de dopamina — suficiente para interrumpir cualquier tarea.",
    color: "#fff8e1",
  },
  {
    slug: "pantalla-antes-de-dormir-fe",
    category: "Fe & Tecnología",
    date: "Ago 25, 2026",
    title: "Pantalla antes de dormir: el enemigo silencioso de tu fe",
    excerpt: "La luz azul suprime la melatonina. El daño espiritual es igual de real.",
    color: "#e8f0fe",
  },
  {
    slug: "adiccion-redes-sociales-fe-cristiana",
    category: "Fe & Tecnología",
    date: "Ago 18, 2026",
    title: "Adicción a las redes: lo que la fe cristiana sabe que la ciencia acaba de descubrir",
    excerpt: "La Biblia lleva siglos hablando de idolatría. Hoy los psicólogos lo llaman 'uso compulsivo de tecnología'.",
    color: "#fce8e8",
  },
];

const FEATURED = posts[0];
const ALL_REST = posts.slice(1);

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("Todo");

  const filtered = activeCategory === "Todo"
    ? ALL_REST
    : ALL_REST.filter(p => p.category === activeCategory);

  return (
    <>
      <Navbar />
      <main style={{ background: "#ffffff", minHeight: "100vh", paddingTop: "76px" }}>

        {/* Title */}
        <div className="max-w-[420px] md:max-w-6xl mx-auto px-5 pt-6 pb-4">
          <h1 style={{ fontSize: "28px", fontWeight: 700, color: "#1a1a1a", letterSpacing: "-0.3px" }}>
            Fe, Mente & Pantalla
          </h1>
        </div>

        {/* Featured post */}
        <div className="max-w-[420px] md:max-w-6xl mx-auto px-5 pb-6">
          <Link href={`/blog/${FEATURED.slug}`} style={{ textDecoration: "none", display: "block" }}>
            <div style={{
              background: "#fff",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
              border: "1px solid rgba(0,0,0,0.06)",
            }} className="md:flex">
              <div style={{
                background: FEATURED.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "48px",
              }} className="h-[200px] md:h-auto md:w-[320px] md:flex-shrink-0">
                📖
              </div>
              <div style={{ padding: "16px" }} className="md:py-8 md:px-8 md:flex md:flex-col md:justify-center">
                <p style={{ fontSize: "11px", color: "#888", marginBottom: "6px" }}>{FEATURED.date}</p>
                <h2 style={{ fontSize: "17px", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.35, marginBottom: "8px" }} className="md:text-2xl">
                  {FEATURED.title}
                </h2>
                <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.55 }} className="md:text-sm md:max-w-lg">
                  {FEATURED.excerpt}
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Category pills */}
        <div
          className="max-w-[420px] md:max-w-6xl mx-auto"
          style={{
            display: "flex",
            gap: "8px",
            overflowX: "auto",
            padding: "0 20px 20px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              style={{
                flexShrink: 0,
                padding: "8px 18px",
                borderRadius: "14px",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                border: activeCategory === c ? "none" : "1.5px solid rgba(0,0,0,0.12)",
                background: activeCategory === c ? "#f0492e" : "#fff",
                color: activeCategory === c ? "#fff" : "#333",
                boxShadow: activeCategory === c ? "0 4px 0 0 #bf321c" : "none",
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Post grid */}
        <div className="max-w-[420px] md:max-w-6xl mx-auto px-5 pb-10 grid gap-4 md:grid-cols-3">
          {filtered.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: "none", display: "block" }}>
              <div style={{
                background: "#fff",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
                border: "1px solid rgba(0,0,0,0.06)",
              }}>
                <div style={{
                  width: "100%",
                  height: "180px",
                  background: p.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "44px",
                }}>
                  📖
                </div>
                <div style={{ padding: "16px" }}>
                  <p style={{ fontSize: "11px", color: "#888", marginBottom: "6px" }}>{p.date}</p>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.35, marginBottom: "6px" }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.55 }}>
                    {p.excerpt.length > 90 ? p.excerpt.slice(0, 90) + "…" : p.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </main>
      <Footer />
    </>
  );
}
