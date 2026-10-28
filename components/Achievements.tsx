const items = [
  { name: "En llamas", line: "Tu mejor racha", src: "/ilus/achievement-flame.png" },
  { name: "Buscador", line: "Oraciones completadas", src: "/ilus/achievement-candle.png" },
  { name: "En la Palabra", line: "Capítulos leídos", src: "/ilus/achievement-bible.png" },
  { name: "Guardián", line: "Días protegido", src: "/ilus/achievement-lock.png" },
  { name: "Madrugador", line: "Oras antes de las 9:00", src: "/ilus/achievement-sunrise.png" },
  { name: "Noche de paz", line: "Oras o lees de noche", src: "/ilus/achievement-moon.png" },
];

export default function Achievements() {
  return (
    <section style={{ background: "#F9F5EB" }} className="px-6 py-16 md:py-24">
      <div className="max-w-[440px] md:max-w-[960px] mx-auto text-center">
        <h2 className="text-[28px] md:text-[40px]" style={{ fontWeight: 700, color: "#333333", lineHeight: 1.15, letterSpacing: "-0.4px", margin: "0 0 12px" }}>
          Logros que celebran tu constancia
        </h2>
        <p className="text-[16px] md:text-[19px]" style={{ color: "#838381", lineHeight: 1.5, margin: "0 0 36px" }}>
          Cada día que pones a Dios primero cuenta. Y se nota.
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-x-4 gap-y-8">
          {items.map((it) => (
            <div key={it.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={it.src} alt="" loading="lazy" style={{ width: "76px", height: "76px", objectFit: "contain" }} />
              <p style={{ fontSize: "15px", fontWeight: 700, color: "#333", margin: 0 }}>{it.name}</p>
              <p style={{ fontSize: "12px", color: "#838381", lineHeight: 1.35, margin: 0 }}>{it.line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
