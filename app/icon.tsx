import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#0a0a0f",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Gradient "h" via two overlapping elements trick */}
        <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="20" y2="22" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00d4ff" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
          {/* Letter h path */}
          <path
            d="M2 2 L2 20 M2 11 C2 7 18 5 18 11 L18 20"
            stroke="url(#g)"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
