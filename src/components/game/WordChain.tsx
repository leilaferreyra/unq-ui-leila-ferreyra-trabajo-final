import { useEffect, useRef, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { WordChainItem } from './WordChainItem'

type WordChainProps = {
  words: string[]
}

export function WordChain({ words }: WordChainProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isScrolledDown, setIsScrolledDown] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scrollToEnd = () => {
      container.scrollTop = container.scrollHeight
    }

    scrollToEnd()

    const resizeObserver = new ResizeObserver(scrollToEnd)
    resizeObserver.observe(container)
    return () => resizeObserver.disconnect()
  }, [words])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => setIsScrolledDown(container.scrollTop > 0)
    handleScroll()

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex h-5 shrink-0 items-center justify-center" aria-hidden="true">
        <span
          className={`text-xl leading-none font-bold text-ink/60 transition-opacity ${isScrolledDown ? 'opacity-100' : 'opacity-0'}`}
        >
          ···
        </span>
      </div>
      <div
        ref={containerRef}
        className="scrollbar-hidden flex min-h-0 flex-1 flex-col overflow-y-auto"
      >
        {words.map((word, index) => (
          <div key={word} className="flex flex-col items-center">
            <div className="flex h-11 w-full items-center justify-center sm:h-12">
              <WordChainItem word={word} index={index} />
            </div>
            <div className="flex h-4 w-full items-center justify-center sm:h-5">
              {index < words.length - 1 && <IoIosArrowDown className="text-ink/50" aria-hidden="true" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
