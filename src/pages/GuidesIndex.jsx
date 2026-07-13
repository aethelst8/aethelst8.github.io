import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

const GUIDES = [
  {
    href: '/guides/is-it-safe-to-let-claude-code-run-unattended/',
    title: 'Is it safe to let Claude Code run unattended?',
    body: 'What can actually go wrong when an AI coding agent runs shell commands on its own, and what a second-device approval gate changes about that risk.',
  },
  {
    href: '/guides/approve-claude-code-and-codex-from-your-phone/',
    title: 'How to approve Claude Code, Codex, and OpenCode from your phone',
    body: 'A step-by-step walkthrough of pairing ÆthelHook and answering approvals, plan reviews, and questions remotely, including the extra setup step Codex and OpenCode each need.',
  },
  {
    href: '/guides/claude-code-hooks-explained/',
    title: 'Claude Code hooks explained',
    body: 'PreToolUse, PostToolUse, and Stop: what each hook actually receives and returns, and how to build your own approval gate on top of them.',
  },
]

export default function GuidesIndex() {
  return (
    <>
      <Nav />
      <main>
        <section className="guides-hero">
          <div className="wrap">
            <h1>Guides</h1>
            <p className="section-lead">
              Notes on AI agent safety, Claude Code, Codex, OpenCode, and how ÆthelHook is built.
            </p>
          </div>
        </section>
        <section>
          <div className="wrap guide-list">
            {GUIDES.map((g) => (
              <a className="guide-card" href={g.href} key={g.href}>
                <h2>{g.title}</h2>
                <p>{g.body}</p>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
