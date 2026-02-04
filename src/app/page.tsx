import Link from 'next/link';
import './home.scss';

export default function Home() {
  return (
    <div className="home">
      <main className="container mx-auto p-4 md:px-0 pt-40">
        <h1 className="text-primary-foreground text-5xl text-center">
          Votre <strong>entreprise de travaux publics</strong>
          <br />à <strong>Chartres et ses environs</strong>
        </h1>
        <p className="mt-6 text-xl text-center max-w-3xl mx-auto">
          FERRÉ TP accompagne les particuliers, professionnels et collectivités pour leurs
          <strong>travaux de terrassement, assainissement et aménagements extérieurs</strong>
          en <strong>Eure-et-Loir</strong>, <strong>Yvelines</strong> et <strong>Essonne</strong>.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/contact" className="bg-primary">
            Demander un devis
          </Link>
          <Link href="/expertise" className="bg-secondary">
            Voir nos réalisations
          </Link>
        </div>
      </main>
    </div>
  );
}
