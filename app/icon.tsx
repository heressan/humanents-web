import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const spaceGrotesk = await fetch(
    "https://fonts.gstatic.com/s/spacegrotesk/v16/V8mDoQDjQSkFtoMM3T6r8E7mF71Q-gozuPTPgYv.woff2"
  ).then((res) => res.arrayBuffer());

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
        <span
          style={{
            fontFamily: "Space Grotesk",
            fontWeight: 700,
            fontSize: 22,
            color: "#ffffff",
            lineHeight: 1,
            marginTop: 2,
          }}
        >
          h
        </span>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Space Grotesk",
          data: spaceGrotesk,
          weight: 700,
        },
      ],
    }
  );
}
