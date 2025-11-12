# CAMPFIRE Content Management Guide

This guide will help the CAMPFIRE team manage website content through Notion - no coding required!

## 📖 Table of Contents

1. [Publishing Stories](#publishing-stories)
2. [Managing Images](#managing-images)
3. [Adding Videos](#adding-videos)
4. [Adding Audio](#adding-audio)
5. [Updating Static Pages](#updating-static-pages)
6. [Troubleshooting](#troubleshooting)

## 📝 Publishing Stories

### Step 1: Open Your Notion Database

1. Open Notion
2. Navigate to "CAMPFIRE Stories" database
3. Click "New" to create a new story

### Step 2: Fill in Story Details

**Required Fields:**
- **Title**: The headline of your story (e.g., "Jordan's Journey")
- **Slug**: URL-friendly version (e.g., "jordans-journey")
  - Use lowercase
  - Replace spaces with hyphens (-)
  - No special characters
- **Published Date**: When the story should appear
- **Status**: Set to "Published" when ready
- **Category**: Choose from:
  - Youth Stories
  - Elder Voices
  - Camp Updates
  - News

**Optional Fields:**
- **Featured Image**: Upload an image or paste a URL
- **Author**: Who wrote/shared this story
- **Excerpt**: Short summary (1-2 sentences)
- **Video Embed**: YouTube or Vimeo URL
- **Audio Embed**: Descript or other audio player URL

### Step 3: Write Your Story

Click inside the page and write your story using Notion's editor:

- **Headings**: Use `/heading` for titles
- **Paragraphs**: Just start typing
- **Lists**: Use `/bullet` or `/numbered`
- **Images**: Upload or embed images inline
- **Quotes**: Use `/quote` for pull quotes
- **Dividers**: Use `/divider` to separate sections

### Step 4: Publish

1. Set **Status** to "Published"
2. Save the page
3. Wait 5-10 minutes for the website to update automatically
4. Check the website at `/stories`

## 🖼️ Managing Images

### Option 1: Upload to Notion

1. In your Notion page, type `/image`
2. Click "Upload"
3. Select your image file
4. The image will appear in the story

**Best Practices:**
- Use high-quality images (at least 1200px wide)
- Keep file sizes under 2MB
- Use JPG for photos, PNG for graphics
- Name files descriptively (e.g., "camp-2025-group-photo.jpg")

### Option 2: Use External Links

If you have images hosted elsewhere (Cloudinary, Google Drive, etc.):

1. Get the direct image URL
2. In Notion, type `/image`
3. Click "Link"
4. Paste the URL

### Featured Images

For the story thumbnail that appears on the stories page:

1. In the database, click the "Featured Image" field
2. Upload an image or paste a URL
3. Recommended size: 1200x630 pixels (landscape orientation)

## 🎥 Adding Videos

### YouTube Videos

1. Go to your YouTube video
2. Click "Share" → "Copy link"
3. In Notion database, paste the link in "Video Embed" field
4. The video will automatically appear in the story

**Supported formats:**
- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`

### Vimeo Videos

1. Go to your Vimeo video
2. Copy the video URL
3. Paste in "Video Embed" field

### Embedding in Story Content

You can also embed videos directly in the story:

1. In the Notion page, type `/video`
2. Paste the YouTube or Vimeo URL
3. Press Enter

## 🎵 Adding Audio

### Descript Audio Players

1. In Descript, generate a shareable link for your audio
2. Copy the embed URL
3. Paste in the "Audio Embed" field in Notion database
4. The audio player will appear at the top of the story

### Other Audio Platforms

- **SoundCloud**: Copy the embed URL
- **Spotify**: Use the embed link from the share menu
- **Direct files**: Host the MP3 and paste the URL

## 📄 Updating Static Pages

Some pages (About, Contact, etc.) are built into the code. To update these:

**Option 1: Use the Site Pages Database**
1. Open "CAMPFIRE Site Pages" database
2. Find the page you want to edit
3. Click to open
4. Edit the content
5. Save

**Option 2: Request Developer Changes**
For major updates to static pages, contact your developer.

## 🔍 Story Categories Explained

### Youth Stories
Personal journeys, transformations, and experiences of young people in CAMPFIRE.

**Example topics:**
- A young person's first cultural camp
- How the program helped with school
- Building confidence through fitness

**Tone**: Positive, strength-based, respectful

### Elder Voices
Wisdom, teachings, and perspectives from community Elders.

**Example topics:**
- Why cultural connection matters
- Traditional knowledge sharing
- Messages to young people

**Tone**: Respectful, honoring, warm

### Camp Updates
News and stories from cultural camps.

**Example topics:**
- Recap of the latest camp
- What activities happened
- Youth and Elder reflections

**Tone**: Descriptive, celebratory, informative

### News
Program announcements, partnerships, and community updates.

**Example topics:**
- New partnership announcements
- Program milestones
- Upcoming events

**Tone**: Professional, informative, welcoming

## ⚡ Quick Publishing Checklist

Before setting a story to "Published", check:

- [ ] Title is clear and engaging
- [ ] Slug is lowercase with hyphens (no spaces)
- [ ] Published date is set
- [ ] Category is selected
- [ ] Featured image is uploaded (optional but recommended)
- [ ] Story content is written and formatted
- [ ] Spell check complete
- [ ] Consent obtained for any names/photos used
- [ ] Status is set to "Published"

## 🚨 Troubleshooting

### My story isn't showing on the website

**Check:**
1. Is Status set to "Published"? (Not "Draft" or "Review")
2. Is Published Date in the past? (Future dates won't show)
3. Did you wait 10-15 minutes? (Website updates every hour)
4. Is the Notion integration still connected?

**Fix:**
- Double-check Status field
- Wait a bit longer
- Contact your developer if still not working

### Images aren't loading

**Check:**
1. Is the image URL publicly accessible?
2. Is the file size reasonable (<2MB)?
3. Is the image format supported (JPG, PNG)?

**Fix:**
- Re-upload the image to Notion
- Use a different image host
- Compress large images before uploading

### Video won't embed

**Check:**
1. Is it a YouTube or Vimeo link?
2. Is the video set to public (not private)?
3. Did you paste the full URL?

**Fix:**
- Make sure video is public
- Try the "share" link from YouTube/Vimeo
- Contact developer if issue persists

### I accidentally deleted something!

**Fix:**
1. In Notion, go to "Trash" in the sidebar
2. Find your deleted page
3. Click "Restore"
4. Your content will be back!

## 📞 Need Help?

If you can't find the answer here:

1. **Notion Support**: Check [Notion Help Center](https://www.notion.so/help)
2. **Developer**: Contact your web developer
3. **A Curious Tractor**: development@acurioustractor.com.au

## 💡 Tips for Great Stories

### Photography
- Use real photos from actual CAMPFIRE activities
- Get consent from youth and families before publishing photos
- Show authentic moments (not staged)
- Respect cultural protocols around images

### Writing
- Keep it conversational and warm
- Focus on strengths, not deficits
- Let people speak in their own voices
- Use quotes from participants when possible

### Privacy
- **Always get consent** before publishing:
  - Young person's story
  - Photos with identifiable people
  - Names and personal details
- When in doubt, use first names only or pseudonyms
- Be mindful of cultural sensitivities

### Frequency
- Aim for 1-2 stories per month
- Mix up categories (youth, Elders, camps, news)
- Keep a bank of draft stories to publish over time
- Highlight different voices from the community

## 🎯 Content Calendar Ideas

**Monthly:**
- Camp recap story (after each camp)
- Elder wisdom/teaching piece
- Youth journey story

**Quarterly:**
- Program milestone update
- Partnership announcement
- "Where are they now?" alumni story

**As Needed:**
- Special events
- Media coverage
- Community celebrations
- Funding announcements

---

**Remember**: You don't need to be a tech expert to manage this website. The Notion integration makes it as easy as writing a document. If you can use Notion, you can publish to the CAMPFIRE website!

For training or questions, contact your website administrator.
