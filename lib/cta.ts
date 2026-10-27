// Mientras la app está en revisión, todos los botones llevan a la lista de espera.
// El día del lanzamiento: CTA_HREF = enlace del App Store, CTA_LABEL = "Descargar gratis"
// y CTA_NOTE = "3 días gratis · Cancela cuando quieras".
export const CTA_HREF = "/app";
export const CTA_LABEL = "Avísame cuando salga";
export const CTA_NOTE = "Sé de los primeros. Te avisamos el día que salga.";

export const CTA_PROPS = CTA_HREF.startsWith("http")
  ? { target: "_blank", rel: "noopener noreferrer" }
  : {};

// Enlace del Canal de WhatsApp de la comunidad. Vacío = no se muestra el botón.
export const WHATSAPP_URL = "";
