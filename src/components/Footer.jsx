import GithubIcon from './GithubIcon.jsx'
import RedditIcon from './RedditIcon.jsx'
import YoutubeIcon from './YoutubeIcon.jsx'
import ProductHuntIcon from './ProductHuntIcon.jsx'

export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <div className="footer-copy">
          <p>2026 ÆthelSt8</p>
          <p className="footer-aka">Also written AethelHook, aethelst8, or aethelstate.</p>
        </div>
        <div className="footer-links">
          <a className="icon-link" href="https://github.com/aethelst8/aethelhook">
            <GithubIcon size={16} />
            GitHub
          </a>
          <a href="https://github.com/aethelst8/aethelhook/blob/main/SECURITY.md">Security</a>
          <a href="https://github.com/aethelst8/aethelhook#readme">Docs</a>
          <a href="/guides/">Guides</a>
          <a href="/privacy/">Privacy</a>
          <a
            className="icon-link"
            href="https://www.reddit.com/user/aethelst8/"
            aria-label="aethelst8 on Reddit"
          >
            <RedditIcon size={16} />
          </a>
          <a
            className="icon-link"
            href="http://www.youtube.com/@aethelst8"
            aria-label="aethelst8 on YouTube"
          >
            <YoutubeIcon size={16} />
          </a>
          <a
            className="icon-link"
            href="https://www.producthunt.com/@aethelst8"
            aria-label="aethelst8 on Product Hunt"
          >
            <ProductHuntIcon size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
