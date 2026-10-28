import PhoneShot from "@/components/PhoneShot";

export type ShowcaseItem = { title: string; line: string; src: string; alt: string };

export default function Showcase({ items, variant = "phone" }: { items: ShowcaseItem[]; variant?: "phone" | "ilus" }) {
  return (
    <div>
      {items.map((it, i) => (
        <section key={it.title} style={{ background: i % 2 === 0 ? "#FDFCF8" : "#F9F5EB" }} className="px-6 py-16 md:py-24">
          <div className={`max-w-[440px] md:max-w-[960px] mx-auto flex flex-col items-center gap-10 md:gap-20 ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}>
            {variant === "phone" ? (
              <div className="w-[230px] md:w-[270px] shrink-0">
                <PhoneShot src={it.src} alt={it.alt} />
              </div>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={it.src} alt={it.alt} loading="lazy" className="w-full max-w-[320px] md:max-w-[400px] shrink-0" style={{ height: "auto", borderRadius: "28px" }} />
            )}
            <div className="text-center md:text-left md:flex-1">
              <h2 className="text-[28px] md:text-[40px]" style={{ fontWeight: 700, color: "#333333", lineHeight: 1.15, letterSpacing: "-0.4px", margin: "0 0 12px", textWrap: "balance" }}>
                {it.title}
              </h2>
              <p className="text-[16px] md:text-[19px]" style={{ color: "#838381", lineHeight: 1.5, marginTop: 0, marginBottom: 0 }}>
                {it.line}
              </p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
