/**
 * Source unique de vérité pour les textes et les données du site.
 * Modifier ce fichier suffit à mettre à jour la landing page.
 */

export const brand = {
  name: 'AgroTech Faso',
  baseline: 'Irrigation intelligente',
  /* Emplacement : adaptateur pour l’ancre #contact */
  location: 'Dakar, Sénégal',
  email: 'contact@agrotechfaso.com',
  phone: '+221 77 000 00 00',
  /* Numéro au format international, sans « + » ni espaces (lien wa.me) */
  whatsapp: '221770000000',
  whatsappLabel: '+221 77 000 00 00',
} as const

export const nav = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Le problème', href: '#probleme' },
  { label: 'La solution', href: '#solution' },
  { label: 'Résultats', href: '#resultats' },
  { label: 'Investisseurs', href: '#investisseurs' },
  { label: 'Équipe', href: '#equipe' },
  { label: 'Contact', href: '#contact' },
] as const

export const hero = {
  badge: 'Agriculture • Technologie • Climat',
  title: 'Une irrigation plus intelligente pour des récoltes plus sûres.',
  subtitle:
    "Notre solution mesure l’humidité du sol et aide les agriculteurs à savoir quand leurs cultures ont réellement besoin d’eau.",
  primary: 'Nous contacter sur WhatsApp',
  secondary: 'Découvrir la solution',
  trust: 'Solution conçue pour les réalités agricoles africaines',
  image: {
    src: '/img/hero-field.webp',
    fallback: '/img/hero-field.jpg',
    alt: "Un petit exploitant agricole travaille dans un champ de cultures vertes,illustration de la solution AgroTech Faso.",
    width: 1100,
    height: 825,
  },
} as const

export const problem = {
  eyebrow: 'Le problème',
  title: 'Trop ou pas assez d’eau = récolte perdue.',
  intro:
    "L’irrigation se décide encore trop souvent à l’intuition, sans mesure réelle de ce qui se passe sous la surface.",
  items: [
    {
      icon: 'droplets',
      title: 'Sur-irrigation',
      body: "L’eau est utilisée inutilement lorsque le sol contient déjà suffisamment d’humidité.",
    },
    {
      icon: 'sprout',
      title: 'Stress hydrique',
      body: "Un manque d’eau au mauvais moment peut ralentir le développement des cultures.",
    },
    {
      icon: 'compass',
      title: 'Incertitude',
      body: "Sans données fiables, l’agriculteur doit souvent décider en fonction de son observation.",
    },
  ],
  image: {
    src: '/img/soil-dry.webp',
    fallback: '/img/soil-dry.jpg',
    alt: 'Terrain agricole sec et Craquelé, atteint par un déficit hydrique.',
    width: 1100,
    height: 825,
  },
  image2: {
    src: '/img/soil-cracked.webp',
    fallback: '/img/soil-cracked.jpg',
    alt: 'Gros plan sur une surface de terre sèche et craquelée.',
    width: 1600,
    height: 800,
  },
} as const

export const solution = {
  eyebrow: 'La solution',
  title: 'Une information simple au bon moment.',
  subtitle:
    "Un capteur mesure l’humidité du sol et transmet l’information afin d’aider l’agriculteur à prendre une meilleure décision.",
  steps: [
    {
      icon: 'radar',
      number: '01',
      title: 'Mesurer',
      body: 'Le capteur mesure l’humidité directement dans le sol.',
    },
    {
      icon: 'chart',
      number: '02',
      title: 'Analyser',
      body: 'Les données sont interprétées pour identifier les besoins en eau.',
    },
    {
      icon: 'bell',
      number: '03',
      title: 'Alerter',
      body: "Une alerte simple permet à l’agriculteur de savoir quand intervenir.",
    },
  ],
  flow: {
    src: '/img/irrigation-tank.webp',
    fallback: '/img/irrigation-tank.jpg',
    alt: "Réservoir d’eau et réseau de tuyauterie desservant une parcelle cultivée.",
    width: 1100,
    height: 825,
  },
} as const

export const results = {
  eyebrow: 'Résultats',
  title: 'Mesurer. Décider. Améliorer.',
  disclaimer: "Données indicatives issues d’un scénario pilote / simulation.",
  stats: [
    {
      value: '30',
      unit: '%',
      label: 'de réduction potentielle de l’eau utilisée',
      tag: 'Pilote simulé',
    },
    {
      value: '20',
      unit: '+',
      label: 'exploitations ciblées pour le pilote',
      tag: 'Objectif',
    },
    {
      value: '90',
      unit: '%',
      label: 'des alertes transmises avec succès',
      tag: 'Test technique',
    },
  ],
  testimonial: {
    quote:
      "Avec une information simple sur l’état du sol, nous pouvons mieux organiser nos décisions d’irrigation.",
    author: 'Agriculteur participant',
    role: 'Témoignage de pilote / simulation',
  },
  image: {
    src: '/img/maize-kenya.webp',
    fallback: '/img/maize-kenya.jpg',
    alt: 'Jeunes plants de maïs en croissance dans un champ verdoyant.',
    width: 1100,
    height: 825,
  },
} as const

