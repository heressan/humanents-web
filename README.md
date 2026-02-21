# humanents-web

Website for [humanents.ch](https://humanents.ch) — the open actuation platform for humanoid robotics builders.

> *"Give the builders their tools."*

Humanents is not a robot company. It's the platform that lets researchers, startups and engineers building humanoid robots focus on what they do best — locomotion, AI, whole-body control — without reinventing actuation from scratch. Like Arduino democratized electronics, Humanents democratizes access to production-grade humanoid actuators.

## Current state

**Coming Soon** landing page with:
- Logo: `humanents` in Space Grotesk bold — "human" in cyan→violet gradient (`#00d4ff → #7c3aed`), "ents" in white/black depending on background
- Favicon: white "h" in Space Grotesk bold on dark background (`public/fonts/SpaceGrotesk-Bold.ttf` bundled locally)
- Tagline: *"Give the builders their tools."*
- Vision & Mission
- Contact email: dheres@humanents.ch

## Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4
- **Fonts**: Space Grotesk (logo + body), Orbitron, Geist (loaded, available)
- **Favicon**: `app/icon.tsx` — Next.js ImageResponse, Space Grotesk bold bundled in `public/fonts/`
- **Deployment**: Vercel (auto SSL, HTTP/2)
- **Domain**: humanents.ch + www.humanents.ch (both with SSL via Let's Encrypt)
- **Repo**: [github.com/heressan/humanents-web](https://github.com/heressan/humanents-web)

## Local development

```bash
# Load Node.js (nvm — required in WSL2)
export NVM_DIR="$HOME/.nvm" && \. "$NVM_DIR/nvm.sh"

# Install dependencies
npm install

# Run dev server (use a free port if 3000 is taken)
npm run dev -- -p 3001
```

Open [http://localhost:3001](http://localhost:3001).

> **WSL2 note**: Hot reload may not detect file changes on `/mnt/c/`. Restart the dev server after edits if the page doesn't update.

## Deploy

```bash
# Push to GitHub
git add . && git commit -m "message" && git push

# Manual production deploy
source ~/.nvm/nvm.sh
vercel --prod
```

Vercel is authenticated as `heressan`. If the session expires, run `vercel login` and authenticate via browser (Chrome logged in as heressan).

## DNS (Infomaniak)

| Type  | Name | Value                |
|-------|------|----------------------|
| A     | @    | 76.76.21.21          |
| CNAME | www  | cname.vercel-dns.com |

Both `humanents.ch` and `www.humanents.ch` have valid SSL certificates (auto-renewed by Vercel every 90 days).

## Brand decisions

- **Logo**: Text-only, Space Grotesk bold
  - `human` → gradient `#00d4ff` to `#7c3aed` (cyan → violet)
  - `ents` → white on dark bg / `#0a0a0f` on light bg
- **Favicon**: white "h" Space Grotesk bold, `#0a0a0f` background, 8px border radius
- **Background**: `#0a0a0f` (near black)
- **Accent colors**: Cyan `#00d4ff`, Violet `#7c3aed`
- **No icon** for now — consider a bearing/actuator SVG mark in a future iteration

## Product context (for full landing page)

Two product families — see `../STRATEGY.md` for full detail:

**JOINTS — SmartAct** (actuator modules)
| Model | Torque | Price | Application |
|-------|--------|-------|-------------|
| Joint I | 20 Nm | CHF 600 | Wrist, neck |
| Joint II | 80 Nm | CHF 1'000 | Elbow, shoulder |
| Joint III | 250 Nm | CHF 1'600 | Hip, knee, spine |
| Joint L | 3'000 N (linear) | CHF 900 | Ankle |

**BODY** (compute + power + perception platform)
- Body I / II / III / Hybrid (ICE range extender for 8h+ runtime)

Revenue per humanoid robot: ~CHF 34'200

## Next steps (pending)

- [ ] Add email waitlist (Resend / Mailchimp)
- [ ] Build full product landing page (SmartAct Joint family + Body family)
- [ ] Integrate Stripe for pre-orders / deposits
- [ ] Open-source ROS2 driver repo linked from site
