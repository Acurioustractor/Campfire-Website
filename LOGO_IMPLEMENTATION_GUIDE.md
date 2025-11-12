# CAMPFIRE Logo Implementation Guide

## ✅ What's Been Done

I've prepared the website to use your CAMPFIRE logo. Here's what's been implemented:

### 1. Logo Component Created
**File**: `src/components/Logo.tsx`

A reusable Logo component that:
- Displays the SVG logo file
- Shows optional text next to the logo ("CAMPFIRE" + tagline)
- Links to homepage by default
- Supports different sizes for various uses
- Optimized with Next.js Image component

### 2. Header Updated
**File**: `src/components/Header.tsx`

- Desktop header now uses the Logo component (50x50px)
- Mobile header uses smaller version (40x40px)
- Replaced the placeholder "C" circle with actual logo
- Logo appears in both main header and mobile menu

### 3. Ready to Use Everywhere
The Logo component can now be used anywhere on the site:
- Header navigation ✅ (already implemented)
- Footer (optional)
- Email signatures
- Documents and PDFs
- Social media profiles

---

## 🚨 ACTION REQUIRED: Add the Logo File

### What You Need to Do:

**1. Rename Your Logo File**
Your logo file needs to be named exactly:
```
campfire-logo.svg
```
(Note: Using a hyphen, not a space)

**2. Place It in the Correct Location**
In VS Code, drag the file to:
```
public/images/campfire-logo.svg
```

**3. File Requirements**
- **Format**: SVG (vector format for perfect scaling)
- **File size**: Keep under 50KB for fast loading
- **Dimensions**: Any size works (SVG scales perfectly), but 200x200px is ideal
- **Colors**: Should use your brand colors (earth and sunset tones)

---

## 📁 Current File Structure

```
public/
└── images/
    ├── campfire-logo.svg          ← ADD THIS FILE
    ├── pattern.svg                ✅ exists
    ├── gallery/                    ✅ exists
    └── services/                   ✅ exists
```

---

## 🎨 Logo File Best Practices

### SVG Optimization
If your logo file is large, optimize it:
1. Go to https://jakearchibald.github.io/svgomg/
2. Upload your SVG
3. Download the optimized version
4. Use the optimized file

### SVG Code Tips
Your SVG should:
- Have a `viewBox` attribute for proper scaling
- Not have fixed `width` and `height` attributes (or they should be set to 100%)
- Use relative units, not absolute pixels for internal elements
- Have proper color values (not "currentColor" unless intentional)

Example of a good SVG structure:
```xml
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Your logo paths here -->
</svg>
```

---

## 🖼️ How the Logo Will Appear

### Desktop Header
```
[Logo Icon] CAMPFIRE
            Cultural Advancement & Mentoring
```
- Logo: 50x50px
- With text next to it
- Clickable, links to homepage

### Mobile Header
```
[Logo] CAMPFIRE
       Cultural Advancement & Mentoring
```
- Smaller logo: 40x40px
- Still shows text
- Clickable, links to homepage

### You Can Also Use Logo Alone
```typescript
// Just the logo icon, no text
<Logo width={60} height={60} showText={false} />

// Larger logo with text
<Logo width={80} height={80} showText={true} />

// Logo that doesn't link anywhere
<Logo width={40} height={40} linkToHome={false} />
```

---

## 🎯 Using the Logo Component

### In the Header (Already Done)
```typescript
<Logo width={50} height={50} showText={true} />
```

### In the Footer (Optional)
If you want to add the logo to the footer, edit `src/components/Footer.tsx`:

```typescript
import Logo from '@/components/Logo'

// Add to the footer layout:
<Logo width={40} height={40} showText={false} linkToHome={true} />
```

### On Any Page
```typescript
import Logo from '@/components/Logo'

// Use it:
<Logo width={100} height={100} showText={true} />
```

---

## 🔍 After Adding the Logo File

Once you've added `campfire-logo.svg` to `/public/images/`:

