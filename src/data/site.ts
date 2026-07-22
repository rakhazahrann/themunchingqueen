export type Localized = { en: string; id: string };

export const site = {
  name: 'The Munching Queen',
  domain: 'https://themunchingqueen.com',
  email: 'trinusa.food@gmail.com',
  phone: '+62 838 9803 3439',
  phoneHref: '+6283898033439',
  instagram: '@themunchingqueen',
  instagramUrl: 'https://instagram.com/themunchingqueen',
  address: 'Simpang Darmo Permai Utara, Sambikerep, Surabaya',
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
  { id: 'iso', mark: 'ISO', title: 'ISO 22000:2005', copy: { en: 'Certified food safety management facility.', id: 'Fasilitas bersertifikat manajemen keamanan pangan.' } },
  { id: 'haccp', mark: 'HACCP', title: 'HACCP', copy: { en: 'Preventive control from biological, chemical, and physical hazards.', id: 'Kendali preventif terhadap bahaya biologis, kimia, dan fisik.' } },
  { id: 'bpom', mark: 'BPOM', title: 'BPOM', copy: { en: 'Products certified by Indonesia’s food and drug authority.', id: 'Produk bersertifikat Badan Pengawas Obat dan Makanan.' } },
  { id: 'halal', mark: 'Halal', title: 'Halal', copy: { en: 'Halal certified for confident family snacking.', id: 'Bersertifikat halal untuk camilan keluarga yang tepercaya.' } },
];
