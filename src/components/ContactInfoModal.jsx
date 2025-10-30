import { useEffect } from 'react'

export default function ContactInfoModal({ open, onClose }) {
  const name = 'Think Hub Tutors'
  const email = 'thinkhubtutors@gmail.com'
  const ukPhone = '+44 7367067438'
  const caPhone = '+1 (587) 870-0861'
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose?.()
    }
    if (open) document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-2xl mx-4 rounded-2xl bg-slate-900 ring-1 ring-white/10 shadow-2xl p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Contact information</h2>
          <button onClick={onClose} className="h-9 w-9 inline-flex items-center justify-center rounded-full hover:bg-white/10" aria-label="Close">
            <span className="text-white text-xl">×</span>
          </button>
        </div>
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-indigo-600/20 ring-1 ring-indigo-500/30 text-indigo-300 flex items-center justify-center text-xl">👤</div>
            <div>
              <div className="text-slate-300 text-sm">Name</div>
              <div className="text-white text-lg font-semibold">{name}</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-indigo-600/20 ring-1 ring-indigo-500/30 text-indigo-300 flex items-center justify-center text-xl">✉️</div>
            <div>
              <div className="text-slate-300 text-sm">Email</div>
              <a href={`mailto:${email}`} className="text-indigo-300 hover:text-indigo-200 font-medium">{email}</a>
            </div>
          </div>
          {ukPhone && (
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-indigo-600/20 ring-1 ring-indigo-500/30 text-indigo-300 flex items-center justify-center text-xl">🇬🇧</div>
              <div>
                <div className="text-slate-300 text-sm">United Kingdom</div>
                <a href={`tel:${ukPhone}`} className="text-indigo-300 hover:text-indigo-200 font-medium">{ukPhone}</a>
              </div>
            </div>
          )}
          {caPhone && (
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-indigo-600/20 ring-1 ring-indigo-500/30 text-indigo-300 flex items-center justify-center text-xl">🇨🇦</div>
              <div>
                <div className="text-slate-300 text-sm">Canada</div>
                <a href={`tel:${caPhone}`} className="text-indigo-300 hover:text-indigo-200 font-medium">{caPhone}</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


