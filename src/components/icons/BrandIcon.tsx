import type { SVGProps } from 'react'
import { BRAND_GRID_72, brandIcons, type BrandIconName } from './brandIcons'

type BrandIconProps = {
  name: BrandIconName | (string & {})
  className?: string
  /**
   * Couleur des éléments « knocked out » (glyphe inverse sur aplat).
   * Par défaut : blanc.
   */
  knockout?: string
  title?: string
} & Omit<SVGProps<SVGSVGElement>, 'name' | 'title'>

export function BrandIcon({ name, className, knockout, title, ...rest }: BrandIconProps) {
  const icon = brandIcons[name]
  if (!icon) return null

  if (BRAND_GRID_72.has(name)) {
    return (
      <svg
        role={title ? 'img' : 'presentation'}
        aria-hidden={title ? undefined : true}
        aria-label={title}
        focusable="false"
        viewBox="0 0 72 72"
        className={className}
        {...rest}
      >
        {title ? <title>{title}</title> : null}
        <rect width="72" height="72" rx="16" fill="currentColor" />
        <path d={icon.path} fill={knockout ?? '#fff'} />
      </svg>
    )
  }

  return (
    <svg
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
      viewBox="0 0 24 24"
      className={className}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d={icon.path} fill="currentColor" />
    </svg>
  )
}
