import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investors — Humanents",
  description:
    "Investment opportunity in the humanoid robotics actuator market. $154B TAM, Swiss quality, open platform.",
};

const advantages = [
  {
    title: "48V native architecture",
    desc: "Industry-aligned voltage standard for humanoid robots. No conversion losses, simpler wiring, higher efficiency.",
  },
  {
    title: "EtherCAT real-time bus",
    desc: "The industrial automation standard adopted by leading humanoid programs. Microsecond determinism.",
  },
  {
    title: "CE certification path",
    desc: "Designed for European regulatory compliance from day one. Enables deployment in regulated environments.",
  },
  {
    title: "Swiss engineering quality",
    desc: "Developed in Zurich with access to world-class precision engineering talent and ETH Zurich research.",
  },
  {
    title: "Open-source friendly",
    desc: "Open interfaces and ROS2 compatibility. Attracts the developer community, reduces customer lock-in concerns.",
  },
  {
    title: "Platform business model",
    desc: "Recurring hardware revenue with software/support upsell. Each new humanoid program is a potential customer.",
  },
];

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#00d4ff]/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-32">
          <span className="text-xs font-semibold tracking-widest text-[#00d4ff] uppercase">
            Investors
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-4 mb-6">
            The picks and shovels
            <br />
            <span className="bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent">
              of the humanoid gold rush
            </span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
            As hundreds of companies race to build humanoid robots, they all
            need the same thing: reliable, high-performance actuators. We build
            the platform they all plug into.
          </p>
        </div>
      </section>

      {/* Market */}
      <section className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Market opportunity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-white/10 rounded-xl p-6 flex flex-col gap-3">
              <span className="text-4xl font-bold text-[#00d4ff]">$154B</span>
              <span className="text-white/40 text-sm">
                Humanoid robot TAM by 2035
              </span>
              <span className="text-white/60 text-xs">
                Source: Goldman Sachs Research
              </span>
            </div>
            <div className="border border-white/10 rounded-xl p-6 flex flex-col gap-3">
              <span className="text-4xl font-bold text-[#00d4ff]">100K+</span>
              <span className="text-white/40 text-sm">
                Humanoid units expected by 2030
              </span>
              <span className="text-white/60 text-xs">
                Multiple industry forecasts
              </span>
            </div>
            <div className="border border-white/10 rounded-xl p-6 flex flex-col gap-3">
              <span className="text-4xl font-bold text-[#00d4ff]">
                CHF 2.5B
              </span>
              <span className="text-white/40 text-sm">
                Estimated actuator TAM
              </span>
              <span className="text-white/60 text-xs">
                ~40% of robot BOM is actuation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Thesis */}
      <section className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Investment thesis
          </h2>
          <p className="text-white/60 mb-8 max-w-3xl leading-relaxed">
            The humanoid robotics industry is at an inflection point. Every new
            humanoid program needs actuation, and most teams are building it
            from scratch — wasting time, capital, and engineering talent on
            solved problems. Humanents is the horizontal platform layer that
            captures value across the entire industry.
          </p>
          <div className="flex flex-col gap-6 max-w-3xl">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] flex items-center justify-center text-sm font-bold shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-1">
                  Platform, not point solution
                </h3>
                <p className="text-white/60 text-sm">
                  A family of joints + central body board = complete actuation
                  stack. One vendor for everything below the AI layer.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] flex items-center justify-center text-sm font-bold shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-1">Industry-aligned stack</h3>
                <p className="text-white/60 text-sm">
                  48V, EtherCAT, FOC, ROS2 — not proprietary choices but
                  industry standards. Customers adopt without risk.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] flex items-center justify-center text-sm font-bold shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-1">
                  Scalable product family
                </h3>
                <p className="text-white/60 text-sm">
                  Same architecture in 4 torque classes. R&D investment
                  amortized across the full range.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] flex items-center justify-center text-sm font-bold shrink-0">
                4
              </div>
              <div>
                <h3 className="font-semibold mb-1">Swiss quality advantage</h3>
                <p className="text-white/60 text-sm">
                  CE certification path, proximity to ETH Zurich, and
                  Switzerland&apos;s precision manufacturing heritage
                  differentiate in a market dominated by uncertified Chinese
                  components.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive advantages */}
      <section className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Competitive advantages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((a) => (
              <div key={a.title} className="flex gap-4">
                <div className="w-1 h-full bg-gradient-to-b from-[#00d4ff] to-[#7c3aed] rounded-full shrink-0" />
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold">{a.title}</h3>
                  <p className="text-white/60 text-sm">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in investing?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            We are in early conversations with investors who understand the
            humanoid robotics opportunity. Reach out to learn more about our
            roadmap and funding plans.
          </p>
          <a
            href="mailto:contact@humanents.ch"
            className="inline-block px-6 py-3 bg-[#00d4ff] text-[#0a0a0f] font-semibold rounded-lg hover:bg-[#00d4ff]/90 transition-colors"
          >
            Contact us at contact@humanents.ch
          </a>
        </div>
      </section>
    </div>
  );
}
