# AgrotechFaso

Landing page mono-page (défilement vertical + navigation par ancres) pour une
startup d'irrigation de précision : un capteur d'humidité du sol qui indique à
l'agriculteur **quand** irriguer, pas seulement **si** irriguer.

React 19 · TypeScript · Vite 8 · Tailwind CSS 4 · Lucide + Simple Icons

---

## Démarrer

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # tsc -b && vite build  →  dist/
npm run preview    # sert dist/ sur http://localhost:4173
npm run lint       # oxlint
```

---

## Tout se règle dans un seul fichier

**`src/lib/content.ts`** est la source unique de vérité : nom de marque, textes,
chiffres, membres d'équipe, liens, coordonnées. Modifier ce fichier suffit à
mettre à jour le site — aucun composant n'a de texte en dur.

```ts
export const brand = { name: 'AgroTech Faso', email: '…', phone: '…', whatsapp: '221770000000', … }
```

### À personnaliser avant mise en ligne

| Élément | Où | État |
| --- | --- | --- |
| Nom de marque `AgroTech Faso` | `content.ts` → `brand.name` | fait |
| E-mail / téléphone / WhatsApp | `content.ts` → `brand` | **factices** (Dakar, +221 77…) |
| Localisation | `content.ts` → `brand.location` | factice |
| Liens réseaux sociaux (`href: '#'`) | `content.ts` → `footer.socials` | **à compléter** |
| Membres d'équipe (noms, photos) | `content.ts` → `team.members` | **placeholder** |
| Chiffres « 30 % / 20+ / 90 % » | `content.ts` → `results.stats` | **simulation**,see ci-dessous |
| Vidéo de présentation | `section Investors.tsx` → `#video` | emplacement vide |
| Envoi du formulaire | `section Contact.tsx` → `onSubmit` | non branché |

### Photos de l'équipe

Aucun portrait fictif n'est fourni : en l'état, chaque membre affiche un
**monogramme** (`AD`, `IS`…) sur aplat vert — un choix graphique assumé, pas une
image manquante. Pour brancher une vraie photo :

```ts
{
  name: 'Awa Diop',
  role: 'CEO / Fondateur',
  bio: '…',
  initials: 'AD',
  photo: { src: '/img/equipe-awa.jpg', width: 640, height: 800, alt: 'Awa Diop' },
}
```

Le composant `Portrait` bascule automatiquement sur la photo dès que `photo`
n'est plus `null`.

### Formulaire de contact

`onSubmit` ne fait qu'afficher un message : il n'y a **aucun back-end**. Branchez
votre service (Formspree, endpoint maison…) dans
`src/components/sections/Contact.tsx`. Le `role="status"` + `aria-live` sont
déjà en place pour l'annonce vocale.

---

## Chiffres et témoignage : ce qui est réel

Rien n'est présenté comme une étude scientifique. Les trois chiffres de la
section **Résultats** portent chacun une étiquette explicite — `Pilote simulé`,
`Objectif`, `Test technique` — et la section affiche la mention :

> Données indicatives issues d'un scénario pilote / simulation.

Le témoignage porte la mention `Témoignage de pilote / simulation`, et le pied de
page le rappelle. **À remplacer par des données d'étude réelles le moment venu**,
en adaptant `results.stats` et `results.disclaimer` dans `content.ts`.

Aucune certification, aucun logo de partenaire et aucun client réelle n'est
présent sur la page.

---

## Structure

```
src/
├─ lib/content.ts              ← tous les contenus (à modifier en priorité)
├─ index.css                   ← design system : palette, rayons, ombres, animations
├─ hooks/useScroll.ts          ← menu actif, navbar au défilement, reduced-motion
└─ components/
   ├─ layout/     Navbar, Footer
   ├─ sections/   Hero, Problem, Solution, Results, Investors, Team, Contact
   ├─ ui/         Primitives (Container, Section, Button…), Reveal
   ├─ icons/      Icon (Lucide), BrandIcon (Simple Icons)
   └─ graphics/   Logo
```

### Composants réutilisables

- `Container`, `Section`, `Eyebrow`, `Button`, `ButtonLink` — gabarits partagés
  (largeur, espacements, tons de fond, variantes de bouton).
- `Reveal` — révélation au défilement, désactivée automatiquement si
  `prefers-reduced-motion: reduce`.
- `Icon` (Lucide) et `BrandIcon` (Simple Icons) — même épaisseur de trait partout
  (`ICON_STROKE = 1.75`), ce qui garantit la cohérence des pictogrammes.

### Navigation

- Navbar `fixed`, hauteur réduite au défilement, lien actif suivi via
  `useActiveSection` (IntersectionObserver-free, piloté par `scrollY`).
