import ProductCard from './ProductCard';

const MARQUEE_ITEMS = [
  'Goku Black Figure',
  'Shanks Premium Statue',
  'Nezuko Box Figure',
  'Kakashi ANBU Keychain',
  'AOT Survey Corps Tee',
  'Sukuna Fingers Lamp',
  'Luffy Gear 5 Figure',
  'Zenitsu Haori Jacket',
];

const NEW_PRODUCTS = [
  {
    image: 'https://images.unsplash.com/photo-1610447847416-40bac442fbe1?w=600&q=80',
    title: 'Goku Black Super Saiyan Rose Figure',
    price: 'PKR 4,999',
    badge: 'NEW' as const,
    anime: 'Dragon Ball Super',
  },
  {
    image: 'https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?w=600&q=80',
    title: 'Luffy Gear 5 Statue',
    price: 'PKR 6,499',
    badge: 'NEW' as const,
    anime: 'One Piece',
  },
  {
    image: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=600&q=80',
    title: 'Nezuko Bamboo Keychain',
    price: 'PKR 799',
    badge: 'NEW' as const,
    anime: 'Demon Slayer',
  },
  {
    image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=600&q=80',
    title: 'Sukuna Domain Lamp',
    price: 'PKR 3,299',
    badge: 'NEW' as const,
    anime: 'Jujutsu Kaisen',
  },
];

export default function NewArrivals() {
  const repeated = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section style={{ background: '#0f0f0f', padding: 'clamp(60px, 8vw, 120px) 0' }}>
      {/* Marquee ticker */}
      <div style={{ overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '16px 0', marginBottom: 'clamp(60px, 8vw, 120px)' }}>
        <div style={{ display: 'flex', animation: 'marquee 25s linear infinite', width: 'max-content', gap: '0' }}>
          {repeated.map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: 'clamp(18px, 3vw, 28px)',
                letterSpacing: '0.08em',
                color: i % 2 === 0 ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.06)',
                padding: '0 clamp(20px, 3vw, 40px)',
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(20px, 3vw, 40px)',
                whiteSpace: 'nowrap',
              }}
            >
              {item}
              <span style={{ width: '5px', height: '5px', background: 'rgba(255,255,255,0.15)', borderRadius: '50%', display: 'inline-block', flexShrink: 0 }} />
            </span>
          ))}
        </div>
      </div>

      {/* Section header + grid */}
      <div style={{ padding: '0 clamp(16px, 5vw, 80px)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px', marginBottom: '40px' }}>
          <div>
            <p style={{ fontFamily: 'DM Sans', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>
              Just Dropped
            </p>
            <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(42px, 7vw, 80px)', lineHeight: 0.9, color: '#fff', margin: 0 }}>
              NEW<br />ARRIVALS
            </h2>
          </div>
          <a href="/new" style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '2px' }}>
            See All →
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2px' }}>
          {NEW_PRODUCTS.map((p, i) => <ProductCard key={i} {...p} />)}
        </div>
      </div>
    </section>
  );
}
