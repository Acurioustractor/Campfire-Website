# Notion Setup Guide for CAMPFIRE Website

This guide walks through setting up Notion as the CMS for your CAMPFIRE website.

## 🎯 Overview

The CAMPFIRE website uses Notion as a content management system (CMS), allowing the team to publish stories and manage content without touching code.

## 📋 Prerequisites

- Notion account (free or paid)
- Website deployed to Vercel (or other hosting)
- 30 minutes to set up

## 🚀 Step-by-Step Setup

### Step 1: Create a Notion Integration

1. **Go to Notion Integrations**
   - Visit https://www.notion.so/my-integrations
   - Log in with your Notion account

2. **Create New Integration**
   - Click "**+ New integration**"
   - **Name**: "CAMPFIRE Website"
   - **Logo**: Upload CAMPFIRE logo (optional)
   - **Associated workspace**: Select your workspace
   - **Type**: Internal integration

3. **Configure Capabilities**
   - ✅ Read content
   - ✅ Update content (optional, for future features)
   - ✅ Insert content (optional)

4. **Submit**
   - Click "**Submit**"
   - Copy the "**Internal Integration Token**"
   - ⚠️ **SAVE THIS TOKEN** - you'll need it later
   - This is your `NOTION_API_KEY`

### Step 2: Create the Blog Database

1. **Create a New Page in Notion**
   - Click "**+ New page**" in your sidebar
   - Name it "**CAMPFIRE Stories**"

2. **Convert to Database**
   - Type `/database` and select "**Table - Inline**"
   - Or click the "**+ New database**" button

3. **Set Up Properties**

   Delete the default properties and add these:

   | Property Name | Type | Options |
   |--------------|------|---------|
   | Title | Title | (default) |
   | Slug | Text | |
   | Published Date | Date | |
   | Status | Select | Draft, Review, Published |
   | Category | Select | Youth Stories, Elder Voices, Camp Updates, News |
   | Featured Image | Files & media | |
   | Author | Person | |
   | Excerpt | Text | |
   | Video Embed | URL | |
   | Audio Embed | URL | |

4. **Configure Select Properties**

   **Status options:**
   - Draft (gray)
   - Review (yellow)
   - Published (green)

   **Category options:**
   - Youth Stories (blue)
   - Elder Voices (purple)
   - Camp Updates (orange)
   - News (green)

5. **Share Database with Integration**
   - Click "**Share**" button (top right)
   - Click "**Add connections**"
   - Select "**CAMPFIRE Website**" integration
   - Click "**Confirm**"

6. **Get Database ID**
   - Copy the database URL from your browser
   - Example: `https://www.notion.so/YOUR_WORKSPACE/abc123def456...`
   - The database ID is the long string after the workspace name
   - It looks like: `abc123def456789...`
   - ⚠️ **SAVE THIS ID** - this is your `NOTION_BLOG_DATABASE_ID`

### Step 3: Create the Site Pages Database (Optional)

If you want to manage some static pages through Notion:

1. **Create Another Database**
   - New page: "**CAMPFIRE Site Pages**"
   - Convert to table database

2. **Set Up Properties**

   | Property Name | Type |
   |--------------|------|
   | Page Name | Title |
   | Slug | Text |

3. **Share with Integration**
   - Click "**Share**" → "**CAMPFIRE Website**"

4. **Get Database ID**
   - Copy the database ID from URL
   - ⚠️ **SAVE THIS** - this is your `NOTION_PAGES_DATABASE_ID`

### Step 4: Add Environment Variables to Vercel

1. **Go to Vercel Dashboard**
   - Visit https://vercel.com
   - Select your CAMPFIRE project

2. **Settings → Environment Variables**
   - Click "**Settings**" tab
   - Click "**Environment Variables**"

3. **Add Variables**

   Add these three variables:

   **Variable 1:**
   - **Name**: `NOTION_API_KEY`
   - **Value**: (paste your Integration Token from Step 1)
   - **Environment**: Production, Preview, Development

   **Variable 2:**
   - **Name**: `NOTION_BLOG_DATABASE_ID`
   - **Value**: (paste your Blog Database ID from Step 2)
   - **Environment**: Production, Preview, Development

   **Variable 3:**
   - **Name**: `NOTION_PAGES_DATABASE_ID`
   - **Value**: (paste your Site Pages Database ID from Step 3)
   - **Environment**: Production, Preview, Development

4. **Save and Redeploy**
   - Click "**Save**"
   - Go to "**Deployments**" tab
   - Click "**Redeploy**" on the latest deployment

### Step 5: Test the Integration

1. **Create a Test Story**
   - Open "CAMPFIRE Stories" database
   - Click "**+ New**"
   - Fill in:
     - **Title**: "Test Story"
     - **Slug**: "test-story"
     - **Published Date**: Today
     - **Status**: "Published"
     - **Category**: "News"
   - Write some content in the page

