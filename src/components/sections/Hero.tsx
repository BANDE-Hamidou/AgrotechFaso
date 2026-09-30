import { ChevronRight, Droplet, Radio } from 'lucide-react'
import { Container, ButtonLink } from '../ui/Primitives'
import { BrandIcon } from '../icons/BrandIcon'
import { hero, links } from '../../lib/content'

/** Jauge d'humidité discrète, écho de la donnée réellement transmise. */
function MoistureCard() {
  return (
    <div className="w-[15.5rem] rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <span className="text-[0.6875rem] font-semibold tracking-[0.12em] text-leaf-200 uppercase">
          Humidité
        </span>
        <Radio className="h-3.5 w-3.5 text-leaf-300" aria-hidden />
      </div>

      <p className="tabular mt-2 font-display text-[2rem] leading-none font-bold text-white">
        42<span className="ml-0.5 text-base font-semibold text-leaf-300">%</span>
      </p>

      <div
        className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/20"
        role="img"
        aria-label="Humidité du sol : 42 pour cent, dans la zone cible"
      >
        <div className="h-full w-[42%] rounded-full bg-leaf-300" />
      </div>

      <div className="mt-2 flex items-center gap-1.5 text-[0.75rem] text-leaf-200">
        <Droplet className="h-3.5 w-3.5" aria-hidden />
        <span>Irrigation non nécessaire aujourd’hui</span>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="accueil"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-ivory pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24"
    >
      {/* Voile très léger derrière la colonne de texte, pour la lisibilité
          sur les écrans larges sans empâtter le blanc. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(60%_60%_at_18%_18%,var(--color-leaf-50)_0%,transparent_70%)]"
      />

      <Container size="wide" className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* ——— Colonne texte ——— */}
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-[0.6875rem] font-semibold tracking-[0.14em] text-forest-700 uppercase shadow-soft">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-forest-500" />
              {hero.badge}
            </p>

            <h1
              id="hero-title"
              className="mt-6 text-[2.125rem] leading-[1.12] font-bold text-forest-900 sm:text-[2.75rem] lg:text-[3.375rem] lg:leading-[1.08]"
            >
              {hero.title}
            </h1>

            <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-ink-soft sm:text-lg">
              {hero.subtitle}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink
                href={links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                className="group"
              >
                <BrandIcon name="whatsapp" className="h-[1.15em] w-[1.15em] shrink-0" />
                {hero.primary}
              </ButtonLink>

              <ButtonLink href="#solution" variant="secondary" className="group">
                {hero.secondary}
                <ChevronRight
                  className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5"
                  aria-hidden
                />
              </ButtonLink>
            </div>

            <p className="mt-5 flex items-center gap-2 text-[0.8125rem] text-ink-mute">
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-leaf-500" />
              {hero.trust}
            </p>
          </div>

          {/* ——— Colonne visuelle ——— */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl bg-forest-900 shadow-lift">
              <picture>
                <source srcSet={hero.image.src} type="image/webp" />
                <img
                  src={hero.image.fallback}
                  alt={hero.image.alt}
                  width={hero.image.width}
                  height={hero.image.height}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-4/5 w-full object-cover lg:aspect-3/4"
                />
              </picture>

              {/* Voile bas pour asseoir la jauge */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-forest-950/85 via-forest-950/35 to-transparent"
              />

              <div className="absolute right-4 bottom-4 left-4 flex justify-end sm:right-6 sm:bottom-6 sm:left-6">
                <MoistureCard />
              </div>
            </div>

            {/* Vignette secondary, décalée pour donner de la profondeur */}
            <div className="pointer-events-none absolute -top-5 -left-5 hidden w-32 overflow-hidden rounded-lg border-4 border-ivory shadow-lift xl:block">
              <img
                src="/img/soil-cracked.webp"
                alt=""
                aria-hidden="true"
                width={1600}
                height={800}
                loading="lazy"
                decoding="async"
                className="h-20 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