export const investors = {
  eyebrow: 'Investisseurs',
  title: 'Construire une agriculture plus résiliente, à grande échelle.',
  intro:
    "Un besoin structurel, une technologie simple à déployer, et un marché qui touche l’eau, le rendement et le climat.",
  items: [
    {
      icon: 'globe',
      title: 'Marché',
      body: "Un secteur agricole majeur confronté aux enjeux de gestion de l’eau et de changement climatique.",
    },
    {
      icon: 'repeat',
      title: 'Modèle économique',
      body: 'Vente ou location du dispositif + service numérique associé.',
    },
    {
      icon: 'layers',
      title: 'Potentiel',
      body: 'Une solution conçue pour être progressivement déployée auprès de différentes exploitations et zones agricoles.',
    },
  ],
  primary: 'Voir la vidéo',
  secondary: 'Nous contacter',
  videoNote:
    "Emplacement réservé à la vidéo de présentation du projet (MP4, YouTube ou Vimeo).",
  image: {
    src: '/img/farmland-rows.webp',
    fallback: '/img/farmland-rows.jpg',
    alt: "Rangs de cultures sur une parcelle agricole verdoyante.",
    width: 1920,
    height: 960,
  },
} as const

export type TeamMember = {
  name: string
  role: string
  bio: string
  initials: string
  /**
   * Photo du membre. Laissez `null` pour utiliser le monogramme.
   * Exemple : { src: '/img/team-amine.jpg', width: 640, height: 640, alt: '...' }
   */
  photo: { src: string; width: number; height: number; alt: string } | null
}

export const team = {
  eyebrow: 'Équipe',
  title: 'Une équipe au service d’une agriculture plus intelligente.',
  intro:
    "Un profil mixte : terrain agricole, ingénierie, agronomie et développement d’affaires.",
  members: [
    {
      name: 'Awa Diop',
      role: 'CEO / Fondateur',
      bio: "Vision produit et relations avec les exploitations et les partenaires locaux.",
      initials: 'AD',
      photo: null,
    },
    {
      name: 'Ibrahim Sow',
      role: 'Lead Tech',
      bio: 'Capteur, transmission des données et fiabilité du dispositif sur le terrain.',
      initials: 'IS',
      photo: null,
    },
    {
      name: 'Fatou Ndiaye',
      role: 'Agronomie',
      bio: "Calibrage des seuils d’humidité selon les cultures et les sols.",
      initials: 'FN',
      photo: null,
    },
    {
      name: 'Moussa Ba',
      role: 'Business Development',
      bio: 'Partenariats, déploiement pilote et relation investisseurs.',
      initials: 'MB',
      photo: null,
    },
  ] as TeamMember[],
  image: {
    src: '/img/farmer-field.webp',
    fallback: '/img/farmer-field.jpg',
    alt: "Jeune agriculteur dans sa parcelle, au milieu de ses cultures.",
    width: 1100,
    height: 825,
  },
} satisfies {
  eyebrow: string
  title: string
  intro: string
  members: TeamMember[]
  image: { src: string; fallback: string; alt: string; width: number; height: number }
}

export const contact = {
  eyebrow: 'Contact',
  title: 'Parlons de votre exploitation, de votre projet ou d’un partenariat.',
  subtitle:
    "Une question technique, un besoin de démonstrateur ou une demande de partenariat : répondez-nous directement.",
  whatsapp: 'Nous contacter sur WhatsApp',
  form: {
    name: 'Nom',
    namePlaceholder: 'Votre nom',
    email: 'Email',
    emailPlaceholder: 'vous@exemple.com',
    message: 'Message',
    messagePlaceholder: 'Votre message',
    submit: 'Envoyer le message',
  },
} as const

export const footer = {
  description:
    "AgroTech Faso conçoit un capteur d’humidité du sol pour aider les agriculteurs africains à irriguer au bon moment.",
  links: [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Solution', href: '#solution' },
    { label: 'Résultats', href: '#resultats' },
    { label: 'Investisseurs', href: '#investisseurs' },
    { label: 'Équipe', href: '#equipe' },
    { label: 'Contact', href: '#contact' },
  ],
  socials: [
    { icon: 'linkedin', label: 'LinkedIn', href: '#' },
    { icon: 'x', label: 'X', href: '#' },
    { icon: 'youtube', label: 'YouTube', href: '#' },
  ],
  legal: 'Tous droits réservés.',
} as const

/** Liens de contact calculés, utilisés par plusieurs sections. */
export const links = {
  whatsapp: `https://wa.me/${brand.whatsapp}`,
  email: `mailto:${brand.email}`,
  phone: `tel:${brand.phone.replace(/[^\d+]/g, '')}`,
} as const
