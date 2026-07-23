import type { Localized } from './site';

export type Product = {
  name: Localized;
  image: string;
  sizes: string[];
  description: Localized;
  gallery?: string[];
  flavor?: Localized;
  ingredients?: Localized;
  allergens?: Localized;
  storage?: Localized;
  certification?: Localized;
  tone?: string;
  bgColor?: string;
  accentColor?: string;
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
const standardStorage = l('Store in a cool and dry place, away from direct sunlight and heat.', 'Simpan di tempat sejuk dan kering, jauh dari sinar matahari langsung dan panas.');
const bpomHalal = l('BPOM, HALAL', 'BPOM, HALAL');

export const categories: Category[] = [
  {
    id: 'fish-cheese', name: l('Fish & Cheese', 'Ikan & Keju'), color: 'powder',
    claims: [l('No flavor enhancer', 'Tanpa penguat rasa'), l('No artificial color', 'Tanpa pewarna buatan'), l('No preservatives', 'Tanpa pengawet')],
    intro: l('Born in our kitchen for our little one: a safe, delightfully crunchy snack made with real fish and fine cheese.', 'Lahir di dapur kami untuk si kecil: camilan renyah yang aman, dibuat dengan ikan asli dan keju berkualitas.'),
    products: [
      { name: l('Original', 'Original'), tone: 'sky', bgColor: '#DCEBFA', accentColor: '#2B6CB0', image: '/images/products/fish-cheese/original-30g.png', sizes: ['10g', '30g', '85g'], description: l('The honest pairing of savoury fish and creamy cheese.', 'Perpaduan jujur antara gurihnya ikan dan lembutnya keju.'), ingredients: l('Tapioca flour, wheat flour, vegetable oil, onion, parmesan cheese, salt.', 'Tepung tapioka, tepung terigu, minyak nabati, bawang bombai, keju parmesan, garam.'), allergens: l('Wheat, dairy.', 'Gandum, susu.'), storage: standardStorage, certification: bpomHalal, gallery: ['/images/products/fish-cheese/original-10g.png', '/images/products/fish-cheese/original-30g.png', '/images/products/fish-cheese/original-85g.png'] },
      { name: l('Korean Garlic Chicken', 'Ayam Bawang Korea'), tone: 'orange', bgColor: '#FCEADA', accentColor: '#D97328', image: '/images/products/fish-cheese/korean-garlic-30g.png', sizes: ['10g', '30g', '85g'], description: l('Garlic, onion, cheese, sesame and real chicken stock in harmony.', 'Bawang putih, bawang bombai, keju, wijen, dan kaldu ayam asli yang harmonis.'), ingredients: l('Tapioca flour, wheat flour, vegetable oil, onion, garlic, chicken powder, parmesan cheese, dried green onion, sesame seeds.', 'Tepung tapioka, tepung terigu, minyak nabati, bawang bombai, bawang putih, bubuk ayam, keju parmesan, daun bawang kering, biji wijen.'), allergens: l('Wheat, dairy.', 'Gandum, susu.'), storage: standardStorage, certification: bpomHalal, gallery: ['/images/products/fish-cheese/korean-garlic-10g.png', '/images/products/fish-cheese/korean-garlic-30g.png', '/images/products/fish-cheese/korean-garlic-85g.png'] },
      { name: l('Truffle', 'Truffle'), tone: 'sage', bgColor: '#E2EDE0', accentColor: '#5F803E', image: '/images/products/fish-cheese/truffle-30g.png', sizes: ['10g', '30g', '85g'], description: l('A gentle truffle finish for a tiny touch of luxury.', 'Sentuhan akhir truffle yang lembut untuk rasa istimewa.'), ingredients: l('Tapioca flour, wheat flour, vegetable oil, parmesan cheese, Italian herbs (oregano, parsley, basil), white truffle, extra virgin olive oil, onion, salt.', 'Tepung tapioka, tepung terigu, minyak nabati, keju parmesan, rempah Italia (oregano, peterseli, basil), truffle putih, minyak zaitun extra virgin, bawang bombai, garam.'), allergens: l('Wheat, dairy.', 'Gandum, susu.'), storage: standardStorage, certification: bpomHalal, gallery: ['/images/products/fish-cheese/truffle-10g.png', '/images/products/fish-cheese/truffle-30g.png', '/images/products/fish-cheese/truffle-85g.png'] },
      { name: l('Pizza Margherita', 'Pizza Margherita'), tone: 'pink', bgColor: '#FCE4EC', accentColor: '#D6496B', image: '/images/products/fish-cheese/pizza-30g.png', sizes: ['10g', '30g', '85g'], description: l('Tomato, parmesan, mozzarella and basil—simple like a good pizza.', 'Tomat, parmesan, mozzarella, dan basil—sederhana seperti pizza yang lezat.'), ingredients: l('Tapioca flour, wheat flour, vegetable oil, parmesan cheese, freeze-dried tomatoes, mozzarella cheese, fresh basil.', 'Tepung tapioka, tepung terigu, minyak nabati, keju parmesan, tomat beku-kering, keju mozzarella, basil segar.'), allergens: l('Wheat, dairy.', 'Gandum, susu.'), storage: standardStorage, certification: bpomHalal, gallery: ['/images/products/fish-cheese/pizza-10g.png', '/images/products/fish-cheese/pizza-30g.png', '/images/products/fish-cheese/pizza-85g.png'] },
    ],
  },
  {
    id: 'pasta-chips', name: l('Oven Baked Pasta Chips', 'Keripik Pasta Panggang'), color: 'butter',
    claims: [l('Gluten free', 'Bebas gluten'), l('Oven baked', 'Dipanggang'), l('No artificial color', 'Tanpa pewarna buatan')],
    intro: l('Crispy pasta bites made with real cheese, baked for an easy everyday crunch.', 'Gigitan pasta renyah dengan keju asli, dipanggang untuk camilan sehari-hari.'),
    products: [
      { name: l('Truffle', 'Truffle'), tone: 'lavender', bgColor: '#E2E6F2', accentColor: '#5C6185', image: '/images/products/pasta-chips/truffle-35g.png', sizes: ['35g', '70g'], description: l('Real cheese, a little salt and an aromatic truffle finish.', 'Keju asli, sedikit garam, dan aroma truffle sebagai sentuhan akhir.'), ingredients: l('Cheddar cheese, tapioca flour, egg, parmesan cheese, freeze-dried tomatoes, garlic, mozzarella cheese, Italian herbs, vegetable oil.', 'Keju cheddar, tepung tapioka, telur, keju parmesan, tomat beku-kering, bawang putih, keju mozzarella, rempah Italia, minyak nabati.'), allergens: l('Dairy.', 'Susu.'), storage: standardStorage, certification: bpomHalal, gallery: ['/images/products/pasta-chips/truffle-35g.png', '/images/products/pasta-chips/truffle-70g.png'] },
      { name: l('Spaghetti Bolognaise', 'Spaghetti Bolognaise'), tone: 'coral', bgColor: '#FCE5DE', accentColor: '#C8574B', image: '/images/products/pasta-chips/bolognaise-35g.png', sizes: ['35g', '70g'], description: l('Tomato and basil inspired by comforting homemade bolognaise.', 'Tomat dan basil yang terinspirasi saus bolognaise rumahan.'), ingredients: l('Cheddar cheese, tapioca flour, egg, parmesan cheese, truffle powder (1%), salt, onion, parsley, truffle oil, vegetable oil.', 'Keju cheddar, tepung tapioka, telur, keju parmesan, bubuk truffle (1%), garam, bawang bombai, peterseli, minyak truffle, minyak nabati.'), allergens: l('Dairy.', 'Susu.'), storage: standardStorage, certification: bpomHalal, gallery: ['/images/products/pasta-chips/bolognaise-35g.png', '/images/products/pasta-chips/bolognaise-70g.png'] },
    ],
  },
  {
    id: 'brownies', name: l('Crispy Brownies', 'Brownies Renyah'), color: 'blush',
    claims: [l('Gluten free', 'Bebas gluten'), l('Free-range eggs', 'Telur ayam bebas kandang'), l('Belgian chocolate', 'Cokelat Belgia')],
    intro: l('Baked wafer-thin for the sweet spot between a brownie and a crisp.', 'Dipanggang tipis untuk perpaduan tepat antara brownies dan keripik.'),
    products: [
      { name: l('Chocolate', 'Cokelat'), tone: 'brown', bgColor: '#F5EBE1', accentColor: '#6E473B', image: '/images/products/brownies/chocolate.png', sizes: ['35g'], description: l('Deep Belgian chocolate with a golden, delicate crunch.', 'Cokelat Belgia yang kaya dengan kerenyahan tipis keemasan.'), ingredients: l('Cassava flour, sugar, coconut oil, free-range egg whites, milk, milk chocolate, white chocolate chips, baking powder, salt, vanilla extract.', 'Tepung singkong, gula, minyak kelapa, putih telur ayam bebas kandang, susu, cokelat susu, butiran cokelat putih, baking powder, garam, ekstrak vanila.'), storage: standardStorage, certification: bpomHalal },
      { name: l('Matcha', 'Matcha'), tone: 'matcha', bgColor: '#E2EDE0', accentColor: '#5C803F', image: '/images/products/brownies/matcha.png', sizes: ['35g'], description: l('Authentic Japanese matcha and Belgian chocolate chips.', 'Matcha Jepang autentik dan butiran cokelat Belgia.'), ingredients: l('Cassava flour, sugar, coconut oil, free-range egg whites, milk, matcha powder, milk chocolate chips, baking powder, salt, vanilla extract.', 'Tepung singkong, gula, minyak kelapa, putih telur ayam bebas kandang, susu, bubuk matcha, butiran cokelat susu, baking powder, garam, ekstrak vanila.'), storage: standardStorage, certification: bpomHalal },
      { name: l('Matcha Raspberry', 'Matcha Raspberry'), tone: 'raspberry', bgColor: '#FDE4EC', accentColor: '#C8436B', image: '/images/products/brownies/matcha-raspberry.png', sizes: ['35g'], description: l('Earthy matcha meets a bright raspberry note.', 'Matcha yang bersahaja bertemu rasa raspberry yang segar.'), ingredients: l('Cassava flour, sugar, coconut oil, free-range egg whites, milk, matcha powder, raspberry chocolate chips, baking powder, salt, vanilla extract.', 'Tepung singkong, gula, minyak kelapa, putih telur ayam bebas kandang, susu, bubuk matcha, butiran cokelat raspberry, baking powder, garam, ekstrak vanila.'), storage: standardStorage, certification: bpomHalal },
    ],
  },
  {
    id: 'tempeh', name: l('Tempeh Chips', 'Keripik Tempe'), color: 'mint',
    claims: [l('Non-GMO soybeans', 'Kedelai non-GMO'), l('Zero sugar', 'Tanpa gula'), l('Trans-fat free', 'Bebas lemak trans')],
    intro: l('Slow-cooked slices of Indonesian tempeh made with locally sourced, non-GMO certified soybeans.', 'Irisan tempe Indonesia yang dimasak perlahan dari kedelai lokal bersertifikat non-GMO.'),
    products: [
      { name: l('Original Truffle', 'Original Truffle'), tone: 'sage', bgColor: '#E1EADF', accentColor: '#557A57', image: '/images/products/tempeh/original-truffle.png', sizes: ['30g'], description: l('Truffle salt and Italian herbs with a rustic crunch.', 'Garam truffle dan rempah Italia dengan kerenyahan alami.'), ingredients: l('Fermented soybean, tapioca starch, vegetable oil, spice mix (garlic, onion, salt, pepper), parsley, truffle powder.', 'Kedelai fermentasi, pati tapioka, minyak nabati, campuran rempah (bawang putih, bawang bombai, garam, merica), peterseli, bubuk truffle.'), storage: standardStorage, certification: bpomHalal },
      { name: l('Parmesan Chicken & Kale', 'Ayam Parmesan & Kale'), tone: 'kale', bgColor: '#E5EED8', accentColor: '#4A7C38', image: '/images/products/tempeh/parmesan-chicken.png', sizes: ['30g'], description: l('Garlic chicken, kale, parmesan and Himalayan salt.', 'Ayam bawang putih, kale, parmesan, dan garam Himalaya.'), ingredients: l('Fermented soybean, tapioca starch, vegetable oil, spice mix (garlic, onion, salt, pepper), free-range chicken extract, sea salt, nutmeg, dehydrated kale, Himalayan salt.', 'Kedelai fermentasi, pati tapioka, minyak nabati, campuran rempah (bawang putih, bawang bombai, garam, merica), ekstrak ayam bebas kandang, garam laut, pala, kale kering, garam Himalaya.'), allergens: l('Dairy.', 'Susu.'), storage: standardStorage, certification: bpomHalal },
      { name: l('Salmon Furikake', 'Salmon Furikake'), tone: 'butter', bgColor: '#FDF2D5', accentColor: '#C47F28', image: '/images/products/tempeh/salmon-furikake.png', sizes: ['30g'], description: l('Salmon, roasted seaweed, sesame and garlic in umami harmony.', 'Salmon, rumput laut panggang, wijen, dan bawang putih yang penuh umami.'), ingredients: l('Fermented soybean, tapioca starch, vegetable oil, spice mix (garlic, onion, salt, pepper), Himalayan salt, salmon extract, seaweed, sesame seeds.', 'Kedelai fermentasi, pati tapioka, minyak nabati, campuran rempah (bawang putih, bawang bombai, garam, merica), garam Himalaya, ekstrak salmon, rumput laut, biji wijen.'), allergens: l('Seafood.', 'Makanan laut.'), storage: standardStorage, certification: bpomHalal },
      { name: l('Spicy Truffle', 'Spicy Truffle'), tone: 'coral', bgColor: '#FCE4E0', accentColor: '#C94A4A', image: '/images/products/tempeh/spicy-truffle.png', sizes: ['30g'], description: l('Our Italian-inspired truffle flavour with a lively chilli twist.', 'Rasa truffle ala Italia dengan kejutan cabai yang hidup.'), ingredients: l('Fermented soybean, tapioca starch, vegetable oil, spice mix (garlic, onion, salt, pepper), parsley, truffle powder, dried chilli.', 'Kedelai fermentasi, pati tapioka, minyak nabati, campuran rempah (bawang putih, bawang bombai, garam, merica), peterseli, bubuk truffle, cabai kering.'), storage: standardStorage, certification: bpomHalal },
      { name: l('Chilli & Lime', 'Cabai & Jeruk Nipis'), tone: 'lime', bgColor: '#EFF5D6', accentColor: '#698C28', image: '/images/products/tempeh/chili-lime.png', sizes: ['30g'], description: l('A fragrant lime lift followed by a friendly chilli kick.', 'Aroma jeruk nipis yang segar disusul tendangan cabai yang bersahabat.'), ingredients: l('Fermented soybean, tapioca starch, vegetable oil, spice mix (garlic, onion, salt, pepper), chilli powder, lime juice powder, parsley.', 'Kedelai fermentasi, pati tapioka, minyak nabati, campuran rempah (bawang putih, bawang bombai, garam, merica), bubuk cabai, bubuk sari jeruk nipis, peterseli.'), storage: standardStorage, certification: bpomHalal },
    ],
  },
  {
    id: 'spicy', name: l('Spicy Series', 'Seri Pedas'), color: 'blush',
    claims: [l('Real prawns', 'Udang asli'), l('Family recipe', 'Resep keluarga'), l('Bold Indonesian flavours', 'Cita rasa Indonesia')],
    intro: l('Our signature prawn crackers meet vivid Asian spices and a treasured family recipe.', 'Kerupuk udang khas kami bertemu rempah Asia yang berani dan resep keluarga.'),
    products: [
      { name: l('Mala Xiang Guo', 'Mala Xiang Guo'), tone: 'spicy-red', bgColor: '#FCE4DF', accentColor: '#B83A3A', image: '/images/products/spicy/mala-25g.png', sizes: ['25g', '85g'], description: l('Fresh prawn crackers with our aromatic Sichuan-inspired mala spices.', 'Kerupuk udang segar dengan rempah mala aromatik ala Sichuan.'), ingredients: l('Prawn crackers (contain 35% fresh prawn), vegetable oil, salt, sugar, onion, red chilli, spices, flavour enhancer, mala seasoning, chilli flakes.', 'Kerupuk udang (mengandung 35% udang segar), minyak nabati, garam, gula, bawang bombai, cabai merah, rempah, penguat rasa, bumbu mala, serpihan cabai.'), allergens: l('Seafood and wheat.', 'Makanan laut dan gandum.'), storage: standardStorage, certification: bpomHalal, gallery: ['/images/products/spicy/mala-25g.png', '/images/products/spicy/mala-85g.png'] },
      { name: l('Sautéed Balinese Spices', 'Bumbu Bali Tumis'), tone: 'balinese-orange', bgColor: '#FCECDA', accentColor: '#D16828', image: '/images/products/spicy/balinese-30g.png', sizes: ['30g', '70g'], description: l('Classic prawn crackers generously seasoned with homemade Balinese spices.', 'Kerupuk udang klasik dengan bumbu Bali rumahan yang melimpah.'), ingredients: l('Prawn crackers (35%), vegetable oil, sautéed Balinese seasoning, sugar, salt, garlic, flavour enhancer, capsicum oleoresin.', 'Kerupuk udang (35%), minyak nabati, bumbu Bali tumis, gula, garam, bawang putih, penguat rasa, oleoresin capsicum.'), allergens: l('Seafood (crustacean). Gluten-free.', 'Makanan laut (krustasea). Bebas gluten.'), storage: standardStorage, certification: bpomHalal, gallery: ['/images/products/spicy/balinese-30g.png', '/images/products/spicy/balinese-70g.png'] },
    ],
  },
  {
    id: 'cappuccino', name: l('Cappuccino', 'Cappuccino'), color: 'butter',
    claims: [l('100% real coffee beans', '100% biji kopi asli'), l('Caramel drizzle', 'Saus karamel'), l('Biscoff crumbs', 'Remah Biscoff')],
    intro: l('Two things we love in one playful bag: crisp chips and Indonesia’s rich coffee culture.', 'Dua hal yang kami cintai dalam satu kemasan: keripik renyah dan budaya kopi Indonesia.'),
    products: [
      { name: l('Cappuccino Chips', 'Keripik Cappuccino'), tone: 'cappuccino', bgColor: '#F5ECE3', accentColor: '#7A5238', image: '/images/products/cappuccino/cappuccino-30g.png', sizes: ['30g', '60g'], description: l('Real coffee, caramel sauce and a sprinkle of Lotus Biscoff crumbs.', 'Kopi asli, saus karamel, dan taburan remah Lotus Biscoff.'), ingredients: l('Cappuccino cracker, sugar, salt, coffee powder, caramel sauce, Lotus Biscoff.', 'Kerupuk cappuccino, gula, garam, bubuk kopi, saus karamel, Lotus Biscoff.'), allergens: l('Seafood (crustacean). Gluten-free.', 'Makanan laut (krustasea). Bebas gluten.'), storage: standardStorage, certification: bpomHalal, gallery: ['/images/products/cappuccino/cappuccino-30g.png', '/images/products/cappuccino/cappuccino-60g.png'] },
    ],
  },
];

for (const category of categories) {
  for (const product of category.products) {
    product.gallery = product.gallery ?? [product.image];
    product.flavor = product.description;
  }
}

export const featured = [categories[0].products[0], categories[2].products[0], categories[3].products[2]];
