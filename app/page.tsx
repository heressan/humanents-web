import Link from "next/link";

const joints = [
  {
    name: "Joint I",
    torque: "15 Nm",
    application: "Hands & wrists",
    status: "Planned",
  },
  {
    name: "Joint II",
    torque: "40 Nm",
    application: "Arms & elbows",
    status: "In development",
  },
  {
    name: "Joint III",
    torque: "120 Nm",
    application: "Hips & knees",
    status: "Planned",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00d4ff]/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 py-32 md:py-44 flex flex-col gap-8">
          <div className="inline-block self-start px-4 py-1.5 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 text-[#00d4ff] text-sm font-medium tracking-widest uppercase">
            Open Actuation Platform
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Give the builders
            <br />
            <span className="bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent">
              their tools.
            </span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
            Humanents builds modular smart actuators for humanoid robots.
            Integrated motor, driver, and controller in one module — so
            robotics teams can focus on intelligence, not hardware
            infrastructure.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/joints"
              className="px-6 py-3 bg-[#00d4ff] text-[#0a0a0f] font-semibold rounded-lg hover:bg-[#00d4ff]/90 transition-colors"
            >
              Explore our platform
            </Link>
            <Link
              href="/investors"
              className="px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:border-white/40 transition-colors"
            >
              For investors
            </Link>
          </div>
        </div>
      </section>

      {/* Joints preview */}
      <section className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="flex flex-col gap-4 mb-12">
            <span className="text-xs font-semibold tracking-widest text-[#00d4ff] uppercase">
              Product
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              SmartAct Joint Family
            </h2>
            <p className="text-white/60 max-w-2xl">
              A family of integrated actuator modules spanning from precision
              wrist joints to high-torque leg actuators. Each joint integrates
              motor, driver, encoder, and controller in a single unit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {joints.map((j) => (
              <div
                key={j.name}
                className="border border-white/10 rounded-xl p-6 hover:border-[#00d4ff]/30 transition-colors flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{j.name}</h3>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      j.status === "In development"
                        ? "bg-[#00d4ff]/10 text-[#00d4ff]"
                        : "bg-white/5 text-white/40"
                    }`}
                  >
                    {j.status}
                  </span>
                </div>
                <div className="flex flex-col gap-2 text-sm text-white/60">
                  <div className="flex justify-between">
                    <span>Peak torque</span>
                    <span className="text-white font-medium">{j.torque}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Application</span>
                    <span className="text-white font-medium">
                      {j.application}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/joints"
              className="text-[#00d4ff] text-sm font-medium hover:underline"
            >
              View all joints &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Body preview */}
      <section className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="flex flex-col gap-4 mb-12">
            <span className="text-xs font-semibold tracking-widest text-[#7c3aed] uppercase">
              Platform
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Body Platform</h2>
            <p className="text-white/60 max-w-2xl">
              The Body is the central compute, power distribution, and
              perception hub that connects all joints into a coherent humanoid
              system. One board to power, communicate, and coordinate.
            </p>
          </div>
          <div className="border border-white/10 rounded-xl p-8 hover:border-[#7c3aed]/30 transition-colors">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">
                  Compute
                </span>
                <p className="text-white/70 text-sm">
                  Real-time EtherCAT master, ROS2 integration, onboard AI
                  inference
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">
                  Power
                </span>
                <p className="text-white/70 text-sm">
                  48V native distribution, intelligent power management, battery
                  interface
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">
                  Perception
                </span>
                <p className="text-white/70 text-sm">
                  IMU, force/torque sensing interfaces, camera pipeline ready
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/body"
              className="text-[#7c3aed] text-sm font-medium hover:underline"
            >
              Explore Body platform &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Why Humanents */}
      <section className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="flex flex-col gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Why Humanents</h2>
            <p className="text-white/60 max-w-2xl">
              Arduino democratized embedded systems. We are doing the same for
              humanoid actuation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Integrated, not assembled",
                desc: "Motor, driver, encoder, controller — one module. No wiring nightmares, no integration headaches.",
              },
              {
                title: "48V native",
                desc: "Industry-standard voltage for humanoid robotics. Higher efficiency, lower current, thinner cables.",
              },
              {
                title: "EtherCAT real-time bus",
                desc: "Microsecond-level deterministic communication. The same fieldbus used in industrial automation worldwide.",
              },
              {
                title: "Open & ROS2 compatible",
                desc: "Open interfaces and ROS2 drivers. No vendor lock-in. Build your robot, your way.",
              },
              {
                title: "CE certified & Swiss quality",
                desc: "Designed and engineered in Zurich. Built for European and global compliance from day one.",
              },
              {
                title: "Scalable product family",
                desc: "From 15 Nm wrist joints to 120 Nm leg actuators — one architecture, multiple sizes.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-1 h-full bg-gradient-to-b from-[#00d4ff] to-[#7c3aed] rounded-full shrink-0" />
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
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
            Building the future of humanoid robotics
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            We are looking for partners, early adopters, and investors who share
            our vision of accessible humanoid actuation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/company"
              className="px-6 py-3 bg-[#00d4ff] text-[#0a0a0f] font-semibold rounded-lg hover:bg-[#00d4ff]/90 transition-colors"
            >
              Get in touch
            </Link>
            <Link
              href="/investors"
              className="px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:border-white/40 transition-colors"
            >
              Investor information
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
