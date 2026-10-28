import type { Metadata, Viewport } from "next";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

export const viewport: Viewport = { themeColor: "#fdfcf8" };

export const metadata: Metadata = {
  metadataBase: new URL("https://www.focusgodapp.com"),
  title: "FocusGod — Crece cada día en tu relación con Dios",
  description:
    "FocusGod te ayuda a orar y leer la Biblia cada día, y aparta las distracciones del móvil hasta que pasas tiempo con Dios.",
  openGraph: {
    title: "FocusGod — Crece cada día en tu relación con Dios",
    description:
      "FocusGod te ayuda a orar y leer la Biblia cada día, y aparta las distracciones del móvil hasta que pasas tiempo con Dios.",
    type: "website",
    url: "https://focusgodapp.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "FocusGod — Crece cada día en tu relación con Dios",
    description: "Ora y lee la Biblia cada día. Primero Dios, después el móvil.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
