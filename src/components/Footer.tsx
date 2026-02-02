'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Footer() {
  const pathname = usePathname();
  const showLegalLink = pathname !== '/legal-mentions';
  return (
    <footer className="fixed-bottom left-0 w-full bg-primary text-primary-foreground p-4 text-center">
      <p>TOUT DROITS RÉSERVÉS. COPYRIGHT © 2026 FERRE TP.</p>
      <p>
        FERRE TP entreprise de travaux public au capital de 44 000 €. N° TVA : FR 53 453 388 134.
        Siret : 453 388 134
      </p>
      {showLegalLink && (
        <Link href="/legal-mentions" className="underline">
          Mentions Légales
        </Link>
      )}
    </footer>
  );
}

export { Footer };
