import { Container, Eyebrow, Section } from '../ui/Primitives'
import { Reveal } from '../ui/Reveal'
import { Icon } from '../icons/Icon'
import { problem } from '../../lib/content'

export function Problem() {
  return (
    <Section id="probleme" tone="mist" labelledBy="probleme-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          {/* Colonne texte */}
          <div>
            <Reveal>
              <Eyebrow>{problem.eyebrow}</Eyebrow>
              <h2
                id="probleme-title"
                className="mt-5 text-[1.75rem] leading-[1.15] font-bold text-forest-900 sm:text-[2.125rem] lg:text-[2.5rem]"
              >
                {problem.title}
              </h2>
              <p className="mt-5 max-w-lg text-[1.0625rem] leading-relaxed text-ink-soft">
                {problem.intro}
              </p>
            </Reveal>

            <ul className="mt-10 space-y-px overflow-hidden rounded-lg bg-line">
              {problem.items.map((item, index) => (
                <Reveal as="li" key={item.title} delay={index * 80}>
                  <div className="group flex gap-4 bg-white px-5 py-5 transition-colors duration-200 hover:bg-leaf-50/60 sm:px-6">
                    <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-leaf-50 text-forest-700 ring-1 ring-leaf-100 transition-colors duration-200 group-hover:bg-forest-700 group-hover:text-white group-hover:ring-forest-700">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>

                    <div className="min-w-0">
                      <h3 className="text-[0.9375rem] font-semibold tracking-[0.04em] text-forest-900 uppercase">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-soft">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Colonne image */}
          <Reveal delay={120}>
            <figure className="relative">
              <div className="overflow-hidden rounded-xl bg-forest-900 shadow-lift">
                <picture>
                  <source srcSet={problem.image.src} type="image/webp" />
                  <img
                    src={problem.image.fallback}
                    alt={problem.image.alt}
                    width={problem.image.width}
                    height={problem.image.height}
                    loading="lazy"
                    decoding="async"
                    className="aspect-4/3 w-full object-cover"
                  />
                </picture>
              </div>

              <figcaption className="mt-4 flex items-center gap-2.5 text-[0.8125rem] text-ink-mute">
                <span aria-hidden="true" className="h-px w-8 bg-line" />
                Sol en manque d’eau : la surface paraît sèche avant que la culture ne le montre.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
