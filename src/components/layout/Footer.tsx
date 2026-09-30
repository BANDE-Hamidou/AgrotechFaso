import { Container } from '../ui/Primitives'
import { Logo } from '../graphics/Logo'
import { BrandIcon } from '../icons/BrandIcon'
import { brand, footer } from '../../lib/content'

/** Année courante, figée au chargement du module. */
const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="bg-forest-950 text-white">
      <Container size="wide">
        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16 lg:py-20">
          {/* ——— Marque ——— */}
          <div className="max-w-sm">
            <Logo tone="light" />
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-white/60">
              {footer.description}
            </p>

            <ul className="mt-7 flex items-center gap-2.5">
              {footer.socials.map((social) => (
                <li key={social.icon}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="focus-ring focus-ring-light inline-flex h-9 w-9 items-center justify-center rounded-md text-white/70 ring-1 ring-white/15 transition-colors duration-200 hover:bg-white/10 hover:text-white hover:ring-white/30"
                  >
                    <BrandIcon name={social.icon} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ——— Liens ——— */}
          <nav aria-label="Liens de pied de page">
            <h2 className="text-[0.6875rem] font-semibold tracking-[0.16em] text-leaf-300 uppercase">
              Navigation
            </h2>
            <ul className="mt-4 space-y-1">
              {footer.links.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="focus-ring focus-ring-light inline-block py-1.5 text-[0.9375rem] text-white/70 transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ——— Contact ——— */}
          <div>
            <h2 className="text-[0.6875rem] font-semibold tracking-[0.16em] text-leaf-300 uppercase">
              Contact
            </h2>
            <ul className="mt-4 space-y-1 text-[0.9375rem] text-white/70">
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  className="focus-ring focus-ring-light inline-block py-1.5 transition-colors duration-200 hover:text-white"
                >
                  {brand.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${brand.phone.replace(/[^\d+]/g, '')}`}
                  className="inline-block py-1.5 transition-colors duration-200 hover:text-white"
                >
                  {brand.phone}
                </a>
              </li>
              <li className="py-1.5 text-white/50">{brand.location}</li>
            </ul>
          </div>
        </div>

        {/* ——— Copyright ——— */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.8125rem] text-white/45">
            © {YEAR} {brand.name}. {footer.legal}
          </p>
          <p className="text-[0.75rem] text-white/55">
            Données chiffrées indicatives — scénario pilote / simulation.
          </p>
        </div>
      </Container>
    </footer>
  )
}
