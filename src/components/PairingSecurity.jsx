export default function PairingSecurity() {
  return (
    <section id="pairing-security">
      <div className="wrap">
        <h2>Windows Hello guards every new pairing</h2>
        <p className="section-lead">
          Only one phone can hold the live connection at a time, and adding a new one
          takes more than just scanning a QR code.
        </p>
        <div className="demo-grid">
          <div className="demo-card">
            <div className="media-frame">
              <img
                src="/media/windows-hello-pairing.png"
                alt="Windows Security dialog reading 'Making sure it's you, authorize a new device to connect to AethelHook' with a PIN entry field"
              />
            </div>
            <p>
              Clicking <strong>Pair New Device</strong> in the tray app now opens this
              Windows Hello prompt before the QR code ever appears. Confirm with your
              PIN, fingerprint, or face, the same check Windows already uses to unlock
              your PC.
            </p>
          </div>
        </div>
        <div className="warn warn-info requirements-note">
          <strong>Only one phone is ever active.</strong> Pairing a new device makes it
          the sole connection, whichever phone was previously connected gets a plain
          notification that its connection ended, and needs to go through{' '}
          <strong>Pair New Device</strong> again, with Windows Hello, to reconnect. If
          Windows Hello is not set up on your PC at all, pairing still works, just
          without this extra confirmation step.
        </div>
      </div>
    </section>
  )
}
