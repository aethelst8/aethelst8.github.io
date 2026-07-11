import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

export default function GuideApprove() {
  return (
    <>
      <Nav />
      <main>
        <article className="article">
          <p className="kicker">Guide</p>
          <h1>How to approve Claude Code and Codex from your phone</h1>
          <p className="article-lead">
            A step-by-step walkthrough of setting up remote control for Claude Code
            and Codex with ÆthelHook, so tool calls, plan reviews, and questions can
            be answered from your phone instead of your IDE.
          </p>

          <h2>What you need</h2>
          <ul>
            <li>A Windows PC running Claude Code (CLI or VS Code extension) and/or Codex (CLI or IDE).</li>
            <li>An Android phone.</li>
            <li>No account and no subscription, both installs are free.</li>
          </ul>

          <h2>1. Download the installer and the app</h2>
          <p>
            Grab the Windows installer and the Android APK from the{' '}
            <a href="/#download">download section</a> on the homepage. Both are also
            available directly from the{' '}
            <a href="https://github.com/aethelst8/aethelhook/releases">
              GitHub releases page
            </a>
            .
          </p>

          <h2>2. Run the installer on your PC</h2>
          <p>
            Run <code>AethelHook-Setup.exe</code> as Administrator. It installs a
            background service and the tray app, then opens the tray app
            automatically. Look for the ÆthelHook icon in your Windows system tray,
            the row of small icons near the clock. Click the small up arrow (^) if
            you do not see it right away.
          </p>

          <h2>3. Install the app on your phone</h2>
          <p>
            Open the APK you downloaded. Android will warn that it is from an
            unknown source since it is not on the Play Store yet, allow the install
            and continue.
          </p>

          <h2>4. Pair your phone with your PC</h2>
          <p>
            In the tray app window, click <strong>Pair New Device</strong>. It shows
            a QR code. Open the app on your phone, go to <strong>Settings</strong>,
            and tap <strong>Scan QR to Pair</strong>, then scan the code from the
            tray window. Pairing is a one-time QR handshake, each device gets its own
            token, and the connection is end-to-end encrypted with certificate
            pinning, not a shared cloud relay.
          </p>

          <h2>5. Optional: install Tailscale for mobile data</h2>
          <p>
            Pairing over the same Wi-Fi network works automatically with no extra
            setup. If you want approvals to keep working when your phone is on
            mobile data and your PC is somewhere else entirely, install{' '}
            <a href="https://tailscale.com/download" target="_blank" rel="noopener noreferrer">
              Tailscale
            </a>{' '}
            on both devices (free for personal use), sign into the same account on
            both, and enter your PC's Tailscale IP in the ÆthelHook app's Settings
            tab.
          </p>

          <h2>6. You are done</h2>
          <p>
            From here, every tool call, plan review, and clarifying question from
            Claude Code or Codex routes to your phone. You can allow once, always
            allow for that project, always allow everywhere, deny, or deny with a
            reason fed back to the agent, all from the notification.
          </p>

          <div className="callout">
            Session Access, ÆthelHook's other mode, works the other direction: send a
            prompt from your phone and kick off a headless run on your PC. Useful for
            a quick fix or a forgotten follow-up task while you are away from your
            desk.
          </div>

          <p>
            <a href="/">Back to the full feature list and download links</a>.
          </p>

          <div className="related">
            <h2>Related guides</h2>
            <ul>
              <li>
                <a href="/guides/is-it-safe-to-let-claude-code-run-unattended/">
                  Is it safe to let Claude Code run unattended?
                </a>
              </li>
              <li>
                <a href="/guides/claude-code-hooks-explained/">
                  Claude Code hooks explained
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
