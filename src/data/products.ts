import type { Localized } from './site';

export type Product = {
  name: Localized;
  image: string;
  sizes: string[];
  description: Localized;
};

export type Category = {
  id: string;
  name: Localized;
  color: 'butter' | 'blush' | 'mint' | 'powder';
  claims: Localized[];
  intro: Localized;
  products: Product[];
};

const l = (en: string, id: string): Localized => ({ en, id });

export const categories: Category[] = [
  {
    id: 'fish-cheese', name: l('Fish & Cheese', 'Ikan & Keju'), color: 'butter',
    claims: [l('No flavor enhancer', 'Tanpa penguat rasa'), l('No artificial color', 'Tanpa pewarna buatan'), l('No preservatives', 'Tanpa pengawet')],
    intro: l('Born in our kitchen for our little one: a safe, delightfully crunchy snack made with real fish and fine cheese.', 'Lahir di dapur kami untuk si kecil: camilan renyah yang aman, dibuat dengan ikan asli dan keju berkualitas.'),
    products: [
      { name: l('Original', 'Original'), image: '/images/products/fish-cheese/original.png', sizes: ['10g', '30g', '85g'], description: l('The honest pairing of savoury fish and creamy cheese.', 'Perpaduan jujur antara gurihnya ikan dan lembutnya keju.') },
      { name: l('Truffle', 'Truffle'), image: '/images/products/fish-cheese/truffle.png', sizes: ['10g', '30g', '85g'], description: l('A gentle truffle finish for a tiny touch of luxury.', 'Sentuhan akhir truffle yang lembut untuk rasa istimewa.') },
      { name: l('Korean Garlic Chicken', 'Ayam Bawang Korea'), image: '/images/products/fish-cheese/korean-garlic.png', sizes: ['10g', '30g', '85g'], description: l('Garlic, onion, cheese, sesame and real chicken stock in harmony.', 'Bawang putih, bawang bombai, keju, wijen, dan kaldu ayam asli yang harmonis.') },
      { name: l('Pizza Margherita', 'Pizza Margherita'), image: '/images/products/fish-cheese/pizza.png', sizes: ['10g', '30g', '85g'], description: l('Tomato, parmesan, mozzarella and basil—simple like a good pizza.', 'Tomat, parmesan, mozzarella, dan basil—sederhana seperti pizza yang lezat.') },
    ],
  },
  {
    id: 'pasta-chips', name: l('Oven Baked Pasta Chips', 'Keripik Pasta Panggang'), color: 'powder',
    claims: [l('Gluten free', 'Bebas gluten'), l('Oven baked', 'Dipanggang'), l('No artificial color', 'Tanpa pewarna buatan')],
    intro: l('Crispy pasta bites made with real cheese, baked for an easy everyday crunch.', 'Gigitan pasta renyah dengan keju asli, dipanggang untuk camilan sehari-hari.'),
    products: [
      { name: l('Spaghetti Bolognaise', 'Spaghetti Bolognaise'), image: '/images/products/pasta-chips/bolognaise.png', sizes: ['35g', '70g'], description: l('Tomato and basil inspired by comforting homemade bolognaise.', 'Tomat dan basil yang terinspirasi saus bolognaise rumahan.') },
      { name: l('Truffle', 'Truffle'), image: '/images/products/pasta-chips/truffle.png', sizes: ['35g', '70g'], description: l('Real cheese, a little salt and an aromatic truffle finish.', 'Keju asli, sedikit garam, dan aroma truffle sebagai sentuhan akhir.') },
    ],
  },
  {
    id: 'brownies', name: l('Crispy Brownies', 'Brownies Renyah'), color: 'blush',
    claims: [l('Gluten free', 'Bebas gluten'), l('Free-range eggs', 'Telur ayam bebas kandang'), l('Belgian chocolate', 'Cokelat Belgia')],
    intro: l('Baked wafer-thin for the sweet spot between a brownie and a crisp.', 'Dipanggang tipis untuk perpaduan tepat antara brownies dan keripik.'),
    products: [
      { name: l('Chocolate', 'Cokelat'), image: '/images/products/brownies/chocolate.png', sizes: ['35g'], description: l('Deep Belgian chocolate with a golden, delicate crunch.', 'Cokelat Belgia yang kaya dengan kerenyahan tipis keemasan.') },
      { name: l('Matcha', 'Matcha'), image: '/images/products/brownies/matcha.png', sizes: ['35g'], description: l('Authentic Japanese matcha and Belgian chocolate chips.', 'Matcha Jepang autentik dan butiran cokelat Belgia.') },
      { name: l('Matcha Raspberry', 'Matcha Raspberry'), image: '/images/products/brownies/matcha-raspberry.png', sizes: ['35g'], description: l('Earthy matcha meets a bright raspberry note.', 'Matcha yang bersahaja bertemu rasa raspberry yang segar.') },
    ],
  },
  {
    id: 'tempeh', name: l('Tempeh Chips', 'Keripik Tempe'), color: 'mint',
    claims: [l('Non-GMO soybeans', 'Kedelai non-GMO'), l('Zero sugar', 'Tanpa gula'), l('Trans-fat free', 'Bebas lemak trans')],
    intro: l('Slow-cooked slices of Indonesian tempeh made with locally sourced, non-GMO certified soybeans.', 'Irisan tempe Indonesia yang dimasak perlahan dari kedelai lokal bersertifikat non-GMO.'),
    products: [
      { name: l('Original Truffle', 'Original Truffle'), image: '/images/products/tempeh/original-truffle.png', sizes: ['30g'], description: l('Truffle salt and Italian herbs with a rustic crunch.', 'Garam truffle dan rempah Italia dengan kerenyahan alami.') },
      { name: l('Parmesan Chicken & Kale', 'Ayam Parmesan & Kale'), image: '/images/products/tempeh/parmesan-chicken.png', sizes: ['30g'], description: l('Garlic chicken, kale, parmesan and Himalayan salt.', 'Ayam bawang putih, kale, parmesan, dan garam Himalaya.') },
      { name: l('Salmon Furikake', 'Salmon Furikake'), image: '/images/products/tempeh/salmon-furikake.png', sizes: ['30g'], description: l('Salmon, roasted seaweed, sesame and garlic in umami harmony.', 'Salmon, rumput laut panggang, wijen, dan bawang putih yang penuh umami.') },
      { name: l('Spicy Truffle', 'Spicy Truffle'), image: '/images/products/tempeh/spicy-truffle.png', sizes: ['30g'], description: l('Our Italian-inspired truffle flavour with a lively chilli twist.', 'Rasa truffle ala Italia dengan kejutan cabai yang hidup.') },
      { name: l('Chilli & Lime', 'Cabai & Jeruk Nipis'), image: '/images/products/tempeh/chili-lime.png', sizes: ['30g'], description: l('A fragrant lime lift followed by a friendly chilli kick.', 'Aroma jeruk nipis yang segar disusul tendangan cabai yang bersahabat.') },
    ],
  },
  {
    id: 'spicy', name: l('Spicy Series', 'Seri Pedas'), color: 'blush',
    claims: [l('Real prawns', 'Udang asli'), l('Family recipe', 'Resep keluarga'), l('Bold Indonesian flavours', 'Cita rasa Indonesia')],
    intro: l('Our signature prawn crackers meet vivid Asian spices and a treasured family recipe.', 'Kerupuk udang khas kami bertemu rempah Asia yang berani dan resep keluarga.'),
    products: [
      { name: l('Mala Xiang Guo', 'Mala Xiang Guo'), image: '/images/products/spicy/mala-xiang-guo.png', sizes: ['25g', '85g'], description: l('Fresh prawn crackers with our aromatic Sichuan-inspired mala spices.', 'Kerupuk udang segar dengan rempah mala aromatik ala Sichuan.') },
      { name: l('Sautéed Balinese Spices', 'Bumbu Bali Tumis'), image: '/images/products/spicy/balinese-spices.png', sizes: ['30g', '70g'], description: l('Classic prawn crackers generously seasoned with homemade Balinese spices.', 'Kerupuk udang klasik dengan bumbu Bali rumahan yang melimpah.') },
    ],
  },
  {
    id: 'cappuccino', name: l('Cappuccino', 'Cappuccino'), color: 'butter',
    claims: [l('100% real coffee beans', '100% biji kopi asli'), l('Caramel drizzle', 'Saus karamel'), l('Biscoff crumbs', 'Remah Biscoff')],
    intro: l('Two things we love in one playful bag: crisp chips and Indonesia’s rich coffee culture.', 'Dua hal yang kami cintai dalam satu kemasan: keripik renyah dan budaya kopi Indonesia.'),
    products: [
      { name: l('Cappuccino Chips', 'Keripik Cappuccino'), image: '/images/products/cappuccino/cappuccino.png', sizes: ['30g', '60g'], description: l('Real coffee, caramel sauce and a sprinkle of Lotus Biscoff crumbs.', 'Kopi asli, saus karamel, dan taburan remah Lotus Biscoff.') },
    ],
  },
];

export const featured = [categories[0].products[0], categories[2].products[0], categories[3].products[2]];
