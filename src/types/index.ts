export interface NavLink {
  name: string
  href: string
}

export interface Service {
  title: string
  description: string
  icon: string
  features: string[]
}

export interface Partner {
  name: string
  logo?: string
  description?: string
  website?: string
}

export interface Stat {
  value: string
  label: string
  description?: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  image?: string
}

export interface FormData {
  [key: string]: string | File | null
}

export interface FAQItem {
  question: string
  answer: string
}
