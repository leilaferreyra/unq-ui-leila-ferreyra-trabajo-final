export function normalizeWord(rawWord: string): string {
  return rawWord
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
}
