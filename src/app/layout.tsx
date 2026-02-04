import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'FERRE TP Entreprise de travaux publics',
  description:
    'FERRE TP, entreprise de travaux publics, Services et environnement, location TP, terrassement, transport gravats matériaux boues, drainage dans la région de Chartres',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
