import YoutubeIcon from './YoutubeIcon.jsx'

const reviews = [
  {
    quote:
      "That QR code pairing with Windows Hello is a nice touch, actually makes the remote access feel secure instead of just open to anyone on the network.",
    source: 'YouTube comment',
    icon: YoutubeIcon,
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
