export const routes = {
  home: '/',
  about: '/about',
  expertise: '/expertise',
  contact: '/contact',
  legalMentions: '/legal-mentions',
} as const;

export interface INavigation {
  label: string;
  href: string;
}

export const navigation: INavigation[] = [
  { label: 'Accueil', href: routes.home },
  { label: 'À propos', href: routes.about },
  { label: 'Métiers', href: routes.expertise },
  { label: 'Contact', href: routes.contact },
];
