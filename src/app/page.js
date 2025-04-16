// src/app/page.js
import TopBanner from '../components/TopBanner'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopBanner />
      <Navbar />
      <Hero />
    </div>
  )
}
