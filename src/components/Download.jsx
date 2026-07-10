export default function Download() {
  return (
    <section id="download">
      <div className="wrap">
        <h2>Download</h2>
        <p className="section-lead">Both installs are free, and the full source is public on GitHub.</p>
        <div className="download-grid">
          <div className="dl-card">
            <h3>Windows</h3>
            <p className="dl-sub">Installs the background service and the tray app.</p>
            <a
              className="btn btn-primary"
              href="https://github.com/aethelst8/aethelhook/releases/latest/download/AethelHook-Setup.exe"
            >
              Download for Windows
            </a>
            <div className="warn">
              <strong>You will likely see a SmartScreen warning.</strong> This installer
              is not code signed yet, since the usual free signing programs require a
              longer release history than this project has so far. Click
              <strong> More info</strong>, then <strong>Run anyway</strong>. The full
              source is public, so you can check exactly what it does first.
            </div>
          </div>

          <div className="dl-card">
            <h3>Android</h3>
            <p className="dl-sub">Sideloaded APK, not on the Play Store yet.</p>
            <a
              className="btn btn-primary"
              href="https://github.com/aethelst8/aethelhook/releases/latest/download/app-release.apk"
            >
              Download for Android
            </a>
            <div className="warn">
              <strong>Android will warn about an unknown source.</strong> That is
              expected for an app that is not on the Play Store yet. Allow the
              install to continue, then open the app and scan the pairing QR code
              shown on your PC.
            </div>
          </div>

          <div className="dl-card">
            <h3>Tailscale</h3>
            <p className="dl-sub">Optional, keeps approvals working over mobile data.</p>
            <a className="btn btn-secondary" href="https://tailscale.com/download">
              Download Tailscale
            </a>
            <div className="warn warn-info">
              Tailscale connects your phone and PC directly, even when they are not
              on the same Wi-Fi network. Install it on both devices if you want
              approvals to keep working while you are out with your phone on mobile
              data. Not required if your phone and PC always share the same network.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
