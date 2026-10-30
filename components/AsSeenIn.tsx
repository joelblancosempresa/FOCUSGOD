// «Un método basado en la ciencia»: como la sección de prensa de Opal, una tarjeta por fuente
// con una sola frase que se corta con puntos suspensivos. Cada una abre el estudio o la noticia.
// Las frases resumen lo que dice cada estudio, sin exagerarlo.
// Logotipos de cada fuente en un mismo gris (como Opal). Cada uno con el tamaño que hace que
// todos ocupen más o menos la misma superficie, aunque unos sean alargados y otros compactos.
const LOGO: Record<string, { src: string; h: number; w: number }> = {
  harvard: { src: "/logos/harvard.png", h: 30, w: 119 },
  abs: { src: "/logos/abs.png", h: 16, w: 265 },
  pew: { src: "/logos/pew.png", h: 23, w: 155 },
  penn: { src: "/logos/penn.png", h: 34, w: 106 },
  texas: { src: "/logos/texas.png", h: 32, w: 113 },
  ucl: { src: "/logos/ucl.png", h: 36, w: 88 },
  rsph: { src: "/logos/rsph.png", h: 36, w: 86 },
  idc: { src: "/logos/idc.png", h: 34, w: 107 },
};

const studies = [
  { fuente: "harvard", nombre: "Harvard University", frase: "Orar a diario de joven se asocia a ser más feliz de adulto", url: "https://www.hsph.harvard.edu/news/press-releases/religious-upbringing-adult-health/" },
  { fuente: "abs", nombre: "American Bible Society", frase: "Los jóvenes que leen la Biblia tienen la mitad de ansiedad", url: "https://www.baptistpress.com/resource-library/news/gen-z-most-fearful-anxious-but-scripture-halves-anxiety-study-shows/" },
  { fuente: "pew", nombre: "Pew Research Center", frase: "Quienes viven su fe de forma activa son más felices", url: "https://www.pewresearch.org/religion/2019/01/31/religions-relationship-to-happiness-civic-engagement-and-health-around-the-world/" },
  { fuente: "penn", nombre: "University of Pennsylvania", frase: "Menos redes sociales, menos soledad y menos depresión", url: "https://techcrunch.com/2018/11/09/limiting-social-media-use-reduced-loneliness-and-depression-in-new-experiment" },
  { fuente: "texas", nombre: "The University of Texas at Austin", frase: "Solo con tener el móvil cerca ya te concentras peor", url: "https://www.journals.uchicago.edu/doi/10.1086/691462" },
  { fuente: "ucl", nombre: "University College London", frase: "Un hábito tarda de media 66 días en formarse", url: "https://onlinelibrary.wiley.com/doi/10.1002/ejsp.674" },
  { fuente: "idc", nombre: "IDC", frase: "El 79 % mira el móvil nada más despertarse", url: "https://edition.cnn.com/2013/03/28/tech/mobile/survey-phones-facebook" },
  { fuente: "rsph", nombre: "Royal Society for Public Health", frase: "Instagram, la red que más daña la salud mental de los jóvenes", url: "https://www.irishnews.com/magazine/technology/2017/05/19/news/instagram-ranked-worst-for-young-people-s-mental-health--1031550/" },
  { fuente: "abs", nombre: "American Bible Society", frase: "El 54 % de la Generación Z dice que la Biblia le ha cambiado la vida", url: "https://www.americanbible.org/news/press-releases/articles/new-study-shows-hope-for-gen-z-more-young-adults-say-theyve-been-transforme/" },
];

export default function AsSeenIn() {
  return (
    <section style={{ background: "#FDFCF7" }} className="px-5 py-14 md:py-24">
      <div className="max-w-[440px] md:max-w-[640px] mx-auto rounded-[24px] px-4 py-8 md:px-8 md:py-10" style={{ background: "#F6F1E3" }}>
        <h2 className="fg-h2 md:text-[34px]" style={{ fontWeight: 700, color: "#333333", letterSpacing: "-0.3px", textAlign: "center", margin: "0 0 8px" }}>
          {/* «en la ciencia» siempre junto: en móvil baja entero a la segunda línea */}
          Un método basado <span style={{ whiteSpace: "nowrap" }}>en la ciencia</span>
        </h2>
        <p className="fg-lead md:text-[17px]" style={{ color: "#838381", lineHeight: 1.5, textAlign: "center", margin: "0 0 22px", textWrap: "balance" }}>
          FocusGod se ha creado a partir de estos estudios para ayudarte a crecer de verdad en tu relación con Dios.
        </p>
        <div className="flex flex-col gap-2.5">
          {studies.map((s) => (
            <a
              key={s.url}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-[16px] px-4 py-3.5 md:px-5"
              style={{ background: "#fff", border: "1px solid rgba(51,51,51,0.06)", textDecoration: "none" }}
            >
              <div style={{ height: 40, display: "flex", alignItems: "center", marginBottom: 4 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={LOGO[s.fuente].src} alt={s.nombre} width={LOGO[s.fuente].w} height={LOGO[s.fuente].h} style={{ display: "block", maxWidth: "100%", height: "auto" }} />
              </div>
              <p style={{ fontSize: "15px", color: "#555", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {s.frase}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
