# Zolile Nonzapa — Professional Portfolio & Command Center

A high-performance, premium personal portfolio website and command center built for **Zolile Nonzapa (Technical Founder & Systems Architect)**. The platform features an interactive terminal interface, a real-time bidirectional messaging bridge, and an architectural showcase of flagship projects.

---

## 🚀 Key Features

### 1. Command Center & Interactive Terminal
*   **Virtual Console:** An interactive, developer-grade terminal interface (`TerminalContact.tsx`) allowing visitors to run commands, query skills, list projects, and initiate communications.
*   **Built-in Commands:**
    *   `help`: Print all available console commands.
    *   `about`: Display background bio and system profile.
    *   `skills`: List core engineering technologies (Frontend, Backend, Infrastructure, Data & AI).
    *   `projects`: Query flagship products built by Zolile.
    *   `contact`: Display email, cellular, and professional social links.
    *   `message`: Walk through the step-by-step console message ingestion flow.
    *   `chat` / `whatsapp`: Direct redirect to secure WhatsApp chat.
    *   `linkedin`: Redirect to professional profile.
    *   `clear`: Wipe the terminal history.
    *   `launch <project-id>`: Instantly open any live system in a new tab.

### 2. Live Bidirectional Message Bridge
*   **Multi-Channel Dispatch:** When a message is sent from the terminal, it is captured in a **Neon PostgreSQL** database and dispatched to multiple production channels:
    *   **Telegram Bot Alert** (using Telegram Bot API)
    *   **Discord Webhook Channel**
    *   **Resend Email Notification**
    *   **Fallback Console Simulation** (if no keys are configured)
*   **Real-time Webhook Receiver & Pusher Bridge:** 
    *   Zolile can reply directly to the Telegram message alert on his phone.
    *   A Next.js API route (`/api/telegram-webhook`) processes authorized replies, extracts the visitor's channel ID, and triggers a real-time push event via **Pusher**.
    *   The visitor's browser terminal receives the message and appends it to the history in real-time, establishing a live chat connection directly inside the virtual console.

### 3. Architecture Showcase & Project Catalog
*   Interactive landing sections highlighting flagship software products built across major domains:
    *   **AI Infrastructure** (e.g., Mintry Fabric, ScriptLens local WebGPU AI engine)
    *   **B2B Operating Systems** (e.g., PraxisOne Compliance Workspace, Vivid Accounting)
    *   **Financial Technology** (e.g., VoltAdvance ledger, Identity Banc fraud prevention)
    *   **Data Intelligence** (e.g., Libo Insights, UVU Africa, Airbnb Market Analytics)
    *   **Commercial & Client Solutions** (e.g., MLK Computer Consulting, Ouhout, 18 Township Tours)

---

## 🛠️ Technology Stack

*   **Framework:** Next.js (App Router, Server Actions, Route Handlers)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS v4 & Custom CSS Utilities
*   **Animations:** Framer Motion (for physics-based micro-interactions)
*   **Real-time Infrastructure:** Pusher Channels
*   **Database:** Neon PostgreSQL Serverless Driver (`@neondatabase/serverless`)
*   **Icons:** Lucide React

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── actions.ts              # Server Action (leads capture, email/chat dispatch)
│   ├── layout.tsx              # Root HTML layout, font setup, analytics
│   ├── page.tsx                # Portfolio main landing page
│   ├── globals.css             # Tailwind v4 directives, custom scrollbars, styles
│   ├── api/
│   │   └── telegram-webhook/
│   │       └── route.ts        # Authorized Telegram reply listener & Pusher bridge
│   └── projects/
│       └── page.tsx            # Full console archive of all 23+ projects
├── components/
│   ├── Navbar.tsx              # Dynamic layout navigation
│   ├── Footer.tsx              # Clean footer links
│   ├── HeroArchitecture.tsx    # Interactive canvas/visual hero structure
│   ├── MetricCounter.tsx       # Smooth number counter animation
│   ├── ProjectCard.tsx         # Responsive interactive cards
│   └── TerminalContact.tsx     # Fully-featured interactive terminal console
└── data/
    └── projects.ts             # Complete system project archive payload
```

---

## ⚙️ Environment Variables Setup

To activate the real-time bridge and database lead capture, create a `.env.local` file in the root directory. Configure the following keys:

```env
# Database Lead Capture (Neon PostgreSQL)
DATABASE_URL=postgres://user:password@host/dbname?sslmode=require
POSTGRES_URL=postgres://user:password@host/dbname?sslmode=require

# Discord Webhook Integration
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/your-webhook-id/your-webhook-token

# Telegram Bot Integration (Bidirectional Chat)
TELEGRAM_BOT_TOKEN=123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ
TELEGRAM_CHAT_ID=987654321

# Resend Email Integration
RESEND_API_KEY=re_123456789
RESEND_FROM=onboarding@resend.dev
RESEND_TO=zolile@mlkcomputer.com

# Pusher Real-time Bridge (Client & Server)
PUSHER_APP_ID=1234567
NEXT_PUBLIC_PUSHER_KEY=abcdef0123456789abcd
PUSHER_SECRET=abcdef0123456789abcd
NEXT_PUBLIC_PUSHER_CLUSTER=mt1
```

---

## 💻 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### 3. Build for Production
```bash
npm run build
```

---

## 🔒 Security & Verification Details
*   **Webhook Authorization:** The incoming Telegram Webhook verifies that the sender ID matches the designated `TELEGRAM_CHAT_ID` before parsing replies, ensuring unauthorized parties cannot publish to client terminals.
*   **XSS Protection:** Client messages are HTML-escaped before being sent to the Telegram API to prevent markup injections.
