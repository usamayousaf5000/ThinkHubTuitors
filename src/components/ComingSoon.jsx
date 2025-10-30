function DatePill({ label }) {
  return (
    <div className="px-7 py-4 rounded-2xl bg-indigo-900/40 text-indigo-200 ring-1 ring-white/10 shadow-inner shadow-black/40">
      <span className="font-semibold tracking-wider text-2xl sm:text-3xl">{label}</span>
    </div>
  )
}

export default function ComingSoon({ onContactClick }) {
  return (
    <div className="relative mx-4 w-full sm:w-[85vw] md:w-[75vw] lg:w-[70vw] max-w-6xl rounded-3xl bg-slate-900/70 backdrop-blur-xl shadow-2xl shadow-black/40 ring-1 ring-white/10 p-8 sm:p-12 md:p-16 text-center overflow-hidden">
      {/* Floating shapes inside the card */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-6 top-10 h-24 w-24 rounded-2xl bg-purple-400/25 animate-float2" />
        <div className="absolute right-10 -top-6 h-16 w-16 rounded-full bg-fuchsia-400/30 animate-float1" />
        <div className="absolute left-1/3 bottom-6 h-20 w-20 rotate-12 bg-cyan-400/25 animate-float3" />
        <div className="absolute right-1/4 bottom-0 h-28 w-28 rounded-3xl bg-emerald-400/25 animate-float2" />
      </div>

      <h1 className="font-extrabold tracking-tight text-slate-100">
        <span className="block text-5xl sm:text-6xl md:text-7xl">WEBSITE</span>
        <span className="block mt-3 text-6xl sm:text-7xl md:text-8xl text-indigo-200">COMING</span>
        <span className="block mt-3 text-5xl sm:text-6xl md:text-7xl text-slate-300">SOON</span>
      </h1>

      <p className="mt-6 text-slate-300">We are building something amazing</p>

      <div className="mt-8 sm:mt-10 flex items-center justify-center gap-5 sm:gap-6 text-slate-200">
        <DatePill label="15" />
        <span className="text-indigo-300/70">:</span>
        <DatePill label="Nov" />
        <span className="text-indigo-300/70">:</span>
        <DatePill label="2025" />
      </div>

      <p className="mt-8 text-lg sm:text-xl text-slate-300/90">Get in touch with us for early access and updates</p>

      <div className="mt-8">
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-10 py-4 text-lg sm:text-xl font-semibold text-white shadow-lg shadow-indigo-900/30 ring-1 ring-indigo-400/40 transition hover:scale-[1.02] hover:bg-indigo-500 active:scale-100"
          onClick={(e) => { e.preventDefault(); onContactClick?.() }}
        >
          Contact Us
        </a>
      </div>
    </div>
  )
}


