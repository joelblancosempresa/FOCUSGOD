import Image from "next/image";

export default function Reviews() {
  return (
    <section style={{ background: "#FCFBF2" }} className="px-6 py-14 md:py-24">
      <div className="max-w-[420px] md:max-w-[760px] mx-auto">
        <h2 className="text-[26px] md:text-[35px]" style={{ fontWeight: 700, color: "#333333", letterSpacing: "-0.2px", textAlign: "center", lineHeight: 1.2, margin: "0 0 28px" }}>
          Hecho por un cristiano, para cristianos
        </h2>

        <div style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }} className="p-6 md:p-10">
          <svg width="52" height="40" viewBox="0 0 52 40" fill="none" style={{ marginBottom: "16px" }} aria-hidden="true">
            <path d="M0 40V16C0 7.163 7.163 0 16 0H20V10H16C12.686 10 10 12.686 10 16V22H20V40H0Z" fill="#d4d0c8"/>
            <path d="M28 40V16C28 7.163 35.163 0 44 0H48V10H44C40.686 10 38 12.686 38 16V22H48V40H28Z" fill="#d4d0c8"/>
          </svg>
          <div className="text-[16px] md:text-[18px]" style={{ color: "#555", lineHeight: 1.65, display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ margin: 0, fontWeight: 600, color: "#333" }}>
              Hice FocusGod para quienes quieren dejar de darle a su móvil lo que le pertenece a Dios.
            </p>
            <p style={{ margin: 0 }}>
              Por eso no hay anuncios, no hay cuenta que crear y tus oraciones no salen de tu iPhone. Solo tú y Dios, cada día.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "24px" }}>
            <Image src="/app-icon-vela.png" alt="" width={40} height={40} style={{ borderRadius: "10px" }} />
            <div>
              <p style={{ fontSize: "14px", fontWeight: 700, color: "#333", margin: 0 }}>Joel Blanco</p>
              <p style={{ fontSize: "13px", color: "#b0ada8", margin: "2px 0 0" }}>Creador de FocusGod</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
