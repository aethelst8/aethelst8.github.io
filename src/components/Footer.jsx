import GithubIcon from './GithubIcon.jsx'

export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <div className="footer-copy">
          <p>Copyright © 2026 ÆthelSt8</p>
          <p>All rights reserved</p>
        </div>
        <div className="footer-links">
          <a className="icon-link" href="https://github.com/aethelst8/aethelhook">
            <GithubIcon size={16} />
            GitHub
          </a>
          <a href="https://github.com/aethelst8/aethelhook/blob/main/SECURITY.md">Security</a>
          <a href="https://github.com/aethelst8/aethelhook#readme">Docs</a>
        </div>
      </div>
    </footer>
  )
}
