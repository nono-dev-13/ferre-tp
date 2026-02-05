'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Nav } from '@/components/header/nav';

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        onClick={() => setOpen(true)}
        variant="ghost"
        className="md:hidden"
        aria-expanded={open}
      >
        <Menu />
      </Button>
      {open && (
        <div className="fixed inset-0 z-40 bg-background p-6">
          <Button
            onClick={() => setOpen(false)}
            aria-label="Fermer le menu"
            variant="ghost"
            className="absolute right-4 top-4 md:hidden"
          >
            <X />
          </Button>
          <Nav onLinkClick={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
}

export { MobileMenu };
