import { ThemeToggle } from '@/components/ThemeToggle';
import Link from 'next/link';
import { Nav } from '@/components/header/nav';
import { MobileMenu } from '@/components/header/mobileMenu';
import Image from 'next/image';

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1>
          <Link href="/" aria-label="Accueil">
            <Image src="/logo.svg" alt="FERRE TP" width={180} height={180 / 2.66} priority />
          </Link>
        </h1>
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
