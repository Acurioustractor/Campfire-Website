# Photo Implementation Summary

This document shows all the places where photos have been added to the CAMPFIRE website and provides suggestions for additional photo opportunities.

---

## ✅ Photos Already Implemented

### 1. **Homepage** (`src/app/page.tsx`)

#### Hero Image
- **Location**: `src/components/Hero.tsx` line 36-44
- **File Path Required**: `/public/images/hero-main.jpg`
- **Dimensions**: 1200 x 800px (landscape)
- **Content Suggestion**: Powerful image of youth at gym or on-country camp

#### Gallery Section (Added)
- **Location**: `src/app/page.tsx` after ProgramSnapshot component
- **Files Required**:
  - `/public/images/gallery/gym-session.jpg` - Youth working out
  - `/public/images/gallery/cultural-camp.jpg` - Cultural camp on country
  - `/public/images/gallery/elder-teaching.jpg` - Elder sharing knowledge
  - `/public/images/gallery/group-activity.jpg` - Group gathering
  - `/public/images/gallery/mentoring.jpg` - Brodie with youth
  - `/public/images/gallery/family-event.jpg` - Family activity

---

### 2. **About Page** (`src/app/about/page.tsx`)

#### Brodie's Photo
- **Location**: Line 78-86
- **File Path Required**: `/public/images/brodie.jpg`
- **Dimensions**: 600 x 800px (portrait)
- **Content Suggestion**: Professional photo of Brodie at gym or on country

#### Descript Video (Implemented)
- **Location**: Line 103-107
- **Status**: ✅ Already working with embed URL

#### Our Journey Gallery (Added)
- **Location**: Lines 290-328
- **Files Required**:
  - `/public/images/timeline/program-launch.jpg` - Launch event
  - `/public/images/timeline/first-camp.jpg` - First cultural camp
  - `/public/images/timeline/community-gathering.jpg` - Elder gathering
  - `/public/images/timeline/youth-success.jpg` - Youth celebrating

---

### 3. **Services Page** (`src/app/services/page.tsx`)

#### CAMPFIRE in Action Gallery (Added)
- **Location**: Lines 165-213
- **Files Required**:
  - `/public/images/services/fitness.jpg` - Gym training session
  - `/public/images/services/cultural-camp.jpg` - Camp activities
  - `/public/images/services/mentoring.jpg` - 1-on-1 mentoring
  - `/public/images/services/family-event.jpg` - Family engagement
  - `/public/images/services/pathways.jpg` - Education/work support
  - `/public/images/services/community.jpg` - Community activities

---

### 4. **Partnerships Page** (`src/app/partnerships/page.tsx`)

#### Partnerships in Action Gallery (Added)
- **Location**: Lines 201-234
- **Files Required**:
  - `/public/images/partnerships/cultural-educator.jpg` - Cultural teaching
  - `/public/images/partnerships/employer-visit.jpg` - Youth at workplace
  - `/public/images/partnerships/community-event.jpg` - Partnership event

---

## 📁 Complete File Structure Required

Here's the complete folder structure with all photo files needed:

```
public/images/
├── hero-main.jpg                              # Main homepage hero
├── brodie.jpg                                 # Brodie's portrait
├── og-image.jpg                               # Social media share (optional)
│
├── gallery/                                   # Homepage gallery
│   ├── gym-session.jpg
│   ├── cultural-camp.jpg
│   ├── elder-teaching.jpg
│   ├── group-activity.jpg
│   ├── mentoring.jpg
│   └── family-event.jpg
│
├── services/                                  # Services page gallery
│   ├── fitness.jpg
│   ├── cultural-camp.jpg
│   ├── mentoring.jpg
│   ├── family-event.jpg
│   ├── pathways.jpg
│   └── community.jpg
│
├── timeline/                                  # About page journey
│   ├── program-launch.jpg
│   ├── first-camp.jpg
│   ├── community-gathering.jpg
│   └── youth-success.jpg
│
└── partnerships/                              # Partnerships page
    ├── cultural-educator.jpg
    ├── employer-visit.jpg
    └── community-event.jpg
```

**Total photos needed: 23 images**

---

## 💡 Additional Photo Opportunity Suggestions

### High Priority Additions

#### 1. **Refer Page** - Add Visual Appeal
**Location**: `src/app/refer/page.tsx`
**Suggestion**: Add a photo section showing youth engagement success stories

```typescript
// Add before the referral form section (around line 100)
<section className="section-padding bg-white">
  <div className="container-custom max-w-5xl">
    <div className="text-center mb-12">
      <h2 className="font-display font-bold text-earth-900 mb-4">
        See the Impact
      </h2>
      <p className="text-xl text-gray-600">
        Young people thriving through CAMPFIRE support
      </p>
    </div>

    <PhotoGallery
      columns={3}
      images={[
        {
          src: '/images/refer/youth-engagement-1.jpg',
          alt: 'Youth engaged in program',
          caption: 'Building confidence and strength'
        },
        {
          src: '/images/refer/youth-engagement-2.jpg',
          alt: 'Youth with mentor',
          caption: 'Positive mentoring relationships'
        },
        {
          src: '/images/refer/youth-engagement-3.jpg',
          alt: 'Youth cultural connection',
          caption: 'Connecting to culture and country'
        },
      ]}
    />
  </div>
</section>
```

