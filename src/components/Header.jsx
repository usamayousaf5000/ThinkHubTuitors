export default function Header({ title = 'thinkhubtutors' }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-slate-900/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-violet-400" />
            <span className="text-base sm:text-lg font-semibold tracking-wide text-violet-300">{title}</span>
          </div>
          <div className="text-xs text-slate-400 hidden sm:block">Building something amazing</div>
        </div>
      </div>
    </header>
  )
}


