export type GameStatus = 'idle' | 'playing' | 'finished'

export type GameResult = {
  score: number
  wordsCount: number
}

export type PlayNavigationState = {
  started: true
}
