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
