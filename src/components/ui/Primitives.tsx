import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

/* ------------------------------------------------------------------ */
/* Container : gabarit de largeur maximal, cohérent sur tout le site   */
/* ------------------------------------------------------------------ */

export function Container({
  children,
  className = '',
  size = 'default',
}: {
  children: ReactNode
  className?: string
  size?: 'default' | 'wide' | 'narrow'
}) {
  const max = { narrow: 'max-w-3xl', default: 'max-w-6xl', wide: 'max-w-7xl' }[size]
  return (
    <div className={`mx-auto w-full ${max} px-5 sm:px-7 lg:px-10 ${className}`}>{children}</div>
  )
}

/* ------------------------------------------------------------------ */
/* Section : espacement vertical + ancre de navigation                 */
/* ------------------------------------------------------------------ */

export function Section({
  id,
  children,
  className = '',
  tone = 'ivory',
  labelledBy,
}: {
  id?: string
  children: ReactNode
  className?: string
  tone?: 'ivory' | 'mist' | 'white' | 'forest' | 'dark'
  labelledBy?: string
}) {
  const tones = {
    ivory: 'bg-ivory',
    mist: 'bg-mist',
    white: 'bg-white',
    forest: 'bg-forest-800 text-white',
    dark: 'bg-forest-900 text-white',
  }[tone]

  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative py-20 sm:py-24 lg:py-32 ${tones} ${className}`}
    >
      {children}
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Eyebrow : petit libellé au-dessus des titres                       */
/* ------------------------------------------------------------------ */

export function Eyebrow({
  children,
  className = '',
  tone = 'green',
}: {
  children: ReactNode
  className?: string
  tone?: 'green' | 'light'
}) {
  return (
    <p
      className={`flex items-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.16em] uppercase ${
        tone === 'light' ? 'text-leaf-300' : 'text-forest-600'
      } ${className}`}
    >
      <span
        aria-hidden="true"
        className={`inline-block h-px w-6 ${
          tone === 'light' ? 'bg-leaf-300/60' : 'bg-forest-600/40'
        }`}
      />
      {children}
    </p>
  )
}

/* ------------------------------------------------------------------ */
/* Button : un seul composant, plusieurs variantes                    */
/* ------------------------------------------------------------------ */

type Variant = 'primary' | 'secondary' | 'ghost' | 'whatsapp' | 'onDark' | 'onDarkGhost'
type Size = 'sm' | 'md'

const base =
  'group/btn focus-ring relative inline-flex items-center justify-center gap-2 rounded-lg font-semibold whitespace-nowrap ' +
  'transition-[background-color,color,box-shadow,transform,border-color] duration-200 ease-out ' +
  'active:translate-y-px disabled:pointer-events-none disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary: 'bg-forest-700 text-white shadow-soft hover:bg-forest-800 hover:shadow-lift',
  secondary:
    'bg-white text-forest-800 ring-1 ring-line shadow-soft hover:bg-leaf-50 hover:ring-forest-600/30',
  ghost: 'text-forest-800 hover:bg-leaf-50',
  whatsapp: 'bg-wa text-white shadow-soft hover:bg-wa-dark hover:shadow-lift',
  onDark: 'focus-ring-light bg-white text-forest-900 shadow-soft hover:bg-leaf-50',
  onDarkGhost:
    'focus-ring-light text-white ring-1 ring-white/25 hover:bg-white/10 hover:ring-white/40',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3.5 text-[0.8125rem]',
  md: 'h-11 px-5 text-[0.9375rem]',
}

type ButtonProps = {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
} & Omit<ComponentPropsWithoutRef<'button'>, 'className' | 'children'>

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
    </button>
  )
}

/** Même habillage que Button, rendu en <a> (navigation externe / WhatsApp). */
export function ButtonLink({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}: {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
} & Omit<ComponentPropsWithoutRef<ElementType>, 'className' | 'children'>) {
  return (
    <a className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
    </a>
  )
}
