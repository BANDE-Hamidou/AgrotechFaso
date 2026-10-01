/**
 * Marque AgroTech Faso : une goutte dont la base se prolonge en racine.
 * Dessinée en SVG afin de rester nette à toutes les tailles.
 */
import { brand } from '../../lib/content'

export function Logo({
  className = '',
  tone = 'dark',
}: {
  className?: string
  /** `dark` = texte vert profond. `light` = texte blanc (footer). */
  tone?: 'dark' | 'light'
}) {
  const wordmark = tone === 'light' ? 'text-white' : 'text-forest-900'
  const baseline = tone === 'light' ? 'text-leaf-300' : 'text-forest-600'
  const mark = tone === 'light' ? 'text-leaf-300' : 'text-forest-700'

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        focusable="false"
        className={`h-8 w-8 shrink-0 ${mark}`}
        fill="none"
      >
        <path
          d="M16 3.5c4.6 5.3 7.2 9.2 7.2 12.3a7.2 7.2 0 1 1-14.4 0c0-3.1 2.6-7 7.2-12.3Z"
          fill="currentColor"
        />
        <path
          d="M16 28.5V19.8M16 22.6c1.9 0 3.2-1 3.8-2.9M16 25.2c-1.7 0-2.9-.9-3.5-2.6"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          opacity=".55"
        />
      </svg>

      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.0625rem] font-bold tracking-[-0.03em] ${wordmark}`}
        >
          {brand.name}
        </span>
        <span
          className={`mt-1 text-[0.5625rem] font-semibold tracking-[0.18em] uppercase ${baseline}`}
        >
          {brand.baseline}
        </span>
      </span>
    </span>
  )
}
