import 'server-only'

export function blockedNationalNumber(): string {
  return ['312', '646', '3816'].join('')
}

export function resolveGoogleVoiceNumber(
  raw: string | undefined
): string | null {
  if (!raw) return null

  const trimmed = raw.trim()
  if (!trimmed) return null

  const digits = trimmed.replace(/\D/g, '')
  if (digits.length < 10 || digits.length > 15) return null

  const blocked = blockedNationalNumber()
  const national = digits.replace(/^1(?=\d{10}$)/, '')
  if (national === blocked) return null
  if (digits.includes(blocked)) return null
  if (/^1?\d{3}555\d{4}$/.test(digits)) return null

  return digits
}

export function assignedGoogleVoiceNumber(): string | null {
  return resolveGoogleVoiceNumber(process.env.NEXT_PUBLIC_GOOGLE_VOICE_NUMBER)
}
