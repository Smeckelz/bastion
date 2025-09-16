import Hero from './components/Hero'
import Features from './components/Features'
import Preview from './components/Preview'
import Footer from './components/Footer'

export const metadata = {
  title: 'Chronix',
  description: 'Chronix — Bastion tracking, world codex, and session recaps',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-700">
      <main className="max-w-7xl mx-auto px-6 lg:px-8">
        <Hero />
        <Features />
        <Preview />
      </main>
      <Footer />
    </div>
  )
}
