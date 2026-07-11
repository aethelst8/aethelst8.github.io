export default function Demo() {
  return (
    <section id="demo">
      <div className="wrap">
        <h2>See it in action</h2>
        <p className="section-lead">A quick look at the phone app and the PC tray app.</p>
        <div className="demo-grid">
          <div className="demo-card">
            <h3>Phone dashboard</h3>
            <div className="media-frame">
              <img
                src="/media/phone-dashboard.jpeg"
                alt="AethelHook Android app dashboard showing gateway status, Claude Code and Codex toggles, and approval counts"
              />
            </div>
            <p>The Dashboard tab: gateway status, per-IDE toggles, and a running approval count.</p>
          </div>

          <div className="demo-card">
            <h3>Tray app on PC</h3>
            <div className="media-frame">
              <video controls preload="none" src="/media/pc-tray-demo.mp4" />
            </div>
            <p>Launching the AethelHook tray app on Windows.</p>
          </div>

          <div className="demo-card demo-placeholder">
            <p>Phone demo recording coming soon.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
