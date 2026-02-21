import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span
              className="text-lg font-bold tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #00d4ff, #7c3aed)",
                }}
              >
                human
              </span>
              <span className="text-white">ents</span>
            </span>
            <p className="text-white/40 text-sm">
              Smart actuators for humanoid robots.
            </p>
          </div>

          {/* Products */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold tracking-widest text-white/60 uppercase">
              Products
            </h4>
            <Link
              href="/joints"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Joints
            </Link>
            <Link
              href="/body"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Body
            </Link>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold tracking-widest text-white/60 uppercase">
              Company
            </h4>
            <Link
              href="/company"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              About
            </Link>
            <Link
              href="/news"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              News
            </Link>
            <Link
              href="/investors"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Investors
            </Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold tracking-widest text-white/60 uppercase">
              Contact
            </h4>
            <a
              href="mailto:contact@humanents.ch"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              contact@humanents.ch
            </a>
            <p className="text-sm text-white/40">Zurich, Switzerland</p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 text-center">
          <p className="text-white/20 text-xs">
            &copy; 2026 Humanents GmbH &middot; Zurich, Switzerland
          </p>
        </div>
      </div>
    </footer>
  );
}
