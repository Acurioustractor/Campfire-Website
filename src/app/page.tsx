import Hero from '@/components/Hero'
import ProgramSnapshot from '@/components/ProgramSnapshot'
import ImpactStats from '@/components/ImpactStats'
import LatestStories from '@/components/LatestStories'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <ProgramSnapshot />
      <ImpactStats />
      <LatestStories />
      <CTASection />
    </>
  )
}
