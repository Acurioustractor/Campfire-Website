import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | CAMPFIRE',
  description: 'Get in touch with CAMPFIRE. We\'re here to answer questions about our program, referrals, partnerships, and community support.',
}

const faqs = [
  {
    question: 'What ages does CAMPFIRE support?',
    answer: 'CAMPFIRE supports Aboriginal and Torres Strait Islander youth aged 10-17 years.',
  },
  {
    question: 'Is there a cost to participate?',
    answer: 'No, CAMPFIRE is completely free for participants. The program is funded by the Youth Justice Kickstarter Grant.',
  },
  {
    question: 'How long is the program?',
    answer: 'CAMPFIRE runs for 18 months (July 2025 - February 2027), but young people can join at different points during this time.',
  },
  {
    question: 'Where are activities held?',
    answer: 'Weekly gym sessions are held at Brodie\'s gym in Mount Isa. Cultural camps are held on-country with Traditional Owners.',
  },
  {
    question: 'Do parents need to give permission?',
    answer: 'Yes, parent/guardian consent is required for young people under 18 to participate in CAMPFIRE.',
  },
  {
    question: 'What if my child misses sessions?',
    answer: 'We understand life happens! CAMPFIRE is flexible. We work with families to support consistent engagement while respecting individual circumstances.',
  },
  {
    question: 'Can non-Indigenous youth participate?',
    answer: 'CAMPFIRE is specifically designed for Aboriginal and Torres Strait Islander youth to ensure culturally safe and appropriate support.',
  },
  {
    question: 'How do I make a referral?',
    answer: 'You can submit a referral through our online form, call us directly, or email us. Referrals can come from family, self, schools, or community services.',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-earth-900 to-sunset-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-earth-100">
              Have questions about CAMPFIRE? Want to make a referral or explore partnership opportunities? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sunset-500 to-earth-600 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-display font-bold text-lg text-earth-900 mb-2">
                Location
              </h3>
              <p className="text-gray-600">
                Mount Isa
                <br />
                North Queensland
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sunset-500 to-earth-600 rounded-full mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-display font-bold text-lg text-earth-900 mb-2">
                Phone
              </h3>
              <p className="text-gray-600">
                <a href="tel:0411388526" className="hover:text-sunset-600">0411 388 526</a>
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sunset-500 to-earth-600 rounded-full mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-display font-bold text-lg text-earth-900 mb-2">
                Email
              </h3>
              <p className="text-gray-600">
                info@campfire.org.au
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sunset-500 to-earth-600 rounded-full mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-display font-bold text-lg text-earth-900 mb-2">
                Hours
              </h3>
              <p className="text-gray-600">
                Mon-Fri: 9am-5pm
                <br />
                (or by appointment)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-earth-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="font-display font-bold text-earth-900 mb-6">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display font-bold text-earth-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <h3 className="font-display font-bold text-xl text-earth-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-sunset-600 to-earth-700 text-white">
        <div className="container-custom text-center">
          <h2 className="font-display font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you want to refer a young person, explore partnerships, or learn more about CAMPFIRE, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/refer" className="btn-primary bg-white text-earth-900 hover:bg-gray-100">
              Refer a Young Person
            </a>
            <a href="/partnerships" className="btn-outline border-white text-white hover:bg-white hover:text-earth-900">
              Explore Partnerships
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
