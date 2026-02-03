export interface INavigation {
  label: string;
  href: string;
}
export const navigation: INavigation[] = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/about' },
  { label: 'Métiers', href: '/expertise' },
  { label: 'Contact', href: '/contact' },
];
