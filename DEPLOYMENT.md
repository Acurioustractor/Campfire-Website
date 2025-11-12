# CAMPFIRE Website - Deployment Guide

This guide covers deploying the CAMPFIRE website to production.

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

**Why Vercel?**
- Built for Next.js (seamless integration)
- Automatic deployments from GitHub
- Global CDN for fast loading
- Free SSL certificates
- Environment variable management
- Generous free tier

#### Steps to Deploy

1. **Push Code to GitHub**
   ```bash
   git add .
   git commit -m "Initial CAMPFIRE website"
   git push origin main
   ```

2. **Sign Up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

3. **Import Project**
   - Click "**Add New Project**"
   - Select your GitHub repository
   - Click "**Import**"

4. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

5. **Add Environment Variables**

   Click "**Environment Variables**" and add:

   ```env
   NOTION_API_KEY=your_notion_integration_token
   NOTION_BLOG_DATABASE_ID=your_blog_database_id
   NOTION_PAGES_DATABASE_ID=your_pages_database_id
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   NEXT_PUBLIC_SITE_NAME=CAMPFIRE
   ```

   Optional (if using Cloudinary):
   ```env
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

6. **Deploy**
   - Click "**Deploy**"
   - Wait 2-3 minutes for build to complete
   - Your site will be live at `your-project.vercel.app`

7. **Set Up Custom Domain**
   - Go to Project Settings → Domains
   - Add your domain (e.g., `campfire-mountisa.org`)
   - Follow DNS configuration instructions
   - Vercel will auto-provision SSL

#### Automatic Deployments

Once connected to GitHub:
- Push to `main` branch → Automatic production deployment
- Push to other branches → Automatic preview deployment
- Pull requests → Automatic preview links

### Option 2: Netlify

1. **Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Functions directory**: `netlify/functions` (if using)

2. **Environment Variables**
   - Add same variables as Vercel
   - Go to Site Settings → Build & Deploy → Environment

3. **netlify.toml** (Optional)
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

4. **Deploy**
   - Connect GitHub repository
   - Netlify auto-deploys on push

#### Netlify Forms

To use Netlify Forms for referrals/contact:

1. Add `data-netlify="true"` to form elements
2. Update form action to `netlify` endpoint
3. Forms will appear in Netlify dashboard

### Option 3: Cloudflare Pages

1. **Connect Repository**
   - Go to Cloudflare Pages
   - Connect GitHub

2. **Build Settings**
   - **Build command**: `npm run build`
   - **Build output**: `.next`
   - **Framework**: Next.js

3. **Environment Variables**
   - Add Notion and other variables

4. **Deploy**
   - Cloudflare builds and deploys

## 🔧 Post-Deployment Setup

### 1. Verify Deployment

Check these pages work:
- [ ] Home page loads
- [ ] About page loads
- [ ] Stories page loads (may be empty until Notion is set up)
- [ ] Forms are accessible
- [ ] Mobile responsive
- [ ] Images load

### 2. Set Up Notion Integration

Follow [NOTION_SETUP.md](./NOTION_SETUP.md) to:
- Create Notion integration
- Set up databases
- Connect to website

### 3. Test Forms

**Referral Form:**
1. Go to `/refer`
2. Fill out test submission
3. Check where form data goes (email, dashboard, etc.)

**Contact Form:**
1. Go to `/contact`
2. Submit test message
3. Verify receipt

### 4. Configure DNS

If using custom domain:

**For Vercel:**
1. Add A record: `76.76.21.21`
2. Add CNAME: `cname.vercel-dns.com`

**For Netlify:**
1. Add CNAME: `your-site.netlify.app`

**For Cloudflare:**
1. Already handled if using Cloudflare Pages

### 5. Set Up Analytics (Optional)

**Vercel Analytics:**
- Enable in Vercel dashboard (free)
- Tracks page views, performance

**Google Analytics:**
1. Create GA4 property
2. Add tracking ID to `.env`:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. Add Google Analytics script to `src/app/layout.tsx`

### 6. Performance Optimization

**Enable Caching:**
- Vercel: Automatic
- Netlify: Configure in `netlify.toml`
- Cloudflare: Use Cache Rules

**Image Optimization:**
- Set up Cloudinary (recommended)
- Or use Next.js Image Optimization
- Or upload optimized images to Notion

## 🔐 Security

### Environment Variables

**Never commit these to Git:**
- `NOTION_API_KEY`
- `CLOUDINARY_API_SECRET`
- Any API keys or secrets

**Store in:**
- Vercel/Netlify/Cloudflare environment variables
- Local `.env.local` file (gitignored)

### SSL Certificates

All platforms provide free SSL:
- Vercel: Automatic
- Netlify: Automatic
- Cloudflare: Automatic

### Form Security

**Protect against spam:**
- Add honeypot fields
- Use Netlify/Vercel form spam detection
- Add reCAPTCHA (optional)

## 🔄 Updates and Maintenance

### Content Updates

- **Stories**: Edit in Notion → auto-updates website (hourly)
- **Static pages**: Push code changes → auto-deploys

### Code Updates

1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub
4. Platform auto-deploys

### Rollback

**Vercel:**
1. Go to Deployments
2. Find previous working deployment
3. Click "..." → "Promote to Production"

**Netlify:**
1. Go to Deploys
2. Find previous deploy
3. Click "Publish deploy"

## 📊 Monitoring

### Uptime Monitoring

Use a service like:
- UptimeRobot (free)
- Pingdom
- StatusCake

Check these URLs:
- `https://your-domain.com/`
- `https://your-domain.com/stories`
- `https://your-domain.com/refer`

