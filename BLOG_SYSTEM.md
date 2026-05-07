# Local Blog System Documentation

## Overview

The portfolio now uses a local blog system instead of fetching from external APIs (Dev.to). All blog data is managed entirely within the codebase.

## File Structure

```
utils/
└── data/
    └── blogs.js          # Local blogs data
```

## Blog Data Format

Each blog post in `utils/data/blogs.js` has the following structure:

```javascript
{
  id: 1,
  title: "Blog Title",
  description: "Brief description of the blog post",
  cover_image: "https://image-url.com/image.jpg",
  published_at: ISO_DATE_STRING,  // e.g., "2025-04-19T10:30:00.000Z"
  url: "#",                        // Link to blog (currently set to #)
  reading_time_minutes: 8,         // Estimated reading time
  public_reactions_count: 24,      // Number of likes/reactions
  comments_count: 5                // Number of comments
}
```

## How It Works

### Homepage Blog Section

- **File**: `app/page.js`
- **Import**: `import { blogsData } from "@/utils/data/blogs"`
- **Function**: `getData()` - Returns shuffled blog array
- **Display**: Shows 6 random blogs using `<Blog blogs={blogs} />`

### Blog Page

- **File**: `app/blog/page.js`
- **Import**: `import { blogsData } from "@/utils/data/blogs"`
- **Display**: Shows all blogs in a grid layout

### Blog Card Component

- **File**: `app/components/homepage/blog/blog-card.jsx`
- **Display**: Individual blog card with image, title, description, and metadata

## Current Blogs

The system includes 8 sample blog posts covering:

1. Playwright Testing
2. Cucumber BDD
3. CI/CD Pipelines with Jenkins
4. REST API Testing
5. MERN Stack Development
6. Advanced Java Concurrency
7. PostgreSQL Performance Tuning
8. Docker Containerization

## Adding New Blogs

To add a new blog:

1. Open `utils/data/blogs.js`
2. Add a new object to the `blogsData` array:

```javascript
{
  id: 9,
  title: "Your Blog Title",
  description: "Your blog description",
  cover_image: "https://images.unsplash.com/...",
  published_at: new Date(Date.now() - X * 24 * 60 * 60 * 1000).toISOString(),
  url: "#",
  reading_time_minutes: 10,
  public_reactions_count: 15,
  comments_count: 3,
}
```

3. The blog will automatically appear on both the homepage and blog page

## Customization

### Images

- All blogs use Unsplash images (free, no attribution required)
- Replace `cover_image` URLs with your own images

### Published Date Calculation

- `Date.now() - X * 24 * 60 * 60 * 1000` calculates dates X days ago
- Example: `Date.now() - 15 * 24 * 60 * 60 * 1000` = 15 days ago

### Engagement Metrics

- `public_reactions_count`: Customize to show engagement
- `comments_count`: Set to 0 or any number

## Local Development

No external API calls needed:

- ✅ Works completely offline
- ✅ No API rate limits
- ✅ Instant loading
- ✅ Full control over content

## Benefits

1. **No External Dependencies** - No reliance on Dev.to or any API
2. **Full Control** - Manage all blog content directly
3. **Better Performance** - No API calls, instant rendering
4. **Offline Capability** - Works without internet
5. **Easy Maintenance** - Simple JSON-like structure
6. **SEO Friendly** - Static content is easily indexed

## Future Enhancements

Consider these improvements:

- Store individual blogs as Markdown files
- Add a CMS integration
- Implement blog categories/tags
- Add blog search functionality
- Generate static blog pages at build time
