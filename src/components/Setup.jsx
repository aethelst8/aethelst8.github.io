const STEPS = [
  {
    title: 'Download the installer and the app',
    body: 'Grab the Windows installer and the Android APK from the download section below.',
  },
  {
    title: 'Install Tailscale on both devices (optional, recommended)',
    body: (
      <>
        If you want approvals to keep working when your phone is on mobile data,
        not just the same Wi-Fi as your PC, install Tailscale on both. It is free
        for personal use. See the Connect section below for the full setup steps.
        Skip this if you only ever need approvals while your phone and PC share a
        network.
      </>
    ),
  },
  {
    title: 'Run the installer on your PC',
    body: 'Run AethelHook-Setup.exe as Administrator. It installs a background service and the tray app, then opens the tray app automatically.',
  },
  {
    title: 'Find the AethelHook tray app',
    body: (
      <>
        Look for the ÆthelHook icon in your Windows system tray, the row of small
        icons near the clock in the bottom right of your screen. If you do not see
        it right away, click the small up arrow (^) to show hidden icons. Left
        click the icon to open the app.
      </>
    ),
  },
  {
    title: 'Install the app on your phone',
    body: 'Open the APK you downloaded. Android will warn that it is from an unknown source since it is not on the Play Store yet, allow the install and continue.',
  },
  {
    title: 'Pair your phone with your PC',
    body: (
      <>
        In the tray app window, click <strong>Pair New Device</strong>. Windows Hello
        asks you to confirm with your PIN, fingerprint, or face, then shows a QR code.
        Open the app on your phone, go to <strong>Settings</strong>, and tap{' '}
        <strong>Scan QR to Pair</strong>, then scan the code from the tray window.
      </>
    ),
  },
  {
    title: 'You are done',
    body: 'From now on, tool calls, plan reviews, and clarifying questions from Claude Code, Codex, or OpenCode are routed to your phone for a decision.',
  },
]

export default function Setup() {
  return (
    <section id="setup">
      <div className="wrap">
        <h2>Setup</h2>
        <p className="section-lead">Seven steps, most of them one click.</p>
        <ol className="steps">
          {STEPS.map((s, i) => (
            <li className="step" key={s.title}>
              <span className="step-num">{i + 1}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="warn warn-info requirements-note">
          <strong>Codex and OpenCode each need one extra one-time step</strong>{' '}
          beyond what is listed above, Codex needs its hooks trusted, and OpenCode
          needs Node.js. See the{' '}
          <a href="/guides/approve-claude-code-and-codex-from-your-phone/">full setup guide</a>{' '}
          for exact instructions for each.
        </div>
      </div>
    </section>
  )
}
