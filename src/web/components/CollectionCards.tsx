import { Link } from 'wouter';

const COLLECTIONS = [
  { name: 'One Piece', slug: 'one-piece', image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&q=80', char: '/char-onepiece.png' },
  { name: 'Naruto', slug: 'naruto', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&q=80', char: '/char-naruto.png' },
  { name: 'Jujutsu Kaisen', slug: 'jujutsu-kaisen', image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80', char: '/char-jjk.png' },
  { name: 'Attack on Titan', slug: 'attack-on-titan', image: 'https://images.unsplash.com/photo-1616499370260-485b3e5ed653?w=600&q=80', char: '/char-aot.png' },
  { name: 'Berserk', slug: 'berserk', image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=600&q=80', char: '/char-dbz.png' },
  { name: 'Chainsaw Man', slug: 'chainsaw-man', image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&q=80', char: '/char-demonslayer.png' },
  { name: 'Dragon Ball Z', slug: 'dragon-ball-z', image: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=600&q=80', char: '/char-dbz.png' },
  { name: 'Demon Slayer', slug: 'demon-slayer', image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600&q=80', char: '/char-demonslayer.png' },
];

export default function CollectionCards() {
  return (
    <section style={{ padding: 'clamp(64px,8vw,120px) clamp(20px,5vw,80px)', background: '#0a0a0a' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
        <div>
          <p style={{ fontFamily: 'DM Sans', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '8px' }}>Universes</p>
          <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(40px,6vw,72px)', lineHeight: 0.9, color: '#fff', margin: 0 }}>SHOP ALL<br />COLLECTIONS</h2>
        </div>
        <Link href="/shop" style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '2px' }}>
          View All →
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2px' }}>
        {COLLECTIONS.map((col) => (
          <Link
            key={col.slug}
            href={`/anime/${col.slug}`}
            style={{ display: 'block', position: 'relative', paddingBottom: '130%', overflow: 'hidden', textDecoration: 'none', background: '#111' }}
            className="coll-card"
          >
            <img
              src={col.image}
              alt={col.name}
              loading="lazy"
              style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%',
                objectFit: 'cover', transition: 'transform 0.4s ease',
              }}
              className="coll-img"
            />
            {/* Dark overlay */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.3) 50%, transparent 100%)' }} />
            {/* Hover glow border */}
            <div className="coll-glow" style={{ position: 'absolute', inset: 0, border: '2px solid transparent', transition: 'border-color 0.25s ease' }} />
            {/* Label */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 14px' }}>
              <p style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '22px', color: '#fff', margin: 0, letterSpacing: '0.05em' }}>{col.name}</p>
              <p className="coll-arrow" style={{ fontFamily: 'DM Sans', fontSize: '11px', letterSpacing: '0.1em', color: '#e31c1c', margin: '4px 0 0', textTransform: 'uppercase', opacity: 0, transition: 'opacity 0.25s ease' }}>
                Shop Collection →
              </p>
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        .coll-card:hover .coll-img { transform: scale(1.06); }
        .coll-card:hover .coll-glow { border-color: rgba(227,28,28,0.5) !important; }
        .coll-card:hover .coll-arrow { opacity: 1 !important; }
      `}</style>
    </section>
  );
}
