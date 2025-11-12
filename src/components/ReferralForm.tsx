'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export default function ReferralForm() {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    referrerPhone: '',
    referrerRelationship: '',
    youthName: '',
    youthAge: '',
    youthGender: '',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    address: '',
    currentSchool: '',
    reasonForReferral: '',
    additionalInfo: '',
    consent: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Replace with your form endpoint (Netlify Forms, Formspree, etc.)
      const response = await fetch('/api/referral', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          referrerName: '',
          referrerEmail: '',
          referrerPhone: '',
          referrerRelationship: '',
          youthName: '',
          youthAge: '',
          youthGender: '',
          parentName: '',
          parentPhone: '',
          parentEmail: '',
          address: '',
          currentSchool: '',
          reasonForReferral: '',
          additionalInfo: '',
          consent: false,
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Referrer Information */}
      <div className="card">
        <h3 className="font-display font-bold text-2xl text-earth-900 mb-6">
          Your Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="referrerName" className="block text-sm font-semibold text-gray-700 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              id="referrerName"
              name="referrerName"
              required
              value={formData.referrerName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="referrerEmail" className="block text-sm font-semibold text-gray-700 mb-2">
              Your Email *
            </label>
            <input
              type="email"
              id="referrerEmail"
              name="referrerEmail"
              required
              value={formData.referrerEmail}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="referrerPhone" className="block text-sm font-semibold text-gray-700 mb-2">
              Your Phone *
            </label>
            <input
              type="tel"
              id="referrerPhone"
              name="referrerPhone"
              required
              value={formData.referrerPhone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="referrerRelationship" className="block text-sm font-semibold text-gray-700 mb-2">
              Your Relationship to Youth *
            </label>
            <select
              id="referrerRelationship"
              name="referrerRelationship"
              required
              value={formData.referrerRelationship}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
            >
              <option value="">Select...</option>
              <option value="parent">Parent/Guardian</option>
              <option value="family">Family Member</option>
              <option value="self">Self-Referral</option>
              <option value="school">School Staff</option>
              <option value="youth-justice">Youth Justice</option>
              <option value="police">Police</option>
              <option value="community-services">Community Services</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      </div>

      {/* Young Person Information */}
      <div className="card">
        <h3 className="font-display font-bold text-2xl text-earth-900 mb-6">
          Young Person Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="youthName" className="block text-sm font-semibold text-gray-700 mb-2">
              Young Person's Name *
            </label>
            <input
              type="text"
              id="youthName"
              name="youthName"
              required
              value={formData.youthName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="youthAge" className="block text-sm font-semibold text-gray-700 mb-2">
              Age *
            </label>
            <input
              type="number"
              id="youthAge"
              name="youthAge"
              required
              min="10"
              max="17"
              value={formData.youthAge}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="youthGender" className="block text-sm font-semibold text-gray-700 mb-2">
              Gender
            </label>
            <input
              type="text"
              id="youthGender"
              name="youthGender"
              value={formData.youthGender}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="currentSchool" className="block text-sm font-semibold text-gray-700 mb-2">
              Current School (if applicable)
            </label>
            <input
              type="text"
              id="currentSchool"
              name="currentSchool"
              value={formData.currentSchool}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
              Address/Suburb
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Parent/Guardian Contact */}
      <div className="card">
        <h3 className="font-display font-bold text-2xl text-earth-900 mb-6">
          Parent/Guardian Contact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="parentName" className="block text-sm font-semibold text-gray-700 mb-2">
              Parent/Guardian Name *
            </label>
            <input
              type="text"
              id="parentName"
              name="parentName"
              required
              value={formData.parentName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="parentPhone" className="block text-sm font-semibold text-gray-700 mb-2">
              Parent/Guardian Phone *
            </label>
            <input
              type="tel"
              id="parentPhone"
              name="parentPhone"
              required
              value={formData.parentPhone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="parentEmail" className="block text-sm font-semibold text-gray-700 mb-2">
              Parent/Guardian Email
            </label>
            <input
              type="email"
              id="parentEmail"
              name="parentEmail"
              value={formData.parentEmail}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Referral Details */}
      <div className="card">
        <h3 className="font-display font-bold text-2xl text-earth-900 mb-6">
          Referral Details
        </h3>
        <div className="space-y-6">
          <div>
            <label htmlFor="reasonForReferral" className="block text-sm font-semibold text-gray-700 mb-2">
              Reason for Referral *
            </label>
            <textarea
              id="reasonForReferral"
              name="reasonForReferral"
              required
              rows={4}
              value={formData.reasonForReferral}
              onChange={handleChange}
              placeholder="Please describe why you're referring this young person to CAMPFIRE..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="additionalInfo" className="block text-sm font-semibold text-gray-700 mb-2">
              Additional Information
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              rows={4}
              value={formData.additionalInfo}
              onChange={handleChange}
              placeholder="Any other relevant information that would help us support this young person..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Consent */}
      <div className="card">
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            required
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 w-5 h-5 text-sunset-600 border-gray-300 rounded focus:ring-2 focus:ring-sunset-500"
          />
          <label htmlFor="consent" className="text-sm text-gray-600">
            I confirm that I have permission to refer this young person to CAMPFIRE, and I understand that the CAMPFIRE team will contact the parent/guardian to discuss the program and next steps. *
          </label>
        </div>
      </div>

      {/* Submit Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-country-100 text-country-900 rounded-lg">
          <p className="font-semibold">Referral submitted successfully!</p>
          <p className="text-sm mt-1">Thank you. The CAMPFIRE team will be in touch soon.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-100 text-red-900 rounded-lg">
          <p className="font-semibold">Oops! Something went wrong.</p>
          <p className="text-sm mt-1">Please try again or contact us directly.</p>
        </div>
      )}

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary inline-flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Referral'}
          <Send className="ml-2 h-5 w-5" />
        </button>
      </div>
    </form>
  )
}
