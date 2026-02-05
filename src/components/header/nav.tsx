import { INavigation, navigation } from '@/config/navigation';
import Link from 'next/link';

export interface Props {
  onLinkClick?: () => void;
}

function Nav({ onLinkClick }: Props) {
  return (
    <ul className="flex flex-col md:flex-row gap-6">
      {navigation.map((item: INavigation) => (
        <li key={item.href}>
          <Link onClick={onLinkClick} href={item.href} className="font-medium hover:opacity-70">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export { Nav };
