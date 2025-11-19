import type { Metadata } from 'next'
import PhotoGallery from '@/components/PhotoGallery'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gallery | CAMPFIRE',
  description: 'Photo gallery showcasing CAMPFIRE program activities, cultural camps, fitness sessions, and community connections in Mount Isa.',
}

export default function GalleryPage() {
  const galleryImages = [
    {
      src: '/images/Gallery/20250410-IMG_4167.jpg',
      alt: 'CAMPFIRE program activities',
      caption: 'Youth fitness and mentoring'
    },
    {
      src: '/images/Gallery/IMG_2705.jpg',
      alt: 'Cultural camp on country',
      caption: 'Cultural connection activities'
    },
    {
      src: '/images/Gallery/Confit_Mount_Isa_Day_1_Morning (17 of 64).jpg',
      alt: 'Elder teachings',
      caption: 'Elder-led cultural teachings'
    },
    {
      src: '/images/Gallery/IMG_0489.jpg',
      alt: 'Group activities',
      caption: 'Building community connections'
    },
    {
      src: '/images/Gallery/20250710-IMG_8667 (1).jpg',
      alt: 'Mentoring session',
      caption: '1-on-1 youth support'
    },
    {
      src: '/images/Gallery/IMG_2818.jpg',
      alt: 'Family engagement',
      caption: 'Monthly family activities'
    },
    {
      src: '/images/Gallery/20250410-IMG_4246.jpg',
      alt: 'Gym training session',
      caption: 'Weekly fitness sessions'
    },
    {
      src: '/images/Gallery/IMG_2828.jpg',
      alt: 'Cultural camp experience',
      caption: 'Quarterly cultural camps'
    },
    {
      src: '/images/Gallery/20250711-IMG_8846.jpg',
      alt: 'Youth mentoring',
      caption: 'Intensive mentoring support'
    },
    {
      src: '/images/Gallery/IMG_0363.jpg',
      alt: 'Community gathering',
      caption: 'Family and community events'
    },
    {
      src: '/images/Gallery/IMG_2513.jpg',
      alt: 'Program activities',
      caption: 'Pathways and education support'
    },
    {
      src: '/images/Gallery/IMG_0053.jpg',
      alt: 'Community connection',
      caption: 'Community connection activities'
    },
    {
      src: '/images/Gallery/IMG_0900.jpg',
      alt: 'Program launch',
      caption: 'CAMPFIRE program activities'
    },
    {
      src: '/images/Gallery/IMG_2652.jpg',
      alt: 'Cultural camp',
      caption: 'On-country cultural experiences'
    },
    {
      src: '/images/Gallery/Confit_Mount_Isa_Day_1_Morning (31 of 64).jpg',
      alt: 'Community gathering',
      caption: 'Community and Elder gatherings'
    },
    {
      src: '/images/Gallery/IMG_4557.jpg',
      alt: 'Youth achievements',
      caption: 'Celebrating youth milestones'
    },
    {
      src: '/images/Gallery/20250409-IMG_3818.jpg',
      alt: 'CAMPFIRE activities',
      caption: 'Program activities and engagement'
    },
    {
      src: '/images/Gallery/20250409-IMG_3941.jpg',
      alt: 'Youth participation',
      caption: 'Active youth participation'
    },
    {
      src: '/images/Gallery/20250409-IMG_4128.jpg',
      alt: 'Cultural activities',
      caption: 'Cultural learning and connection'
    },
    {
      src: '/images/Gallery/20250410-IMG_4270.jpg',
      alt: 'Community events',
      caption: 'Community celebration events'
    },
    {
      src: '/images/Gallery/20250410-IMG_4319.jpg',
      alt: 'Youth engagement',
      caption: 'Youth engagement activities'
    },
    {
      src: '/images/Gallery/20250410-IMG_4544.jpg',
      alt: 'Program activities',
      caption: 'CAMPFIRE program moments'
    },
    {
      src: '/images/Gallery/20250710-IMG_8600.jpg',
      alt: 'Youth activities',
      caption: 'Youth program activities'
    },
    {
      src: '/images/Gallery/Confit_Mount_Isa_Day_1_Morning (59 of 64) (1).jpg',
      alt: 'Mount Isa community',
      caption: 'Mount Isa community engagement'
    },
    {
      src: '/images/Gallery/IMG_0293.jpg',
      alt: 'Cultural connection',
      caption: 'Cultural connection activities'
    },
    {
      src: '/images/Gallery/IMG_0332.jpg',
      alt: 'Youth support',
      caption: 'Supporting young people'
    },
    {
      src: '/images/Gallery/IMG_0359.jpg',
      alt: 'Community activities',
      caption: 'Community engagement activities'
    },
    {
      src: '/images/Gallery/IMG_0986.jpg',
      alt: 'Program moments',
      caption: 'CAMPFIRE program moments'
    },
    {
      src: '/images/Gallery/IMG_1371.jpg',
      alt: 'Youth mentoring',
      caption: 'Youth mentoring and support'
    },
    {
      src: '/images/Gallery/IMG_2468.jpg',
      alt: 'Cultural experiences',
      caption: 'Cultural learning experiences'
    },
    {
      src: '/images/Gallery/IMG_2512.jpg',
      alt: 'Community connection',
      caption: 'Building community connections'
    },
    {
      src: '/images/Gallery/IMG_2514.jpg',
      alt: 'Youth engagement',
      caption: 'Youth engagement and activities'
    },
    {
      src: '/images/Gallery/IMG_2516.jpg',
      alt: 'Program activities',
      caption: 'Program activities and events'
    },
    {
      src: '/images/Gallery/IMG_2667.jpg',
      alt: 'Cultural camp',
      caption: 'On-country cultural camps'
    },
    {
      src: '/images/Gallery/IMG_2718.jpg',
      alt: 'Youth participation',
      caption: 'Active youth participation'
    },
    {
      src: '/images/Gallery/IMG_2757.jpg',
      alt: 'Community events',
      caption: 'Community and family events'
    },
    {
      src: '/images/Gallery/IMG_2852.jpg',
      alt: 'Program support',
      caption: 'Program support and activities'
    },
    {
      src: '/images/Gallery/IMG_2857.jpg',
      alt: 'Youth connection',
      caption: 'Youth connection and belonging'
    },
    {
      src: '/images/Gallery/IMG_3611.jpg',
      alt: 'CAMPFIRE moments',
      caption: 'CAMPFIRE program moments'
    },
    {
      src: '/images/Gallery/IMG_3774-2.jpg',
      alt: 'Cultural activities',
      caption: 'Cultural activities and learning'
    },
    {
      src: '/images/Gallery/IMG_3939.jpg',
      alt: 'Youth activities',
      caption: 'Youth activities and engagement'
    },
    {
      src: '/images/Gallery/IMG_4558.jpg',
      alt: 'Community gathering',
      caption: 'Community gathering and connection'
    },
    {
      src: '/images/Gallery/IMG_4632.jpg',
      alt: 'Program engagement',
      caption: 'Program engagement activities'
    },
    {
      src: '/images/Gallery/IMG_7407.jpg',
      alt: 'CAMPFIRE community',
      caption: 'CAMPFIRE community moments'
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-earth-900 to-sunset-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold mb-6">
              Photo Gallery
            </h1>
            <p className="text-xl md:text-2xl text-earth-100">
              Moments from CAMPFIRE - celebrating culture, connection, and community in Mount Isa.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display font-bold text-earth-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              See CAMPFIRE in action - from gym sessions and cultural camps to family gatherings and youth achievements.
            </p>
          </div>

          <PhotoGallery
            columns={3}
            images={galleryImages}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-sunset-600 to-earth-700 text-white">
        <div className="container-custom text-center">
          <h2 className="font-display font-bold mb-6">
            Join the CAMPFIRE Community
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Want to be part of our story? Refer a young person or get in touch to learn more about CAMPFIRE.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/refer" className="btn-primary bg-white text-earth-900 hover:bg-gray-100">
              Refer a Young Person
            </Link>
            <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-earth-900">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
