import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Body Platform — Humanents",
  description:
    "Central compute, power distribution, and perception hub for humanoid robots.",
};

const bodies = [
  {
    name: "Body I",
    description: "Minimal configuration for upper-body platforms",
    joints: "Up to 12 joints",
    compute: "STM32 EtherCAT master",
    power: "48V / 500W",
    status: "Planned",
  },
  {
    name: "Body II",
    description: "Full humanoid configuration",
    joints: "Up to 28 joints",
    compute: "STM32 + companion SBC",
    power: "48V / 1.5 kW",
    status: "Planned",
  },
  {
    name: "Body III",
    description: "High-performance humanoid with AI inference",
    joints: "Up to 42 joints",
    compute: "Real-time MCU + GPU compute",
    power: "48V / 3 kW",
    status: "Planned",
  },
  {
    name: "Body Hybrid",
    description: "Custom configurations for non-humanoid platforms",
    joints: "Flexible topology",
    compute: "Configurable",
    power: "Configurable",
    status: "Planned",
  },
];

export default function BodyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#7c3aed]/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-32">
          <span className="text-xs font-semibold tracking-widest text-[#7c3aed] uppercase">
            Platform
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-4 mb-6">
            Body Platform
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
            The Body is the central nervous system of your humanoid robot. It
            handles real-time communication with all joints, distributes power,
            runs perception pipelines, and exposes a clean ROS2 interface to
            your AI stack.
          </p>
        </div>
      </section>

      {/* Core functions */}
      <section className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Three core functions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-white/10 rounded-xl p-6">
              <span className="text-xs font-semibold tracking-widest text-[#00d4ff] uppercase">
                Compute
              </span>
              <h3 className="text-xl font-bold mt-3 mb-3">
                Real-time control
              </h3>
              <ul className="text-white/60 text-sm flex flex-col gap-2">
                <li>EtherCAT master (1 kHz+ cycle)</li>
                <li>ROS2 bridge for high-level control</li>
                <li>Onboard AI inference capability</li>
                <li>OTA firmware updates for all joints</li>
              </ul>
            </div>
            <div className="border border-white/10 rounded-xl p-6">
              <span className="text-xs font-semibold tracking-widest text-[#7c3aed] uppercase">
                Power
              </span>
              <h3 className="text-xl font-bold mt-3 mb-3">
                48V distribution
              </h3>
              <ul className="text-white/60 text-sm flex flex-col gap-2">
                <li>Native 48V DC bus</li>
                <li>Intelligent power management</li>
                <li>Battery management interface</li>
                <li>Per-joint current monitoring</li>
              </ul>
            </div>
            <div className="border border-white/10 rounded-xl p-6">
              <span className="text-xs font-semibold tracking-widest text-white/60 uppercase">
                Perception
              </span>
              <h3 className="text-xl font-bold mt-3 mb-3">Sensor fusion</h3>
              <ul className="text-white/60 text-sm flex flex-col gap-2">
                <li>IMU (9-axis inertial measurement)</li>
                <li>Force/torque sensing interfaces</li>
                <li>Camera pipeline connectors</li>
                <li>Expandable sensor bus</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Body configurations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bodies.map((b) => (
              <div
                key={b.name}
                className="border border-white/10 rounded-xl p-6 hover:border-[#7c3aed]/30 transition-colors flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{b.name}</h3>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/40">
                    {b.status}
                  </span>
                </div>
                <p className="text-white/60 text-sm">{b.description}</p>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-white/40">Joints</span>
                    <p className="text-white font-medium mt-1">{b.joints}</p>
                  </div>
                  <div>
                    <span className="text-white/40">Compute</span>
                    <p className="text-white font-medium mt-1">{b.compute}</p>
                  </div>
                  <div>
                    <span className="text-white/40">Power</span>
                    <p className="text-white font-medium mt-1">{b.power}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture diagram */}
      <section className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Power architecture
          </h2>
          <div className="border border-white/10 rounded-xl p-8 font-mono text-sm text-white/70 leading-relaxed overflow-x-auto">
            <pre>{`┌──────────────────────────────────────────────┐
│                 Body Board                   │
│                                              │
│  ┌─────────┐  ┌──────────┐  ┌────────────┐  │
│  │ Battery  │─▶│  Power   │─▶│  48V Bus   │  │
│  │Interface │  │ Mgmt IC  │  │            │  │
│  └─────────┘  └──────────┘  └─────┬──────┘  │
│                                   │          │
│       ┌───────────────────────────┼────┐     │
│       │           │               │    │     │
│   ┌───┴───┐  ┌───┴───┐  ┌───────┴┐  ┌┴───┐ │
│   │Joint 1│  │Joint 2│  │Joint N │  │ SBC│ │
│   │(48V)  │  │(48V)  │  │(48V)   │  │(5V)│ │
│   └───────┘  └───────┘  └────────┘  └────┘ │
│                                              │
│  ── EtherCAT daisy-chain (1 kHz+) ────────  │
│                                              │
│  ┌────────┐  ┌──────┐  ┌──────────────────┐ │
│  │  IMU   │  │ F/T  │  │  Camera / Lidar  │ │
│  └────────┘  └──────┘  └──────────────────┘ │
└──────────────────────────────────────────────┘`}</pre>
          </div>
        </div>
      </section>
    </div>
  );
}
