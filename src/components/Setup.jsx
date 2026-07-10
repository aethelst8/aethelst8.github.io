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
        for personal use. Skip this if you only ever need approvals while your
        phone and PC share a network.
      </>
    ),
  },
  {
    title: 'Run the installer on your PC',
    body: 'Run AethelHook-Setup.exe as Administrator. It installs a background service and a tray app, then launches the tray app automatically.',
  },
  {
    title: 'Install the app on your phone',
    body: 'Open the APK you downloaded. Android will warn that it is from an unknown source since it is not on the Play Store yet, allow the install and continue.',
  },
  {
    title: 'Pair your phone with your PC',
    body: (
      <>
        On your PC, open{' '}
        <code>http://localhost:5266/pair</code> in a browser. Open the app on your
        phone and scan the QR code shown on that page.
      </>
    ),
  },
  {
    title: 'You are done',
    body: 'From now on, tool calls, plan reviews, and clarifying questions from Claude Code or Codex are routed to your phone for a decision.',
  },
]

export default function Setup() {
  return (
    <section id="setup">
      <div className="wrap">
        <h2>Setup</h2>
        <p className="section-lead">Six steps, most of them one click.</p>
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
      </div>
    </section>
  )
}
