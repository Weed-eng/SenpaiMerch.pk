import { Link } from 'wouter';

const CATS = [
  { label: 'Apparel', href: '/collections/apparel', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&q=80' },
  { label: 'Accessories', href: '/collections/jewelry-accessories', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80' },
  { label: 'Figures', href: '/collections/figures-collectibles', image: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&q=80' },
  { label: 'Cosplay', href: '/collections/cosplay-weapons', image: 'https://images.unsplash.com/photo-1541562232579-512a21360020?w=500&q=80' },
  { label: 'Posters', href: '/collections/movie-gaming', image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=500&q=80' },
  { label: 'Collectibles', href: '/collections/figures-collectibles', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&q=80' },
];

export default function FeaturedCategories() {
  return (
    <section style={{ padding: 'clamp(64px,8vw,120px) clamp(20px,5vw,80px)', background: '#0f0f0f' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <p style={{ fontFamily: 'DM Sans', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '8px' }}>Browse by type</p>
        <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(40px,6vw,72px)', lineHeight: 0.9, color: '#fff', margin: 0 }}>FEATURED<br />CATEGORIES</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '2px' }}>
        {CATS.map(cat => (
          <Link
            key={cat.label}
            href={cat.href}
            style={{ display: 'block', position: 'relative', paddingBottom: '100%', overflow: 'hidden', textDecoration: 'none', background: '#111' }}
            className="fc-card"
          >
            <img src={cat.image} alt={cat.label} loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease', filter: 'brightness(0.6)' }} className="fc-img" />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,10,0.4)', transition: 'background 0.3s' }} className="fc-overlay" />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '6px' }}>
              <p style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '24px', color: '#fff', margin: 0, letterSpacing: '0.1em', textAlign: 'center' }}>{cat.label}</p>
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        .fc-card:hover .fc-img { transform: scale(1.08); filter: brightness(0.5); }
        .fc-card:hover .fc-overlay { background: rgba(227,28,28,0.15) !important; }
      `}</style>
    </section>
  );
}
