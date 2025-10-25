# Open Graph Image Requirements

## ✅ Default Image Already Configured

The Plateau State logo (`default.svg`) is now set as the default fallback image for all pages. This will display when specific page images are not available.

## Optional: Custom Images for Link Previews

If you want to create custom images for specific sections (optional), you can add the following images to the `public/images/` directory:

### 1. **og-default.jpg** (Main/Home Page)

- **Dimensions:** 1200 x 630 pixels
- **Format:** JPG or PNG
- **Purpose:** Default image for home page and fallback for pages without specific images
- **Content Suggestion:** Plateau State Government logo, landmark (e.g., Jos Plateau), or government house

### 2. **og-news.jpg** (News Section)

- **Dimensions:** 1200 x 630 pixels
- **Format:** JPG or PNG
- **Purpose:** Image for news listing page
- **Content Suggestion:** News/media themed image with Plateau State branding

### 3. **og-government.jpg** (Government Section)

- **Dimensions:** 1200 x 630 pixels
- **Format:** JPG or PNG
- **Purpose:** Image for government structure page
- **Content Suggestion:** Government house or official government imagery

## Image Guidelines

### Technical Requirements

- **Minimum dimensions:** 1200 x 630 pixels (recommended)
- **Aspect ratio:** 1.91:1 (Facebook/LinkedIn standard)
- **File size:** Keep under 8MB (ideally under 1MB for faster loading)
- **Format:** JPG (preferred) or PNG
- **Color mode:** RGB

### Design Best Practices

1. **Text overlay:** If adding text, keep it large and readable (minimum 40px font size)
2. **Safe zone:** Keep important content within the center 80% of the image
3. **Branding:** Include Plateau State Government logo
4. **Contrast:** Ensure good contrast for readability on all platforms
5. **Mobile preview:** Remember the image will be cropped on mobile devices

### Content Suggestions

- Use high-quality photos of Plateau State landmarks
- Include the Plateau State Government seal/logo
- Add a tagline like "Plateau State Government - Official Portal"
- Use the official government colors
- Avoid cluttered designs - keep it simple and professional

## Testing Your Images

After adding your images, test them using these tools:

1. **Facebook Sharing Debugger**

   - URL: https://developers.facebook.com/tools/debug/
   - Tests: Facebook, WhatsApp, LinkedIn previews

2. **Twitter Card Validator**

   - URL: https://cards-dev.twitter.com/validator
   - Tests: X (Twitter) previews

3. **LinkedIn Post Inspector**
   - URL: https://www.linkedin.com/post-inspector/
   - Tests: LinkedIn previews

## Current Image Locations

Place your images in: `public/images/`

- `public/images/og-default.jpg` - Home page default
- `public/images/og-news.jpg` - News section
- `public/images/og-government.jpg` - Government section

## Dynamic MDA Images

For individual MDA pages, the system automatically uses:

1. **First priority:** The MDA's hero image (if available from the API)
2. **Fallback:** `default.svg` (Plateau State logo) if no hero image exists

The system is smart - it will always show the best available image for each page!

## Additional Notes

- Images must be publicly accessible (not blocked by robots.txt)
- Use absolute URLs in production (handled automatically by the code)
- Update images periodically to keep content fresh
- Consider creating seasonal variations for special events

## Need Help?

If you need assistance creating these images:

1. Use Canva (free templates available)
2. Use Adobe Express
3. Hire a graphic designer
4. Use existing high-quality photos from Plateau State events

Remember: These images are the first impression people get when sharing your links. Make them count!
