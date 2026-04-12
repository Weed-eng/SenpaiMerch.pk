import { useState } from 'react';
import ProductCard from './ProductCard';

const FILTERS = ['All', 'Figures', 'Keychains', 'Apparel', 'Lamps'];

const PRODUCTS = [
  {
    image: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=600&q=80',
    title: 'Goku Ultra Instinct Figure',
    price: 'PKR 3,499',
    originalPrice: 'PKR 4,200',
    badge: 'SALE' as const,
    anime: 'Dragon Ball Z',
    category: 'Figures',
  },
  {
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&q=80',
    title: 'Naruto Shippuden Keychain',
    price: 'PKR 699',
    badge: 'NEW' as const,
    anime: 'Naruto',
    category: 'Keychains',
  },
  {
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&q=80',
    title: 'Oversized Anime Tee — Black',
    price: 'PKR 1,899',
    anime: 'One Piece',
    category: 'Apparel',
  },
  {
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80',
    title: 'Itadori Yuji Collectible',
    price: 'PKR 4,199',
    badge: 'HOT' as const,
    anime: 'Jujutsu Kaisen',
    category: 'Figures',
  },
  {
    image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&q=80',
    title: 'Tanjiro RGB Lamp',
    price: 'PKR 2,299',
    originalPrice: 'PKR 2,800',
    badge: 'SALE' as const,
    anime: 'Demon Slayer',
    category: 'Lamps',
  },
  {
    image: 'https://images.unsplash.com/photo-1616499370260-485b3e5ed653?w=600&q=80',
    title: 'Levi Ackerman Premium Figure',
    price: 'PKR 5,499',
    badge: 'NEW' as const,
    anime: 'Attack on Titan',
    category: 'Figures',
  },
  {
    image: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?w=600&q=80',
    title: 'Demon Slayer Keychain Set',
    price: 'PKR 1,299',
    anime: 'Demon Slayer',
    category: 'Keychains',
  },
  {
    image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=600&q=80',
    title: 'Anime Varsity Jacket',
    price: 'PKR 5,999',
    badge: 'HOT' as const,
    anime: 'Various',
    category: 'Apparel',
  },
];

export default function FeaturedProducts() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === active);

  return (
    <section style={{ padding: 'clamp(60px, 8vw, 120px) clamp(16px, 5vw, 80px)', background: '#0a0a0a' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px', marginBottom: '48px' }}>
        <div>
          <p style={{ fontFamily: 'DM Sans', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>
            Browse
          </p>
          <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(42px, 7vw, 80px)', lineHeight: 0.9, color: '#fff', margin: 0 }}>
            FEATURED<br />PRODUCTS
          </h2>
        </div>
        <a href="/shop" style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '2px' }}>
          View All →
        </a>
      </div>

      {/* Filter tabs */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            style={{
              fontFamily: 'DM Sans',
              fontWeight: 600,
              fontSize: '12px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '8px 20px',
              border: '1px solid',
              borderColor: active === f ? '#fff' : 'rgba(255,255,255,0.15)',
              background: active === f ? '#fff' : 'transparent',
              color: active === f ? '#0a0a0a' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '2px',
      }}>
        {filtered.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
