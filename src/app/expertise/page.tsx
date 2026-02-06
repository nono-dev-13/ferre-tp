import Link from 'next/link';
import { metiers } from '@/data/metiers';
import { Text } from '@/components/Text';
import { ArrowRight } from 'lucide-react';

function Expertise() {
  return (
    <section className="container mx-auto p-4 pt-30">
      <Text variant="h1" className=" mb-12">
        Les métiers de Ferre TP
      </Text>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metiers.map((metier) => (
          <li key={metier.id} className="border rounded-lg p-6">
            <Text variant="h2" className="mb-2">
              {metier.title}
            </Text>
            <Text variant="p" className="text-muted-foreground mb-4">
              {metier.content}
            </Text>
            <Link href={`/expertise/${metier.id}`} className="text-primary font-medium">
              Découvrir <ArrowRight />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Expertise;
