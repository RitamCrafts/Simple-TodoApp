function GlassCard({ children }) {
  return (
    <div className="relative md:w-fit max-w-4xl w-full px-4">

      {/* glowing border */}
      <div
        className="absolute -inset-[1.5px]
        rounded-[38px]

        bg-[linear-gradient(135deg,
        rgba(255,255,255,0.9),
        rgba(59,130,246,0.9),
        rgba(168,85,247,0.9),
        rgba(255,255,255,0.7))]

        opacity-90
        blur-[2px]"
      />
      

      {/* glass card */}
      <div
        className="relative overflow-hidden
        rounded-[36px]

        border border-white/20

        bg-white/5

        backdrop-blur-[15px]

        shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
      >

        {/* glossy reflection */}
        <div
          className="absolute inset-0
          bg-gradient-to-br
          from-white/20
          via-white/[0.07]
          to-transparent"
        />

        {/* inner border shine */}
        <div
          className="absolute inset-0 rounded-[36px]

          shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),
          inset_0_-1px_1px_rgba(255,255,255,0.08)]"
        />

        {/* purple glow */}
        <div
          className="absolute -left-20 top-0
          h-40 w-40 rounded-full
          bg-fuchsia-500/20 blur-3xl"
        />

        {/* blue glow */}
        <div
          className="absolute right-0 top-0
          h-40 w-40 rounded-full
          bg-cyan-400/20 blur-3xl"
        />

        {/* content */}
        <div className="relative z-10 p-10">
          {children}
        </div>

      </div>
    </div>
  );
}

export default GlassCard;