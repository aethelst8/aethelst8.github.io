import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

export default function GuideApprove() {
  return (
    <>
      <Nav />
      <main>
        <article className="article">
          <p className="kicker">Guide</p>
          <h1>How to approve Claude Code, Codex, Antigravity, and OpenCode from your phone</h1>
          <p className="article-lead">
            A step-by-step walkthrough of setting up remote control for Claude Code,
            Codex, Antigravity, and OpenCode with ÆthelHook, so tool calls, plan
            reviews, and questions can be answered from your phone instead of your
            IDE. Codex, Antigravity, and OpenCode each need one small extra step
            beyond the base install, covered in full below.
          </p>

          <h2>What you need</h2>
          <ul>
            <li>
              A Windows PC running at least one of: Claude Code (CLI or VS Code
              extension), Codex (CLI or IDE), Antigravity, or OpenCode.
            </li>
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
            In the tray app window, click <strong>Pair New Device</strong>. Windows
            Hello asks you to confirm with your PIN, fingerprint, or face before it
            shows a QR code, so pairing a new device takes more than just a scan.
            Open the app on your phone, go to <strong>Settings</strong>, and tap{' '}
            <strong>Scan QR to Pair</strong>, then scan the code from the tray
            window. Each device gets its own token, and the connection is end-to-end
            encrypted with certificate pinning, not a shared cloud relay.
          </p>
          <p>
            Only one phone is ever the active connection. Pairing a new device makes
            it the sole active one, whichever phone was previously connected gets a
            plain notification that its connection ended, no approval prompt on that
            phone, since the decision already happened on the PC via Windows Hello. If
            Windows Hello is not set up on your PC at all, pairing still works, just
            without that extra confirmation step.
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

          <h2>6. Extra step for Codex, Antigravity, or OpenCode</h2>
          <p>
            Claude Code needs nothing beyond the steps above, its hooks are trusted
            automatically. The other three agents each need one more small step
            before ÆthelHook can see their tool calls.
          </p>

          <h3>Codex: trust the hooks</h3>
          <p>
            The Windows installer writes three hooks into Codex's own configuration,
            but Codex will not run a hook until you explicitly trust it, this is a
            Codex safety feature, not something ÆthelHook can skip on your behalf.
            Open Codex and go to <strong>Settings &gt; Hooks</strong>. You will see two
            events, <strong>PreToolUse</strong> with two hooks under it, and{' '}
            <strong>Stop</strong> with one hook under it, three hooks in total. Click
            the <strong>Trust</strong> button that appears next to each toggle, once
            for each of the three hooks. Until all three are trusted, Codex tool calls
            will not reach your phone.
          </p>
          <div className="media-frame">
            <img
              src="/media/codex-hooks-trust.png"
              alt="Codex Settings > Hooks screen showing PreToolUse with Hook 1 and Hook 2, and Stop with Hook 1, each with an enabled toggle and a Trust button"
            />
          </div>

          <h3>Antigravity: two settings, and a known gap</h3>
          <p>
            Antigravity has its own native confirmation dialogs for running commands
            and accepting file edits, separate from ÆthelHook's own approval gate.
            Leaving them on means you would have to dismiss Antigravity's own dialog{' '}
            <em>after</em> already answering on your phone, which defeats the point.
            Open Antigravity's settings with <strong>Ctrl + ,</strong>, go to{' '}
            <strong>Permissions</strong>, and set both{' '}
            <strong>Terminal Command Auto Execution</strong> and{' '}
            <strong>Review Policy</strong> to <strong>Always Proceed</strong>. This
            does not turn off approvals, ÆthelHook's own gate still blocks and waits
            for your phone exactly as before, it only removes Antigravity's own
            duplicate confirmation on top of it.
          </p>
          <div className="warn warn-info">
            <strong>Known gap:</strong> Antigravity never fires a "finished working"
            notification the way Claude Code, Codex, and OpenCode do, this is a bug in
            Antigravity itself (its Stop-equivalent hook simply never runs), not
            something ÆthelHook's approval gate is missing. Tool call approvals and
            plan reviews still work normally, you just will not get a push telling you
            Antigravity is done, you will need to check back in the IDE yourself.
            Antigravity also does not support Session Access, the headless
            phone-to-PC prompt feature, it is approval-gating only.
          </div>

          <h3>OpenCode: install with npm</h3>
          <p>
            ÆthelHook currently only knows how to find an OpenCode install done
            through npm. Install{' '}
            <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
              Node.js
            </a>{' '}
            if you do not already have it, then run:
          </p>
          <pre>
            <code>npm install -g opencode-ai</code>
          </pre>
          <p>
            OpenCode installed another way, a direct binary download, Scoop, or
            Chocolatey, will run fine on its own but ÆthelHook will not be able to
            locate it for Session Access, the headless phone-to-PC prompt feature.
            Approval gating is unaffected either way, it only needs OpenCode's own
            config folder to exist, not a specific install method.
          </p>

          <h2>7. You are done</h2>
          <p>
            From here, every tool call, plan review, and clarifying question from
            whichever of the four agents you use routes to your phone. You can allow
            once, always allow for that project, always allow everywhere, deny, or
            deny with a reason fed back to the agent, all from the notification.
          </p>

          <div className="callout">
            Session Access, ÆthelHook's other mode, works the other direction: send a
            prompt from your phone and kick off a headless run on your PC. Useful for
            a quick fix or a forgotten follow-up task while you are away from your
            desk. It works for Claude Code, Codex, and OpenCode, Antigravity does not
            have a headless mode for ÆthelHook to run, so it is approval-only.
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
