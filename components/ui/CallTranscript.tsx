import { IconPhone } from '@tabler/icons-react'

const lines = [
  { speaker: 'Voice agent', text: 'This is the shop. What is the property address?' },
  { speaker: 'Homeowner', text: 'Address is given on the call.' },
  { speaker: 'Voice agent', text: 'Was this hail or wind, and when did it hit?' },
  { speaker: 'Homeowner', text: 'Claim facts are captured next.' },
  {
    speaker: 'Voice agent',
    text: 'Please send a street photo and a slope photo when you can.',
  },
]

export function CallTranscript() {
  return (
    <figure
      aria-labelledby="transcript-title"
      className="rounded-md border border-stone-300 bg-white text-stone-800 shadow-[0_12px_40px_rgb(28_25_23_/_0.08)] dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:shadow-[0_12px_40px_rgb(0_0_0_/_0.35)]"
    >
      <div className="flex items-center gap-2 border-b border-stone-300 px-5 py-3 dark:border-stone-700">
        <IconPhone
          className="h-4 w-4 text-trust dark:text-stone-200"
          stroke={1.5}
          aria-hidden="true"
        />
        <figcaption
          id="transcript-title"
          className="text-sm font-semibold tracking-tight"
        >
          Static intake transcript
        </figcaption>
      </div>
      <ol className="space-y-3 px-5 py-4">
        {lines.map((line) => (
          <li key={line.text} className="text-sm leading-relaxed">
            <span className="font-medium text-trust dark:text-stone-200">
              {line.speaker}:{' '}
            </span>
            <span className="text-stone-600 dark:text-stone-400">
              {line.text}
            </span>
          </li>
        ))}
      </ol>
      <p className="border-t border-stone-300 px-5 py-3 text-xs text-stone-500 dark:border-stone-700 dark:text-stone-400">
        Scripted sample. Not a live call. Not a finished claim.
      </p>
    </figure>
  )
}
