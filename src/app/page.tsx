import Hero from '@/components/Hero'
import ProgramSnapshot from '@/components/ProgramSnapshot'
import ImpactStats from '@/components/ImpactStats'
import LatestStories from '@/components/LatestStories'
import CTASection from '@/components/CTASection'
import PhotoGallery from '@/components/PhotoGallery'

export default function Home() {
  return (
    <>
      <Hero />
      <ProgramSnapshot />
      <ImpactStats />

      {/* Program in Action Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display font-bold text-earth-900 mb-4">
              CAMPFIRE in Action
            </h2>
            <p className="text-xl text-gray-600">
              See our program come to life through fitness, culture, and community connection.
            </p>
          </div>
          <PhotoGallery
            columns={3}
            images={[
              {
                src: '/images/Gallery/20250410-IMG_4167.jpg',
                alt: 'Youth at gym session',
                caption: 'Weekly fitness and mentoring'
              },
              {
                src: '/images/Gallery/IMG_2705.jpg',
                alt: 'Cultural camp on country',
                caption: 'Quarterly cultural camps'
              },
              {
                src: '/images/Gallery/Confit_Mount_Isa_Day_1_Morning (17 of 64).jpg',
                alt: 'Elder sharing cultural knowledge',
                caption: 'Elder-led teachings'
              },
              {
                src: '/images/Gallery/IMG_0489.jpg',
                alt: 'Group activity',
                caption: 'Building community connections'
              },
              {
                src: '/images/Gallery/20250710-IMG_8667 (1).jpg',
                alt: 'Brodie mentoring youth',
                caption: '1-on-1 support'
              },
              {
                src: '/images/Gallery/IMG_2818.jpg',
                alt: 'Family engagement event',
                caption: 'Monthly family activities'
              },
            ]}
          />
        </div>
      </section>

      <LatestStories />
      <CTASection />
    </>
  )
}
