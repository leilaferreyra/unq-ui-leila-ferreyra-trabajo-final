const API_BASE_URL = 'https://word-api-hmlg.vercel.app'

export async function wordExistsInDictionary(word: string): Promise<boolean> {
  const response = await fetch(`${API_BASE_URL}/api/validate?word=${encodeURIComponent(word)}`)

  if (!response.ok) {
    throw new Error('No se pudo validar la palabra')
  }

  const data: { exists: boolean } = await response.json()
  return data.exists
}
