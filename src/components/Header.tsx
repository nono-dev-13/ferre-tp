import { JSX } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import Link from 'next/link';

function Header(): JSX.Element {
  return (
    <header className="fixed top-0 left-0 w-full bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">FERRE TP</h1>
        <ThemeToggle />
      </div>
    </header>
  );
}

export { Header };
