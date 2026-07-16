import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SIBABE Yassine — Développeur Full-Stack",
  description: "Portfolio de SIBABE Yassine, développeur full-stack spécialisé en React, Next.js, Node.js et MongoDB.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
