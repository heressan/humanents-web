import Link from "next/link";

export default function Logo({ bg = "dark" }: { bg?: "dark" | "light" }) {
  return (
    <Link href="/" className="inline-block">
      <span
        className="text-2xl font-bold tracking-tight"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(to right, #00d4ff, #7c3aed)",
          }}
        >
          human
        </span>
        <span style={{ color: bg === "dark" ? "#ffffff" : "#0a0a0f" }}>
          ents
        </span>
      </span>
    </Link>
  );
}
