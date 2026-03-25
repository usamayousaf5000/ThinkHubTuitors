export default function Header({ title = 'BookFYD' }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-white/90 backdrop-blur-md border-b border-orange-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.45)]" />
            <span className="text-base sm:text-lg font-semibold tracking-wide text-zinc-900">{title}</span>
          </div>
          <div className="text-xs text-black-500 hidden sm:block">Building something amazing</div>
        </div>
      </div>
    </header>
  )
}


