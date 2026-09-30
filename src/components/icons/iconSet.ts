import {
  Bell,
  ChartColumn,
  Compass,
  Droplets,
  Globe,
  Layers,
  Radar,
  Repeat,
  Smartphone,
  Sprout,
  type LucideIcon,
} from 'lucide-react'

/**
 * Jeu d'icônes Lucide utilisé sur le site.
 * L'épaisseur de trait est fixée une seule fois ici, afin que tous les
 * pictogrammes partagent exactement le même style.
 */

export const ICON_STROKE = 1.75

export const icons = {
  droplets: Droplets,
  sprout: Sprout,
  compass: Compass,
  radar: Radar,
  chart: ChartColumn,
  bell: Bell,
  smartphone: Smartphone,
  globe: Globe,
  repeat: Repeat,
  layers: Layers,
} satisfies Record<string, LucideIcon>

export type IconName = keyof typeof icons
