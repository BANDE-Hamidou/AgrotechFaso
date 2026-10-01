import { ArrowRight } from 'lucide-react'
import { Container, Eyebrow, Section } from '../ui/Primitives'
import { Reveal } from '../ui/Reveal'
import { Icon } from '../icons/Icon'
import { solution } from '../../lib/content'

/** Les quatre maillons de la chaîne, du sol jusqu'au téléphone. */
const flow = [
  { label: 'Sol', icon: 'layers', caption: 'Mesure' },
  { label: 'Capteur', icon: 'radar', caption: 'Transmission' },
  { label: 'Données', icon: 'chart', caption: 'Interprétation' },
  { label: 'Téléphone', icon: 'smartphone', caption: 'Alerte' },
] as const

export function Solution() {
  return (
    <Section id="solution" tone="ivory" labelledBy="solution-title">
      <Container>
        {/* En-tête */}
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>{solution.eyebrow}</Eyebrow>
            <h2
              id="solution-title"
              className="mt-5 text-[1.75rem] leading-[1.15] font-bold text-forest-900 sm:text-[2.125rem] lg:text-[2.5rem]"
            >
              {solution.title}
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink-soft">
              {solution.subtitle}
            </p>
          </Reveal>
        </div>

        {/* Les trois étapes */}
        <ol className="mt-14 grid gap-px overflow-hidden rounded-lg bg-line sm:grid-cols-3">
          {solution.steps.map((step, index) => (
            <Reveal as="li" key={step.number} delay={index * 90}>
              <div className="group flex h-full flex-col bg-white p-6 transition-colors duration-200 hover:bg-leaf-50/60 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-forest-800 text-white transition-colors duration-200 group-hover:bg-forest-700">
                    <Icon name={step.icon} className="h-5 w-5" />
                  </span>
                  <span className="tabular font-display text-[1.75rem] leading-none font-bold text-leaf-500 transition-colors duration-200 group-hover:text-forest-600">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-forest-900">{step.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        {/* Chaîne de transmission */}
        <Reveal delay={80}>
          <div className="mt-16 overflow-hidden rounded-xl border border-line bg-white shadow-soft">
            <div className="grid lg:grid-cols-[1.25fr_1fr]">
              {/* Chaîne */}
              <div className="order-2 flex flex-col justify-center p-6 sm:p-9 lg:order-1 lg:border-r lg:border-line">
                <p className="text-[0.6875rem] font-semibold tracking-[0.16em] text-forest-600 uppercase">
                  De la parcelle au téléphone
                </p>

                {/* Bureau : une ligne de quatre maillons reliés */}
                <ol className="mt-7 hidden items-start sm:flex">
                  {flow.map((node, index) => (
                    <li key={node.label} className="flex flex-1 items-start">
                      <div className="flex w-full flex-col items-center px-1 text-center">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-leaf-50 text-forest-700 ring-1 ring-leaf-200">
                          <Icon name={node.icon} className="h-5 w-5" />
                        </span>
                        <p className="mt-3 text-[0.9375rem] font-semibold text-forest-900">
                          {node.label}
                        </p>
                        <p className="mt-0.5 text-[0.75rem] text-ink-mute">{node.caption}</p>
                      </div>

                      {index < flow.length - 1 ? (
                        <span
                          aria-hidden="true"
                          className="mt-[1.375rem] flex h-px flex-1 items-center"
                        >
                          <span className="h-px w-full bg-line" />
                          <ArrowRight className="-ml-1 h-3.5 w-3.5 shrink-0 text-leaf-400" />
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ol>

                {/* Mobile : une pile verticale, plus lisible */}
                <ol className="mt-6 space-y-1 sm:hidden">
                  {flow.map((node, index) => (
                    <li key={node.label} className="relative flex gap-4 pb-6 last:pb-0">
                      {index < flow.length - 1 ? (
                        <span
                          aria-hidden="true"
                          className="absolute top-12 left-[1.375rem] h-[calc(100%-1.5rem)] w-px bg-line"
                        />
                      ) : null}

                      <span className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-leaf-50 text-forest-700 ring-1 ring-leaf-200">
                        <Icon name={node.icon} className="h-5 w-5" />
                      </span>

                      <div className="min-w-0 pt-1.5">
                        <p className="text-[0.9375rem] font-semibold text-forest-900">
                          {node.label}
                        </p>
                        <p className="mt-0.5 text-[0.8125rem] text-ink-mute">{node.caption}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Illustration */}
              <div className="order-1 lg:order-2">
                <img
                  src={solution.flow.src}
                  alt={solution.flow.alt}
                  width={solution.flow.width}
                  height={solution.flow.height}
                  loading="lazy"
                  decoding="async"
                  className="h-full max-h-72 w-full object-cover lg:max-h-none"
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Galerie du dispositif */}
        <Reveal delay={120}>
          <div className="mt-12">
            <p className="text-[0.6875rem] font-semibold tracking-[0.16em] text-forest-600 uppercase">
              Le dispositif en images
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {solution.gallery.map((shot) => (
                <li key={shot.src}>
                  <figure className="group overflow-hidden rounded-lg bg-leaf-50 ring-1 ring-line">
                    <picture>
                      <source srcSet={shot.src} type="image/webp" />
                      <img
                        src={shot.fallback}
                        alt={shot.alt}
                        width={shot.width}
                        height={shot.height}
                        loading="lazy"
                        decoding="async"
                        className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </picture>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
