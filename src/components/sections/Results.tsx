import { Quote } from 'lucide-react'
import { Container, Eyebrow, Section } from '../ui/Primitives'
import { Reveal } from '../ui/Reveal'
import { results } from '../../lib/content'

export function Results() {
  return (
    <Section id="resultats" tone="white" labelledBy="resultats-title">
      <Container>
        {/* ——— En-tête + chiffres ——— */}
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
          <Reveal>
            <Eyebrow>{results.eyebrow}</Eyebrow>
            <h2
              id="resultats-title"
              className="mt-5 text-[1.75rem] leading-[1.15] font-bold text-forest-900 sm:text-[2.125rem] lg:text-[2.5rem]"
            >
              {results.title}
            </h2>
            <p className="mt-5 max-w-sm text-[0.8125rem] leading-relaxed text-ink-mute">
              {results.disclaimer}
            </p>
          </Reveal>

          <dl className="grid gap-px overflow-hidden rounded-lg bg-line sm:grid-cols-3">
            {results.stats.map((stat, index) => (
              <Reveal key={stat.value} delay={index * 90}>
                <div className="flex h-full flex-col bg-ivory px-5 py-7 sm:px-6">
                  <p className="tabular font-display text-[2.75rem] leading-none font-bold tracking-[-0.03em] text-forest-800 sm:text-[3rem]">
                    {stat.value}
                    <span className="text-forest-500">{stat.unit}</span>
                  </p>

                  <p className="mt-3.5 flex-1 text-[0.875rem] leading-relaxed text-ink-soft">
                    {stat.label}
                  </p>

                  <p className="mt-5 inline-flex w-fit items-center rounded-xs bg-sun-100 px-2 py-1 text-[0.625rem] font-semibold tracking-[0.1em] text-sun-700 uppercase">
                    {stat.tag}
                  </p>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>

        {/* ——— Témoignage + image ——— */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch lg:gap-12">
          <Reveal>
            <figure className="flex h-full flex-col justify-between rounded-xl border border-line bg-ivory p-7 sm:p-9">
              <div>
                <Quote
                  className="h-7 w-7 text-leaf-300"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <blockquote className="mt-5 font-display text-[1.25rem] leading-[1.45] font-medium text-balance text-forest-900 sm:text-[1.5rem]">
                  «&nbsp;{results.testimonial.quote}&nbsp;»
                </blockquote>
              </div>

              <figcaption className="mt-8 flex items-center gap-3 border-t border-line pt-5">
                <span
                  aria-hidden="true"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-forest-800 text-[0.75rem] font-semibold text-white"
                >
                  AP
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.875rem] font-semibold text-forest-900">
                    {results.testimonial.author}
                  </span>
                  <span className="block text-[0.8125rem] text-ink-mute">
                    {results.testimonial.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full overflow-hidden rounded-xl bg-forest-900">
              <img
                src={results.image.src}
                alt={results.image.alt}
                width={results.image.width}
                height={results.image.height}
                loading="lazy"
                decoding="async"
                className="h-full min-h-56 w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
