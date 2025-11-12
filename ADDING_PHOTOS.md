# Adding Photos to Your CAMPFIRE Website

This guide shows you where and how to add photos throughout your website.

## 📸 Photo Locations & Suggestions

### 1. Hero Image (Home Page)

**Location**: `src/components/Hero.tsx` (line 34)
**Recommended Photo**: Powerful image of youth at gym or on-country camp
**Dimensions**: 1200 x 800px (landscape)
**Ideas**:
- Youth working out at Brodie's gym
- Group photo from a cultural camp
- Brodie with youth participants
- On-country activity with Elders

**How to Add**:
```typescript
// Replace line 34-50 in src/components/Hero.tsx with:
<div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
  <Image
    src="/images/hero-main.jpg"
    alt="CAMPFIRE youth at gym session"
    fill
    className="object-cover"
    priority
  />
</div>
```

Then add your photo to: `public/images/hero-main.jpg`

---

### 2. Brodie's Photo (About Page)

**Location**: `src/app/about/page.tsx` (line 78)
**Recommended Photo**: Professional photo of Brodie
**Dimensions**: 600 x 800px (portrait)
**Ideas**:
- Brodie at his gym
- Brodie on country
- Brodie with youth or Elders
- Action shot during a session

**Already set up as placeholder** - Just add your photo to `/public/images/brodie.jpg` and update:
```typescript
<Image
  src="/images/brodie.jpg"
  alt="Brodie Germaine, CAMPFIRE Program Director"
  fill
  className="object-cover rounded-2xl"
/>
```

---

### 3. Descript Video (About Page)

**Location**: `src/app/about/page.tsx` (line 102)
**Current**: Placeholder with instructions
**How to Add Your Video**:

1. Upload your video to Descript
2. Click "Share" and generate shareable link
3. Copy the URL (looks like: `https://share.descript.com/view/ABC123XYZ`)
4. Replace line 102:
```typescript
<DescriptVideo
  url="https://share.descript.com/view/YOUR_ACTUAL_SHARE_LINK"
  title="Brodie's Vision for CAMPFIRE"
  description="Hear directly from Brodie about why CAMPFIRE matters"
/>
```

---

### 4. Program Photos (Suggested Additions)

#### A. Services Page

**Location**: `src/app/services/page.tsx`
**Add photo sections for each service**:

**Fitness & Gym Photos**:
- Youth working out
- Brodie training participants
- Group fitness sessions
- Before/after transformations (with consent)

**Cultural Camp Photos**:
- On-country activities
- Elder teachings
- Bush tucker gathering
- Ceremony moments (where appropriate)

**Mentoring Photos**:
- 1-on-1 sessions
- Youth and mentors
- Support in action
- Success moments

#### B. Home Page

**Location**: `src/components/LatestStories.tsx`
**Add photos to story cards** (already has placeholders)

**Location**: `src/components/ProgramSnapshot.tsx`
**Could add photo backgrounds to each card**

---

## 🎨 Recommended Photo Gallery Sections

### Homepage - "Program in Action"

Add after ProgramSnapshot:

```typescript
// Add to src/app/page.tsx after <ProgramSnapshot />

import PhotoGallery from '@/components/PhotoGallery'

<section className="section-padding bg-white">
  <div className="container-custom">
    <h2 className="font-display font-bold text-3xl text-earth-900 mb-8 text-center">
      CAMPFIRE in Action
    </h2>
    <PhotoGallery
      columns={3}
      images={[
        {
          src: '/images/gallery/gym-session.jpg',
          alt: 'Youth at gym session',
          caption: 'Weekly fitness and mentoring'
        },
        {
          src: '/images/gallery/cultural-camp.jpg',
          alt: 'Cultural camp on country',
          caption: 'Quarterly cultural camps'
        },
        {
          src: '/images/gallery/elder-teaching.jpg',
          alt: 'Elder sharing cultural knowledge',
          caption: 'Elder-led teachings'
        },
        {
          src: '/images/gallery/group-activity.jpg',
          alt: 'Group activity at camp',
          caption: 'Building community connections'
        },
        {
          src: '/images/gallery/brodie-mentoring.jpg',
          alt: 'Brodie mentoring youth',
          caption: '1-on-1 support'
        },
        {
          src: '/images/gallery/family-event.jpg',
          alt: 'Family engagement event',
          caption: 'Monthly family activities'
        },
      ]}
    />
  </div>
</section>
```

### About Page - "Our Journey"

Add before the Acknowledgments section:

