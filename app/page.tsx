import WaitlistForm from "./WaitlistForm";

function Logo({ bg = "dark" }: { bg?: "dark" | "light" }) {
  return (
    <span
      className="text-2xl font-bold tracking-tight"
      style={{ fontFamily: "var(--font-space-grotesk)" }}
    >
      <span
        className="bg-clip-text text-transparent"
        style={{ backgroundImage: "linear-gradient(to right, #00d4ff, #7c3aed)" }}
      >
        human
      </span>
      <span style={{ color: bg === "dark" ? "#ffffff" : "#0a0a0f" }}>ents</span>
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white flex flex-col items-center justify-center px-6 py-20">
      {/* Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00d4ff]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-2xl w-full flex flex-col gap-16">

        {/* Logo */}
        <div className="flex justify-center">
          <Logo bg="dark" />
        </div>

        {/* Coming Soon */}
        <div className="text-center flex flex-col gap-4">
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

        {/* Waitlist */}
        <div className="flex flex-col gap-4 items-center text-center">
          <p className="text-white/50 text-sm max-w-sm">
            We&apos;re building the open actuation platform for humanoid robots.
            Be the first to know when we launch.
          </p>
          <WaitlistForm />
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/5" />

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

        {/* Footer */}
        <div className="flex flex-col items-center gap-3">
          <a
            href="mailto:dheres@humanents.ch"
            className="text-white/30 hover:text-white/60 transition-colors text-sm"
          >
            dheres@humanents.ch
          </a>
          <p className="text-white/20 text-xs">
            © 2025 Humanents · Zurich, Switzerland
          </p>
        </div>

      </div>
    </main>
  );
}
