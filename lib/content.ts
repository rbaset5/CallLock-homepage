export const HERO_LINES = [
  'Hail stops at 4:12.',
  'The phone starts at 4:19.',
  'You are still on a roof.',
] as const

export const PRODUCT_LINE =
  'CallLock is storm-roof intake and one evidence packet. Not a receptionist. Not missed-call overflow.'

export const INTAKE_BODY =
  'Homeowner calls. You are on a roof. We take the inbound storm call, get the claim facts, ask for a street shot and a slope shot, and put one evidence packet in the shop inbox when they hang up.'

export const GOOGLE_VOICE_PENDING_LABEL = '[GOOGLE VOICE NUMBER PENDING]'

export const HONESTY_STAMP = 'NO COMPLETED JOB SHOWN'

export const PACKET_FIELDS = [
  'Call time',
  'Homeowner',
  'Property address',
  'Loss type',
  'Claim facts',
  'Street photo',
  'Slope photo',
  'Next action',
] as const

export const PACKET_VALUES: Record<(typeof PACKET_FIELDS)[number], string> = {
  'Call time': '',
  Homeowner: '',
  'Property address': '',
  'Loss type': '',
  'Claim facts': '',
  'Street photo': 'Photo pending',
  'Slope photo': 'Photo pending',
  'Next action': '',
}

export const FLOW_STEPS = [
  {
    title: 'Homeowner call',
    body: 'The inbound storm call is answered. A voice agent runs intake when nobody in the shop can pick up.',
  },
  {
    title: 'Claim facts',
    body: 'Date of loss, carrier if known, and what the homeowner already sees on the roof.',
  },
  {
    title: 'Street and slope photos',
    body: 'The homeowner is asked for a street shot and a slope shot. Slots stay photo pending until files arrive.',
  },
  {
    title: 'Packet in shop inbox',
    body: 'One evidence packet lands where the shop already reads mail. No extra dashboard to babysit.',
  },
] as const

export const ISSUED_TO = [
  'Insurance-storm roofing owners',
  'Insurance-storm roofing operators',
  'Shops that live on hail and wind calls',
] as const

export const NOT_ISSUED_TO = [
  'HVAC receptionist overflow',
  'Retail roofing sales',
  'Water-loss restoration',
  'General contractors',
] as const
