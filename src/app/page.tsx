import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { routes } from '@/config/routes';
import { Text } from '@/components/Text';
import './home.scss';

export default function Home() {
  return (
    <div className="home">
      <main className="container mx-auto p-4 md:px-0 pt-30">
        <Text variant="h1" className="text-primary-foreground text-center mb-6">
          Votre <strong>entreprise de travaux publics</strong>
          <br />à <strong>Chartres et ses environs</strong>
        </Text>
        <Text variant="p" className="text-center max-w-3xl mx-auto">
          FERRÉ TP accompagne les particuliers, professionnels et collectivités pour leurs
          <strong>travaux de terrassement, assainissement et aménagements extérieurs</strong>
          en <strong>Eure-et-Loir</strong>, <strong>Yvelines</strong> et <strong>Essonne</strong>.
        </Text>
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
          <Button asChild variant="default" size="lg">
            <Link href={routes.contact}>Demander un devis</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href={routes.expertise}>Voir nos réalisations</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