2. **Wait for Sync**
   - Website updates every hour (configurable)
   - Or manually trigger a rebuild in Vercel

3. **Check the Website**
   - Go to `yourwebsite.com/stories`
   - Look for your test story
   - Click on it to view the full content

4. **If It Works**
   - ✅ You're all set!
   - Delete the test story
   - Start publishing real content

5. **If It Doesn't Work**
   - See [Troubleshooting](#troubleshooting) below

## 🎨 Database Templates

### Template: Youth Story

Create a template in your database:

1. Click "**⌄**" next to "**New**"
2. Select "**+ New template**"
3. Name it "Youth Story Template"
4. Pre-fill:
   - **Category**: Youth Stories
   - **Status**: Draft
5. Add placeholder content structure:

```
# [Youth Name]'s Story

## Background
[Brief intro to the young person]

## The Journey
[What brought them to CAMPFIRE]

## Transformation
[What changed, what they learned]

## Looking Forward
[Their goals and aspirations]

---
*Shared with consent from [Youth Name] and family*
```

### Template: Camp Update

1. Create template: "Camp Update Template"
2. Pre-fill:
   - **Category**: Camp Updates
3. Structure:

```
# [Camp Name] - [Dates]

## Overview
[Location, attendees, purpose]

## Activities
- [Activity 1]
- [Activity 2]
- [Activity 3]

## Highlights
[Special moments, learnings, cultural teachings]

## Photos
[Insert photos here]

## What's Next
[Upcoming camps or follow-up activities]
```

## 🔄 Content Workflow

### Recommended Process

1. **Draft** → Team member writes story
2. **Review** → Brodie/coordinator reviews and approves
3. **Published** → Story goes live on website

### Publishing Schedule

- Stories sync to website **every hour**
- Can be changed in `src/app/stories/page.tsx` (see `revalidate` setting)
- For immediate updates, trigger a Vercel rebuild

## 🚨 Troubleshooting

### "No stories found"

**Possible causes:**
- Integration not connected to database
- Status not set to "Published"
- Environment variables not set correctly

**Fix:**
1. Check database is shared with integration
2. Verify Status = "Published"
3. Check Vercel environment variables
4. Trigger a redeploy

### Images not loading

**Possible causes:**
- Image URLs are private
- Image files too large

**Fix:**
1. Make sure images are publicly accessible
2. Use Notion's image upload (most reliable)
3. Keep images under 2MB

### Database ID errors

**Possible causes:**
- Wrong database ID in environment variables
- Database not shared with integration

**Fix:**
1. Double-check database ID from URL
2. Ensure database is shared with integration
3. Redeploy after fixing

## 📊 Database Views

Set up helpful views in your database:

### View 1: Published Stories
- **Filter**: Status = Published
- **Sort**: Published Date (descending)
- **Use**: See what's live on the website

### View 2: Drafts
- **Filter**: Status = Draft
- **Sort**: Created Time (descending)
- **Use**: Work on stories in progress

### View 3: By Category
- **Group**: Category
- **Filter**: Status = Published
- **Use**: See content distribution

### View 4: Content Calendar
- **Layout**: Timeline or Calendar
- **Date property**: Published Date
- **Filter**: Status = Published or Review
- **Use**: Plan content schedule

## 🎯 Best Practices

### Slugs
- Always lowercase
- Use hyphens, not spaces
- Keep it short and descriptive
- Example: "camp-update-august-2025"

### Featured Images
- Upload directly to Notion (most reliable)
- Landscape orientation (1200x630px ideal)
- High quality but compressed (<500KB)

### Status Management
- Keep most stories in "Draft" while writing
- Move to "Review" when ready for approval
- Only "Published" stories appear on website
- Archive old stories by changing to "Draft"

### Categories
- Use consistently
- Don't create new categories without updating code
- Balance content across categories

## 📱 Mobile Management

You can manage content from the Notion mobile app:

1. Download Notion app (iOS/Android)
2. Log in to your account
3. Navigate to "CAMPFIRE Stories"
4. Create and edit stories on the go
5. Change Status to "Published" when ready

## 🔐 Security

- **Never share** your Integration Token publicly
- **Don't commit** the token to GitHub
- **Use** Vercel environment variables (secure)
- **Limit** who has edit access to the database
- **Review** published content before setting Status to Published

## 📞 Support

If you need help:

1. **Notion Support**: https://www.notion.so/help
2. **Vercel Support**: https://vercel.com/support
3. **Developer**: Contact your web developer
4. **A Curious Tractor**: development@acurioustractor.com.au

## 🎉 You're Done!

Once set up, your workflow is simple:

1. Write story in Notion
2. Set Status to "Published"
3. Story appears on website within an hour

No code, no deployment, no stress! 🔥
