# The Munching Queen

## Tujuan
Situs statis bilingual untuk brand snack keluarga The Munching Queen. Tiga rute: `/` (About/Home), `/products`, `/contact`.

## Stack dan command
- Astro 5, TypeScript strict, CSS native, GSAP core.
- `npm run dev` — development server.
- `npm run build` — type check lalu static build.
- `npm run preview` — preview hasil build.

## Struktur sumber
- `src/data/site.ts` — identitas, navigasi, contact, marketplace, copy bersama.
- `src/data/products.ts` — source of truth kategori dan varian produk.
- `src/styles/global.css` — source of truth design tokens dan primitives.
- `src/layouts/BaseLayout.astro` — shell, SEO, language, header/footer.
- `public/images/` — hanya aset terpilih dan sudah dioptimalkan.
- Materi awal: `DATA WEB TMQ.docx`; jangan baca file temporary `~$TA WEB TMQ.docx`.

## Aturan perubahan
- Bilingual EN/ID wajib. Gunakan `data-en` dan `data-id` untuk teks DOM; default EN. Jangan buat rute bahasa terpisah tanpa permintaan.
- Alamat perusahaan sengaja belum ditampilkan. Jangan tambahkan alamat atau peta sampai client memberi alamat final.
- Nomor kontak: `+62 838 9803 3439`; email: `trinusa.food@gmail.com`; Instagram: `@themunchingqueen`.
- Reuse data dan komponen yang ada. Hindari dependency, wrapper, atau abstraksi baru jika CSS/native Astro cukup.
- Jaga visual pastel playful-premium sesuai `DESIGN_SYSTEM.md`; semua token baru masuk `global.css`.
- Aset baru harus URL-safe, punya alt text, width/height, lazy loading kecuali hero, dan ukuran web wajar.
- Motion harus transform/opacity, tidak menghambat input, dan nonaktif pada `prefers-reduced-motion`.
- Semua kontrol keyboard accessible: button asli, visible focus, ARIA hanya saat perlu.
- Form contact tetap mailto sampai endpoint backend disediakan.

## Checklist selesai
1. `npm run build` lulus.
2. Rute `/`, `/products`, `/contact` terbuka tanpa overflow.
3. EN/ID bertukar dan tersimpan setelah reload.
4. Produk tetap terlihat jika JavaScript mati; filter hanya enhancement.
5. Alamat tidak muncul.
6. Reduced motion menonaktifkan gerakan kontinu.
