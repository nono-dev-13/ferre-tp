import { metiers } from '@/data/metiers';
import Link from 'next/link';
import { routes } from '@/config/routes';
import { Text } from '@/components/Text';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const metier = metiers.find((m) => m.id === slug);

  if (!metier) return {};

  return {
    title: `${metier.title} | Travaux publics à Chartres — FERRE TP`,
    description: metier.content,
    openGraph: {
      title: metier.title,
      description: metier.content,
    },
  };
}

async function ExpertisePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const metier = metiers.find((m) => m.id === slug);

  if (!metier) {
    return <div className="container mx-auto p-4 pt-30">Expertise non trouvée</div>;
  }

  return (
    <div className="container mx-auto p-4 pt-30">
      <Button asChild variant="outline" size="sm" className="mb-4">
        <Link href={routes.expertise}>Retour aux expertises</Link>
      </Button>
      <div className="mb-4">
        <Text variant="h1">{metier.title}</Text>
        <Text variant="p">{metier.content}</Text>
      </div>

      <Button asChild variant="default" size="lg">
        <Link href={routes.contact}>Demander un devis</Link>
      </Button>
    </div>
  );
}

export default ExpertisePage;
