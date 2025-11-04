# Softball Landing - Project Guide for Claude

## Project Overview

This is a **Jekyll-based static site generator** for creating professional app landing pages. It's currently customized for **Softball Bound**, a college recruiting assistant app for softball players. The template separates content (YAML configuration) from presentation (HTML/CSS), allowing easy customization without touching code.

**Live Site:** https://softballbound.com
**Company:** AllTeamz (https://allteamz.com)
**Contact:** ryan@allteamz.com

## Tech Stack

| Component | Technology |
|-----------|-----------|
| Static Site Generator | Jekyll 3.x |
| Language | Ruby |
| Templating | Liquid |
| Styling | SCSS/CSS |
| Markup | HTML5 + Markdown |
| Icons | Font Awesome 5+ |
| Hosting | GitHub Pages |
| Build Tool | Bundler |

**Key Dependencies (Gemfile):**
- `github-pages` - GitHub Pages environment and Jekyll
- `jekyll-seo-tag` - SEO optimization plugin

## Project Structure

```
softball-landing/
├── _config.yml              # Main configuration - ALL content customization here
├── _includes/               # Reusable HTML components
│   ├── header.html          # Navigation header with logo
│   ├── footer.html          # Footer with social links
│   ├── features.html        # Feature list display
│   ├── featured_review.html # User review section
│   ├── screencontent.html   # App screenshot/video display
│   ├── appstoreimages.html  # App store links
│   └── [SEO/Analytics]      # og.html, twitter.html, ga.html
├── _layouts/                # Jekyll layout templates
│   ├── default.html         # Main landing page layout
│   └── page.html            # Sub-page layout (privacy, changelog)
├── _pages/                  # Content pages
│   ├── changelog.md         # App changelog/release notes
│   └── privacypolicy.md     # Privacy policy
├── _sass/                   # SCSS stylesheets (1,759 lines)
│   ├── base.scss            # Typography, fonts, resets
│   ├── layout.scss          # Layout, spacing, components
│   └── github-markdown.scss # Markdown-specific styling
├── assets/                  # Static assets
│   ├── images/              # Device frames, buttons, icons
│   ├── screenshot/          # App screenshots
│   └── videos/              # Video files (webm, ogg, mp4, mov)
├── index.html               # Main entry point (uses default layout)
├── main.scss                # Master SCSS with theme variables
├── Gemfile                  # Ruby dependencies
└── CNAME                    # Custom domain configuration
```

## Setup Instructions

### Prerequisites
- Ruby 2.7+ installed
- Bundler gem installed: `gem install bundler`

### Local Development Setup
```bash
# 1. Clone the repository
cd /home/user/softball-landing

# 2. Install dependencies
bundle install

# 3. Start local development server
jekyll serve
# OR with bundle:
bundle exec jekyll serve

# 4. View site at http://localhost:4000
```

### Build for Production
```bash
# Build static files to _site/ directory
jekyll build
# OR:
bundle exec jekyll build
```

## Key Configuration File: _config.yml

**This is the single source of truth for ALL content.** The entire landing page is customized through this YAML file without editing HTML/CSS.

### Important Configuration Sections

#### App Information
```yaml
ios_app_id: 1222443580              # iTunes Connect app ID
app_name: "Softball Bound"          # Auto-populated from App Store
app_price: "$Free"                  # Auto-populated from App Store
app_description: "Own the recruiting process..."
```

#### Company/Author
```yaml
your_name: AllTeamz
your_link: https://allteamz.com
your_city: Los Angeles
email_address: ryan@allteamz.com
facebook_username:
instagram_username: softballbound_app
twitter_username: allteamz
github_username:
youtube_username:
```

#### Theme Colors
```yaml
topbar_color: "#000000"              # Header background color
cover_overlay_color: "#363b3d"       # Header overlay color
device_color: yellow                 # iPhone frame (black/blue/yellow/coral/white)
body_background_color: "#ffffff"
link_color: "#1d63ea"                # Accent/link color
app_title_color: "#ffffff"
app_price_color: "#ffffff"
app_description_color: "#ffffff"
feature_title_color: "#000000"
feature_text_color: "#666666"
```

#### Features (6 customizable features)
```yaml
features:
  - title: "Easy to use interface"
    description: "Sort and view schools by state, division, conference, or name."
    fontawesome_icon_name: sort    # Font Awesome icon name
  # ... add more features
```

#### Featured Review
```yaml
featured_review:
  - stars: ⭐️⭐️⭐️⭐️⭐️
    title: "Great App!"
    subtitle: "by Mark K"
    description: "Very helpful having all this contact information..."
    review_date: "07/13/2020"
```

## Development Workflow

### Making Content Changes
1. **Edit `_config.yml`** for all content changes
2. Restart Jekyll server (changes to `_config.yml` require restart)
3. Preview changes at `localhost:4000`
4. Commit and push to deploy

### Making Style Changes
1. Edit SCSS files in `_sass/` or `main.scss`
2. Jekyll auto-recompiles (no restart needed)
3. Refresh browser to see changes

### Adding New Pages
1. Create markdown file in `_pages/`
2. Add front matter:
   ```yaml
   ---
   layout: page
   title: Your Page Title
   include_in_header: true  # Shows in navigation
   ---
   ```
3. Write content in markdown
4. Jekyll will auto-generate HTML

## Important Files Reference

### Entry Points
- **`index.html`** - Main landing page (3 lines, uses default layout)
- **`_layouts/default.html`** - Complete page structure and sections

### Styling
- **`main.scss`** - Imports theme colors from `_config.yml` and SCSS partials
- **`_sass/base.scss`** - Typography, fonts, resets
- **`_sass/layout.scss`** - Layout, responsive design, component styles
- **`_sass/github-markdown.scss`** - Markdown rendering styles

### Components
- **`_includes/header.html`** - Logo, navigation, app name display
- **`_includes/features.html`** - Loops through `site.features` array
- **`_includes/footer.html`** - Social icons, company info, links
- **`_includes/screencontent.html`** - Video/screenshot rendering with device frame
- **`_includes/appstoreimages.html`** - App Store and Play Store buttons

### Content Pages
- **`_pages/changelog.md`** - App version history (included in header nav)
- **`_pages/privacypolicy.md`** - Privacy policy (not in nav by default)

## Assets Management

### Images Location
- Device frames: `/assets/images/{color}.png` (black, blue, yellow, coral, white)
- App store badges: `/assets/images/appstore.png`, `/assets/images/playstore.png`
- Header image: `/assets/images/softball_header.jpeg`
- App icon: `/assets/images/sbicon.jpeg`

### Screenshots
Place app screenshots in: `/assets/screenshot/`

### Videos
Place video files in: `/assets/videos/`
- Include multiple formats for browser compatibility: `.webm`, `.ogg`, `.mp4`, `.mov`

## Deployment

### GitHub Pages (Current Setup)
- **Automatic deployment** on push to repository
- Custom domain: `softballbound.com` (configured via CNAME file)
- Branch: Typically deploys from main/master branch
- Build happens automatically on GitHub's servers

### Manual Deployment
If deploying elsewhere:
```bash
jekyll build
# Upload _site/ directory contents to web server
```

## Common Tasks

### Change App Icon
Replace `/assets/images/sbicon.jpeg` with new icon (recommended: 512x512px)

### Change Header Image
Replace `/assets/images/softball_header.jpeg` or update path in `_config.yml`:
```yaml
app_header_image: assets/images/your_new_header.jpeg
```

### Add New Feature
Edit `_config.yml` and add to `features` array:
```yaml
features:
  - title: "Your Feature Title"
    description: "Feature description here"
    fontawesome_icon_name: icon-name  # Browse at fontawesome.com
```

### Change Device Color
Edit `_config.yml`:
```yaml
device_color: yellow  # Options: black, blue, yellow, coral, white
```

### Update Social Links
Edit social usernames in `_config.yml`. Leave blank to hide icons:
```yaml
facebook_username:           # Leave empty to hide
instagram_username: yourhandle
twitter_username: yourhandle
```

### Add Google Analytics
Edit `_config.yml`:
```yaml
google_analytics: UA-XXXXXXXXX-X  # Your GA tracking ID
```

## SEO & Meta Tags

The site includes automatic SEO optimization via `jekyll-seo-tag`:
- Meta descriptions from `_config.yml`
- Open Graph tags for Facebook sharing
- Twitter Card tags for Twitter sharing
- Canonical URLs
- JSON-LD structured data

## Troubleshooting

### Jekyll Won't Start
```bash
# Update dependencies
bundle update

# Clear cache
bundle exec jekyll clean

# Rebuild
bundle exec jekyll serve
```

### Changes Not Showing
- Changes to `_config.yml` require server restart
- Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)
- Clear browser cache

### Build Errors
- Check YAML syntax in `_config.yml` (use YAML linter)
- Ensure all image paths are correct
- Check for missing dependencies: `bundle install`

## Development Branch

**Current Branch:** `claude/create-claude-md-file-011CUoGnAuSnNQgaPxynKFYu`

All development should happen on the designated Claude branch, then pushed with:
```bash
git push -u origin claude/create-claude-md-file-011CUoGnAuSnNQgaPxynKFYu
```

## Template Credit

This landing page is based on the open-source template by Emil Baehr, customized for Softball Bound.

## License

MIT License (see LICENSE file)