```typescript
<section className="section-padding bg-white">
  <div className="container-custom">
    <h2 className="font-display font-bold text-3xl text-earth-900 mb-8 text-center">
      Our Journey
    </h2>
    <PhotoGallery
      columns={2}
      images={[
        {
          src: '/images/timeline/program-launch.jpg',
          alt: 'CAMPFIRE program launch',
          caption: 'Program launch - July 2025'
        },
        {
          src: '/images/timeline/first-camp.jpg',
          alt: 'First cultural camp',
          caption: 'First cultural camp on country'
        },
      ]}
    />
  </div>
</section>
```

### Services Page - Visual Service Cards

Add photos to each service section:

```typescript
// For each service, add an image:
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
  <div>
    <Image
      src="/images/services/fitness.jpg"
      alt="Weekly fitness sessions"
      width={600}
      height={400}
      className="rounded-xl shadow-lg"
    />
  </div>
  <div>
    {/* Service content here */}
  </div>
</div>
```

---

## 📁 Photo Organization

### Folder Structure

Create these folders in `public/images/`:

```
public/images/
├── hero-main.jpg           # Main hero image
├── brodie.jpg              # Brodie's photo
├── og-image.jpg            # Social media share image
├── gallery/                # Gallery photos
│   ├── gym-session.jpg
│   ├── cultural-camp.jpg
│   ├── elder-teaching.jpg
│   ├── group-activity.jpg
│   ├── brodie-mentoring.jpg
│   └── family-event.jpg
├── services/               # Service-specific photos
│   ├── fitness.jpg
│   ├── cultural-camps.jpg
│   ├── mentoring.jpg
│   └── pathways.jpg
├── timeline/               # Program milestone photos
│   ├── program-launch.jpg
│   └── first-camp.jpg
└── partners/               # Partner logos (optional)
    └── logos go here
```

---

## 🎯 Photo Specifications

### Image Sizes & Formats

**Hero Images**: 1200 x 800px or larger (landscape)
**Portrait Photos**: 600 x 800px (3:4 ratio)
**Gallery Photos**: 800 x 600px (4:3 ratio)
**Square Thumbnails**: 600 x 600px

**Format**: JPG for photos, PNG for logos
**File Size**: Keep under 500KB (use image compression)
**Quality**: High quality but web-optimized

### Image Optimization Tools

- **TinyPNG**: https://tinypng.com/ (compress images)
- **Squoosh**: https://squoosh.app/ (resize and compress)
- **Cloudinary**: Upload to Cloudinary for automatic optimization

---

## ✅ Photo Content Guidelines

### What Makes a Great Photo

✅ **Authentic moments** - Real program activities, not staged
✅ **Diverse representation** - Show different youth, activities, settings
✅ **Action shots** - Youth engaged in activities
✅ **Connection moments** - Youth with Elders, mentors, each other
✅ **Cultural respect** - Appropriate imagery, approved by Elders

### What to Avoid

❌ Staged or posed photos that look inauthentic
❌ Poor lighting or blurry images
❌ Identifying information without consent
❌ Culturally sensitive material not approved for sharing
❌ Photos that show youth in deficit (focus on strength)

### Consent & Privacy

**Always get consent**:
- Written consent from youth AND parents/guardians
- Elder approval for cultural content
- Permission for social media sharing
- Option to use first names only or pseudonyms

**Photo Release Form** should include:
- Permission to use photo on website
- Permission for social media
- Permission to use in print materials
- Option to withdraw consent

---

## 🚀 Quick Start: Adding Your First Photo

1. **Choose your best hero image** (youth at gym or camp)
2. **Optimize it** using TinyPNG (keep under 500KB)
3. **Rename it** to `hero-main.jpg`
4. **Add to folder**: `public/images/hero-main.jpg`
5. **Update the code** in `src/components/Hero.tsx`:

```typescript
// Add import at top
import Image from 'next/image'

// Replace the placeholder div (lines 34-50) with:
<div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
  <Image
    src="/images/hero-main.jpg"
    alt="CAMPFIRE youth building strength through culture and connection"
    fill
    className="object-cover"
    priority
  />
</div>
```

6. **Save and refresh** your browser!

---

## 📞 Need Help?

- Stuck on adding photos? Check Next.js Image documentation: https://nextjs.org/docs/app/api-reference/components/image
- Want to optimize photos? Use Cloudinary integration (already set up in config)
- Questions about image sizing? All images are responsive and will scale automatically

---

**Pro Tip**: Start with 3-5 key photos (hero, Brodie, 2-3 gallery), then add more over time as you gather more program photos!
