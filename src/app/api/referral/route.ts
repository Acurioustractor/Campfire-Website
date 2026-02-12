import { NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      referrerName,
      referrerEmail,
      referrerPhone,
      referrerRelationship,
      youthName,
      youthAge,
      youthGender,
      currentSchool,
      address,
      parentName,
      parentPhone,
      parentEmail,
      reasonForReferral,
      additionalInfo,
      consent,
    } = body

    // Validate required fields
    if (
      !referrerName ||
      !referrerEmail ||
      !referrerPhone ||
      !referrerRelationship ||
      !youthName ||
      !youthAge ||
      !parentName ||
      !parentPhone ||
      !reasonForReferral ||
      !consent
    ) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const { error } = await getSupabase().from('referral_submissions').insert({
      referrer_name: referrerName,
      referrer_email: referrerEmail,
      referrer_phone: referrerPhone,
      referrer_relationship: referrerRelationship,
      youth_name: youthName,
      youth_age: parseInt(youthAge, 10),
      youth_gender: youthGender || null,
      current_school: currentSchool || null,
      address: address || null,
      parent_name: parentName,
      parent_phone: parentPhone,
      parent_email: parentEmail || null,
      reason_for_referral: reasonForReferral,
      additional_info: additionalInfo || null,
      consent,
      status: 'new',
    })

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to save submission' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Referral form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
