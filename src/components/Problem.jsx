const HIGHLIGHTS = [
  {
    title: 'Walk away and stay in control',
    body: "Kick off a task, then actually leave. Step out of the office, run to the store, grab coffee. As long as your phone has a signal, over Tailscale or plain mobile data, you are still in the loop. Need to approve a command? You get a notification. Curious if the agent finished? You get a notification for that too.",
  },
  {
    title: 'Talk to your agent from your pocket',
    body: "Session Access lets you send a brand new prompt straight from your phone, not just answer approval requests. Forgot to ask it to also update the docs? Tell it from the checkout line. Need a quick fix while you are out? Prompt it right there and let your PC pick it up and get to work.",
  },
  {
    title: 'Built for multitaskers',
    body: "Deep in three other windows and do not want to alt-tab back to your IDE just to click Allow? Let the notification on your phone handle it instead. Less context switching, less friction, more time spent actually working.",
  },
]

export default function Problem() {
  return (
    <section className="problem">
      <div className="wrap">
        <p className="problem-lead">
          AI coding agents can execute shell commands, overwrite files, and install
          packages on their own. Most IDEs show a quick allow or deny popup on the
          same screen you are already working in, which is easy to click through on
          autopilot. <strong>ÆthelHook forces that decision onto a second device</strong>,
          so approving something dangerous takes a deliberate action, not a reflex.
        </p>
        <p className="problem-lead">
          But ÆthelHook is not only about safety. It is about freedom to step away
          from your desk without stepping away from your work.
        </p>
        <div className="highlight-grid">
          {HIGHLIGHTS.map((h) => (
            <div className="highlight" key={h.title}>
              <h3>{h.title}</h3>
              <p>{h.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
