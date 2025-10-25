# Link Preview Implementation Guide

## ✅ What Has Been Implemented

I've successfully added comprehensive Open Graph and Twitter Card metadata to your Plateau State Government website. This will enable rich link previews when sharing links on:

- 📱 **WhatsApp**
- 🐦 **X (Twitter)**
- 💼 **LinkedIn**
- 📘 **Facebook**
- 💬 **Telegram**
- 📧 **Email clients**
- 🔗 **Other social platforms**

---

## 📁 Files Updated

### 1. **Root Layout** (`src/app/layout.tsx`)

Added comprehensive metadata for the entire site including:

- ✅ Open Graph tags (Facebook, WhatsApp, LinkedIn)
- ✅ Twitter Card tags
- ✅ SEO metadata (title, description, keywords)
- ✅ Robot indexing rules
- ✅ Locale settings (en_NG)

### 2. **MDA Pages** (`src/app/(mda)/mda/one/page.tsx`)

Added dynamic metadata that changes for each MDA:

- ✅ Dynamic title based on MDA name
- ✅ Dynamic description from MDA data
- ✅ Dynamic image (uses MDA hero image or fallback)
- ✅ Structured data (JSON-LD) for better SEO
- ✅ Keywords optimization
- ✅ Twitter handle (@PlateauStateGov)

### 3. **News Page** (`src/app/(main)/news/page.tsx`)

Added metadata specific to news section:

- ✅ News-specific title and description
- ✅ Dedicated OG image for news
- ✅ Twitter Card for news sharing

### 4. **Government Page** (`src/app/(main)/government/page.tsx`)

Added metadata for government structure page:

- ✅ Government-specific title and description
- ✅ Dedicated OG image for government section
- ✅ Twitter Card for government page sharing

---

## 🖼️ Images Configuration

### ✅ **Default Image Already Set!**

The Plateau State logo (`default.svg`) is now configured as the default fallback image for all pages. This means:

- ✅ **Home page** - Shows `default.svg`
- ✅ **News page** - Shows `default.svg`
- ✅ **Government page** - Shows `default.svg`
- ✅ **Tourism page** - Shows `default.svg`
- ✅ **MDA pages** - Shows MDA hero image if available, otherwise `default.svg`

### 📸 Optional: Custom Images (Not Required)

If you want to create custom images for specific sections in the future, you can add these to `public/images/`:

- `og-news.jpg` - Custom image for news section
- `og-government.jpg` - Custom image for government section
- `og-tourism.jpg` - Custom image for tourism section

**Note:** The system works perfectly with just the default.svg logo. Custom images are optional enhancements.

**📖 See `public/images/OG_IMAGE_REQUIREMENTS.md` for more details.**

---

## 🔧 Environment Variables

Make sure you have this in your `.env` file:

```env
NEXT_PUBLIC_FRONTEND_URL=http://plateaustate.gov.ng/
```

Or update it to your actual domain if different.

---

## 🧪 Testing Your Link Previews

After deploying, test your links using these tools:

### **1. Facebook Sharing Debugger**

- URL: https://developers.facebook.com/tools/debug/
- Tests: Facebook, WhatsApp, LinkedIn
- **How to use:**
  1. Paste your URL
  2. Click "Debug"
  3. Click "Scrape Again" to refresh cache
  4. View preview

### **2. Twitter Card Validator**

- URL: https://cards-dev.twitter.com/validator
- Tests: X (Twitter) previews
- **How to use:**
  1. Paste your URL
  2. Click "Preview card"
  3. View how it appears on Twitter

### **3. LinkedIn Post Inspector**

- URL: https://www.linkedin.com/post-inspector/
- Tests: LinkedIn previews
- **How to use:**
  1. Paste your URL
  2. Click "Inspect"
  3. View preview

### **4. WhatsApp Testing**

Simply paste your link in WhatsApp chat and see the preview!

---

## 📋 What Each Platform Will Show

### **Home Page** (http://plateaustate.gov.ng/)

- **Title:** Plateau State Government - Official Website
- **Description:** Official portal for governance, services, and development updates...
- **Image:** default.svg (Plateau State logo) ✅

### **MDA Pages** (e.g., http://plateaustate.gov.ng//mda/one?slug=ministry-of-agriculture)

- **Title:** [MDA Name] - Plateau State Government
- **Description:** [MDA Description]
- **Image:** MDA hero image (if available) or default.svg as fallback ✅

