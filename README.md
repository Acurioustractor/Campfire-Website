# CAMPFIRE Website

Official website for CAMPFIRE (Cultural Advancement and Mentoring Program) - an Indigenous-led youth mentoring program in Mount Isa, Queensland.

## 🔥 About CAMPFIRE

CAMPFIRE is an 18-month early intervention program supporting Aboriginal and Torres Strait Islander youth (ages 10-17) in Mount Isa through cultural connection, fitness, and community mentoring. Led by Brodie Germaine and guided by community Elders, funded by the Youth Justice Kickstarter Grant.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Notion API
- **Content Rendering**: react-notion-x
- **Media**: Cloudinary (optional)
- **Deployment**: Vercel
- **Forms**: API Routes (replaceable with Netlify Forms, Formspree, etc.)

## 📋 Prerequisites

- Node.js 18+ installed
- Notion account with API access
- (Optional) Cloudinary account for image optimization

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Campfire-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

   Fill in your environment variables:
   ```env
   # Notion API
   NOTION_API_KEY=your_notion_integration_token
   NOTION_BLOG_DATABASE_ID=your_blog_database_id
   NOTION_PAGES_DATABASE_ID=your_pages_database_id

   # Cloudinary (Optional)
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret

   # Site Config
   NEXT_PUBLIC_SITE_URL=https://campfire-mountisa.org
   NEXT_PUBLIC_SITE_NAME=CAMPFIRE
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Setting Up Notion CMS

### 1. Create Notion Integration

1. Go to [Notion Integrations](https://www.notion.so/my-integrations)
2. Click "New integration"
3. Name it "CAMPFIRE Website"
4. Select the workspace
5. Copy the "Internal Integration Token" - this is your `NOTION_API_KEY`

### 2. Create Blog Database

1. In Notion, create a new database called "CAMPFIRE Stories"
2. Add these properties:
   - **Title** (Title)
   - **Slug** (Text) - URL-friendly version of title
   - **Published Date** (Date)
   - **Status** (Select) - Options: Draft, Review, Published
   - **Category** (Select) - Options: Youth Stories, Elder Voices, Camp Updates, News
   - **Featured Image** (Files & Media)
   - **Author** (Person)
   - **Excerpt** (Text)
   - **Video Embed** (URL)
   - **Audio Embed** (URL)

3. Share the database with your integration:
   - Click "Share" in the top right
   - Add your "CAMPFIRE Website" integration
   - Copy the database ID from the URL (the long alphanumeric string)
   - This is your `NOTION_BLOG_DATABASE_ID`

### 3. Create Site Pages Database (Optional)

1. Create a new database called "CAMPFIRE Site Pages"
2. Add these properties:
   - **Page Name** (Title)
   - **Slug** (Text)

3. Share with your integration
4. Copy the database ID - this is your `NOTION_PAGES_DATABASE_ID`

## 📄 Key Pages

- **Home** (`/`) - Hero, program snapshot, impact stats, latest stories
- **About** (`/about`) - Brodie's story, program values, approach, timeline
- **What We Offer** (`/services`) - Service breakdown, eligibility
- **Our Stories** (`/stories`) - Notion-powered blog with category filtering
- **Partnerships** (`/partnerships`) - Partner showcase, opportunities
- **Refer a Young Person** (`/refer`) - Referral form and process
- **Contact** (`/contact`) - Contact form and FAQs

## 🎨 Customization

### Colors

The color palette is defined in `tailwind.config.ts`. The earthy, warm colors reflect the North Queensland landscape:

- **Earth tones**: Browns and tans
- **Sunset**: Oranges and warm reds
- **Outback**: Yellows and golds
- **Country**: Greens

### Typography

Two font families are used:
- **Inter**: Body text (clean, readable)
- **Space Grotesk**: Headings (bold, modern)

### Components

Reusable components are in `src/components/`:
- `Header.tsx` - Navigation
- `Footer.tsx` - Footer with acknowledgments
- `Hero.tsx` - Homepage hero section
- `ReferralForm.tsx` - Youth referral form
- `ContactForm.tsx` - General contact form
- `NotionRenderer.tsx` - Renders Notion page content

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**

2. **Import to Vercel**
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Add Environment Variables**
   - In Vercel project settings, go to "Environment Variables"
   - Add all variables from `.env.example`
   - Deploy!

4. **Set up custom domain**
   - In Vercel project settings, go to "Domains"
   - Add your custom domain (e.g., campfire-mountisa.org)
   - Follow DNS configuration instructions

### Deploy to Netlify

1. **Build command**: `npm run build`
2. **Publish directory**: `.next`
3. **Add environment variables** in Netlify dashboard
4. **Enable Netlify Forms** for form submissions (optional)

## 📱 Form Handling

Forms are currently set up with placeholder API endpoints. Choose one of these options:

### Option 1: Netlify Forms

1. Deploy to Netlify
2. Add `data-netlify="true"` to form elements
3. Forms will be automatically handled by Netlify

### Option 2: Formspree

1. Sign up at [Formspree](https://formspree.io)
2. Create forms for referrals and contact
3. Update form action endpoints in:
   - `src/components/ReferralForm.tsx`
   - `src/components/ContactForm.tsx`

### Option 3: Custom API Routes

Create API routes in `src/app/api/`:
- `src/app/api/referral/route.ts`
- `src/app/api/contact/route.ts`

## 📚 Content Management

See [CONTENT_MANAGEMENT.md](./CONTENT_MANAGEMENT.md) for detailed instructions on:
- Publishing stories from Notion
- Managing images and media
- Updating site content
- Adding videos and audio embeds

## 🔧 Development Scripts

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run type checking
npm run type-check

# Run linter
npm run lint
```

## 📊 Performance

The site is optimized for:
- **Fast load times**: Sub-2 second target on 3G
- **Mobile-first**: 70%+ of users access via mobile
- **SEO**: Metadata, structured data, semantic HTML
- **Accessibility**: WCAG AA compliance

## 🤝 Support

For technical issues or questions:
- **Email**: development@acurioustractor.com.au
- **Documentation**: See `/docs` folder

## 📄 License

Copyright © 2025 CAMPFIRE / A Curious Tractor. All rights reserved.

## 🙏 Acknowledgments

- Funded by Youth Justice Kickstarter Grant
- Auspiced by A Curious Tractor
- Guided by Traditional Owners and Community Elders
- Built with ❤️ for the Mount Isa community
