import fs from 'fs'
import path from 'path'
import {
  FLOW_STEPS,
  GOOGLE_VOICE_PENDING_LABEL,
  HERO_LINES,
  HONESTY_STAMP,
  PACKET_FIELDS,
  PACKET_VALUES,
} from '@/lib/content'

function collectSourceFiles(dir: string, files: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (
      entry.name === 'node_modules' ||
      entry.name === '.next' ||
      entry.name === '.git' ||
      entry.name === '.agents'
    ) {
      continue
    }
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      collectSourceFiles(fullPath, files)
    } else if (
      /\.(tsx|ts|jsx|js|md|css|mjs|example)$/.test(entry.name) ||
      entry.name.startsWith('.env')
    ) {
      files.push(fullPath)
    }
  }
  return files
}

describe('CallLock hail-412 homepage contract', () => {
  const productFiles = collectSourceFiles(process.cwd()).filter(
    (file) =>
      !file.includes(`${path.sep}__tests__${path.sep}`) &&
      /\.(tsx|ts|jsx|js|css|mjs)$/.test(file)
  )
  const sourceText = productFiles
    .map((file) => fs.readFileSync(file, 'utf8'))
    .join('\n')
  it('uses the exact hail-412 hero lines', () => {
    expect(HERO_LINES).toEqual([
      'Hail stops at 4:12.',
      'The phone starts at 4:19.',
      'You are still on a roof.',
    ])
    for (const line of HERO_LINES) {
      expect(sourceText).toContain(line)
    }
  })

  it('does not keep the retired hail headline', () => {
    expect(sourceText).not.toMatch(/When hail hits/)
  })

  it('keeps Google Voice unfilled and never dials', () => {
    expect(sourceText).toContain(GOOGLE_VOICE_PENDING_LABEL)
    expect(sourceText).toMatch(/Unfilled/)
    expect(sourceText).not.toMatch(/href=["']tel:/)
    expect(sourceText).not.toMatch(/NEXT_PUBLIC_GOOGLE_VOICE_NUMBER/)
  })

  it('has no private-preview phone-server or 3816 leftovers', () => {
    expect(fs.existsSync(path.join(process.cwd(), 'lib/phone-server.ts'))).toBe(
      false
    )
    expect(fs.existsSync(path.join(process.cwd(), 'lib/phone.ts'))).toBe(false)
    expect(
      fs.existsSync(
        path.join(process.cwd(), 'scripts/assert-client-bundle-scrub.cjs')
      )
    ).toBe(false)
    expect(sourceText).not.toMatch(/phone-server/)
    expect(sourceText).not.toMatch(/blockedNationalNumber/)
    expect(sourceText).not.toMatch(/assignedGoogleVoiceNumber/)
    expect(fs.existsSync(path.join(process.cwd(), 'pages'))).toBe(false)
    expect(sourceText).not.toMatch(/38\s*16/)
  })

  it('keeps packet values empty and photo slots pending', () => {
    for (const field of PACKET_FIELDS) {
      expect(sourceText).toContain(field)
    }
    expect(PACKET_VALUES['Call time']).toBe('')
    expect(PACKET_VALUES.Homeowner).toBe('')
    expect(PACKET_VALUES['Property address']).toBe('')
    expect(PACKET_VALUES['Loss type']).toBe('')
    expect(PACKET_VALUES['Claim facts']).toBe('')
    expect(PACKET_VALUES['Next action']).toBe('')
    expect(PACKET_VALUES['Street photo']).toBe('Photo pending')
    expect(PACKET_VALUES['Slope photo']).toBe('Photo pending')
    expect(sourceText).toContain(HONESTY_STAMP)
  })

  it('includes the intake path and trial terms', () => {
    for (const step of FLOW_STEPS) {
      expect(sourceText).toContain(step.title)
    }
    expect(sourceText).toContain('$0 for 90 days')
    expect(sourceText).not.toMatch(/\$197/)
    expect(sourceText).not.toMatch(/\$397/)
    expect(sourceText).not.toMatch(/\$797/)
    expect(sourceText).not.toMatch(/\$249/)
    expect(sourceText).not.toMatch(/\$599/)
  })

  it('scopes the form to storm-roof intake, not HVAC overflow', () => {
    expect(sourceText).toMatch(/storm-roof intake/i)
    expect(sourceText).toMatch(/insurance-storm roofing/i)
    expect(sourceText).toMatch(/Not a receptionist/)
    expect(sourceText).toMatch(/missed-call overflow/)
    expect(sourceText).toMatch(/HVAC receptionist overflow/)
    expect(sourceText).not.toMatch(/Mike's HVAC/)
    expect(sourceText).not.toMatch(/service businesses/i)
  })

  it('does not invent testimonials, logos, or shop contact', () => {
    expect(sourceText).not.toMatch(/testimonial/i)
    expect(sourceText).not.toMatch(/Trusted by/i)
    expect(sourceText).not.toMatch(/99\.9%/)
    expect(sourceText).toMatch(/No shop contact/)
  })
})
