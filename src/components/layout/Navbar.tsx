import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Container, ButtonLink } from '../ui/Primitives'
import { Logo } from '../graphics/Logo'
import { useActiveSection, useScrolled } from '../../hooks/useScroll'
import { brand, links, nav } from '../../lib/content'

const SECTION_IDS = nav.map((item) => item.href.slice(1))

export function Navbar() {
  const scrolled = useScrolled(16)
  const active = useActiveSection(SECTION_IDS)
  const [open, setOpen] = useState(false)

  /* Ferme le menu mobile à la navigation. */
  const go = () => setOpen(false)

  /* Ferme le menu si l'on repasse en bureau, et verrouille le scroll. */
  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const sync = () => mq.matches && setOpen(false)
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled
          ? 'border-b border-line bg-white/92 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <Container size="wide">
        <div
          className={`flex items-center justify-between transition-[height] duration-300 ${
            scrolled ? 'h-16 lg:h-[4.5rem]' : 'h-[4.5rem] lg:h-24'
          }`}
        >
          <a
            href="#accueil"
            onClick={go}
            className="focus-ring rounded-md"
            aria-label={`${brand.name} — retour en haut de page`}
          >
            <Logo />
          </a>

          {/* Navigation bureau */}
          <nav aria-label="Navigation principale" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => {
                const isActive = active === item.href.slice(1)
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={isActive ? 'true' : undefined}
                      className={`focus-ring relative block rounded-md px-3 py-2.5 text-[0.875rem] font-medium transition-colors duration-200 ${
                        isActive
                          ? 'text-forest-800'
                          : 'text-ink-soft hover:text-forest-800'
                      }`}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={`absolute inset-x-3 -bottom-0.5 h-px origin-left bg-forest-700 transition-transform duration-300 ${
                          isActive ? 'scale-x-100' : 'scale-x-0'
                        }`}
                      />
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              className="h-10 sm:h-9"
            >
              Nous contacter
            </ButtonLink>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md text-forest-800 ring-1 ring-line transition-colors duration-200 hover:bg-leaf-50 lg:hidden"
            >
              {open ? (
                <X className="h-5 w-5" aria-hidden />
              ) : (
                <Menu className="h-5 w-5" aria-hidden />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Panneau mobile */}
      <div
        id="menu-mobile"
        className={`overflow-hidden border-t border-line bg-white transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
          open ? 'max-h-[70vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <Container className="pt-3 pb-6">
          <nav aria-label="Navigation mobile">
            <ul className="flex flex-col">
              {nav.map((item) => {
                const isActive = active === item.href.slice(1)
                return (
                  <li key={item.href} className="border-b border-line-soft last:border-0">
                    <a
                      href={item.href}
                      onClick={go}
                      aria-current={isActive ? 'true' : undefined}
                      className={`focus-ring-inset focus-ring flex items-center justify-between py-3.5 text-[0.9375rem] font-medium transition-colors ${
                        isActive ? 'text-forest-700' : 'text-ink-soft'
                      }`}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 rounded-full ${
                          isActive ? 'bg-forest-600' : 'bg-transparent'
                        }`}
                      />
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <ButtonLink
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 w-full"
          >
            Nous contacter
          </ButtonLink>
        </Container>
      </div>
    </header>
  )
}
