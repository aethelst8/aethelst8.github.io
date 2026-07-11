import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'

export function mount(Component) {
  const rootEl = document.getElementById('root')
  const app = (
    <StrictMode>
      <Component />
    </StrictMode>
  )

  if (rootEl.hasChildNodes()) {
    hydrateRoot(rootEl, app)
  } else {
    createRoot(rootEl).render(app)
  }
}
