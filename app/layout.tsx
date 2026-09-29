import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FocusGod — bloquea apps hasta que ores",
  description:
    "FocusGod bloquea tus apps hasta que pones a Dios primero. Ora, lee la Biblia, desbloquea todo.",
  openGraph: {
    title: "FocusGod — bloquea apps hasta que ores",
    description:
      "FocusGod bloquea tus apps hasta que pones a Dios primero. Ora, lee la Biblia, desbloquea todo.",
    type: "website",
    url: "https://focusgodapp.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "FocusGod — bloquea apps hasta que ores",
    description: "Ora. Lee la Biblia. Desbloquea todo.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
