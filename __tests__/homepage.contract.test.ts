import fs from 'fs'
import path from 'path'
import {
  FLOW_STEPS,
  GOOGLE_VOICE_PENDING_LABEL,
  HERO_HEADLINE,
  PACKET_FIELDS,
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
    } else if (/\.(tsx|ts|jsx|js|md|css)$/.test(entry.name)) {
      files.push(fullPath)
    }
  }
  return files
}

describe('CallLock private preview homepage contract', () => {
  const productFiles = collectSourceFiles(process.cwd()).filter(
    (file) =>
      !file.includes(`${path.sep}__tests__${path.sep}`) &&
      /\.(tsx|ts|jsx|js|css)$/.test(file)
  )
  const sourceText = productFiles
    .map((file) => fs.readFileSync(file, 'utf8'))
    .join('\n')

  const pageSource = fs.readFileSync(
    path.join(process.cwd(), 'app/page.tsx'),
    'utf8'
  )

  it('uses the exact hero headline', () => {
    expect(HERO_HEADLINE).toBe(
      'When hail hits, the next truck gets the job you didn’t answer.'
    )
    expect(sourceText).toContain(HERO_HEADLINE)
  })

  it('keeps the Google Voice CTA visibly pending and non-dialing', () => {
    expect(sourceText).toContain(GOOGLE_VOICE_PENDING_LABEL)
    expect(sourceText).toMatch(/aria-disabled=["']true["']/)
    expect(sourceText).toMatch(/pointer-events-none/)
    expect(sourceText).not.toMatch(/href=["']tel:["']/)
    expect(sourceText).not.toMatch(/13126463816/)
    expect(sourceText).not.toMatch(/312[-.\s]?646[-.\s]?3816/)
  })

  it('keeps Voice agent dialogue out of the hero', () => {
    const heroSource = fs.readFileSync(
      path.join(process.cwd(), 'components/sections/Hero.tsx'),
      'utf8'
    )
    const flowSource = fs.readFileSync(
      path.join(process.cwd(), 'components/sections/FourStepFlow.tsx'),
      'utf8'
    )
    expect(heroSource).not.toMatch(/CallTranscript/)
    expect(heroSource).not.toMatch(/Voice agent/)
    expect(heroSource).toMatch(/EvidencePacket/)
    expect(flowSource).toMatch(/CallTranscript/)
  })

  it('includes the required packet fields and flow steps', () => {
    for (const field of PACKET_FIELDS) {
      expect(sourceText).toContain(field)
    }
    for (const step of FLOW_STEPS) {
      expect(sourceText).toContain(step.title)
    }
    expect(sourceText).toMatch(/Photo pending/)
  })

  it('orders homepage sections exactly', () => {
    const order = [
      '<Hero',
      '<MissedCallProblem',
      '<PacketWalkthrough',
      '<FourStepFlow',
      '<WhoItsFor',
      '<TrialOffer',
      '<CallRashid',
      '<Footer',
    ]
    let lastIndex = -1
    for (const name of order) {
      const index = pageSource.indexOf(name)
      expect(index).toBeGreaterThan(lastIndex)
      lastIndex = index
    }
  })

  it('scopes audience to insurance-storm roofing and excludes other trades', () => {
    expect(sourceText).toMatch(/insurance-storm roofing/i)
    expect(sourceText).toMatch(/Water-loss restoration/)
    expect(sourceText).toMatch(/General contractors/)
    expect(sourceText).toMatch(/Retail roofing/)
    expect(sourceText).not.toMatch(/Mike's HVAC/)
    expect(sourceText).not.toMatch(/ABC Plumbing/)
    expect(sourceText).not.toMatch(/service businesses/i)
  })

  it('does not invent testimonials, logos, or unsupported metrics', () => {
    expect(sourceText).not.toMatch(/testimonial/i)
    expect(sourceText).not.toMatch(/Trusted by/i)
    expect(sourceText).not.toMatch(/99\.9%/)
    expect(sourceText).not.toMatch(/\$450 captured/)
  })
})
