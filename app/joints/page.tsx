import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SmartAct Joint Family — Humanents",
  description:
    "Integrated smart actuator modules for humanoid robots. From 15 Nm wrist joints to 120 Nm leg actuators.",
};

const joints = [
  {
    name: "Joint I",
    torque: "15 Nm",
    weight: "~350 g",
    application: "Hands, wrists, neck",
    status: "Planned",
  },
  {
    name: "Joint II",
    torque: "40 Nm",
    weight: "~800 g",
    application: "Arms, elbows, shoulders",
    status: "In development",
  },
  {
    name: "Joint III",
    torque: "120 Nm",
    weight: "~1.8 kg",
    application: "Hips, knees, ankles",
    status: "Planned",
  },
  {
    name: "Joint L",
    torque: "200 Nm",
    weight: "~3.2 kg",
    application: "Linear actuators, heavy-duty",
    status: "Planned",
  },
];

const techStack = [
  { label: "MCU", value: "STM32 (ARM Cortex-M)" },
  { label: "Fieldbus", value: "EtherCAT (CoE)" },
  { label: "Control", value: "FOC (Field Oriented Control)" },
  { label: "Feedback", value: "Absolute encoder, 14-bit" },
  { label: "Voltage", value: "48V DC native" },
  { label: "Software", value: "ROS2 compatible drivers" },
];

export default function JointsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#00d4ff]/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-32">
          <span className="text-xs font-semibold tracking-widest text-[#00d4ff] uppercase">
            Product
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-4 mb-6">
            SmartAct Joint Family
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
            Each SmartAct joint integrates a brushless motor, power stage,
            absolute encoder, and real-time controller into a single sealed
            module. Plug in power and EtherCAT — the joint handles the rest.
          </p>
        </div>
      </section>

      {/* Product grid */}
      <section className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Product lineup
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {joints.map((j) => (
              <div
                key={j.name}
                className="border border-white/10 rounded-xl p-6 hover:border-[#00d4ff]/30 transition-colors flex flex-col gap-5"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{j.name}</h3>
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      j.status === "In development"
                        ? "bg-[#00d4ff]/10 text-[#00d4ff]"
                        : "bg-white/5 text-white/40"
                    }`}
                  >
                    {j.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-white/40">Peak torque</span>
                    <p className="text-white font-medium mt-1">{j.torque}</p>
                  </div>
                  <div>
                    <span className="text-white/40">Weight</span>
                    <p className="text-white font-medium mt-1">{j.weight}</p>
                  </div>
                  <div className="col-span-2">
                    <span className="text-white/40">Application</span>
                    <p className="text-white font-medium mt-1">
                      {j.application}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 border border-[#00d4ff]/20 rounded-lg bg-[#00d4ff]/5">
            <p className="text-sm text-[#00d4ff]">
              <strong>Joint II</strong> is our first demonstrator, currently in
              active development. It targets the most common joint size for
              upper-body humanoid applications.
            </p>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Common technology stack
          </h2>
          <p className="text-white/60 mb-8 max-w-2xl">
            All joints share the same core architecture, software interface, and
            communication protocol. Learn one, deploy all.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {techStack.map((t) => (
              <div key={t.label} className="flex flex-col gap-1">
                <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">
                  {t.label}
                </span>
                <span className="text-white font-medium">{t.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Module architecture
          </h2>
          <div className="border border-white/10 rounded-xl p-8 font-mono text-sm text-white/70 leading-relaxed overflow-x-auto">
            <pre>{`┌─────────────────────────────────────┐
│           SmartAct Joint            │
│                                     │
│  ┌──────────┐    ┌───────────────┐  │
│  │ Brushless │───▶│  Power Stage  │  │
│  │   Motor   │    │  (48V BLDC)   │  │
│  └──────────┘    └───────┬───────┘  │
│                          │          │
│  ┌──────────┐    ┌───────┴───────┐  │
│  │ Absolute  │───▶│  STM32 MCU    │  │
│  │  Encoder  │    │  (FOC + App)  │  │
│  └──────────┘    └───────┬───────┘  │
│                          │          │
│              ┌───────────┴────────┐ │
│              │  EtherCAT Slave    │ │
│              │  (CoE protocol)    │ │
│              └────────────────────┘ │
│                                     │
│  [48V IN] [EtherCAT IN/OUT] [BRAKE] │
└─────────────────────────────────────┘`}</pre>
          </div>
        </div>
      </section>
    </div>
  );
}
