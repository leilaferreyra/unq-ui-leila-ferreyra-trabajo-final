import { IoIosArrowDown } from 'react-icons/io'
import { WordChainItem } from './WordChainItem'

type WordChainProps = {
  words: string[]
}

export function WordChain({ words }: WordChainProps) {
  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-y-auto pr-1">
      {words.map((word, index) => (
        <div key={word} className="flex flex-col items-center">
          {index > 0 && <IoIosArrowDown className="text-ink/50" aria-hidden="true" />}
          <div className="w-full">
            <WordChainItem word={word} index={index} />
          </div>
        </div>
      ))}
    </div>
  )
}
