const PLAYER_NAME_KEY = 'palabras-encadenadas:player-name'
const SCORES_KEY = 'palabras-encadenadas:scores'
const TOP_SCORES_LIMIT = 10

export type ScoreEntry = {
  name: string
  score: number
  wordsCount: number
  date: string
}

export function getPlayerName(): string | null {
  return localStorage.getItem(PLAYER_NAME_KEY)
}

export function savePlayerName(name: string): void {
  localStorage.setItem(PLAYER_NAME_KEY, name)
}

export function getScores(): ScoreEntry[] {
  const raw = localStorage.getItem(SCORES_KEY)
  if (!raw) return []

  try {
    return JSON.parse(raw) as ScoreEntry[]
  } catch {
    return []
  }
}

export function addScoreEntry(entry: ScoreEntry): void {
  const scores = getScores()
  localStorage.setItem(SCORES_KEY, JSON.stringify([...scores, entry]))
}

export function getTopScores(): ScoreEntry[] {
  return getScores()
    .sort((a, b) => b.score - a.score)
    .slice(0, TOP_SCORES_LIMIT)
}
