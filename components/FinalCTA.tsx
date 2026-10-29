import PhoneTimeStats from "@/components/PhoneTimeStats";
import { CTA_HREF, CTA_PROPS, CTA_LABEL, CTA_NOTE } from "@/lib/cta";

export default function FinalCTA() {
  return (
    <PhoneTimeStats>
      <section style={{ background: "#f0492e" }} className="px-6 py-12 md:py-16">
        <div className="max-w-[440px] md:max-w-[640px] mx-auto text-center flex flex-col items-center">
          <h2 className="fg-h2 md:text-[40px]" style={{ color: "#fff", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.3px", margin: "0 0 24px", textWrap: "balance" }}>
            FocusGod te ayuda a devolverle ese tiempo a Dios.
          </h2>
          <a
            href={CTA_HREF}
            {...CTA_PROPS}
            className="w-full md:w-[320px]"
            style={{ display: "block", background: "#fff", color: "#f0492e", fontWeight: 700, fontSize: "16px", padding: "16px 32px", borderRadius: "14px", textDecoration: "none", textAlign: "center", boxShadow: "0 4px 0 0 rgba(0,0,0,0.15)" }}
          >
            {CTA_LABEL}
          </a>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.8)", margin: "12px 0 0" }}>{CTA_NOTE}</p>
        </div>
      </section>
    </PhoneTimeStats>
  );
}
