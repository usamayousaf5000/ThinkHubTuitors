function DatePill({ label }) {
  return (
    <div className="px-7 py-4 rounded-2xl bg-orange-100/80 text-orange-950 ring-2 ring-orange-300/80 shadow-md shadow-orange-200/50">
      <span className="font-semibold tracking-wider text-2xl sm:text-3xl">{label}</span>
    </div>
  )
}

export default function ComingSoon({ onContactClick }) {
  return (
    <div className="relative mx-4 w-full sm:w-[85vw] md:w-[75vw] lg:w-[70vw] max-w-6xl rounded-3xl bg-white/95 backdrop-blur-xl shadow-xl shadow-orange-200/30 ring-2 ring-orange-200/70 p-8 sm:p-12 md:p-16 text-center overflow-hidden">
      {/* Floating shapes inside the card */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-6 top-10 h-24 w-24 rounded-2xl bg-orange-200/50 animate-float2" />
        <div className="absolute right-10 -top-6 h-16 w-16 rounded-full bg-orange-100/90 animate-float1" />
        <div className="absolute left-1/3 bottom-6 h-20 w-20 rotate-12 bg-amber-100/80 animate-float3" />
        <div className="absolute right-1/4 bottom-0 h-28 w-28 rounded-3xl bg-orange-100/70 animate-float2" />
      </div>

      <h1 className="font-extrabold tracking-tight">
        <span className="block text-5xl sm:text-6xl md:text-7xl text-zinc-900">WEBSITE</span>
        <span className="block mt-3 text-6xl sm:text-7xl md:text-8xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
          COMING
        </span>
        <span className="block mt-3 text-5xl sm:text-6xl md:text-7xl text-orange-700">SOON</span>
      </h1>

      <p className="mt-6 text-black-600 font-medium">We are building something amazing</p>

      <div className="mt-8 sm:mt-10 flex items-center justify-center gap-5 sm:gap-6 text-zinc-800">
        <DatePill label="1" />
        <span className="text-orange-500 text-2xl font-light">:</span>
        <DatePill label="April" />
        <span className="text-orange-500 text-2xl font-light">:</span>
        <DatePill label="2026" />
      </div>

      <p className="mt-8 text-lg sm:text-xl text-zinc-600">Get in touch with us for early access and updates</p>

      <div className="mt-8">
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-orange-500 px-10 py-4 text-lg sm:text-xl font-bold text-white shadow-lg shadow-orange-500/35 ring-2 ring-orange-400/50 transition hover:scale-[1.02] hover:bg-orange-600 active:scale-100"
          onClick={(e) => { e.preventDefault(); onContactClick?.() }}
        >
          Contact Us
        </a>
      </div>
    </div>
  )
}


