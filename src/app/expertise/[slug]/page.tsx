import { metiers } from '@/data/metiers';
import Link from 'next/link';
import { routes } from '@/config/routes';
import { Text } from '@/components/Text';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';
import { MotionGallery } from '@/components/expertise/Gallery';
import { ArrowLeft } from 'lucide-react';

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
    return <div className="container mx-auto p-4 pt-40">Expertise non trouvée</div>;
  }

  return (
    <div className="container mx-auto p-4 pt-40">
      <div className="flex items-center group mb-8">
        <ArrowLeft className="mr-1 text-primary size-4 transition-transform group-hover:translate-x-1" />
        <Link href={routes.expertise}>Retour aux expertises</Link>
      </div>

      <div className="mb-4">
        <Text variant="h1">{metier.title}</Text>
        <Text variant="p">{metier.content}</Text>
      </div>
      <MotionGallery images={metier.images} className="mb-8" />
      <Button asChild variant="default" size="lg" className="mb-8">
        <Link href={routes.contact}>Demander un devis</Link>
      </Button>
    </div>
  );
}

export default ExpertisePage;
