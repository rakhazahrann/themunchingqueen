export type Localized = { en: string; id: string };

export const site = {
  name: 'The Munching Queen',
  domain: 'https://themunchingqueen.com',
  email: 'trinusa.food@gmail.com',
  phone: '+62 857-1359-0840',
  phoneHref: '+6285713590840',
  instagram: '@themunchingqueen',
  instagramUrl: 'https://instagram.com/themunchingqueen',
};

export const nav = [
  { href: '/', label: { en: 'About us', id: 'Tentang kami' } },
  { href: '/products', label: { en: 'Products', id: 'Produk' } },
  { href: '/contact', label: { en: 'Contact us', id: 'Hubungi kami' } },
];

export const marketplaces = [
  { store: 'Shopee', city: 'Jakarta', href: 'https://shopee.co.id/munchingqueen', brand: 'shopee' },
  { store: 'Shopee', city: 'Surabaya', href: 'https://shopee.co.id/themunchingqueen', brand: 'shopee' },
  { store: 'Tokopedia', city: 'Jakarta', href: 'https://tokopedia.com/munchingqueen', brand: 'tokopedia' },
  { store: 'Tokopedia', city: 'Surabaya', href: 'https://tokopedia.com/munching-queen', brand: 'tokopedia' },
];

export const certifications = [
  { id: 'bpom', mark: 'BPOM', title: 'BPOM', copy: { en: 'Products certified by Indonesia’s food and drug authority.', id: 'Produk bersertifikat Badan Pengawas Obat dan Makanan.' } },
  { id: 'halal', mark: 'Halal', title: 'Halal', copy: { en: 'Halal certified for confident family snacking.', id: 'Bersertifikat halal untuk camilan keluarga yang tepercaya.' } },
];
