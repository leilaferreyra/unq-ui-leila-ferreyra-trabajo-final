export const COLOR_VARIANTS = [
  { border: 'border-stat-pink-icon/30', iconBg: 'bg-stat-pink', iconColor: 'text-stat-pink-icon' },
  { border: 'border-stat-violet-icon/30', iconBg: 'bg-stat-violet', iconColor: 'text-stat-violet-icon' },
  { border: 'border-chain-amber-icon/30', iconBg: 'bg-chain-amber', iconColor: 'text-chain-amber-icon' },
] as const

export function getColorVariant(index: number) {
  return COLOR_VARIANTS[index % COLOR_VARIANTS.length]
}
