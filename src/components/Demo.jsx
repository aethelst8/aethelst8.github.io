export default function Demo() {
  return (
    <section id="demo">
      <div className="wrap">
        <h2>See it in action</h2>
        <p className="section-lead">A quick look at the phone app and the tray app.</p>
        <div className="demo-grid">
          <div className="demo-card">
            <h3>Phone dashboard</h3>
            <div className="media-frame">
              <img
                src="/media/mobile-app-dashboard.jpeg"
                alt="AethelHook Android app dashboard showing gateway status and toggles for Claude Code, Codex, OpenCode, Gemini, Copilot, and Devin CLI, plus approval counts"
              />
            </div>
            <p>The Dashboard tab: gateway status, a toggle per agent, and a running approval count.</p>
          </div>

          <div className="demo-card">
            <h3>Windows tray app</h3>
            <div className="media-frame media-frame--landscape">
              <iframe
                src="https://www.youtube.com/embed/mmWaJg2gP0k"
                title="AethelHook Windows tray app demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <p>Pairing a new device, gated behind Windows Hello, and the live approval feed.</p>
          </div>

          <div className="demo-card">
            <h3>Phone in action</h3>
            <div className="media-frame media-frame--portrait">
              <iframe
                src="https://www.youtube.com/embed/IMbNNZWiW_o"
                title="AethelHook Android app demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <p>Answering a real approval request, straight from the phone.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
