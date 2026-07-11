import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '../dist')
const ssrEntry = path.resolve(__dirname, '../dist-ssr/entry-server.js')

const { render } = await import(`file://${ssrEntry}`)

const TARGETS = [
  { html: 'index.html', pageId: 'home' },
  { html: 'guides/index.html', pageId: 'guides-index' },
  { html: 'guides/is-it-safe-to-let-claude-code-run-unattended/index.html', pageId: 'guide-safety' },
  { html: 'guides/approve-claude-code-and-codex-from-your-phone/index.html', pageId: 'guide-approve' },
  { html: 'guides/claude-code-hooks-explained/index.html', pageId: 'guide-hooks' },
]

for (const { html, pageId } of TARGETS) {
  const filePath = path.join(distDir, html)
  const appHtml = render(pageId)
  const template = readFileSync(filePath, 'utf-8')
  const finalHtml = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`,
  )

  if (finalHtml === template) {
    throw new Error(`Prerender did not find <div id="root"></div> in ${filePath} - aborting.`)
  }

  writeFileSync(filePath, finalHtml)
  console.log(`Prerendered ${appHtml.length} chars into ${html}`)
}