**Photos needed**:
- `/public/images/refer/youth-engagement-1.jpg`
- `/public/images/refer/youth-engagement-2.jpg`
- `/public/images/refer/youth-engagement-3.jpg`

---

#### 2. **Stories Page** - Feature Photos
**Location**: `src/app/stories/page.tsx`
**Suggestion**: Add a featured stories section with photos

```typescript
// Add before the blog listing (around line 50)
<section className="section-padding bg-gradient-to-br from-earth-100 to-sunset-50">
  <div className="container-custom">
    <div className="text-center mb-12">
      <h2 className="font-display font-bold text-earth-900 mb-4">
        Featured Stories
      </h2>
      <p className="text-xl text-gray-600">
        Powerful moments from the CAMPFIRE community
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Story Card 1 */}
      <div className="card hover:shadow-lg transition-shadow">
        <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
          <Image
            src="/images/stories/featured-1.jpg"
            alt="Featured story"
            fill
            className="object-cover"
          />
        </div>
        <span className="inline-block px-3 py-1 bg-sunset-100 text-sunset-900 rounded-full text-sm font-semibold mb-3">
          Youth Stories
        </span>
        <h3 className="font-display font-bold text-xl text-earth-900 mb-2">
          Story Title Here
        </h3>
        <p className="text-gray-600 mb-4">
          Brief excerpt of the story...
        </p>
        <Link href="/stories/slug" className="text-earth-700 font-semibold hover:text-earth-900">
          Read More →
        </Link>
      </div>

      {/* Repeat for 2-3 more featured stories */}
    </div>
  </div>
</section>
```

**Photos needed**:
- `/public/images/stories/featured-1.jpg`
- `/public/images/stories/featured-2.jpg`
- `/public/images/stories/featured-3.jpg`

---

#### 3. **Contact Page** - Add Welcoming Image
**Location**: `src/app/contact/page.tsx`
**Suggestion**: Add a welcoming photo of the team/gym/community space

```typescript
// Add after the hero section (around line 50)
<section className="section-padding bg-white">
  <div className="container-custom">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="/images/contact/campfire-space.jpg"
          alt="CAMPFIRE gym and community space"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div>
        <h2 className="font-display font-bold text-2xl text-earth-900 mb-4">
          Visit Us in Mount Isa
        </h2>
        <p className="text-gray-600 mb-6">
          CAMPFIRE operates out of Brodie's gym in Mount Isa. We're here Monday to Friday and always happy to chat about how we can support young people in our community.
        </p>
        {/* Contact details here */}
      </div>
    </div>
  </div>
</section>
```

**Photo needed**:
- `/public/images/contact/campfire-space.jpg` - Photo of gym or meeting space

---

### Medium Priority Additions

#### 4. **Individual Service Detail Sections**
**Location**: `src/app/services/page.tsx`
**Suggestion**: Add individual photos to each service card

Currently the services are displayed in a grid. You could enhance each service card with a hero image at the top:

```typescript
<div key={service.title} className="card overflow-hidden">
  {/* Add photo at top of card */}
  <div className="relative h-48 -m-6 mb-6">
    <Image
      src={`/images/services/${service.slug}.jpg`}
      alt={service.title}
      fill
      className="object-cover"
    />
  </div>

  {/* Rest of existing card content */}
  <div className="flex items-start gap-4 mb-6">
    ...
  </div>
</div>
```

**Photos needed**: 6 individual service photos

---

#### 5. **Team/Elder Section on About Page**
**Location**: `src/app/about/page.tsx`
**Suggestion**: Add a section showing Elders and team members

```typescript
// Add after Brodie's section, before the video
<section className="section-padding bg-earth-50">
  <div className="container-custom">
    <div className="text-center max-w-3xl mx-auto mb-12">
      <h2 className="font-display font-bold text-earth-900 mb-4">
        Guided by Elders
      </h2>
      <p className="text-xl text-gray-600">
        CAMPFIRE is supported by community Elders who provide cultural guidance and mentoring
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {/* Elder profile cards with photos */}
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-3 rounded-full overflow-hidden">
          <Image
            src="/images/team/elder-1.jpg"
            alt="Elder name"
            fill
            className="object-cover"
          />
        </div>
        <h3 className="font-semibold text-earth-900">Elder Name</h3>
        <p className="text-sm text-gray-600">Cultural Mentor</p>
      </div>
      {/* Repeat for other Elders */}
    </div>
  </div>
</section>
```

**Photos needed**:
- `/public/images/team/elder-1.jpg`
- `/public/images/team/elder-2.jpg`
- etc.

---

### Lower Priority / Future Additions