### **News Page** (http://plateaustate.gov.ng//news)

- **Title:** News & Updates - Plateau State Government
- **Description:** Stay updated with the latest news, announcements...
- **Image:** default.svg (Plateau State logo) ✅

### **Government Page** (http://plateaustate.gov.ng//government)

- **Title:** Government of Plateau State - Leadership & Structure
- **Description:** Learn about the Government of Plateau State...
- **Image:** default.svg (Plateau State logo) ✅

---

## 🚀 Deployment Checklist

Before going live, ensure:

- [x] Default OG image (`default.svg`) is in place ✅
- [x] All metadata is configured ✅
- [ ] `NEXT_PUBLIC_FRONTEND_URL` is set correctly in environment variables
- [ ] Twitter handle is correct (@PlateauStateGov or update if different)
- [ ] Deploy to production
- [ ] Test all pages with Facebook Debugger
- [ ] Test all pages with Twitter Card Validator
- [ ] Test sharing on WhatsApp
- [ ] Clear cache if needed (use "Scrape Again" in Facebook Debugger)

---

## 🎨 Creating OG Images - Quick Guide

### **Option 1: Canva (Recommended)**

1. Go to Canva.com
2. Search for "Open Graph Image" template
3. Use 1200 x 630 px dimensions
4. Add Plateau State branding
5. Download as JPG

### **Option 2: Adobe Express**

1. Go to Adobe Express
2. Create custom size: 1200 x 630 px
3. Design your image
4. Export as JPG

### **Option 3: Photoshop/Design Software**

1. Create new document: 1200 x 630 px, 72 DPI
2. Design with safe zone (center 80%)
3. Include logo and branding
4. Save as JPG (quality 80-90%)

---

## 🔍 SEO Benefits

Beyond link previews, this implementation also improves:

- ✅ **Google Search Rankings** - Better structured data
- ✅ **Click-Through Rates** - Rich snippets in search results
- ✅ **Social Engagement** - More attractive shared links
- ✅ **Brand Consistency** - Uniform appearance across platforms
- ✅ **Mobile Experience** - Optimized for mobile sharing
- ✅ **Accessibility** - Proper alt text and descriptions

---

## 📱 Mobile Optimization

The metadata is optimized for mobile devices:

- Images scale properly on small screens
- Descriptions are concise for mobile previews
- Titles are short enough to display fully
- Safe zones prevent important content from being cropped

---

## 🔄 Updating Metadata

To update metadata for specific pages in the future:

1. **For static pages:** Edit the `metadata` export in the page file
2. **For dynamic pages (like MDA):** Update the Head component content
3. **For site-wide changes:** Edit `src/app/layout.tsx`

---

## 🐛 Troubleshooting

### **Link preview not showing?**

1. Check if images exist in `public/images/`
2. Verify image dimensions (1200 x 630 px)
3. Clear platform cache using debugger tools
4. Ensure images are publicly accessible
5. Check `NEXT_PUBLIC_FRONTEND_URL` is set correctly

### **Old preview showing?**

1. Use Facebook Debugger's "Scrape Again" button
2. Wait 24 hours for cache to expire naturally
3. Update the og:image URL (add version parameter)

### **Image not displaying?**

1. Check file path is correct
2. Verify image is in `public/images/` folder
3. Ensure image is not blocked by robots.txt
4. Check image file size (should be under 8MB)

---

## 📞 Support

If you need help:

1. Check the Facebook Debugger error messages
2. Review the OG_IMAGE_REQUIREMENTS.md file
3. Test with different platforms
4. Verify environment variables are set

---

## 🎉 Success!

Once everything is set up, your links will look professional and engaging when shared on any platform. This will:

- Increase click-through rates
- Improve brand recognition
- Enhance user trust
- Boost social media engagement

**Remember:** The first impression matters. Make sure your OG images are high-quality and represent Plateau State Government professionally!

---

## 📝 Next Steps

1. ✅ **Default image configured** - `default.svg` is ready to use!
2. **Set environment variable** - Ensure `NEXT_PUBLIC_FRONTEND_URL` is set
3. **Deploy to production**
4. **Test with all platforms** (Facebook Debugger, Twitter Card Validator, WhatsApp)
5. **Share and enjoy!** 🎊

**Optional:** Create custom images for specific sections (see OG_IMAGE_REQUIREMENTS.md)

---

_Last Updated: [Current Date]_
_Plateau State Government - Digital Services_
