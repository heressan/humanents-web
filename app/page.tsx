export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0a0a0f]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight">
            <span className="text-[#00d4ff]">Human</span>ents
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
            <a href="#products" className="hover:text-white transition-colors">Products</a>
            <a href="#specs" className="hover:text-white transition-colors">Specs</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a
              href="mailto:dheres@humanents.ch"
              className="px-4 py-2 bg-[#00d4ff] text-black font-semibold rounded-full hover:bg-[#00b8d9] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7c3aed]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 text-[#00d4ff] text-sm font-medium">
            Next-generation actuator modules
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
            Power the future
            <br />
            <span className="bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent">
              of humanoid robots
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            SmartAct modules deliver 48V native power, EtherCAT communication, and proprioceptive torque sensing
            in a compact, CE-certified package built for humanoid robotics teams.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#products"
              className="px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#0099bb] text-black font-bold rounded-full hover:opacity-90 transition-opacity"
            >
              See Products
            </a>
            <a
              href="mailto:dheres@humanents.ch"
              className="px-8 py-4 border border-white/20 rounded-full hover:border-white/50 transition-colors text-white/80 hover:text-white"
            >
              Request a Sample
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "48V", label: "Native voltage" },
            { value: "EtherCAT", label: "Fieldbus protocol" },
            { value: "IP54", label: "Protection rating" },
            { value: "CE", label: "Certified" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-[#00d4ff] mb-1">{stat.value}</div>
              <div className="text-white/40 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">SmartAct Modules</h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Three variants covering the full torque range needed for humanoid robot joints.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                model: "SA-40",
                torque: "40 Nm",
                price: "CHF 800",
                joints: "Wrist, elbow, ankle",
                gradientFrom: "from-[#00d4ff]/20",
                gradientTo: "to-[#00d4ff]/5",
                border: "border-[#00d4ff]/30",
                tag: "Compact",
              },
              {
                model: "SA-120",
                torque: "120 Nm",
                price: "CHF 1,200",
                joints: "Shoulder, hip",
                gradientFrom: "from-[#7c3aed]/20",
                gradientTo: "to-[#7c3aed]/5",
                border: "border-[#7c3aed]/40",
                tag: "Most Popular",
              },
              {
                model: "SA-300",
                torque: "300 Nm",
                price: "CHF 1,800",
                joints: "Knee, heavy-duty",
                gradientFrom: "from-white/10",
                gradientTo: "to-white/5",
                border: "border-white/20",
                tag: "High Power",
              },
            ].map((product) => (
              <div
                key={product.model}
                className={`relative rounded-2xl border ${product.border} bg-gradient-to-b ${product.gradientFrom} ${product.gradientTo} p-8 flex flex-col gap-4`}
              >
                <div className="inline-block self-start px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-white/70">
                  {product.tag}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{product.model}</h3>
                  <p className="text-white/40 text-sm mt-1">{product.joints}</p>
                </div>
                <div className="text-4xl font-bold text-white">{product.torque}</div>
                <ul className="text-sm text-white/50 space-y-1 flex-1">
                  <li>48V native</li>
                  <li>EtherCAT interface</li>
                  <li>Proprioceptive torque sensing</li>
                  <li>IP54 rated</li>
                  <li>CE certified</li>
                </ul>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xl font-bold">{product.price}</span>
                  <a
                    href="mailto:dheres@humanents.ch"
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full text-sm font-medium"
                  >
                    Order
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section id="specs" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Specifications</h2>
            <p className="text-white/50">Engineered for demanding humanoid robotics applications.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              ["Supply Voltage", "48V DC"],
              ["Communication", "EtherCAT"],
              ["Torque Sensing", "Proprioceptive, high resolution"],
              ["Position Sensing", "Absolute encoder"],
              ["Protection", "IP54"],
              ["Certification", "CE (EU Machinery Directive)"],
              ["Cooling", "Passive / optional active"],
              ["Interface", "RJ45 (EtherCAT daisy-chain)"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between px-6 py-4 rounded-xl border border-white/10 bg-white/[0.03]"
              >
                <span className="text-white/50 text-sm">{label}</span>
                <span className="text-white font-medium text-sm">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Built in Switzerland</h2>
          <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Humanents is a Swiss deep-tech startup developing integrated actuator modules for humanoid robots.
            We combine mechanical design, power electronics, and embedded control into compact, production-ready units —
            so your team can focus on building robots, not components.
          </p>
          <a
            href="mailto:dheres@humanents.ch"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white font-bold rounded-full hover:opacity-90 transition-opacity"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-white/30 text-sm">
          <span>© 2025 Humanents. Zurich, Switzerland.</span>
          <a href="mailto:dheres@humanents.ch" className="hover:text-white transition-colors">
            dheres@humanents.ch
          </a>
        </div>
      </footer>
    </main>
  );
}
