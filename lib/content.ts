export const HERO_HEADLINE =
  'When hail hits, the next truck gets the job you didn’t answer.'

export const GOOGLE_VOICE_PENDING_LABEL = '[GOOGLE VOICE NUMBER PENDING]'

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
