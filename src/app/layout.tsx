import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "FERRE TP Entreprise de travaux publics",
  description: "FERRE TP, entreprise de travaux publics, Services et environnement, location TP, terrassement, transport gravats matériaux boues, drainage dans la région de Chartres",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
