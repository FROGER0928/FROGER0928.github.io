# Design Guidelines: Student Personal Life Website

## Design Approach

**Reference-Based Approach**: Drawing inspiration from Instagram (photo-centric social), Notion (personal organization), and Pinterest (visual collection) to create a warm, inviting personal space.

**Core Principles**:
- Playful minimalism with rounded, friendly shapes
- Card-based layouts for easy content scanning
- Generous whitespace for a clean, uncluttered feel
- Asymmetric grids to add personality and visual interest

---

## Typography

**Font Families** (Google Fonts):
- Primary: 'Quicksand' (400, 500, 600, 700) - rounded, friendly sans-serif for headings
- Body: 'Inter' (400, 500) - clean, readable for content
- Accent: 'Caveat' (400, 600) - handwritten style for personal touches (diary titles, quotes)

**Type Scale**:
- Page Titles: text-4xl md:text-5xl font-bold (Quicksand)
- Section Headers: text-2xl md:text-3xl font-semibold (Quicksand)
- Card Titles: text-lg font-medium (Quicksand)
- Body Text: text-base (Inter)
- Captions/Meta: text-sm (Inter)
- Handwritten Notes: text-xl md:text-2xl (Caveat)

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 3, 4, 6, 8, 12 for consistent rhythm
- Card padding: p-6
- Section spacing: py-12 md:py-16
- Grid gaps: gap-4 md:gap-6
- Element margins: mb-4, mt-6, mx-8

**Container Strategy**:
- Main content: max-w-7xl mx-auto px-4 md:px-6
- Text-heavy content: max-w-4xl
- Centered cards: max-w-2xl

---

## Component Library

### Navigation
**Top Navigation Bar**:
- Sticky header with blur backdrop
- Logo/name on left (with small cute icon)
- Horizontal menu for desktop: Home, Works, Diary, Life, Photos
- Mobile: Hamburger menu with slide-in drawer
- Profile avatar in top-right corner (small, rounded-full)

### Homepage Dashboard
**Hero Section** (60vh):
- Large welcoming message with Quicksand font
- Subtitle in Caveat font: "記錄我的每一天 ✨"
- No background image needed - use clean space with decorative elements (stars, hearts, sparkles as small SVG icons)

**Stats Cards** (3-column grid on desktop, stack on mobile):
- Total works count card
- Recent diary entries count
- Photos uploaded count
- Each card: rounded-2xl shadow-sm with icon, number, and label

**Latest Updates Feed** (2-column on desktop):
- Left: 2-3 recent diary entries preview (card style)
- Right: Mini photo grid (2x2 latest photos)

### Works/Portfolio Page
**Masonry Grid Layout**:
- Use 3 columns on desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Each work card: rounded-xl overflow-hidden
- Hover effect: slight scale and shadow increase
- Card contents: Featured image (aspect-video), title, short description, tags (pill-shaped)
- Tags: inline-flex gap-2 with rounded-full badges

### Diary Page
**Timeline View**:
- Vertical timeline line (border-l-2 with dashed style)
- Diary entries as cards attached to timeline
- Date markers with circular nodes
- Each entry: rounded-2xl card with date, title (Caveat), content preview, mood icon
- "Add New Entry" floating button (bottom-right, rounded-full, large)

### Life Records Page
**Calendar + List Hybrid**:
- Mini calendar view at top showing days with entries (marked with dots)
- Below: Activity cards in grid (2-column on desktop)
- Each activity: icon, title, date, description
- Categories: Study, Friends, Food, Travel, Hobbies (filterable)

### Photos Page
**Photo Grid Wall**:
- Responsive grid: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Square thumbnails (aspect-square)
- Rounded corners (rounded-lg)
- Hover: slight brightness increase
- Click: Opens lightbox modal
- Upload area: Dashed border card at top, drag-and-drop zone

### Shared Card Component
**Standard Card**:
- Background: Use backdrop-blur effect for depth
- Border: border border-opacity-20 
- Corners: rounded-xl or rounded-2xl
- Shadow: shadow-sm hover:shadow-md transition
- Padding: p-6

### Buttons
**Primary Action**:
- Rounded-full px-6 py-3
- Font: font-medium
- Add icons from Heroicons (outline style)

**Secondary Action**:
- Rounded-lg px-4 py-2
- Border style with transparent background

### Icons
Use **Heroicons** (outline) via CDN for all interface icons:
- Heart for diary/favorites
- Camera for photos
- Folder for works
- Calendar for life records
- Plus for add actions
- Include decorative icons: Star, Sparkles, Heart (solid) scattered in headers

---

## Images

**Photo Usage**:
- **No hero images** - keep homepage clean with typography focus
- **Works page**: Each portfolio item requires a featured image (landscape orientation)
- **Photos page**: User-uploaded personal photos in grid
- **Diary entries**: Optional thumbnail images for entries
- **Profile**: Small avatar in navigation (rounded-full, w-10 h-10)

**Image Treatment**:
- All images: rounded corners (rounded-lg minimum)
- Aspect ratios: aspect-video for works, aspect-square for photos
- Loading state: Placeholder with cute icon/text

---

## Multi-Column Strategy

**3-Column Layouts**:
- Homepage stats cards
- Works portfolio grid
- Photos grid (4 columns on large screens)

**2-Column Layouts**:
- Homepage latest updates (diary + photos)
- Life records activity cards

**Single Column**:
- All mobile views
- Diary timeline
- Individual content pages

---

## Animations

**Minimal, Purposeful Motion**:
- Card hover: transform scale-105 transition-transform duration-200
- Page transitions: Simple fade-in
- Button press: Active state with slight scale-95
- No complex scroll animations or parallax effects

---

## Accessibility

- All interactive elements have min-height of h-10 (touch-friendly)
- Form inputs: Clear labels, placeholder text, focus states (ring-2)
- Sufficient contrast for all text
- Images include alt text descriptors
- Keyboard navigation support for all interactive elements