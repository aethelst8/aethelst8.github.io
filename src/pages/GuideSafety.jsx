import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

export default function GuideSafety() {
  return (
    <>
      <Nav />
      <main>
        <article className="article">
          <p className="kicker">Guide</p>
          <h1>Is it safe to let Claude Code run unattended?</h1>
          <p className="article-lead">
            Claude Code, Codex, and every other agentic coding tool can run shell
            commands, edit or delete files, and install packages without a human
            watching each step. Here is what can actually go wrong, and what
            meaningfully reduces the risk.
          </p>

          <h2>What "unattended" really means</h2>
          <p>
            Modern coding agents do not just suggest code, they execute it. A single
            prompt can end up running <code>npm install</code>, calling{' '}
            <code>git push --force</code>, editing config files, or piping a shell
            script straight into <code>bash</code>. Most of the time that is exactly
            what you want. The risk shows up in the cases you did not anticipate: a
            typo in a generated command, a dependency the agent misread, or a
            destructive flag it added because it seemed reasonable in context.
          </p>

          <h2>The real failure modes</h2>
          <ul>
            <li>
              <strong>Destructive commands.</strong> <code>rm -rf</code> on the wrong
              path, a force-push that overwrites teammates' commits, a database
              migration run against production instead of a local instance.
            </li>
            <li>
              <strong>Leaking secrets.</strong> An agent reading a `.env` file and
              echoing its contents into a log, a commit message, or a third-party API
              call.
            </li>
            <li>
              <strong>Prompt injection.</strong> If an agent reads untrusted content,
              a webpage, a fetched file, an issue comment, that content can contain
              hidden instructions aimed at the agent rather than at you. The agent has
              no reliable way to tell "the user asked for this" apart from "a file the
              agent read asked for this."
            </li>
            <li>
              <strong>Autopilot approval.</strong> This is the one that is easy to
              underestimate. Most IDEs show an allow/deny popup on the same screen you
              are already working in. After the tenth prompt in an hour, clicking
              "Allow" stops being a decision and starts being a reflex.
            </li>
          </ul>

          <h2>What already helps</h2>
          <p>
            Claude Code and Codex both ship real safeguards: permission modes, deny
            rules for known-dangerous commands, sandboxed execution, and a hook system
            (see{' '}
            <a href="/guides/claude-code-hooks-explained/">
              Claude Code hooks explained
            </a>
            ) that can intercept a tool call before it runs. Anthropic's own{' '}
            <a
              href="https://code.claude.com/docs/en/security"
              target="_blank"
              rel="noopener noreferrer"
            >
              Claude Code security documentation
            </a>{' '}
            is worth reading directly, it covers sandboxing, managed settings, and
            enterprise controls in more depth than any single blog post can.
          </p>

          <h2>The gap those safeguards do not close</h2>
          <p>
            Every one of those controls still resolves on the same device, and often
            the same screen, you are already using. That is fine when you are
            actively watching. It stops being fine the moment you step away from your
            desk, or the moment you are deep in three other windows and the approval
            popup becomes background noise.
          </p>
          <div className="callout">
            The fix is not "trust the agent more" or "read every diff more
            carefully." It is moving the decision to a second, physically separate
            device, the same logic behind two-factor authentication for a bank
            transfer. A popup you can autopilot-click is not a control. A
            notification on a device you have to consciously pick up and read is.
          </div>

          <h2>Practical rules that hold up in real use</h2>
          <ol>
            <li>Read the actual command, not just the tool name, before approving.</li>
            <li>
              Prefer "always allow" scoped to one project over "always allow"
              everywhere, a broad grant made for convenience today is the one you
              forget about later.
            </li>
            <li>
              Use deny-with-reason instead of a bare deny when something looks wrong,
              it gives the agent the context to actually fix its next attempt.
            </li>
            <li>
              Keep a deterministic policy layer (hooks, deny rules) in front of the
              model's own judgment. The model is good at writing code, it is not a
              substitute for a rule that always fires the same way.
            </li>
            <li>
              If you regularly step away mid-session, route approvals to a second
              device rather than leaving the agent to sit idle, or worse, running in
              a fully unattended auto-approve mode out of impatience.
            </li>
          </ol>

          <h2>Where ÆthelHook fits</h2>
          <p>
            ÆthelHook is a free, open source gateway that routes every Claude Code
            and Codex tool call, plan review, and clarifying question to your phone
            for a decision, over an end-to-end encrypted connection, with no cloud
            relay in the middle. It does not replace the safeguards above, it adds
            the one thing they cannot: a decision made away from the screen you were
            already on autopilot with.
          </p>
          <p>
            <a href="/">See how it works and download it</a>.
          </p>

          <div className="related">
            <h2>Related guides</h2>
            <ul>
              <li>
                <a href="/guides/claude-code-hooks-explained/">
                  Claude Code hooks explained
                </a>
              </li>
              <li>
                <a href="/guides/approve-claude-code-and-codex-from-your-phone/">
                  How to approve Claude Code and Codex from your phone
                </a>
              </li>
            </ul>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
