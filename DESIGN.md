# The Munching Queen Design System

## Brand Direction

**Bright playful-premium pantry:** family snack brand with clean cream surfaces, confident berry typography, fresh pastel product stages, and real product photography as primary visual.

Visual priority:
1. Product packaging and lifestyle photography.
2. Clear product family names and exact client copy.
3. Compact filters and claims that help visitors browse.
4. Decorative styling only when it supports hierarchy.

No mascot clusters, floating packaging, stickers, crumbs, tilted strips, or brown-dominant panels. Layout stays plain, modern, bright, and easy to scan.

## Color Tokens

| Token | Hex | Role |
|---|---|---|
| Background Pink | `#FFF3F6` | Main page canvas |
| Background Cream | `#FFF8F3` | Header, cards, forms, and quiet surfaces |
| Heading / Active | `#8B3E5F` | Navigation, filters, active controls, links |
| Heading Pink | `#EF668E` | Main headings and prominent product-family titles |
| Body Text | `#6A4B3C` | Long-form body copy only |
| Accent Orange | `#F2B36B` | Warm highlights and selected image stages |
| Ingredients Green | `#4F7258` | Positive claims and ingredient-led accents |
| Blush | `#FFD4DF` | Soft hover and secondary backgrounds |
| Mint | `#DBE8B9` | Claim badges and certification accents |
| Powder | `#DCEBF1` | Cool product stages |

Rules:
- Brown is limited to readable body copy. Never use brown for navigation, filters, active states, or large backgrounds.
- Header and controls use Berry, Heading Pink, Blush, and Cream.
- Active controls use Berry background with white text.
- Claim badges use Mint background with Ingredients Green text.
- Canvas remains bright. Pastels support product photography, not compete with it.
- `src/styles/global.css` is source of truth for technical token values.

## Typography

- Display and body: **Poppins**.
- Headings: 700–900, tight tracking, pink or berry.
- Body: 400–600, Body Text, line-height 1.5–1.65.
- Utility labels: uppercase, 800, tracking `0.08em–0.11em`, Berry.
- Product Profile text must match client PDF. Do not rewrite or shorten English copy.
- Bilingual text remains available through `data-en` and `data-id`.

## Layout

- Mobile-first, maximum container width 1180px.
- Product grid: one column; two from 680px; three from 1024px.
- Section spacing: approximately 4rem mobile and up to 7rem desktop.
- Home hero: copy left, one lifestyle photo right; stacked on mobile.
- Products hero: `Our Products`, filters directly below, one lifestyle photo alongside.
- Category headings align both columns from the top.
- Categories may use brief-specific headings, captions, and claim visibility.

## Shape And Depth

- Product cards: 24–32px radius.
- Controls and compact labels: pill radius unless brief shows a softer rectangular chip.
- Borders use translucent Berry, not brown.
- Shadows use low-opacity Berry or neutral text color.
- Certification marks use clean cream cards with a thin Berry border and soft shadow; show logo and certification name only, without captions.
- Avoid glass effects except subtle header blur for sticky-header readability.

## Components

### Header

- Background Cream with subtle translucency.
- Brand title, nav labels, menu icon, and active language use Berry.
- Brand tagline uses Heading Pink.
- Navigation track uses pale Blush; active indicator uses Heading Pink mixed with Cream.
- Top accent transitions Berry to Heading Pink to Accent Orange.
- Sticky state may add subtle Berry shadow, never brown.

### Buttons

- Primary: Berry background, white text.
- Secondary: transparent with Berry border and text.
- Hover uses at most 2px vertical movement.
- Focus ring always visible in Berry.

### Product Cards

- Image stage uses product-specific pastel.
- Card body shows sizes, product name, applicable claims, and explicit `View details` action.
- Do not show short descriptive caption in cards.
- Claims can differ by product. Never apply ingredient-specific claims to unrelated variants.
- Product Profile appears in modal and follows PDF wording.

### Product Filters

- Text and border use Berry; never brown.
- Hover uses pale Blush.
- Active state uses Berry background and white text.
- `aria-pressed` communicates state.
- Filtering remains progressive enhancement; all products show without JavaScript.

### Claims

- Mint background with Ingredients Green text.
- Display all claims required by brief.
- Do not create bubbles where brief says none.
- `Kids Friendly Series`, `Spicy Series`, and `Cappuccino Series` are category labels, not claim bubbles.

### Product Categories

- Standard label: `Kids Friendly Series`.
- Spicy label: `Spicy Series`; heading: `Mala Xiang Guo & Suteed Balinese Spices`; no intro or bubbles.
- Cappuccino label: `Cappuccino Series`; heading: `Cappuccino Chips`; brief caption shown; no bubbles.
- Crispy Brownies has no category intro caption.

### Language Switcher

- Segmented `EN / ID` control.
- Active state uses Berry background and white text.
- State uses `aria-pressed` and persists after reload.

### Forms

- Labels remain visible.
- Native required and email validation stay enabled.
- Honeypot remains outside tab order.
- Contact form stays mailto until backend exists.

## Motion

- Motion only supports hierarchy: short hero entrance and reveal transitions.
- Animate transform and opacity only.
- No continuous package floating or decorative movement.
- `prefers-reduced-motion: reduce` disables nonessential motion and smooth scrolling.

## Responsive Breakpoints

- 680px: two-column product grid where space allows.
- 860px: desktop navigation and two-column major layouts.
- 1024px: three-column product grid.
- Mobile filters scroll horizontally without hiding controls.

## Accessibility

- Minimum control target: 44px.
- Visible skip link and focus ring.
- One `h1` per page with valid heading hierarchy.
- Images include useful alt text and dimensions.
- Active state never relies on color alone; use text and ARIA state.
- Preserve readable contrast for all token pairs.

## Usage

```css
.filter-button {
  color: var(--color-berry);
  border-color: color-mix(in srgb, var(--color-berry) 42%, transparent);
  background: var(--color-paper);
}

.filter-button[aria-pressed='true'] {
  color: white;
  border-color: var(--color-berry);
  background: var(--color-berry);
}
```
