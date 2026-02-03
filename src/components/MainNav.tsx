'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navigation } from '@/config/navigation';
import { Button } from '@/components/ui/button';

export function MainNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="ghost" aria-expanded={open}>
        Menu
      </Button>

      <nav
        className={`
          ${open ? 'fixed inset-0 z-40 bg-background' : 'hidden'}
          md:static md:block
        `}
      >
        <ul
          className={`
            flex flex-col gap-6 p-8 text-xl
            md:flex-row md:gap-8 md:p-0 md:text-base
          `}
        >
          <li className="absolute right-4 top-4 md:hidden">
            <Button onClick={() => setOpen(false)} aria-label="Fermer le menu" variant="ghost">
              ×
            </Button>
          </li>

          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-medium hover:opacity-70"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