### 1. Test Locally
```bash
npm run dev
```
Visit http://localhost:3000 and check:
- ✅ Logo appears in header
- ✅ Logo links to homepage
- ✅ Logo looks good on mobile
- ✅ No console errors

### 2. Check Different Pages
Navigate through:
- Homepage
- About page
- Services page
- All other pages

Make sure the logo appears correctly on every page.

### 3. Test Mobile View
- In browser, press F12 (open dev tools)
- Click device toolbar icon
- View as iPhone/Android
- Verify logo looks good at small sizes

### 4. Commit and Push
```bash
git add public/images/campfire-logo.svg
git add src/components/Logo.tsx
git add src/components/Header.tsx
git commit -m "feat: Add CAMPFIRE logo to header navigation"
git push
```

---

## 🎨 Creating Favicon from Logo

Once your logo is in place, you can create favicons:

### Option 1: Online Tool
1. Go to https://realfavicongenerator.net/
2. Upload your `campfire-logo.svg`
3. Download the generated favicon package
4. Place files in `/public/`:
   - `favicon.ico`
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png`

### Option 2: Figma/Canva
1. Import your SVG
2. Export as PNG at these sizes:
   - 16x16px → favicon-16x16.png
   - 32x32px → favicon-32x32.png
   - 180x180px → apple-touch-icon.png

### Update HTML Head
The favicons are referenced in `src/app/layout.tsx` - already configured!

---

## 🚀 Advanced Logo Usage

### Social Media Share Image
Create a larger version for social sharing:
1. Create 1200x630px PNG with logo + text
2. Save as `/public/images/og-image.png`
3. This appears when sharing links on Facebook, Twitter, etc.

### Print-Ready Logo
For printed materials:
1. Keep the original SVG (scales to any size)
2. Export high-res PNG (300 DPI) for print:
   - Small: 600x600px
   - Medium: 1200x1200px
   - Large: 2400x2400px

### Email Signature
Use a PNG version (SVG doesn't work well in emails):
1. Export logo as PNG at 200x200px
2. Optimize with TinyPNG.com
3. Host on website: `/public/images/campfire-logo-email.png`
4. Link to it in email signatures

---

## 🐛 Troubleshooting

### Logo Doesn't Appear
- ✅ Check file is named exactly: `campfire-logo.svg`
- ✅ Check file is in: `/public/images/`
- ✅ Restart the dev server: `npm run dev`
- ✅ Hard refresh browser: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### Logo Looks Wrong
- Check SVG viewBox is correct
- Make sure SVG doesn't have fixed width/height
- Verify colors are correct in the SVG file

### Logo Too Big/Small
Adjust the `width` and `height` props:
```typescript
// Smaller
<Logo width={30} height={30} showText={true} />

// Larger
<Logo width={80} height={80} showText={true} />
```

### Logo Not Clickable
Make sure `linkToHome={true}` is set (it's the default).

---

## 📋 Quick Checklist

Before launching, verify:

- [ ] Logo file added to `/public/images/campfire-logo.svg`
- [ ] Logo appears in desktop header
- [ ] Logo appears in mobile header
- [ ] Logo is clickable and links to homepage
- [ ] Logo looks good at all screen sizes
- [ ] No console errors related to the logo
- [ ] Favicon created and added
- [ ] Social share image created (optional but recommended)
- [ ] Logo file is optimized and under 50KB

---

## 💡 Next Steps

Once the logo is working:

1. **Add photos** (using the PHOTO_IMPLEMENTATION_SUMMARY.md guide)
2. **Set up Notion blog** integration
3. **Test all forms**
4. **Final content review**
5. **Deploy to production**

---

## Need Help?

If you encounter any issues with the logo:
1. Check that the file name matches exactly: `campfire-logo.svg`
2. Make sure it's in the right folder: `public/images/`
3. Restart the development server
4. Clear browser cache

The logo system is ready to go - just add the file and it will automatically appear throughout the site! 🔥
