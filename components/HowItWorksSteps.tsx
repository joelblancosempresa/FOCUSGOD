/* eslint-disable @next/next/no-img-element */
const card: React.CSSProperties = {
  background: "#fff",
  borderRadius: "22px",
  padding: "22px 18px",
  boxShadow: "0 2px 14px rgba(0,0,0,0.06)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: "12px",
};

const num: React.CSSProperties = {
  width: "28px",
  height: "28px",
  borderRadius: "50%",
  background: "#f0492e",
  color: "#fff",
  fontSize: "14px",
  fontWeight: 700,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function HowItWorksSteps({ background = "#FDFCF8" }: { background?: string }) {
  return (
    <section style={{ background }} className="px-6 py-14 md:py-20">
      <div className="max-w-[440px] md:max-w-[960px] mx-auto">
        <h2 className="fg-h2 md:text-[40px]" style={{ fontWeight: 700, color: "#333333", textAlign: "center", lineHeight: 1.15, letterSpacing: "-0.4px", margin: "0 0 28px" }}>
          Así funciona
        </h2>
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          <div style={card}>
            <span style={num}>1</span>
            <div style={{ display: "flex", gap: "8px", height: "72px", alignItems: "center" }}>
              {["instagram", "tiktok", "youtube"].map((a) => (
                <img key={a} src={`/ilus/onb-app-${a}.png`} alt="" style={{ width: "48px", height: "48px", borderRadius: "12px" }} />
              ))}
            </div>
            <p style={{ fontSize: "17px", fontWeight: 700, color: "#333", margin: 0 }}>Eliges lo que te distrae</p>
            <p style={{ fontSize: "14px", color: "#838381", lineHeight: 1.5, margin: 0 }}>Instagram, TikTok, YouTube o cualquier app. Se quedan cerradas.</p>
          </div>
          <div style={card}>
            <span style={num}>2</span>
            <img src="/ilus/ilus-orar.png" alt="" style={{ height: "72px", width: "auto" }} />
            <p style={{ fontSize: "17px", fontWeight: 700, color: "#333", margin: 0 }}>Pasas tiempo con Dios</p>
            <p style={{ fontSize: "14px", color: "#838381", lineHeight: 1.5, margin: 0 }}>Oras con los ojos cerrados, lees la Biblia o sales a caminar con Él.</p>
          </div>
          <div style={card}>
            <span style={num}>3</span>
            <img src="/ilus/onb-velita.png" alt="" style={{ height: "72px", width: "auto" }} />
            <p style={{ fontSize: "17px", fontWeight: 700, color: "#333", margin: 0 }}>Se abren tus apps</p>
            <p style={{ fontSize: "14px", color: "#838381", lineHeight: 1.5, margin: 0 }}>Y tu vela crece. Cada día que pones a Dios primero, se nota.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
