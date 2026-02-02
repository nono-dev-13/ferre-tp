'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { navigation } from '@/config/navigation';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

export function MobileNav() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger aria-label="Ouvrir le menu">
          <Menu className="h-7 w-7" />
        </SheetTrigger>

        <SheetContent side="bottom" className="h-[70vh] p-8">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-8 text-xl">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="font-medium">
                {item.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
