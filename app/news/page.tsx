import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "News — Humanents",
  description: "Latest updates from Humanents. Progress on smart actuators for humanoid robots.",
};

export interface NewsPost {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  content: string;
}

export const posts: NewsPost[] = [
  {
    slug: "joint-ii-development-begins",
    date: "2026-02-01",
    title: "Joint II development begins",
    excerpt:
      "We have started active development on Joint II, our 40 Nm actuator module targeting upper-body humanoid applications.",
    content: `We are excited to announce that active development has begun on Joint II — our 40 Nm integrated actuator module designed for upper-body humanoid applications such as arms, elbows, and shoulders.

Joint II is the first demonstrator in the SmartAct family. It integrates a brushless motor, 48V power stage, 14-bit absolute encoder, and STM32-based real-time controller into a single sealed module.

The design targets are ambitious but grounded:
- 40 Nm peak torque
- ~800 g total weight
- EtherCAT (CoE) communication
- FOC (Field Oriented Control)
- ROS2-compatible driver interface

We chose to start with Joint II because it represents the most common joint size for upper-body humanoid robots — large enough to be mechanically meaningful, small enough to iterate quickly.

We will share progress updates as we move through the design, prototyping, and testing phases. Follow our News page for updates.`,
  },
  {
    slug: "humanents-founded",
    date: "2026-01-15",
    title: "Humanents founded in Zurich",
    excerpt:
      "We have officially founded Humanents with a clear mission: build the open actuation platform for humanoid robots.",
    content: `Humanents has been officially founded in Zurich, Switzerland.

Our mission is clear: build the open actuation platform that enables robotics teams to develop humanoid robots — giving builders the precision tools to focus on intelligence, not infrastructure.

The humanoid robotics industry is at an inflection point. Hundreds of companies worldwide are developing humanoid robots, but they all face the same bottleneck: actuation. Building custom actuators from scratch takes 12-18 months and requires deep expertise in motor design, power electronics, and real-time control.

We believe this is a solvable infrastructure problem — the same kind of problem Arduino solved for embedded systems. Our SmartAct joint family and Body platform aim to provide a complete, open, industrial-grade actuation stack that any robotics team can build on.

Based in Zurich, we have access to one of the world's strongest ecosystems for robotics and precision engineering, including ETH Zurich, a deep pool of mechatronics talent, and Switzerland's tradition of quality manufacturing.

We are looking for early partners, collaborators, and investors who share our vision of accessible humanoid actuation. If that sounds like you, reach out at contact@humanents.ch.`,
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Hero */}
      <section className="relative">
        <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            News
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Updates on our progress building the open actuation platform for
            humanoid robots.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex flex-col gap-0">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/news/${post.slug}`}
                className="group border-b border-white/5 py-8 first:pt-0 last:border-b-0 flex flex-col md:flex-row md:items-start gap-4"
              >
                <time className="text-sm text-white/40 font-mono shrink-0 md:w-32">
                  {post.date}
                </time>
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-bold group-hover:text-[#00d4ff] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="text-[#00d4ff] text-sm font-medium">
                    Read more &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
