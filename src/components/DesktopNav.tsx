import Link from 'next/link';
import { navigation } from '@/config/navigation';

function DesktopNavigation() {
  return (
    <nav className="hidden md:flex items-center gap-6">
      {navigation.map((item) => (
        <Link key={item.href} href={item.href} className="hover:underline">
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export default DesktopNavigation;
