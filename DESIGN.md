# The Munching Queen Design System

## Brand direction
**Pastel pantry:** playful seperti meja snack anak, rapi seperti rak produk premium. Bentuk kemasan dan remah menjadi bahasa visual; foto produk tetap pusat perhatian.

Signature: **Queen's Picnic Board** — hero seperti alas piknik pastel miring, dengan tiga kemasan mengambang dan label berbentuk stiker. Risiko visual ini spesifik pada dunia snack, tetapi area teks tetap tenang.

## Color tokens
| Token | Hex | Peran |
|---|---|---|
| Cream | `#FFF8EE` | Canvas utama |
| Butter | `#F7D983` | Highlight dan chips |
| Blush | `#F3BFC3` | Panel hangat |
| Mint | `#BFDCCB` | Panel sehat/sertifikasi |
| Powder | `#BDD9E7` | Panel informasi |
| Cocoa | `#493B35` | Teks utama |
| Berry | `#8E4057` | CTA, link, focus |
| Leaf | `#315E4A` | Badge dan teks positif |

Pastel tidak dipakai sebagai teks di atas cream. Teks dan CTA memakai Cocoa/Berry/Leaf agar kontras jelas.

## Typography
- Display: **Fraunces**, 600–700. Dipakai pada hero dan heading, bukan body panjang.
- Body: **Nunito Sans**, 400–800. Bulat, ramah, tetap mudah dibaca.
- Utility: body uppercase, 800, tracking `0.1em`; tidak perlu font ketiga.
- Scale: `clamp()` dari 0.78rem sampai 5.4rem. Body ideal 1rem–1.125rem, line-height 1.65.

## Layout
- Mobile-first, container maksimum 1180px.
- Grid produk: 1 kolom; 2 mulai 680px; 3 mulai 1024px.
- Section spacing: 4rem mobile, 7rem desktop.
- Hero: copy kiri dan picnic board kanan; menumpuk pada mobile.

## Shape and depth
- Radius card 24–32px; pill 999px.
- Border cocoa transparan, bukan hairline abu generik.
- Shadow lembut berwarna cocoa; tidak memakai glassmorphism.
- Decorative crumbs memakai pseudo-elements/CSS, maksimal satu cluster per section.

## Components
### Button
- Primary: Berry, putih, radius pill.
- Secondary: transparan, border Cocoa.
- Hover memakai translateY CSS 2px; focus ring Butter + Berry.

### Product card
- Image stage memakai pastel kategori.
- Nama, ukuran, maksimal dua badge agar tidak padat.
- Seluruh isi tidak clickable; CTA link eksplisit.

### Language switcher
- Segmented `EN / ID`. Active state ditentukan `aria-pressed` dan background Cocoa.

### Product filter
- Button pills dengan `aria-pressed`. Kategori tersembunyi hanya setelah JS siap; tanpa JS semua terlihat.

### Form
- Label selalu terlihat. Native required/email validation. Honeypot tersembunyi dari tab order.
- Submit membuka aplikasi email; fallback email link selalu tersedia.

## Motion
- Hero entrance: 0.75s, `power3.out`, stagger 0.08s.
- Product float: 3.8–4.8s, yoyo, transform only.
- Reveal: IntersectionObserver + GSAP, 0.65s.
- Hover/focus: CSS native.
- `prefers-reduced-motion: reduce`: duration 0, tanpa floating, smooth scroll mati.

## Responsive breakpoints
- 680px: dua kolom, nav desktop mulai layak.
- 860px: hero dua kolom dan menu desktop.
- 1024px: grid produk tiga kolom.

## Accessibility
- Minimum target 44px.
- Visible skip link dan focus ring.
- Heading hierarchy satu `h1` per halaman.
- Alt text menjelaskan produk/kemasan, tidak mengulang kata “image”.
- Jangan mengandalkan warna saja; active states memakai teks/ARIA.
- Kontras diperiksa pada setiap pasangan token.

## Usage
```css
.promo {
  color: var(--color-cocoa);
  background: var(--color-butter);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
}
```

`src/styles/global.css` tetap source of truth nilai teknis. Dokumen ini menjelaskan alasan dan aturan pemakaian.
