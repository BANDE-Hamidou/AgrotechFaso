import { Mail, MapPin, Phone } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Container, Eyebrow, Section, ButtonLink } from '../ui/Primitives'
import { Reveal } from '../ui/Reveal'
import { BrandIcon } from '../icons/BrandIcon'
import { ICON_STROKE } from '../icons/iconSet'
import { brand, contact, links } from '../../lib/content'

const details = [
  { icon: 'mail', label: 'Email', value: brand.email, href: links.email },
  { icon: 'phone', label: 'Téléphone', value: brand.phone, href: links.phone },
  { icon: 'pin', label: 'Localisation', value: brand.location, href: null },
] as const

export function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Le formulaire n'est pas relié à un service d'envoi.
    // Branchez ici votre backend ou un service type Formspree.
    setSent(true)
  }

  return (
    <Section id="contact" tone="ivory" labelledBy="contact-title">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Colonne gauche */}
          <div>
            <Reveal>
              <Eyebrow>{contact.eyebrow}</Eyebrow>
              <h2
                id="contact-title"
                className="mt-5 text-[1.75rem] leading-[1.15] font-bold text-forest-900 sm:text-[2.125rem] lg:text-[2.375rem]"
              >
                {contact.title}
              </h2>
              <p className="mt-5 max-w-md text-[1.0625rem] leading-relaxed text-ink-soft">
                {contact.subtitle}
              </p>
            </Reveal>

            <Reveal delay={90}>
              <ButtonLink
                href={links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                className="mt-8"
              >
                <BrandIcon name="whatsapp" className="h-[1.15em] w-[1.15em] shrink-0" />
                {contact.whatsapp}
              </ButtonLink>
            </Reveal>

            <Reveal delay={140}>
              <ul className="mt-10 space-y-px overflow-hidden rounded-lg bg-line">
                {details.map((item) => {
                  const inner = (
                    <>
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-leaf-50 text-forest-700 ring-1 ring-leaf-100">
                        {item.icon === 'mail' ? (
                          <Mail className="h-4 w-4" strokeWidth={ICON_STROKE} aria-hidden />
                        ) : item.icon === 'phone' ? (
                          <Phone className="h-4 w-4" strokeWidth={ICON_STROKE} aria-hidden />
                        ) : (
                          <MapPin className="h-4 w-4" strokeWidth={ICON_STROKE} aria-hidden />
                        )}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[0.6875rem] font-semibold tracking-[0.12em] text-ink-mute uppercase">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block truncate text-[0.9375rem] font-medium text-forest-900">
                          {item.value}
                        </span>
                      </span>
                    </>
                  )

                  return (
                    <li key={item.label} className="bg-white">
                      {item.href ? (
                        <a
                          href={item.href}
                          className="focus-ring-inset focus-ring flex items-center gap-3.5 px-5 py-4 transition-colors duration-200 hover:bg-leaf-50/70"
                        >
                          {inner}
                        </a>
                      ) : (
                        <div className="flex items-center gap-3.5 px-5 py-4">{inner}</div>
                      )}
                    </li>
                  )
                })}
              </ul>
            </Reveal>
          </div>

          {/* Formulaire */}
          <Reveal delay={100}>
            <form
              onSubmit={onSubmit}
              className="rounded-xl border border-line bg-white p-6 shadow-soft sm:p-8"
            >
              <div className="space-y-5">
                <Field
                  id="contact-nom"
                  label={contact.form.name}
                  name="nom"
                  type="text"
                  autoComplete="name"
                  placeholder={contact.form.namePlaceholder}
                  required
                />
                <Field
                  id="contact-email"
                  label={contact.form.email}
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder={contact.form.emailPlaceholder}
                  required
                />

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[0.8125rem] font-semibold text-forest-900"
                  >
                    {contact.form.message}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    placeholder={contact.form.messagePlaceholder}
                    className="mt-2 w-full resize-y rounded-md border border-line bg-ivory px-3.5 py-2.5 text-[0.9375rem] text-ink transition-colors duration-200 outline-none placeholder:text-ink-faint focus:border-forest-600 focus:bg-white focus:ring-2 focus:ring-forest-600/20"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="focus-ring mt-6 inline-flex h-11 w-full items-center justify-center rounded-lg bg-forest-700 px-5 text-[0.9375rem] font-semibold text-white shadow-soft transition-[background-color,box-shadow,transform] duration-200 hover:bg-forest-800 hover:shadow-lift active:translate-y-px"
              >
                {contact.form.submit}
              </button>

              <p
                role="status"
                aria-live="polite"
                className={`mt-3 text-[0.8125rem] text-forest-600 transition-opacity duration-200 ${
                  sent ? 'opacity-100' : 'sr-only opacity-0'
                }`}
              >
                {sent
                  ? 'Message prêt à être envoyé. Connectez ce formulaire à votre service d’envoi.'
                  : ''}
              </p>
            </form>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}

function Field({
  id,
  label,
  name,
  type,
  placeholder,
  autoComplete,
  required,
}: {
  id: string
  label: string
  name: string
  type: string
  placeholder: string
  autoComplete?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[0.8125rem] font-semibold text-forest-900">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-line bg-ivory px-3.5 py-2.5 text-[0.9375rem] text-ink transition-colors duration-200 outline-none placeholder:text-ink-faint focus:border-forest-600 focus:bg-white focus:ring-2 focus:ring-forest-600/20"
      />
    </div>
  )
}
