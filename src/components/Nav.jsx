import GithubIcon from './GithubIcon.jsx'

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a className="brand" href="#top">
          <img src="/nav-icon.png" alt="ÆthelHook logo" />
          ÆthelHook
        </a>
        <nav className="links">
          <a href="#features">Features</a>
          <a href="#demo">Demo</a>
          <a href="#setup">Setup</a>
          <a href="#connect">Connect</a>
          <a href="#troubleshooting">Help</a>
          <a href="#download">Download</a>
          <a
            className="icon-link"
            href="https://github.com/aethelst8/aethelhook"
            aria-label="ÆthelHook on GitHub"
          >
            <GithubIcon size={20} />
            GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}
