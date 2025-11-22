import Hero from './components/Hero'
import Features from './components/Features'
import Console from './components/Console'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-blue-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
      <main className="relative">
        <Hero />
        <Features />
        <Console />
      </main>
    </div>
  )
}

export default App
