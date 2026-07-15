const PLAYER_NAME_KEY = 'palabras-encadenadas:player-name'
const HISTORY_KEY = 'palabras-encadenadas:history'

export type HistoryEntry = {
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

export function getHistory(): HistoryEntry[] {
  const raw = localStorage.getItem(HISTORY_KEY)
  if (!raw) return []

  try {
    return JSON.parse(raw) as HistoryEntry[]
  } catch {
    return []
  }
}

export function addHistoryEntry(entry: HistoryEntry): void {
  const history = getHistory()
  localStorage.setItem(HISTORY_KEY, JSON.stringify([...history, entry]))
}

export function getHistorySortedByScore(): HistoryEntry[] {
  return getHistory().sort((a, b) => b.score - a.score)
}
