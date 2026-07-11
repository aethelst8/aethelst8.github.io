import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

export default function GuideHooks() {
  return (
    <>
      <Nav />
      <main>
        <article className="article">
          <p className="kicker">Guide</p>
          <h1>Claude Code hooks explained</h1>
          <p className="article-lead">
            Hooks are how you attach deterministic rules to an AI coding agent
            instead of relying on the model's own judgment alone. Here is what the
            main hook events actually receive and return, and how they add up to a
            full approval gate.
          </p>

          <h2>What a hook is</h2>
          <p>
            A Claude Code hook is a shell command you register in{' '}
            <code>settings.json</code> (project-level or the global{' '}
            <code>~/.claude/settings.json</code>) that Claude Code runs automatically
            at specific points in its own lifecycle. Claude Code writes a JSON
            payload to the hook's stdin describing what is happening, waits for the
            hook to finish, and reads a JSON response (or exit code) back to decide
            what to do next. The full field-by-field schema lives in Anthropic's own{' '}
            <a
              href="https://code.claude.com/docs/en/hooks"
              target="_blank"
              rel="noopener noreferrer"
            >
              hooks reference
            </a>{' '}
            and{' '}
            <a
              href="https://code.claude.com/docs/en/hooks-guide"
              target="_blank"
              rel="noopener noreferrer"
            >
              hooks guide
            </a>
            , this page focuses on the events that matter for building a safety or
            approval layer.
          </p>

          <h2>PreToolUse: the actual gate</h2>
          <p>
            <code>PreToolUse</code> fires before a tool call executes, and it is the
            only hook that can stop one. Its stdin payload includes{' '}
            <code>tool_name</code> and <code>tool_input</code>, the exact arguments
            the agent is about to run. Instead of a flat allow/deny, its decision
            lives inside a <code>hookSpecificOutput</code> object and supports four
            outcomes: <code>allow</code>, <code>deny</code>, <code>ask</code>, or{' '}
            <code>defer</code>. It can also return <code>updatedInput</code> to
            rewrite the tool's arguments before they run, not just approve or block
            them outright. When more than one <code>PreToolUse</code> hook matches
            the same call, precedence runs deny &gt; defer &gt; ask &gt; allow, the
            most cautious answer wins.
          </p>

          <h2>PostToolUse: after the fact</h2>
          <p>
            <code>PostToolUse</code> runs immediately after a tool has already
            executed successfully. Its payload includes both <code>tool_input</code>{' '}
            (what was sent) and <code>tool_response</code> (what came back), which
            makes it the right place for logging, auditing, or triggering a
            notification, but it cannot undo a call that already ran. If you need to
            stop something, it has to be <code>PreToolUse</code>.
          </p>

          <h2>Stop, and a real gotcha</h2>
          <p>
            <code>Stop</code> fires when an interactive session ends, useful for a
            final summary or notification. The gotcha worth knowing before you build
            on it: <code>Stop</code> does not fire for headless runs (<code>claude -p</code>).
            If you need to detect completion of a headless run, watch the{' '}
            <code>"type": "result"</code> line in{' '}
            <code>--output-format stream-json</code> output instead of assuming{' '}
            <code>Stop</code> will fire.
          </p>

          <h2>Other events worth knowing</h2>
          <ul>
            <li>
              <strong>SessionStart</strong> fires when a session begins, a common
              place to inject project context or run a dependency/security check.
            </li>
            <li>
              <strong>UserPromptSubmit</strong> fires when you submit a prompt,
              before Claude processes it.
            </li>
            <li>
              <strong>Notification</strong> fires on Claude Code's own built-in
              notifications, separate from anything a <code>PreToolUse</code> hook
              triggers itself.
            </li>
          </ul>

          <h2>A minimal PreToolUse gate, conceptually</h2>
          <p>
            Stripped to its core, a hook that blocks on a dangerous command looks
            like this:
          </p>
          <pre>
            <code>{`# .claude/settings.json (excerpt)
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [{ "type": "command", "command": "/path/to/check-command.ps1" }]
      }
    ]
  }
}`}</code>
          </pre>
          <p>The script reads the JSON payload from stdin, inspects <code>tool_input.command</code>, and writes a decision back:</p>
          <pre>
            <code>{`{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "ask",
    "permissionDecisionReason": "Destructive command, confirm before running."
  }
}`}</code>
          </pre>
          <p>
            From there it is a short step to a full remote approval system: instead
            of just asking locally, the hook can send that same payload to another
            device, block until a human responds, and return whatever decision comes
            back.
          </p>

          <h2>Two things that bite people building on this</h2>
          <ul>
            <li>
              A hook script reading stdin should decode it as UTF-8 explicitly.
              Reading raw console input with a platform's default encoding will
              silently corrupt any non-ASCII text (em dashes, curly quotes, accented
              characters) in tool arguments or file contents.
            </li>
            <li>
              A hook's own internal timeouts need to stay well under the timeout
              declared for it in the hooks config. If the script's own network call
              or wait logic can take longer than the declared budget, the platform
              kills it before it finishes, even if the underlying action (like
              sending a notification) would have succeeded a second later.
            </li>
          </ul>

          <h2>Where ÆthelHook fits</h2>
          <p>
            ÆthelHook is a working example of exactly this pattern: a{' '}
            <code>PreToolUse</code> hook that forwards the tool call to a phone over
            an encrypted connection, blocks, and returns whatever decision comes
            back, for both Claude Code and Codex.
          </p>
          <p>
            <a href="/">See how it works and download it</a>.
          </p>

          <div className="related">
            <h2>Related guides</h2>
            <ul>
              <li>
                <a href="/guides/is-it-safe-to-let-claude-code-run-unattended/">
                  Is it safe to let Claude Code run unattended?
                </a>
              </li>
              <li>
                <a href="/guides/approve-claude-code-and-codex-from-your-phone/">
                  How to approve Claude Code and Codex from your phone
                </a>
              </li>
            </ul>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