### Performance Monitoring

**Vercel Analytics:**
- Real user metrics
- Core Web Vitals
- Free tier available

**Google PageSpeed Insights:**
- Test: https://pagespeed.web.dev/
- Aim for 90+ score

### Error Tracking

**Vercel:**
- Built-in error logs
- Functions → Logs

**Sentry (Optional):**
- Real-time error tracking
- Set up at sentry.io

## 🚨 Troubleshooting

### Build Failures

**Issue**: Build fails in Vercel/Netlify

**Fix:**
1. Check error logs in deployment dashboard
2. Common issues:
   - Missing environment variables
   - TypeScript errors
   - Missing dependencies
3. Test build locally: `npm run build`

### Environment Variables Not Working

**Issue**: Notion stories not loading

**Fix:**
1. Verify variables are set in platform dashboard
2. Check variable names match exactly
3. Redeploy after adding variables

### Slow Loading

**Issue**: Website loads slowly

**Fix:**
1. Check Vercel/Netlify deployment region
2. Enable CDN caching
3. Optimize images (use Cloudinary or compress)
4. Check Notion API response times

### Forms Not Working

**Issue**: Form submissions not received

**Fix:**
1. Check form action endpoint
2. Verify Netlify Forms is enabled
3. Check spam folder for emails
4. Test with browser dev tools (Network tab)

## 📱 Domain Setup

### Registrar Configuration

If you own `campfire-mountisa.org`:

**Add DNS Records:**

For Vercel:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

For Netlify:
```
Type: CNAME
Name: @
Value: your-site.netlify.app

Type: CNAME
Name: www
Value: your-site.netlify.app
```

**Wait for DNS propagation:**
- Can take 1-24 hours
- Check: `dig your-domain.com`

## ✅ Deployment Checklist

Before going live:

- [ ] All pages load correctly
- [ ] Mobile responsive (test on phone)
- [ ] Forms work and send notifications
- [ ] Notion integration connected
- [ ] Test story publishes successfully
- [ ] Images load properly
- [ ] SSL certificate active (https://)
- [ ] Custom domain configured
- [ ] Contact information updated (phone, email)
- [ ] Social media links added (if applicable)
- [ ] Analytics tracking set up
- [ ] Error monitoring configured
- [ ] Uptime monitoring configured
- [ ] Team trained on content management
- [ ] Backup plan documented

## 📞 Support

**Platform Support:**
- Vercel: https://vercel.com/support
- Netlify: https://www.netlify.com/support/
- Cloudflare: https://support.cloudflare.com/

**Developer Support:**
- Email: development@acurioustractor.com.au
- Documentation: See README.md

## 🎉 Go Live!

Once everything is tested and working:

1. Announce on social media
2. Update email signatures
3. Share with partners
4. Train team on content management
5. Start publishing stories!

**🔥 CAMPFIRE website is live! 🔥**
