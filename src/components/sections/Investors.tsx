import { useRef, useState } from 'react'
import { Play } from 'lucide-react'
import { Container, Eyebrow, Section, ButtonLink } from '../ui/Primitives'
import { Reveal } from '../ui/Reveal'
import { Icon } from '../icons/Icon'
import { investors, links } from '../../lib/content'

export function Investors() {
  const [active, setActive] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const current = investors.videos[active]

  const select = (index: number) => {
    setActive(index)
    videoRef.current?.load()
  }

  return (
    <Section id="investisseurs" tone="dark" labelledBy="investisseurs-title" className="grain">
      {/* Voile arrière-plan, très bas contraste */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_80%_0%,rgba(63,163,106,0.16)_0%,transparent_65%)]"
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* Argumentaire */}
          <div>
            <Reveal>
              <Eyebrow tone="light">{investors.eyebrow}</Eyebrow>
              <h2
                id="investisseurs-title"
                className="mt-5 text-[1.75rem] leading-[1.15] font-bold text-white sm:text-[2.125rem] lg:text-[2.5rem]"
              >
                {investors.title}
              </h2>
              <p className="mt-5 max-w-lg text-[1.0625rem] leading-relaxed text-leaf-200/85">
                {investors.intro}
              </p>
            </Reveal>

            <ul className="mt-10 space-y-8">
              {investors.items.map((item, index) => (
                <Reveal as="li" key={item.title} delay={index * 80}>
                  <div className="flex gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/10 text-leaf-300 ring-1 ring-white/15">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[0.8125rem] font-semibold tracking-[0.12em] text-leaf-300 uppercase">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-white/75">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={200}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#video" variant="onDark">
                  <Play className="h-4 w-4" aria-hidden />
                  {investors.primary}
                </ButtonLink>
                <ButtonLink href={links.whatsapp} target="_blank" rel="noopener noreferrer" variant="onDarkGhost">
                  {investors.secondary}
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          {/* Lecteur vidéo */}
          <Reveal delay={120}>
            <div id="video" className="scroll-mt-28">
              <figure className="overflow-hidden rounded-xl bg-forest-950 ring-1 ring-white/10">
                <div className="relative aspect-square w-full bg-black">
                  <video
                    ref={videoRef}
                    key={current.id}
                    className="h-full w-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    poster={current.poster}
                    aria-label={`Vidéo : ${current.label}`}
                  >
                    <source src={current.src} type="video/mp4" />
                    Votre navigateur ne sait pas lire cette vidéo.
                  </video>
                </div>

                <figcaption className="border-t border-white/10 px-5 py-4">
                  <div
                    role="tablist"
                    aria-label="Versions de la vidéo de présentation"
                    className="flex flex-wrap gap-2"
                  >
                    {investors.videos.map((video, index) => (
                      <button
                        key={video.id}
                        type="button"
                        role="tab"
                        aria-selected={index === active}
                        aria-controls="video-panel"
                        onClick={() => select(index)}
                        className={`focus-ring-light rounded-md px-3 py-1.5 text-[0.8125rem] font-medium transition-colors duration-200 ${
                          index === active
                            ? 'bg-white text-forest-900'
                            : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                        }`}
                      >
                        {video.label}
                        <span className="tabular ml-1.5 opacity-60">{video.duration}</span>
                      </button>
                    ))}
                  </div>
                  <p className="mt-3 text-[0.8125rem] leading-relaxed text-leaf-200/70">
                    {investors.videoNote}
                  </p>
                </figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
