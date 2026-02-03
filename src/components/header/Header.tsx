import { ThemeToggle } from '@/components/ThemeToggle';
import Link from 'next/link';
import { Nav } from '@/components/header/nav';
import { MobileMenu } from '@/components/header/mobileMenu';

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" aria-label="Accueil">
          <h1 className="text-xl font-bold">FERRE TP</h1>
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            <Nav />
          </div>
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

export { Header };
