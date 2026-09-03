import {
  blockedNationalNumber,
  formatDialableNumber,
  resolveGoogleVoiceNumber,
  toE164,
} from '@/lib/phone'

function blockedFixtures() {
  const national = blockedNationalNumber()
  return {
    national,
    e164: `+1${national}`,
    dashed: [national.slice(0, 3), national.slice(3, 6), national.slice(6)].join(
      '-'
    ),
  }
}

describe('resolveGoogleVoiceNumber', () => {
  it('returns null when unset or blank', () => {
    expect(resolveGoogleVoiceNumber(undefined)).toBeNull()
    expect(resolveGoogleVoiceNumber('')).toBeNull()
    expect(resolveGoogleVoiceNumber('   ')).toBeNull()
  })

  it('rejects the blocked shop line and short values', () => {
    const blocked = blockedFixtures()
    expect(resolveGoogleVoiceNumber(blocked.e164)).toBeNull()
    expect(resolveGoogleVoiceNumber(blocked.dashed)).toBeNull()
    expect(resolveGoogleVoiceNumber('12345')).toBeNull()
  })

  it('rejects 555 exchange placeholders and accepts a non-blocked number', () => {
    expect(resolveGoogleVoiceNumber('(312) 555-0100')).toBeNull()
    expect(resolveGoogleVoiceNumber('3128471928')).toBe('3128471928')
  })
})

describe('toE164', () => {
  it('prefixes country code 1 for a 10-digit US number', () => {
    expect(toE164('3128471928')).toBe('+13128471928')
  })

  it('keeps an 11-digit US number that already starts with 1', () => {
    expect(toE164('13128471928')).toBe('+13128471928')
  })
})

describe('formatDialableNumber', () => {
  it('formats a 10-digit national number', () => {
    expect(formatDialableNumber('3128471928')).toBe('(312) 847-1928')
  })
})
