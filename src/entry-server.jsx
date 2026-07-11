import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import GuidesIndex from './pages/GuidesIndex.jsx'
import GuideSafety from './pages/GuideSafety.jsx'
import GuideApprove from './pages/GuideApprove.jsx'
import GuideHooks from './pages/GuideHooks.jsx'

const PAGES = {
  home: App,
  'guides-index': GuidesIndex,
  'guide-safety': GuideSafety,
  'guide-approve': GuideApprove,
  'guide-hooks': GuideHooks,
}

export function render(pageId = 'home') {
  const Component = PAGES[pageId]
  if (!Component) {
    throw new Error(`Unknown pageId "${pageId}" passed to render()`)
  }
  return renderToString(<Component />)
}
