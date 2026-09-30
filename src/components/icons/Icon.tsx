import { icons, ICON_STROKE, type IconName } from './iconSet'

export function Icon({ name, className = 'h-5 w-5' }: { name: string; className?: string }) {
  const Cmp = icons[name as IconName]
  if (!Cmp) return null
  return <Cmp className={className} strokeWidth={ICON_STROKE} aria-hidden />
}
