import {
  formatDialableNumber,
  resolveGoogleVoiceNumber,
} from '@/lib/phone'

describe('resolveGoogleVoiceNumber', () => {
  it('returns null when unset or blank', () => {
    expect(resolveGoogleVoiceNumber(undefined)).toBeNull()
    expect(resolveGoogleVoiceNumber('')).toBeNull()
    expect(resolveGoogleVoiceNumber('   ')).toBeNull()
  })

  it('rejects the blocked 3816 line and 555 placeholders', () => {
    expect(resolveGoogleVoiceNumber('+13126463816')).toBeNull()
    expect(resolveGoogleVoiceNumber('312-646-3816')).toBeNull()
    expect(resolveGoogleVoiceNumber('12345')).toBeNull()
  })

  it('rejects 555 exchange placeholders and accepts a non-blocked number', () => {
    expect(resolveGoogleVoiceNumber('(312) 555-0100')).toBeNull()
    expect(resolveGoogleVoiceNumber('3128471928')).toBe('3128471928')
  })
})

describe('formatDialableNumber', () => {
  it('formats a 10-digit national number', () => {
    expect(formatDialableNumber('3128471928')).toBe('(312) 847-1928')
  })
})
