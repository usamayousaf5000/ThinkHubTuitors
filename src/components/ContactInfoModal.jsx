import { useEffect } from 'react'

export default function ContactInfoModal({ open, onClose }) {
  const name = 'BookFYD'
  const email = 'bookfyd@gmail.com'
  const pkPhone = '+92 330 2700444'
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
      <div className="absolute inset-0 bg-zinc-900/35 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-2xl mx-4 rounded-2xl bg-white ring-2 ring-orange-200 shadow-2xl shadow-zinc-300/40 p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-zinc-900">Contact information</h2>
          <button onClick={onClose} className="h-9 w-9 inline-flex items-center justify-center rounded-full text-zinc-500 hover:bg-orange-50 hover:text-zinc-900" aria-label="Close">
            <span className="text-xl">×</span>
          </button>
        </div>
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-orange-100 ring-2 ring-orange-200 text-orange-700 flex items-center justify-center text-xl">👤</div>
            <div>
              <div className="text-zinc-500 text-sm font-medium">Name</div>
              <div className="text-zinc-900 text-lg font-semibold">{name}</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-orange-100 ring-2 ring-orange-200 text-orange-700 flex items-center justify-center text-xl">✉️</div>
            <div>
              <div className="text-zinc-500 text-sm font-medium">Email</div>
              <a href={`mailto:${email}`} className="text-orange-600 hover:text-orange-700 font-semibold">{email}</a>
            </div>
          </div>
          {pkPhone && (
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-orange-100 ring-2 ring-orange-200 text-orange-700 flex items-center justify-center text-xl">🇵🇰</div>
              <div>
                <div className="text-zinc-500 text-sm font-medium">Pakistan</div>
                <a href={`tel:${pkPhone}`} className="text-orange-600 hover:text-orange-700 font-semibold">{pkPhone}</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


