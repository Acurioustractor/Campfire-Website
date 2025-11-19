import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, Tag, User } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'My Journey: From Struggle to Strength | Brodie Germaine',
  description: 'Brodie Germaine shares his personal journey as a Kalkadoon man from Mount Isa - from football scholarships to addiction, and finding healing through cultural reconnection to build CAMPFIRE.',
  openGraph: {
    title: 'My Journey: From Struggle to Strength',
    description: 'Brodie Germaine shares his personal story of cultural reconnection and building CAMPFIRE to support Indigenous youth in Mount Isa.',
    images: ['/images/brodie.jpg'],
  },
}

export default function BrodieStoryPage() {
  return (
    <>
      {/* Back link */}
      <div className="bg-white border-b">
        <div className="container-custom py-4">
          <Link
            href="/stories"
            className="inline-flex items-center text-gray-600 hover:text-sunset-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Stories
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Meta information */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Tag className="h-4 w-4" />
              <span>Elder Voices</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>November 13, 2024</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>Brodie Germaine</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-display font-bold text-earth-900 mb-8">
            My Journey: From Struggle to Strength
          </h1>

          {/* Featured Image */}
          <div className="mb-8 rounded-xl overflow-hidden">
            <Image
              src="/images/brodie.jpg"
              alt="Brodie Germaine"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>

          {/* Excerpt */}
          <div className="mb-8 p-6 bg-earth-50 rounded-xl border-l-4 border-sunset-600">
            <p className="text-xl text-gray-700 italic">
              I'm Brodie Germaine, a Kalkadoon man from Mount Isa with heritage connections to the Pitta Pitta and Wakka Wakka peoples. This is my story - from football scholarships to addiction, to finding healing through cultural reconnection, and now dedicating my life to supporting young people through CAMPFIRE.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              Growing up in Mount Isa, I learned early on what it meant to navigate between different worlds. My childhood was marked by the same struggles affecting so many young Indigenous people in our community - witnessing cycles of violence, substance abuse, and incarceration all around me.
            </p>

            <p>
              But I also had something that gave me hope: football.
            </p>

            <h2 className="font-display font-bold text-earth-900 mt-12 mb-4">The Promise of Sport</h2>

            <p>
              Football wasn't just a game to me - it was a pathway to possibility. I worked hard, stayed focused, and earned Queensland representation. When I received a rugby league scholarship to Ignatius Park College in Townsville, it felt like everything was coming together. This was my chance to make something of myself, to show what a young Kalkadoon man could achieve.
            </p>

            <p>
              I thought I had it all figured out.
            </p>

            <h2 className="font-display font-bold text-earth-900 mt-12 mb-4">The Fall</h2>

            <p>
              At 18, everything changed. I encountered drugs, and before I knew it, I'd lost my contract. The pathway that seemed so clear, the future that felt so certain - it all disappeared. I spiraled into addiction, watching the life I'd built slip away.
            </p>

            <p>
              Looking back now, I can see how disconnected I'd become from my culture, from my identity, from Country. I was chasing dreams through sport, but I'd lost touch with who I really was - a Kalkadoon man with deep roots in this land, with ancestors who'd survived and thrived here for thousands of years.
            </p>

            <p>
              I was lost. And I couldn't find my way back alone.
            </p>

            <h2 className="font-display font-bold text-earth-900 mt-12 mb-4">The Turning Point</h2>

            <p>
              The moment that changed everything happened at a men's camp facilitated by Ernie Dingo. We were sitting in a yarning circle, out on Country, and for the first time in my life, I shared my struggles publicly. I talked about the addiction, the shame, the feeling of being lost between worlds.
            </p>

            <p>
              Something profound happened in that circle. As I spoke my truth on Country, surrounded by other Indigenous men who understood, I felt something shift inside me. The land held me. The ancestors heard me. My brothers supported me.
            </p>

            <p>
              <strong>That's when I knew: something about Country, that spiritual feeling, really helps the mind, body, and soul.</strong>
            </p>

            <p>
              Cultural reconnection wasn't just healing for me - it was transformation. Getting back on Country, learning from Elders, understanding my place in an unbroken line stretching back thousands of years - this is what saved my life.
            </p>

            <h2 className="font-display font-bold text-earth-900 mt-12 mb-4">Finding My Mission</h2>

            <p>
              As I healed, I started to see my purpose clearly. I'd been given a second chance, and I knew what I needed to do with it: dedicate my life to supporting other young Indigenous people so they didn't have to walk the same painful path I did.
            </p>

            <p>
              I opened Brodie Germaine Fitness in Mount Isa - not just a gym, but a culturally safe space where young people could build physical strength while staying connected to their identity. I started working in child protection for our local Aboriginal medical services. I began facilitating cultural programs throughout the Gulf region.
            </p>

            <p>
              But I kept coming back to that moment on Country, in that yarning circle, when everything changed for me. I knew we needed something more comprehensive - something that brought together fitness, cultural immersion, mentorship, and community support.
            </p>

            <p>
              That's how CAMPFIRE was born.
            </p>

            <h2 className="font-display font-bold text-earth-900 mt-12 mb-4">Building CAMPFIRE</h2>

            <p>
              CAMPFIRE - Cultural Advancement and Mentoring Program For Indigenous Resilience and Empowerment - is everything I wish I'd had access to as a young person. It integrates four key elements:
            </p>

            <p>
              <strong>1. Camping on Country:</strong> Quarterly 3-day cultural immersion experiences led by Elders and Traditional Owners. We take young people away from modern distractions and bring them back to the land, to the stories, to the practices that ground us in who we are. There's no phone reception, no social media - just Country, culture, and connection.
            </p>

            <p>
              <strong>2. Fitness and Gym Sessions:</strong> Weekly structured sessions at my gym in Mount Isa, building physical strength, discipline, and confidence. But it's more than just working out - it's about creating a culturally safe space where young people can be themselves, where they're supported by Indigenous leadership, where they build positive relationships with mentors and peers.
            </p>

            <p>
              <strong>3. Personalized Mentorship:</strong> Weekly one-on-one support with Individual Support Plans tailored to each young person's needs. We advocate for them with schools, services, and the justice system. We provide crisis support and wraparound care. We help them set goals and track their progress. Because not one size fits all with our young people.
            </p>

            <p>
              <strong>4. Family and Community Connection:</strong> Monthly family activities and cultural events, because supporting young people means supporting their whole family system. We bring the community together for celebrations, cultural teachings, and mutual support.
            </p>

            <h2 className="font-display font-bold text-earth-900 mt-12 mb-4">What I've Learned</h2>

            <p>
              Through my own journey and now through CAMPFIRE, I've learned some crucial truths:
            </p>

            <p>
              <strong>Cultural connection is healing.</strong> When young people reconnect to Country, to language, to cultural practices, something shifts. They find their identity, their belonging, their strength. That spiritual feeling on Country really does help the mind, body, and soul.
            </p>

            <p>
              <strong>Young people need investment, not enforcement.</strong> We can't punish our way out of youth crime. We need to invest in programs that address the root causes - disconnection, trauma, lack of opportunity. We need culturally appropriate support that meets young people where they are.
            </p>

            <p>
              <strong>One size doesn't fit all.</strong> Every young person's journey is different. Many of our kids have experienced intergenerational trauma. They need individualized support that recognizes their unique capabilities and challenges, and helps them build pathways to positive futures.
            </p>

            <p>
              <strong>Community ownership matters.</strong> CAMPFIRE works because it's led by Indigenous people, guided by Elders, shaped by community members and families. This isn't an outside program imposed on our community - it's our program for our people.
            </p>

            <h2 className="font-display font-bold text-earth-900 mt-12 mb-4">Breaking the Cycle</h2>

            <p>
              I see myself in every young person who comes through CAMPFIRE. I see the potential, the strength, the resilience - but also the struggles, the disconnection, the systems working against them rather than for them.
            </p>

            <p>
              I wish I'd had a program like this when I was their age. I wish someone had told me earlier that my culture wasn't something to navigate away from, but something to ground myself in. I wish I'd understood sooner that getting back on Country, learning from Elders, and building genuine community connections were the pathways to healing, not just sporting success.
            </p>

            <p>
              But I can't change my past. What I can do is change the future for the young people in our community. I can create the pathways I needed. I can be the mentor I was looking for. I can build programs that address the whole person - physical, cultural, social, emotional, spiritual.
            </p>

            <h2 className="font-display font-bold text-earth-900 mt-12 mb-4">The Fire Keeps Burning</h2>

            <p>
              CAMPFIRE is funded through the Queensland Government's Youth Justice Kickstarter Grant for 18 months, from July 2025 to February 2027. But this work doesn't end with one funding cycle. This is about building something sustainable, something that becomes part of the fabric of our community, something that keeps burning long after the initial program concludes.
            </p>

            <p>
              Every week when I open the gym doors, when I take young people out on Country, when I sit with them one-on-one and help them navigate their challenges - I'm reminded why this work matters. I see young people reconnecting to who they are. I see them building strength - not just physical, but cultural, emotional, spiritual. I see them finding their place in an unbroken line stretching back thousands of years and forward to future generations.
            </p>

            <p>
              That yarning circle on Country changed my life. Now I'm creating spaces where young people can have their own transformative moments, where they can speak their truth and be held by Country, culture, and community.
            </p>

            <h2 className="font-display font-bold text-earth-900 mt-12 mb-4">Looking Forward</h2>

            <p>
              Mount Isa has always been home. The Kalkadoon, Pitta Pitta, and Wakka Wakka peoples have walked this land for thousands of years. Our culture is strong, our connection to Country is unbreakable, and our young people carry within them the resilience of countless generations.
            </p>

            <p>
              My journey from football scholarships to addiction to cultural healing to building CAMPFIRE has taught me that our greatest strength comes from our culture. When we're connected to Country, to Elders, to community, to the practices and knowledge passed down through generations - we're unstoppable.
            </p>

            <p>
              CAMPFIRE is my way of passing on what was given to me in that yarning circle: the gift of cultural reconnection, the healing power of Country, the strength that comes from community support, and the hope that transformation is always possible.
            </p>

            <p className="text-lg font-semibold mt-8">
              The fires keep burning. The ancestors watch over us. And our young people are finding their way home.
            </p>

            <div className="mt-12 p-8 bg-gradient-to-br from-earth-100 to-sunset-50 rounded-xl">
              <h3 className="font-display font-bold text-2xl text-earth-900 mb-4">
                Join Us
              </h3>
              <p className="text-gray-700 mb-6">
                If you know a young person who could benefit from CAMPFIRE, or if you want to support this work, I'd love to hear from you. Together, we can create the pathways our young people deserve.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/refer" className="btn-primary">
                  Refer a Young Person
                </Link>
                <Link href="/about" className="btn-outline">
                  Learn More About CAMPFIRE
                </Link>
                <Link href="/contact" className="btn-outline">
                  Get in Touch
                </Link>
              </div>
            </div>

            <p className="mt-8 text-sm text-gray-600 italic">
              - Brodie Germaine<br />
              Kalkadoon, Pitta Pitta, Wakka Wakka man<br />
              Founder and Director, CAMPFIRE
            </p>
          </div>

          {/* Share section */}
          <div className="mt-12 pt-8 border-t">
            <p className="text-gray-600 mb-4">Share Brodie's story:</p>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-earth-100 text-earth-900 rounded-lg hover:bg-earth-200 transition-colors">
                Facebook
              </button>
              <button className="px-4 py-2 bg-earth-100 text-earth-900 rounded-lg hover:bg-earth-200 transition-colors">
                Twitter
              </button>
              <button className="px-4 py-2 bg-earth-100 text-earth-900 rounded-lg hover:bg-earth-200 transition-colors">
                Email
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related stories or CTA */}
      <section className="section-padding bg-earth-50">
        <div className="container-custom text-center">
          <h2 className="font-display font-bold text-earth-900 mb-6">
            Read More Stories
          </h2>
          <Link
            href="/stories"
            className="btn-primary inline-flex items-center"
          >
            View All Stories
            <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
          </Link>
        </div>
      </section>
    </>
  )
}
