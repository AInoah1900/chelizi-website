import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import FloatingContact from '@/components/FloatingContact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      {/* <Contact /> */}
      <FloatingContact />
    </main>
  )
}