#### 6. **Success Stories with Before/After**
- Add transformation photos (with consent) showing youth progress
- Physical fitness progress, confidence building
- **Location**: Could be added to Services or Stories pages

#### 7. **Partner Logos**
- Add actual logos for Youth Justice Kickstarter and A Curious Tractor
- **Location**: About page acknowledgments section and Partnerships page
- **Files**:
  - `/public/images/partners/youth-justice-logo.png`
  - `/public/images/partners/act-logo.png`

#### 8. **Location/Map Visual**
- Photo of Mount Isa landscape/area
- Could add to Contact page or About page
- **File**: `/public/images/mount-isa-landscape.jpg`

#### 9. **Blog Post Thumbnails**
- Each blog post should have a featured image
- Managed through Notion when creating blog content
- Size: 1200 x 630px for social sharing

---

## 🎯 Photo Content Guidelines

### What Makes a Great CAMPFIRE Photo

**✅ DO Include:**
- Authentic moments from real program activities
- Youth actively engaged (working out, learning, connecting)
- Elder-youth interactions showing cultural transmission
- Diverse representation across ages and activities
- Brodie and mentors supporting youth
- On-country activities and cultural practices
- Smiling faces, connection, belonging
- Action shots showing strength and capability
- Group activities showing community

**❌ DON'T Include:**
- Staged or posed photos that look inauthentic
- Poor quality, blurry, or badly lit images
- Youth looking disengaged or negative
- Culturally sensitive material not approved for sharing
- Photos without proper consent
- Anything showing youth in deficit rather than strength

### Photo Specifications

- **Format**: JPG for photos, PNG for logos with transparency
- **File Size**: Keep under 500KB (use TinyPNG or Squoosh to compress)
- **Dimensions**:
  - Hero images: 1200 x 800px or larger
  - Portrait photos: 600 x 800px
  - Gallery images: 800 x 600px minimum
  - Social share: 1200 x 630px
- **Alt Text**: Always include descriptive alt text (already coded in)
- **Captions**: Use captions to tell the story (already coded in)

### Cultural & Privacy Considerations

**CRITICAL**: Before adding any photo:
1. ✅ Written consent from youth AND parents/guardians
2. ✅ Elder approval for cultural content
3. ✅ Permission for website and social media use
4. ✅ Option provided for first names only or pseudonyms
5. ✅ Right to withdraw consent documented

---

## 📋 Quick Implementation Checklist

### To Add Photos Now:

1. **Create folder structure in VS Code**:
   ```
   public/images/
   ├── gallery/
   ├── services/
   ├── timeline/
   └── partnerships/
   ```

2. **Gather and optimize photos**:
   - Use TinyPNG.com to compress all images
   - Ensure proper dimensions (see specs above)
   - Get all consents documented

3. **Rename and organize photos** according to the file structure above

4. **Drag photos into correct folders** in VS Code

5. **Test the website**:
   ```bash
   npm run dev
   ```
   - Visit each page and verify photos load correctly
   - Check mobile responsiveness
   - Verify alt text is appropriate

6. **Commit and push**:
   ```bash
   git add public/images/
   git commit -m "feat: Add program photos across all pages"
   git push
   ```

---

## 🚀 Next Steps After Photos

Once photos are in place, the next priority tasks are:

1. **Set up Notion Blog Integration**
   - Configure Notion database with proper fields
   - Test blog post fetching
   - Add real blog content
   - Verify category filtering works

2. **Test All Forms**
   - Referral form submission
   - Contact form submission
   - Partnership inquiry form
   - Configure email endpoints

3. **Replace Placeholder Content**
   - Add real contact details
   - Update any placeholder text
   - Add actual Elder names (with permission)
   - Update program dates if needed

4. **Performance Testing**
   - Test site speed with all photos
   - Verify mobile 3G performance
   - Check image lazy loading

5. **Final Review & Launch**
   - Complete accessibility audit
   - Proofread all content
   - Test all links
   - Deploy to production

---

## 📊 Photo Summary

**Total Photos Implemented**: 23 images across 4 pages

**Breakdown**:
- Homepage: 7 images (1 hero + 6 gallery)
- About: 5 images (1 Brodie + 4 timeline)
- Services: 6 images (service gallery)
- Partnerships: 3 images (partnership gallery)
- Plus: 1 pattern.svg background

**Additional Suggestions**: 15+ more photo opportunities identified

**Next Focus**: Get the 23 core photos in place, then move to blog setup and form testing.

---

## ✨ Key Strengths of Current Implementation

1. **PhotoGallery Component** - Reusable, responsive, works across all pages
2. **Consistent Design** - All galleries use the same visual style
3. **Meaningful Captions** - Each photo has context explaining its relevance
4. **Accessibility** - All images have descriptive alt text
5. **Performance** - Using Next.js Image component for optimization
6. **Organized Structure** - Clear folder organization makes adding photos easy

The website is now fully prepared to display photos - just need to add the actual image files!
