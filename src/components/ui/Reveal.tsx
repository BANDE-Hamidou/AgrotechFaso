import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

/**
 * Révèle un bloc au défilement.
 * - Une seule animation, courte et directionnelle (14 px).
 * - Désactivé si l'utilisateur a demandé moins de animations.
 * - Le contenu reste visible si l'IntersectionObserver est indisponible.
 * Les styles associés (`[data-reveal]`) sont centralisés dans index.css.
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className = '',
}: {
  children: ReactNode
  /** Retard en ms, pour cadencer une série d'éléments. */
  delay?: number
  as?: ElementType
  className?: string
}) {
  const ref = useRef<HTMLElement>(null)

  /* Initialisé à la volée : ce site est un SPA client, `window` existe
     donc dès le premier rendu. */
  const [shown, setShown] = useState(
    () =>
      typeof window === 'undefined' ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const node = ref.current
    if (shown || !node) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true)
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [shown])

  return (
    <Tag
      ref={ref}
      data-reveal={shown ? 'in' : 'out'}
      style={{ transitionDelay: shown ? `${delay}ms` : undefined }}
      className={className}
    >
      {children}
    </Tag>
  )
}
