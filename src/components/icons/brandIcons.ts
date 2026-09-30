import { siFacebook, siInstagram, siWhatsapp, siX, siYoutube } from 'simple-icons'

/**
 * Marques officielles tracées en SVG vectoriel — jamais en image bitmap.
 * Jeu de données Simple Icons (licence CC0-1.0) + marque LinkedIn.
 */

export type BrandIconData = { path: string; hex: string; title: string }

export const brandIcons: Record<string, BrandIconData> = {
  whatsapp: siWhatsapp,
  x: siX,
  youtube: siYoutube,
  facebook: siFacebook,
  instagram: siInstagram,
  linkedin: {
    title: 'LinkedIn',
    hex: '0077B5',
    /* Glyphe « in » de la marque, sur une grille 72 × 72. */
    path: 'M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z',
  },
}

/** Marques dessinées sur une grille 72 × 72 plutôt que 24 × 24. */
export const BRAND_GRID_72 = new Set(['linkedin'])

export type BrandIconName = keyof typeof brandIcons