- Mobile : bouton hamburger (icône Lucide), panneau `aria-expanded` /
  `aria-controls`, `Échap` ferme, scroll de la page verrouillé, fermeture
  automatique au retour en bureau.
- Défilement fluide via `scroll-padding-top` sur `:root` — les ancres atterrissent
  à 96 px, exactement sous la navbar.

---

## Direction artistique

| Rôle | Token | Valeur |
| --- | --- | --- |
| Vert profond (primaire) | `forest-700` | `#145234` |
| Vert clair (accents) | `leaf-500` / `leaf-200` | `#3fa36a` / `#bfe6ce` |
| Accent discret | `sun-500` / `sun-100` | `#c98a24` / `#faf1de` |
| Fonds clairs | `ivory` / `mist` | `#fbfaf6` / `#f4f6f4` |
| Fonds sombres | `forest-900` / `forest-950` | `#0a2c1b` / `#05180f` |
| WhatsApp (unique) | `wa` | `#1fa855` |

Typographie : **Plus Jakarta Sans** (titres) + **Inter** (texte), auto-hébergées
via `@fontsource-variable` — aucune requête à un service tiers.

Rayons volontairement retenus : 4 / 6 / 10 / 14 / 20 px, plus les cercles des
maillons du schéma. Aucun glassmorphism, aucun dégradé décoratif, aucun carrousel.

---

## Accessibilité — vérifié

- **Contraste** : 110 éléments de texte contrôlés, **tous passent le niveau AA**
  de WCAG 2.1 (4.5:1 en corps de texte, 3:1 en grand texte).
- **Focus** : anneau homogène de 2 px (`--color-ring`) sur *tous* les liens et
  boutons, via la classe `.focus-ring` ; variante claire sur fonds sombres.
  Vérifié au clavier sur les 14 premiers éléments focusables.
- **Cibles tactiles** : toutes ≥ 40 px sur les 5 points de rupture testés.
- Lien d'évitement, `lang="fr"`, un seul `<h1>`, hiérarchie de titres cohérente,
  libellés `<label for>` sur les trois champs, `aria-live` sur l'état du
  formulaire, `aria-hidden` sur les SVG décoratifs.
- `prefers-reduced-motion` : animations et défilement fluide désactivés, aucun
  contenu masqué.

---

## Performances

- Aucune requête vers un service tiers au runtime (polices, icônes et photos
  sont dans le bundle ou dans `public/`).
- Photos servies en **WebP** (repli `<picture>` → JPEG), `loading="lazy"` et
  `decoding="async"` sur tout ce qui est sous la ligne de flottaison.
- ~3,9 Mo d'images au total, 1 seule image au-dessus de la ligne de flottaison.

| Format | Contenu | Gzip |
| --- | --- | --- |
| CSS | 46,1 ko | 10,9 ko |
| JS | 275,8 ko | 85,6 ko |

---

## Crédits photos

7 photographies, toutes sous **licence CC0 1.0** (domaine public, aucune
attribution legally requise — fournie ici par transparence). Elles proviennent de
**rawpixel** et du **WordPress Photo Directory**, sélectionnées via une recherche
Openverse. Provenance vérifiée dans le manifeste de téléchargement.

| Fichier | Sujet | Auteur | Source |
| --- | --- | --- | --- |
| `hero-field` | Petit exploitant dans son champ | U.S. Agency for International Development | rawpixel 4050918 |
| `farmer-field` | Jeune agriculteur à Mbarali | U.S. Agency for International Development | rawpixel 49464589893 |
| `maize-kenya` | Plants de maïs en croissance, Kenya | Jesse Mwangi | WordPress Photo `841695a265` |
| `irrigation-tank` | Réservoir en béton relié au réseau d'irrigation | Nirmit Patel | WordPress Photo `2456857079` |
| `soil-dry` | Terre sèche en pied de culture | *auteur non renseigné* | rawpixel 5918018 |
| `soil-cracked` | Terre craquelée, gros plan | Jose Varghese | WordPress Photo `99768966d5` |
| `farmland-rows` | Rangs de cultures sur parcelle verdoyante | Shubham Patil | WordPress Photo `90668cec3` |

Les icônes de marque (WhatsApp, X, YouTube, LinkedIn…) proviennent du jeu
**Simple Icons** (licence CC0-1.0), tracées en SVG vectoriel.
Les pictogrammes d'interface proviennent de **Lucide** (ISC).

---

## Dossier `apercu/`

Captures d'écran de contrôle (desktop / tablette / mobile), générées pour la
revue. **Dossier jetable** — supprimez-le sans impact sur le site.
