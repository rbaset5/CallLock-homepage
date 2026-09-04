export function FormFooter() {
  return (
    <footer className="border-t border-rule bg-paper-raised px-3 py-6 md:px-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl font-bold tracking-tight text-ink">
            CallLock
          </p>
          <p className="mt-1 max-w-[52ch] text-sm leading-relaxed text-ink-mute">
            Storm-roof intake and one evidence packet for insurance-storm
            roofing shops.
          </p>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-mute">
          © 2026 CallLock · Form CL-43711 · No shop contact
        </p>
      </div>
    </footer>
  )
}
