export interface Product {
  id: string;
  slug: string;
  title: string;
  anime: string;
  category: string;
  price: number;
  comparePrice?: number;
  badge?: 'NEW' | 'SALE' | 'HOT';
  images: string[];
  description: string;
  sizes?: string[];
  inStock: boolean;
  tags: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: '1', slug: 'luffy-gear5-tee',
    title: 'Luffy Gear 5 Oversized Tee', anime: 'One Piece', category: 'Apparel',
    price: 1999, comparePrice: 2499, badge: 'SALE',
    images: [
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80',
      'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&q=80',
    ],
    description: 'Channel the power of the Sun God. Premium heavyweight cotton, oversized fit, screen-printed Gear 5 Luffy graphic on back.',
    sizes: ['XS','S','M','L','XL','2XL'], inStock: true,
    tags: ['apparel','tee','one piece'],
  },
  {
    id: '2', slug: 'akatsuki-cloud-hoodie',
    title: 'Akatsuki Cloud Hoodie', anime: 'Naruto', category: 'Apparel',
    price: 3999, badge: 'HOT',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=800&q=80',
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80',
    ],
    description: 'Join the most feared organization in the shinobi world. 450gsm fleece, embroidered cloud logo, oversized cut.',
    sizes: ['S','M','L','XL','2XL'], inStock: true,
    tags: ['apparel','hoodie','naruto'],
  },
  {
    id: '3', slug: 'gojo-limitless-tee',
    title: 'Gojo Limitless Tee', anime: 'Jujutsu Kaisen', category: 'Apparel',
    price: 1799, badge: 'NEW',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
    ],
    description: 'Six Eyes, Infinity, Limitless. The most powerful sorcerer\'s energy captured in a premium streetwear tee.',
    sizes: ['XS','S','M','L','XL','2XL'], inStock: true,
    tags: ['apparel','tee','jujutsu kaisen'],
  },
  {
    id: '4', slug: 'zoro-katana-pendant',
    title: 'Zoro Three Sword Pendant', anime: 'One Piece', category: 'Jewelry',
    price: 1299, comparePrice: 1599, badge: 'SALE',
    images: [
      'https://images.unsplash.com/photo-1601121141461-9d6647bef0e3?w=800&q=80',
      'https://images.unsplash.com/photo-1573408301185-9519a69d2b79?w=800&q=80',
    ],
    description: 'Nothing happened. Sterling silver-plated triple katana pendant on 60cm chain. The Pirate Hunter\'s iconic emblem.',
    inStock: true, tags: ['jewelry','necklace','one piece'],
  },
  {
    id: '5', slug: 'levi-streetwear-sweatshirt',
    title: 'Levi Survey Corps Sweatshirt', anime: 'Attack on Titan', category: 'Apparel',
    price: 3299, badge: 'NEW',
    images: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?w=800&q=80',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80',
    ],
    description: 'Humanity\'s Strongest Soldier. Wings of Freedom embroidery, premium heavyweight fleece, relaxed fit.',
    sizes: ['XS','S','M','L','XL','2XL'], inStock: true,
    tags: ['apparel','sweatshirt','attack on titan'],
  },
  {
    id: '6', slug: 'berserk-eclipse-tee',
    title: 'Berserk Eclipse Black Tee', anime: 'Berserk', category: 'Apparel',
    price: 1999, badge: 'HOT',
    images: [
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800&q=80',
      'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&q=80',
    ],
    description: 'In the darkest hour, the Brand of Sacrifice burns brightest. Guts\' silhouette on 100% ringspun cotton.',
    sizes: ['XS','S','M','L','XL','2XL'], inStock: true,
    tags: ['apparel','tee','berserk'],
  },
  {
    id: '7', slug: 'sukuna-graphic-tee',
    title: 'Sukuna King of Curses Tee', anime: 'Jujutsu Kaisen', category: 'Apparel',
    price: 1899, badge: 'NEW',
    images: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80',
    ],
    description: 'Malevolent Shrine. Full-back Sukuna tattoo graphic, heavyweight oversized tee, water-based print.',
    sizes: ['S','M','L','XL','2XL'], inStock: true,
    tags: ['apparel','tee','jujutsu kaisen'],
  },
  {
    id: '8', slug: 'tanjiro-hanafuda-earrings',
    title: 'Tanjiro Hanafuda Earrings', anime: 'Demon Slayer', category: 'Jewelry',
    price: 899, comparePrice: 1100, badge: 'SALE',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    ],
    description: 'The iconic Hanafuda earrings passed down through the Kamado family. Enamel-filled, hypoallergenic posts.',
    inStock: true, tags: ['jewelry','earrings','demon slayer'],
  },
  {
    id: '9', slug: 'goku-ui-figure',
    title: 'Goku Ultra Instinct Figure', anime: 'Dragon Ball Z', category: 'Figures',
    price: 4999, badge: 'HOT',
    images: [
      'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=800&q=80',
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&q=80',
    ],
    description: '28cm premium PVC figure. Mastered Ultra Instinct Goku in combat pose. Display-ready with base.',
    inStock: true, tags: ['figure','collectible','dragon ball z'],
  },
  {
    id: '10', slug: 'tanjiro-rgb-lamp',
    title: 'Tanjiro Water Breathing Lamp', anime: 'Demon Slayer', category: 'Lamps',
    price: 2499, badge: 'NEW',
    images: [
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&q=80',
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
    ],
    description: '3D illusion LED lamp, 16 RGB colours, USB powered, remote control. Tanjiro\'s Water Breathing form.',
    inStock: true, tags: ['lamp','collectible','demon slayer'],
  },
  {
    id: '11', slug: 'itachi-necklace',
    title: 'Itachi Uchiha Sharingan Pendant', anime: 'Naruto', category: 'Jewelry',
    price: 1199,
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1573408301185-9519a69d2b79?w=800&q=80',
    ],
    description: 'Three-tomoe Sharingan eye pendant. Red enamel on oxidised silver finish. 55cm box chain included.',
    inStock: true, tags: ['jewelry','necklace','naruto'],
  },
  {
    id: '12', slug: 'demon-slayer-keychain-set',
    title: 'Demon Slayer Pillar Keychain Set', anime: 'Demon Slayer', category: 'Keychains',
    price: 1499, comparePrice: 1999, badge: 'SALE',
    images: [
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80',
      'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?w=800&q=80',
    ],
    description: 'Set of 4 Hashira acrylic keychains — Tanjiro, Rengoku, Shinobu, and Tengen. Double-sided print.',
    inStock: true, tags: ['keychain','accessories','demon slayer'],
  },
];

export const ANIME_LIST = [
  'One Piece', 'Naruto', 'Demon Slayer', 'Attack on Titan',
  'Solo Leveling', 'Jujutsu Kaisen', 'Dragon Ball Z',
  'My Hero Academia', 'Berserk', 'Bleach', 'Chainsaw Man',
  'Death Note', 'Tokyo Ghoul', 'Hunter x Hunter',
  'Pokemon', "JoJo's Bizarre Adventure", 'Other Animes',
];

export const CATEGORIES = [
  { id: 'jewelry', label: 'Jewelry & Accessories', icon: '💎' },
  { id: 'figures', label: 'Figures & Collectibles', icon: '🗿' },
  { id: 'cosplay', label: 'Cosplay & Weapons', icon: '⚔️' },
  { id: 'gaming', label: 'Movie & Gaming', icon: '🎮' },
];
