const COLOR_CLASSES = ['bg-chain-pink', 'bg-chain-lavender', 'bg-chain-amber'] as const

type WordChainItemProps = {
  word: string
  index: number
}

export function WordChainItem({ word, index }: WordChainItemProps) {
  const colorClassName = COLOR_CLASSES[index % COLOR_CLASSES.length]

  return (
    <div className={`rounded-full ${colorClassName} px-4 py-2.5 text-center font-display text-base text-ink sm:px-6 sm:py-3 sm:text-lg`}>
      {word}
    </div>
  )
}
