'use client';

import { Weather } from '@/components/Weather';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { routes } from '@/config/routes';

function Footer() {
  const pathname = usePathname();
  const showLegalLink = pathname !== '/legal-mentions';
  return (
    <footer className="fixed-bottom left-0 w-full bg-primary text-primary-foreground p-4 text-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-end gap-4">
        <Weather />
        <div className="flex flex-col items-end text-sm space-y-1">
          <p>TOUT DROITS RÉSERVÉS. COPYRIGHT © 2026 FERRE TP.</p>
          <p>FERRE TP entreprise de travaux public au capital de 44 000 €.</p>
          <p>N° TVA : FR 53 453 388 134. Siret : 453 388 134</p>
          {showLegalLink && (
            <Link href={routes.legalMentions} className="underline">
              Mentions Légales
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}

export { Footer };
