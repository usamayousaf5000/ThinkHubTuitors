export default function FloatingShapes({ className = "" }) {
  const shapes = [
    // spread across the whole viewport using percentage positions
    { pos: "left-[5%] top-[6%]", cls: "h-5 w-5 rounded-full bg-fuchsia-400/40 animate-float2" },
    { pos: "left-[14%] top-[18%]", cls: "h-8 w-8 rounded-2xl bg-purple-500/30 animate-float1" },
    { pos: "left-[22%] top-[10%]", cls: "h-6 w-6 rounded-md bg-emerald-400/30 animate-float3" },
    { pos: "left-[30%] top-[14%]", cls: "h-10 w-10 rounded-full bg-sky-400/30 animate-float1" },
    { pos: "left-[42%] top-[8%]", cls: "h-7 w-7 rounded-2xl bg-lime-400/30 animate-float3" },
    { pos: "left-[55%] top-[12%]", cls: "h-9 w-9 rounded-xl bg-indigo-400/30 animate-float2" },
    { pos: "left-[67%] top-[6%]", cls: "h-6 w-6 rounded-full bg-cyan-400/35 animate-float1" },
    { pos: "left-[80%] top-[16%]", cls: "h-8 w-8 rounded-2xl bg-rose-400/35 animate-float3" },
    { pos: "left-[92%] top-[10%]", cls: "h-6 w-6 rounded-md bg-amber-300/40 animate-float2" },

    { pos: "left-[8%] top-[40%]", cls: "h-7 w-7 rounded-xl bg-teal-400/30 animate-float1" },
    { pos: "left-[20%] top-[36%]", cls: "h-12 w-12 rounded-3xl bg-violet-400/25 animate-float2" },
    { pos: "left-[34%] top-[42%]", cls: "h-6 w-6 rounded-full bg-blue-400/30 animate-float3" },
    { pos: "left-[48%] top-[38%]", cls: "h-10 w-10 rounded-2xl bg-emerald-400/25 animate-float1" },
    { pos: "left-[62%] top-[46%]", cls: "h-8 w-8 rounded-md bg-fuchsia-400/35 animate-float3" },
    { pos: "left-[76%] top-[34%]", cls: "h-9 w-9 rounded-full bg-indigo-300/35 animate-float2" },
    { pos: "left-[90%] top-[44%]", cls: "h-7 w-7 rounded-xl bg-lime-400/30 animate-float1" },

    { pos: "left-[6%] top-[76%]", cls: "h-8 w-8 rounded-2xl bg-cyan-400/30 animate-float3" },
    { pos: "left-[18%] top-[84%]", cls: "h-6 w-6 rounded-full bg-rose-400/35 animate-float2" },
    { pos: "left-[28%] top-[70%]", cls: "h-12 w-12 rounded-3xl bg-teal-400/30 animate-float1" },
    { pos: "left-[44%] top-[80%]", cls: "h-7 w-7 rounded-md bg-amber-300/40 animate-float2" },
    { pos: "left-[58%] top-[72%]", cls: "h-9 w-9 rounded-xl bg-purple-500/30 animate-float3" },
    { pos: "left-[72%] top-[86%]", cls: "h-6 w-6 rounded-full bg-sky-400/30 animate-float1" },
    { pos: "left-[86%] top-[74%]", cls: "h-10 w-10 rounded-2xl bg-emerald-400/30 animate-float2" },
    { pos: "left-[94%] top-[88%]", cls: "h-6 w-6 rounded-md bg-fuchsia-400/35 animate-float3" },
  ]

  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`}>
      {shapes.map((s, i) => (
        <div key={i} className={`absolute ${s.pos} ${s.cls}`} />
      ))}
    </div>
  )
}


