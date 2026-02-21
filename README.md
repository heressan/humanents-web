# humanents-web

Website for [humanents.ch](https://humanents.ch) — smart actuators for humanoid robots.

## Current state

**Coming Soon** landing page with:
- Logo: `humanents` in Space Grotesk bold — "human" in cyan→violet gradient (`#00d4ff → #7c3aed`), "ents" in white/black depending on background
- Tagline: *"Give the builders their tools."*
- Vision & Mission
- Contact email: dheres@humanents.ch

## Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4
- **Fonts**: Space Grotesk (logo + body), Orbitron, Geist (loaded, available)
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
- **Background**: `#0a0a0f` (near black)
- **Accent colors**: Cyan `#00d4ff`, Violet `#7c3aed`
- **No icon** for now — consider a bearing/actuator SVG mark in a future iteration

## Next steps (pending)

- [ ] Add email waitlist (Resend / Mailchimp)
- [ ] Build full product landing page (SmartAct modules SA-40 / SA-120 / SA-300)
- [ ] Integrate Stripe for pre-orders
- [ ] Add favicon using the logo gradient
