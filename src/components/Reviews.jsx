import YoutubeIcon from './YoutubeIcon.jsx'
import RedditIcon from './RedditIcon.jsx'

const reviews = [
  {
    quote:
      "That QR code pairing with Windows Hello is a nice touch, actually makes the remote access feel secure instead of just open to anyone on the network.",
    source: 'YouTube comment',
    icon: YoutubeIcon,
  },
  {
    quote:
      "The Windows Hello and WinRT part sounds like it was almost harder than the original idea. Those are the kinds of implementation details people never see, but usually end up taking 80% of the development time. Respect for sticking with it.",
    source: 'Reddit comment',
    icon: RedditIcon,
  },
]

export default function Reviews() {
  return (
    <section id="reviews">
      <div className="wrap">
        <h2>What people are saying</h2>
        <p className="section-lead">Real feedback from people trying AethelHook out.</p>
        <div className="review-grid">
          {reviews.map((r, i) => (
            <figure className="review-card" key={i}>
              <blockquote>&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption>
                <r.icon size={16} />
                <span>{r.source}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
