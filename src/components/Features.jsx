const FEATURES = [
  {
    title: 'Works with Claude Code and Codex',
    body: 'Each IDE is wired in through its own native hook mechanism, both routed through the same approval gateway.',
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
    body: 'Send a prompt from your phone and kick off a headless run on your PC. Each project keeps its own resumable conversation.',
  },
  {
    title: 'Secure by default',
    body: 'Devices pair over a one time QR code. Every device gets its own token, and nothing is stored in plain text.',
  },
  {
    title: 'Stay connected on the go',
    body: 'Works over the same Wi-Fi, or over Tailscale when your phone is on mobile data and your PC is somewhere else entirely. Leaving your desk does not mean losing control of your agent.',
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
        <p className="section-lead">One gateway, two IDEs, and a phone in your pocket.</p>
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
