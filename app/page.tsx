export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white flex flex-col items-center justify-center px-6">
      {/* Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00d4ff]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-2xl w-full text-center flex flex-col gap-12">

        {/* Logo */}
        <div>
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-[#00d4ff]">Human</span>ents
          </span>
        </div>

        {/* Coming Soon */}
        <div className="flex flex-col gap-4">
          <div className="inline-block self-center px-4 py-1.5 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 text-[#00d4ff] text-sm font-medium tracking-widest uppercase">
            Coming Soon
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Give the builders
            <br />
            <span className="bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent">
              their tools.
            </span>
          </h1>
        </div>

        {/* Divider */}
        <div className="w-px h-12 bg-white/10 self-center" />

        {/* Vision & Mission */}
        <div className="flex flex-col gap-8 text-left">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold tracking-widest text-[#00d4ff] uppercase">Vision</span>
            <p className="text-white/70 text-lg leading-relaxed">
              A world where no human risks their life doing work a machine can do.
            </p>
          </div>
          <div className="w-full h-px bg-white/5" />
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold tracking-widest text-[#7c3aed] uppercase">Mission</span>
            <p className="text-white/70 text-lg leading-relaxed">
              We build the open actuation platform that enables robotics teams to develop humanoid robots —
              giving builders the precision tools to focus on intelligence, not infrastructure.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-3 items-center">
          <p className="text-white/30 text-sm">Stay in the loop</p>
          <a
            href="mailto:dheres@humanents.ch"
            className="px-6 py-3 border border-white/15 rounded-full text-white/60 hover:text-white hover:border-white/40 transition-colors text-sm"
          >
            dheres@humanents.ch
          </a>
        </div>

        {/* Footer */}
        <p className="text-white/20 text-xs">
          © 2025 Humanents · Zurich, Switzerland
        </p>
      </div>
    </main>
  );
}
