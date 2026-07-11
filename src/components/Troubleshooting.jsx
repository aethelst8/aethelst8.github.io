const COMMANDS = [
  {
    label: 'Check if it is running',
    cmd: 'Get-Service AethelHook',
    body: 'Use this to see if the service is Running or Stopped.',
  },
  {
    label: 'Start it',
    cmd: 'Start-Service AethelHook',
    body: 'Use this if the service did not start on its own.',
  },
  {
    label: 'Stop it',
    cmd: 'Stop-Service AethelHook',
    body: 'Use this to turn the gateway off.',
  },
  {
    label: 'Restart it',
    cmd: 'Restart-Service AethelHook',
    body: 'Use this if the service is running but not responding.',
  },
]

export default function Troubleshooting() {
  return (
    <section id="troubleshooting">
      <div className="wrap">
        <h2>Troubleshooting</h2>
        <p className="section-lead">
          Four PowerShell commands to check and control the AethelHook service.
        </p>
        <div className="cmd-grid">
          {COMMANDS.map((c) => (
            <div className="cmd-card" key={c.cmd}>
              <h3>{c.label}</h3>
              <pre>
                <code>{c.cmd}</code>
              </pre>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
