import Link from 'next/link';
import { metiers } from '@/data/metiers';
import { Text } from '@/components/Text';
import { ArrowRight } from 'lucide-react';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

function Expertise() {
  return (
    <section className="container mx-auto p-4 mb-8 pt-35">
      <Text variant="h1" className=" mb-12">
        Les métiers de Ferre TP
      </Text>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metiers.map((metier) => (
          <li key={metier.id} className="flex">
            <Card>
              <CardHeader>
                <CardTitle>{metier.title}</CardTitle>
              </CardHeader>
              <CardDescription>{metier.content}</CardDescription>
              <CardFooter className="group">
                <Link href={`/expertise/${metier.id}`} className="text-primary font-medium">
                  Découvrir
                </Link>
                <ArrowRight className="ml-1 text-primary size-4 transition-transform group-hover:translate-x-1" />
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Expertise;
