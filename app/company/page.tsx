import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company — Humanents",
  description:
    "Humanents builds the open actuation platform for humanoid robots. Based in Zurich, Switzerland.",
};

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#00d4ff]/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-32">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            The Arduino of
            <br />
            <span className="bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent">
              humanoid actuation
            </span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
            Humanents is building the open actuation platform that enables any
            robotics team to develop humanoid robots — without designing motors,
            drivers, and power electronics from scratch.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#00d4ff] uppercase">
                Vision
              </span>
              <p className="text-white/80 text-xl leading-relaxed mt-4">
                A world where no human risks their life doing work a machine can
                do.
              </p>
            </div>
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#7c3aed] uppercase">
                Mission
              </span>
              <p className="text-white/80 text-xl leading-relaxed mt-4">
                We build the open actuation platform that enables robotics teams
                to develop humanoid robots — giving builders the precision tools
                to focus on intelligence, not infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why we exist */}
      <section className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Why we exist
          </h2>
          <div className="flex flex-col gap-6 text-white/70 max-w-3xl leading-relaxed">
            <p>
              Every humanoid robotics team today faces the same bottleneck:
              actuation. Building a custom actuator from scratch takes 12-18
              months, requires deep expertise in motor design, power
              electronics, and real-time control — and the result is often
              fragile and hard to scale.
            </p>
            <p>
              Arduino solved this problem for embedded systems. It gave builders
              a reliable, affordable, well-documented platform so they could
              focus on their application instead of reinventing the
              microcontroller.
            </p>
            <p>
              Humanents is doing the same for humanoid actuation. Our SmartAct
              joints and Body platform provide the complete electromechanical
              foundation — so robotics teams can focus on what actually
              differentiates their robot: intelligence, locomotion algorithms,
              and applications.
            </p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="flex-1">
              <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">
                Headquarters
              </span>
              <h2 className="text-2xl font-bold mt-4 mb-4">
                Based in Zurich, Switzerland
              </h2>
              <p className="text-white/60 leading-relaxed">
                We operate from the heart of Europe&apos;s robotics ecosystem,
                with proximity to ETH Zurich, one of the world&apos;s leading
                technical universities, and access to Switzerland&apos;s deep
                talent pool in precision engineering, mechatronics, and embedded
                systems.
              </p>
            </div>
            <div className="flex-1">
              <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">
                Swiss ecosystem
              </span>
              <ul className="mt-4 flex flex-col gap-3 text-white/60">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full shrink-0" />
                  ETH Zurich — world-class robotics research
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full shrink-0" />
                  Innosuisse — Swiss innovation agency
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full shrink-0" />
                  Precision manufacturing heritage
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full shrink-0" />
                  CE / European market access
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Get in touch</h2>
          <p className="text-white/60 mb-8 max-w-xl">
            Whether you are building a humanoid robot, exploring partnership
            opportunities, or interested in investing — we would like to hear
            from you.
          </p>
          <form
            action="https://formsubmit.co/contact@humanents.ch"
            method="POST"
            className="max-w-xl flex flex-col gap-6"
          >
            <input type="text" name="_honey" className="hidden" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://humanents.ch/company"
            />
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm text-white/60 font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00d4ff]/50 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm text-white/60 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00d4ff]/50 transition-colors"
                placeholder="you@company.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm text-white/60 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00d4ff]/50 transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="self-start px-6 py-3 bg-[#00d4ff] text-[#0a0a0f] font-semibold rounded-lg hover:bg-[#00d4ff]/90 transition-colors"
            >
              Send message
            </button>
          </form>
          <p className="mt-6 text-white/40 text-sm">
            Or email us directly at{" "}
            <a
              href="mailto:contact@humanents.ch"
              className="text-[#00d4ff] hover:underline"
            >
              contact@humanents.ch
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
