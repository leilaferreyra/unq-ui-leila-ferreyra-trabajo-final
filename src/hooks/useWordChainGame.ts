import { useCallback, useMemo, useState } from 'react'
import { wordExistsInDictionary } from '../services/wordApi'
import type { GameStatus } from '../types/game'
import { normalizeWord } from '../utils/normalizeWord'
import { addScoreEntry, getPlayerName } from '../utils/storage'
import { useTimer } from './useTimer'

const TURN_SECONDS = 15

export function useWordChainGame() {
  const [words, setWords] = useState<string[]>([])
  const [score, setScore] = useState(0)
  const [status, setStatus] = useState<GameStatus>('idle')
  const [error, setError] = useState<string | null>(null)
  const [isValidating, setIsValidating] = useState(false)

  const handleExpire = useCallback(() => {
    setStatus('finished')
    addScoreEntry({
      name: getPlayerName() ?? 'Anónimo',
      score,
      wordsCount: words.length,
      date: new Date().toISOString(),
    })
  }, [score, words])

  const { secondsLeft, restart } = useTimer(TURN_SECONDS, handleExpire)

  const lastWord = words[words.length - 1]
  const nextLetter = lastWord ? lastWord.at(-1)?.toUpperCase() ?? null : null

  const submitWord = useCallback(
    async (rawWord: string) => {
      if (status === 'finished' || isValidating) return

      const word = normalizeWord(rawWord)
      if (!word) {
        setError('Ingresá una palabra')
        return
      }

      if (status === 'idle') {
        setStatus('playing')
        restart()
      }

      if (words.includes(word)) {
        setError('La palabra ya fue utilizada')
        return
      }

      if (lastWord && word[0] !== lastWord.at(-1)) {
        setError(`La palabra debe empezar con "${lastWord.at(-1)?.toUpperCase()}"`)
        return
      }

      setIsValidating(true)
      try {
        const exists = await wordExistsInDictionary(word)
        if (!exists) {
          setError('La palabra no existe')
          return
        }

        setWords((prev) => [...prev, word])
        setScore((prev) => prev + word.length)
        setError(null)
        setStatus('playing')
        restart()
      } catch {
        setError('No se pudo validar la palabra, intentá de nuevo')
      } finally {
        setIsValidating(false)
      }
    },
    [words, lastWord, status, isValidating, restart],
  )

  return useMemo(
    () => ({
      words,
      score,
      status,
      error,
      isValidating,
      secondsLeft,
      nextLetter,
      submitWord,
    }),
    [words, score, status, error, isValidating, secondsLeft, nextLetter, submitWord],
  )
}
