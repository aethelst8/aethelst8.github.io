import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

export default function Privacy() {
  return (
    <>
      <Nav />
      <main>
        <article className="article">
          <p className="kicker">Legal</p>
          <h1>Privacy Policy</h1>
          <p className="article-lead">
            Last updated: July 13, 2026. This page exists for transparency, not
            because AethelHook collects much of anything. Here is exactly what
            happens to your data.
          </p>

          <div className="callout">
            <strong>The short version:</strong> AethelHook has no accounts, no
            cookies, no analytics, and no server that AethelSt8 operates. Your
            phone and your PC talk directly to each other. Nothing about how you
            use the app or the website is collected by, or ever reaches, the
            developer.
          </div>

          <h2>Who this policy covers</h2>
          <p>
            AethelHook is an individual, open source project by AethelSt8 (also
            written aethelst8 or aethelstate), based in South Africa. There is no
            company, no registered business, and no team behind it, just one
            developer. "We," "us," and "the developer" in this policy all refer to
            that one person. "The Service" means the AethelHook Windows service and
            tray app, the AethelHook Android app, and the aethelst8.com website.
          </p>

          <h2>What we collect</h2>
          <p>
            Nothing, in the sense this question usually means. AethelHook does not
            have user accounts, does not use cookies or any tracking or analytics
            technology, and does not run a server that receives data from your
            phone or PC. There is no sign-up, no email address collected, no
            usage statistics sent anywhere.
          </p>
          <p>
            The app and service do handle a small amount of data, but it never
            leaves your own devices:
          </p>
          <ul>
            <li>
              <strong>A device pairing token and your PC's local network address.</strong>{' '}
              When you pair your phone with your PC, the AethelHook service
              generates a token and stores it, along with your PC's LAN and (if you
              use it) Tailscale IP address, in a file on your own PC. Your phone
              stores its copy of that same token locally too. Neither ever gets
              sent to AethelSt8. It only ever travels between your phone and your
              own PC.
            </li>
            <li>
              <strong>Camera access, for QR scanning only.</strong> The Android app
              asks for camera permission to scan the pairing QR code shown by your
              PC. The camera feed is read locally to decode the QR code and is
              never saved, stored, or transmitted anywhere, by the app or by us.
            </li>
            <li>
              <strong>Biometric access, for unlocking masked values only.</strong>{' '}
              Your LAN IP, Tailscale IP, and API token are masked in the app by
              default. Your fingerprint, face, PIN, or password, verified entirely
              by Android's own biometric system, unmasks them on your screen. This
              never touches a server anywhere, including ours.
            </li>
          </ul>

          <h2>How the connection actually works</h2>
          <p>
            Your phone and your AethelHook service connect directly to each other,
            over your own Wi-Fi network or over Tailscale if you have set that up.
            There is no cloud relay and no AethelSt8-operated server sitting in the
            middle of that connection at any point. The connection itself is
            encrypted (TLS, with the phone pinning your PC's specific certificate
            fingerprint from the QR code you scanned), so even on a shared network,
            nothing readable passes between your devices to anyone else.
          </p>

          <h2>Third-party services</h2>
          <p>
            AethelHook relies on a couple of services it does not control:
          </p>
          <ul>
            <li>
              <strong>GitHub Pages</strong> hosts this website, and GitHub also
              hosts the installer and app downloads as release assets. Like any
              web host, GitHub's own infrastructure may log basic access
              information (such as IP addresses) as a normal part of serving
              pages and files. That logging is GitHub's, governed by{' '}
              <a
                href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub's own privacy statement
              </a>
              , not something AethelSt8 collects or can see.
            </li>
            <li>
              <strong>Tailscale</strong> is entirely optional, and only relevant if
              you choose to install it to keep your phone and PC connected while
              apart. If you use it, that is your own Tailscale account, governed by{' '}
              <a
                href="https://tailscale.com/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tailscale's own privacy policy
              </a>
              . AethelSt8 has no visibility into it at all.
            </li>
          </ul>

          <h2>Children's privacy</h2>
          <p>
            AethelHook is not directed at children, and since it does not collect
            personal information from anyone, there is nothing to knowingly or
            unknowingly collect from a child either.
          </p>

          <h2>Your control over your data</h2>
          <p>
            Since everything AethelHook handles lives on your own devices, you are
            already in full control of it, there is nothing to request from us:
          </p>
          <ul>
            <li>
              Revoke a paired phone at any time from the tray app's device list,
              which immediately invalidates that device's token.
            </li>
            <li>
              Uninstalling the Android app or the Windows service removes
              everything each one stored.
            </li>
            <li>
              The full source code is public on{' '}
              <a href="https://github.com/aethelst8/aethelhook">GitHub</a>, so you
              can verify any of this yourself rather than take the policy's word
              for it.
            </li>
          </ul>

          <h2>Security</h2>
          <p>
            The phone-to-PC connection uses TLS with certificate pinning, not a
            plain or shared connection. Sensitive values (your API token, pinned
            certificate fingerprint) are stored encrypted on your phone, not in
            plain text. That said, no software is perfectly secure, and this
            policy is not a guarantee against every possible flaw, only a
            description of what is actually implemented today.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            If AethelHook's practices change, for example if a future version adds
            optional crash reporting or analytics, this page will be updated and
            the "Last updated" date at the top will change. Since there are no
            accounts or email addresses on file, there is no mailing list to notify,
            checking back here is the only way to know.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy or how AethelHook handles data can go to{' '}
            <a href="mailto:aethelst8@gmail.com">aethelst8@gmail.com</a>.
          </p>

          <p>
            <a href="/">Back to the homepage</a>.
          </p>
        </article>
      </main>
      <Footer />
    </>
  )
}
