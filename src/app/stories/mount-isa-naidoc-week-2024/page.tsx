import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, Tag, User } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Community Comes Together: Mount Isa NAIDOC Week Celebrations | CAMPFIRE Stories',
  description: 'Every year, the Mount Isa community gathers to celebrate NAIDOC Week with a powerful march and community feed. This year, we spoke with Elders, youth workers, and community members about what NAIDOC means to them and how we\'re supporting the next generation.',
  openGraph: {
    title: 'Community Comes Together: Mount Isa NAIDOC Week Celebrations',
    description: 'Every year, the Mount Isa community gathers to celebrate NAIDOC Week with a powerful march and community feed.',
    images: ['/images/Gallery/IMG_0900.jpg'],
  },
}

export default function NAIDOCStoryPage() {
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
              <span>News</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>November 13, 2024</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>CAMPFIRE Team</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-display font-bold text-earth-900 mb-8">
            Community Comes Together: Mount Isa NAIDOC Week Celebrations
          </h1>

          {/* Featured Image */}
          <div className="mb-8 rounded-xl overflow-hidden">
            <img
              src="/images/Gallery/IMG_0900.jpg"
              alt="NAIDOC Week celebrations in Mount Isa"
              className="w-full h-auto"
            />
          </div>

          {/* Excerpt */}
          <div className="mb-8 p-6 bg-earth-50 rounded-xl border-l-4 border-sunset-600">
            <p className="text-xl text-gray-700 italic">
              Every year, the Mount Isa community gathers to celebrate NAIDOC Week with a powerful march and community feed. This year, we spoke with Elders, youth workers, and community members about what NAIDOC means to them and how we're supporting the next generation.
            </p>
          </div>

          {/* Video Embed */}
          <div className="mb-8 aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://share.descript.com/embed/URD36dAzP3Z"
              className="w-full h-full"
              allowFullScreen
              title="Mount Isa NAIDOC March Interviews"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              <strong>Every year in Mount Isa, something special happens.</strong> The community comes together at Outback at Isa to celebrate NAIDOC Week - a time to honor Aboriginal and Torres Strait Islander history, culture, and achievements.
            </p>

            <p>
              From 7am to 9am, community feeds bring people together over breakfast. Then at 9am, the whole community marches as one - from Outback at Isa to the Civic Center. It's a powerful display of unity, cultural pride, and connection.
            </p>

            <h2 className="font-display font-bold text-earth-900 mt-12 mb-4">What NAIDOC Means to Our Community</h2>

            <p>
              We walked through the celebrations, speaking with community members about what this week means to them.
            </p>

            <p>
              <strong>"It means our mob coming together, celebrating our culture and educating everyone else about it,"</strong> one young community member shared. <strong>"Our strong people."</strong>
            </p>

            <p>
              For many who've grown up in Mount Isa, attending the NAIDOC March is a lifelong tradition. <strong>"I've never missed a march no matter where I am on whatever side of the country,"</strong> one participant told us. <strong>"I'll find where the NAIDOC March is and attend."</strong>
            </p>

            <p>
              This is a day where non-Aboriginal people can come in and celebrate, enjoy, and respect Indigenous culture alongside the community - a celebration that belongs to everyone.
            </p>

            <h2 className="font-display font-bold text-earth-900 mt-12 mb-4">Elder Voices: Carrying the Legacy Forward</h2>

            <p>
              <strong>Uncle Warren King</strong>, a Kalkadoon Elder and family friend, shared powerful words about what NAIDOC represents:
            </p>

            <blockquote className="border-l-4 border-sunset-600 pl-6 my-6 italic text-gray-700">
              "NAIDOC is a legacy that our ancestors and our Elders before us have built for us to carry forward. I still remember as a young 17-year-old attending my first protest March in Mount Isa when my mother - a founding member of the Aboriginal and Childcare Agency, the Aboriginal Torres Strait Legal Service and Aliana Housing - a staunch, strong, resilient woman who raised eight children by herself and continued to impart her knowledge onto us to carry her legacy forward."
            </blockquote>

            <p>
              Uncle Warren emphasized that NAIDOC is about passing that legacy on to younger generations: <strong>"Our young leaders coming through to take up the fight for us and keeping the fires burning."</strong>
            </p>

            <h2 className="font-display font-bold text-earth-900 mt-12 mb-4">Supporting Young People in Mount Isa</h2>

            <p>
              When asked about working with young people, Uncle Warren offered crucial wisdom:
            </p>

            <blockquote className="border-l-4 border-sunset-600 pl-6 my-6 italic text-gray-700">
              "One of the things that we have to realize is that not one size fits all with our young people. And we also have to understand that a lot of our children have experienced intergenerational trauma. So not every one child is the same. They need to be treated like that - an assessment around just what their capabilities are and then looking at how to provide more to lead them into the future to be our future leaders."
            </blockquote>

            <p>
              <strong>Uncle George</strong>, another respected Kalkadoon Elder working in Mount Isa schools as a community facilitator, shared his approach to youth engagement:
            </p>

            <blockquote className="border-l-4 border-sunset-600 pl-6 my-6 italic text-gray-700">
              "It starts with the little kids. You'll see a lot of little kids that walk around the streets - engage with them, talk to them, find out what's going on with them. Pull them up and have a chat."
            </blockquote>

            <p>
              Uncle George is making a real difference in local schools, getting kids back to school who haven't attended in years. His work includes providing basic needs - showers and food for kids who come to school without hot water at home - creating the foundation for young people to thrive.
            </p>

            <p>
              <strong>"We've got some kids back there that haven't been to school for years and now they're enjoying it,"</strong> Uncle George shared. <strong>"Because the thing is I get them together."</strong>
            </p>

            <h2 className="font-display font-bold text-earth-900 mt-12 mb-4">The Power of Safe Spaces</h2>

            <p>
              Ben, a new social worker from Canada who recently joined Gidgie Healing, brought an international perspective on youth work:
            </p>

            <blockquote className="border-l-4 border-sunset-600 pl-6 my-6 italic text-gray-700">
              "I think just being a safe place. We're not their dads, we're not their uncles, but sometimes they just need that safe place just to be themselves. To express themselves without being judged. Without being ragged on and just able to just be a kid."
            </blockquote>

            <p>
              The Youth Protection Advocacy (YPA) intensive on-country program takes young people out on country to teach them what it means to feel connected to culture and community - a crucial part of building identity and belonging.
            </p>

            <h2 className="font-display font-bold text-earth-900 mt-12 mb-4">Cultural Connection Keeps Us Strong</h2>

            <p>
              Throughout the day, one theme emerged again and again: <strong>cultural connection is what keeps the community strong.</strong>
            </p>

            <p>
              Young people spoke about how work in the community, helping their mob, keeps them mentally and physically strong. The Kalkadoon Sundowners dance crew brought energy and pride to the celebrations, with young dancers showing their culture and "opening up" through performance.
            </p>

            <p>
              For those working in the community, the message was clear: <strong>respect and honor Elders, because that wisdom gets passed down to the next generation.</strong>
            </p>

            <h2 className="font-display font-bold text-earth-900 mt-12 mb-4">A Community That Welcomes All</h2>

            <p>
              Mount Isa NAIDOC Week isn't just for Aboriginal and Torres Strait Islander people - it's a celebration that welcomes everyone to learn, respect, and embrace Indigenous culture. The week was filled with events throughout the city, bringing together services, agencies, and community members to connect and collaborate.
            </p>

            <p>
              As Uncle George noted: <strong>"It's a way to get all these agencies to get together and march together as one and have a talk. When we come down these marches, you gotta all talk to each other and find out what we're doing so that we can help each other."</strong>
            </p>

            <h2 className="font-display font-bold text-earth-900 mt-12 mb-4">Looking Forward</h2>

            <p>
              Mount Isa NAIDOC Week reminds us why programs like CAMPFIRE matter. Cultural connection, Elder guidance, safe spaces, and community support are essential for young people to thrive.
            </p>

            <p>
              As Uncle Warren said: <strong>"That's what the legacy is all about. Our young leaders coming through to take up the fight for us and keeping the fires burning."</strong>
            </p>

            <p className="text-lg font-semibold mt-8">
              The march continues. The fires keep burning. And Mount Isa's community keeps coming together - stronger every year.
            </p>

            <div className="mt-12 p-6 bg-gradient-to-br from-earth-100 to-sunset-50 rounded-xl">
              <p className="text-lg font-semibold text-earth-900 mb-4">
                Want to support Indigenous youth in Mount Isa?
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="btn-primary">
                  Learn More About CAMPFIRE
                </Link>
                <Link href="/contact" className="btn-outline">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>

          {/* Share section */}
          <div className="mt-12 pt-8 border-t">
            <p className="text-gray-600 mb-4">Share this story:</p>
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
