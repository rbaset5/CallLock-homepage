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

export function toE164(digits: string): string {
  if (digits.length === 10) return `+1${digits}`
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`
  if (digits.startsWith('+')) return digits
  return `+${digits}`
}

export function formatDialableNumber(digits: string): string {
  const national = digits.replace(/^1(?=\d{10}$)/, '')
  if (national.length === 10) {
    return `(${national.slice(0, 3)}) ${national.slice(3, 6)}-${national.slice(6)}`
  }
  return toE164(digits)
}

export function assignedGoogleVoiceNumber(): string | null {
  return resolveGoogleVoiceNumber(process.env.NEXT_PUBLIC_GOOGLE_VOICE_NUMBER)
}
