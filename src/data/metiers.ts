export interface Metier {
  id: string;
  title: string;
  content: string;
  images: string[];
}

export const metiers: Metier[] = [
  {
    id: 'assainissement',
    title: 'Assainissement',
    content:
      'Raccordement tout à l’égout, fosses septiques, toutes eaux, épandage, évacuation des eaux usées et eaux pluviales, filières compactes, zéolithe ou organiques.',
    images: [
      '/images/assainissement-1.jpg',
      '/images/assainissement-2.jpg',
      '/images/assainissement-3.jpg',
    ],
  },
  {
    id: 'drainage',
    title: 'Drainage',
    content:
      'Gestion et maîtrise de l’écoulement des eaux, drainage de terrains marécageux, stabilisation des sols.',
    images: ['/images/drainage-1.jpg', '/images/drainage-2.jpg'],
  },
  {
    id: 'voirie',
    title: 'Voirie',
    content: 'Création de chemins et routes, gravillonnage, enrobés, pavés, calcaire.',
    images: ['/images/voirie-1.jpg', '/images/voirie-2.jpg', '/images/voirie-3.jpg'],
  },
  {
    id: 'reseaux-divers',
    title: 'Réseaux divers',
    content: 'Raccordement et viabilisation de terrains à bâtir, préparation des réseaux.',
    images: ['/images/reseaux-1.jpg', '/images/reseaux-2.jpg'],
  },
  {
    id: 'amenagement-exterieur',
    title: 'Aménagement extérieur',
    content:
      'Création de bassins de rétention, réserves d’eau, aménagements de jardin, évacuation de terres et gravats.',
    images: ['/images/amenagement-1.jpg', '/images/amenagement-2.jpg', '/images/amenagement-3.jpg'],
  },
  {
    id: 'location-materiel',
    title: 'Location de matériel BTP',
    content:
      'Location de matériel avec ou sans chauffeur : pelleteuse, rouleau compresseur, brouette thermique, camion benne, semi-remorque, porte-engin.',
    images: ['/images/location-1.jpg', '/images/location-2.jpg'],
  },
];
