'use client';

import Link from 'next/link';
import { useState } from 'react';
import { metiers } from '@/data/metiers';
import { Text } from '@/components/Text';
import { ArrowRight } from 'lucide-react';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

function Expertise() {
  const [selectedMetier, setSelectedMetier] = useState<string>('all');
  const onChangeExpertise = (metierId: string) => {
    setSelectedMetier(metierId);
  };
  const metiersToDisplay =
    selectedMetier === 'all' ? metiers : metiers.filter((metier) => metier.id === selectedMetier);
  return (
    <section className="container mx-auto p-4 mb-8 pt-35">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-8">
        <Text variant="h1">Les métiers de Ferre TP</Text>
        <Select defaultValue="all" onValueChange={onChangeExpertise}>
          <SelectTrigger className="w-full max-w-54">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">Tous les métiers</SelectItem>
              {metiers.map((metier) => (
                <SelectItem key={metier.id} value={metier.id}>
                  {metier.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metiersToDisplay.map((metier) => (
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
