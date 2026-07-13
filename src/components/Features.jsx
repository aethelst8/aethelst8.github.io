const FEATURES = [
  {
    title: 'Works with four coding agents',
    body: 'Claude Code (CLI and VS Code extension), Codex (CLI and IDE), Antigravity, and OpenCode. Not the regular Claude app or claude.ai, those are a different product. Codex and OpenCode need a one-time extra setup step, see the setup guide below for exact instructions.',
  },
  {
    title: 'Real time, end to end encrypted',
    body: 'Approvals travel over a TLS connection with certificate pinning. No cloud relay and no third party push service sits in the middle.',
  },
  {
    title: 'Five ways to answer',
    body: 'Allow once, always allow for this project, always allow everywhere, deny, or deny with a reason fed back to the agent.',
  },
  {
    title: 'Plans and questions too',
    body: "Claude Code's plan review and clarifying questions are answered from your phone, not just tool calls.",
  },
  {
    title: 'Session Access',
    body: 'Remote control your agent: send a prompt from your phone and kick off a headless run on your PC. Each project keeps its own resumable conversation. Claude Code, Codex, and OpenCode only, Antigravity does not have a headless mode to run this way.',
  },
  {
    title: 'Secure by default',
    body: 'Pairing a new device needs Windows Hello on the PC, not just a QR scan. Every device gets its own token, only one is ever active, and nothing is stored in plain text.',
  },
  {
    title: 'Hidden until you unlock them',
    body: 'Your LAN IP, Tailscale IP, and API token are masked in the app by default. Reveal them with your fingerprint, face, PIN, or password.',
  },
  {
    title: 'Stay connected on the go',
    body: 'Works over the same Wi-Fi, or over Tailscale when your phone is on mobile data and your PC is somewhere else entirely. Leaving your desk does not mean losing control of your agent.',
  },
  {
    title: 'Reconnects on its own',
    body: 'The background service starts automatically when your PC boots, and keeps running through sleep and wake. Your phone finds it again on its own, over the same Wi-Fi or over Tailscale, no need to reopen anything.',
  },
  {
    title: 'Fewer trips back to your IDE',
    body: 'Approve, deny, or answer a question straight from a phone notification. No alt-tabbing away from whatever else you are working on just to click a button.',
  },
]

export default function Features() {
  return (
    <section id="features">
      <div className="wrap">
        <h2>What it does</h2>
        <p className="section-lead">Remote control and approval for four coding agents, one gateway, and a phone in your pocket.</p>
        <div className="grid">
          {FEATURES.map((f) => (
            <div className="card" key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
