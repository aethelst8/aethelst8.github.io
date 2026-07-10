const SCENARIOS = [
  {
    title: 'Same Wi-Fi',
    body: 'Phone and PC on the same Wi-Fi network. No Tailscale needed, this works automatically once you have paired.',
  },
  {
    title: 'Phone on mobile data, PC on Wi-Fi',
    body: 'You are out and about with your phone on mobile data, while your PC stays on its normal Wi-Fi or ethernet. Install and run Tailscale on both devices.',
  },
  {
    title: "Phone on mobile data, PC on your phone's hotspot",
    body: "Your PC is tethered to your phone's own mobile hotspot. Install and run Tailscale on both devices here too, for a reliable connection.",
  },
]

export default function Connect() {
  return (
    <section id="connect">
      <div className="wrap">
        <h2>Staying connected</h2>
        <p className="section-lead">Three ways your phone and PC can reach each other.</p>
        <div className="grid">
          {SCENARIOS.map((s) => (
            <div className="card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>

        <h3 className="sub-heading">Setting up Tailscale</h3>
        <ol className="steps">
          <li className="step">
            <span className="step-num">1</span>
            <div>
              <h3>Install Tailscale on both devices</h3>
              <p>Download it from the Tailscale card below for your PC, and from your phone's app store for Android.</p>
            </div>
          </li>
          <li className="step">
            <span className="step-num">2</span>
            <div>
              <h3>Sign in with the same account on both</h3>
              <p>Tailscale needs both devices signed into the same account so they can see each other.</p>
            </div>
          </li>
          <li className="step">
            <span className="step-num">3</span>
            <div>
              <h3>Turn off Use Tailscale DNS on your phone</h3>
              <p>In the Tailscale app on your phone, open its settings and disable <strong>Use Tailscale DNS</strong>.</p>
            </div>
          </li>
          <li className="step">
            <span className="step-num">4</span>
            <div>
              <h3>Find your PC's Tailscale IP</h3>
              <p>Open the Tailscale app on your PC. It shows this PC's own Tailscale IP address, something like 100.x.x.x. Copy it.</p>
            </div>
          </li>
          <li className="step">
            <span className="step-num">5</span>
            <div>
              <h3>Enter it in the ÆthelHook app</h3>
              <p>
                On your phone, open ÆthelHook, go to <strong>Settings</strong>, and
                paste the IP into the <strong>Tailscale IP</strong> field. Tap{' '}
                <strong>Save Settings</strong>.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  )
}
