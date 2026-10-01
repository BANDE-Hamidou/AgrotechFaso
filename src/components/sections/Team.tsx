import { Container, Eyebrow, Section } from '../ui/Primitives'
import { Reveal } from '../ui/Reveal'
import { team } from '../../lib/content'

/**
 * Portrait : photo si elle est fournie dans content.ts, sinon monogramme.
 * Le monogramme est un choix de design assumé, pas une image manquante.
 */
function Portrait({
  member,
}: {
  member: (typeof team.members)[number]
}) {
  if (member.photo) {
    return (
      <div className="aspect-4/5 overflow-hidden rounded-md bg-leaf-50">
        <img
          src={member.photo.src}
          alt={member.photo.alt}
          width={member.photo.width}
          height={member.photo.height}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
    )
  }

  return (
    <div
      aria-hidden="true"
      className="relative flex aspect-4/5 items-end justify-center overflow-hidden rounded-md bg-forest-800"
    >
      {/* Trame discrète, pour éviter l'aplat plat */}
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(255,255,255,0.7) 0 1px, transparent 1px 9px)',
        }}
      />
      <span className="relative font-display text-[2.5rem] leading-none font-bold tracking-[-0.03em] text-leaf-300">
        {member.initials}
      </span>
    </div>
  )
}

export function Team() {
  return (
    <Section id="equipe" tone="mist" labelledBy="equipe-title">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>{team.eyebrow}</Eyebrow>
            <h2
              id="equipe-title"
              className="mt-5 text-[1.75rem] leading-[1.15] font-bold text-forest-900 sm:text-[2.125rem] lg:text-[2.5rem]"
            >
              {team.title}
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink-soft">{team.intro}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-6 lg:grid-cols-4">
          {team.members.map((member, index) => (
            <Reveal key={member.name} delay={index * 70}>
              <article className="group h-full">
                <div className="transition-transform duration-300 ease-out group-hover:-translate-y-1">
                  <Portrait member={member} />
                </div>

                <h3 className="mt-4 text-[0.9375rem] font-semibold text-forest-900 sm:mt-5 sm:text-[1.0625rem]">
                  {member.name}
                </h3>
                <p className="mt-1 text-[0.6875rem] font-semibold tracking-[0.06em] text-forest-600 uppercase sm:text-[0.8125rem]">
                  {member.role}
                </p>
                <p className="mt-2.5 text-[0.8125rem] leading-relaxed text-ink-soft sm:mt-3 sm:text-[0.875rem]">
                  {member.bio}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Bandeau terrain */}
        <Reveal delay={120}>
          <figure className="mt-16 grid overflow-hidden rounded-xl bg-forest-900 lg:grid-cols-[1.4fr_1fr]">
            <img
              src={team.image.src}
              alt={team.image.alt}
              width={team.image.width}
              height={team.image.height}
              loading="lazy"
              decoding="async"
              className="h-56 w-full object-cover lg:h-full"
            />
            <div className="flex flex-col justify-center p-7 sm:p-9">
              <p className="font-display text-[1.125rem] leading-snug font-medium text-balance text-white sm:text-[1.25rem]">
                Le produit se construit dans la parcelle, pas au bureau.
              </p>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-leaf-200/80">
                Chaque itération est testée auprès d’exploitations partenaires avant d’être
                déployée.
              </p>
            </div>
          </figure>
        </Reveal>
      </Container>
    </Section>
  )
}
