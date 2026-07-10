import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Problem from './components/Problem.jsx'
import Features from './components/Features.jsx'
import Setup from './components/Setup.jsx'
import Download from './components/Download.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Features />
        <Setup />
        <Download />
      </main>
      <Footer />
    </>
  )
}

export default App
