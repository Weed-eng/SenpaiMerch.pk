import { Link } from 'wouter';

const BANNERS = [
  {
    anime: 'One Piece',
    slug: 'one-piece',
    tagline: 'The Will of D.',
    desc: 'Straw Hat gear, figures, and accessories for the future King of the Pirates.',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&q=80',
    char: '/char-onepiece.png',
    accent: '#e31c1c',
  },
  {
    anime: 'Naruto',
    slug: 'naruto',
    tagline: 'Believe It.',
    desc: 'Konoha collectibles, Akatsuki drip, and Sharingan jewellery from the Hidden Leaf.',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1200&q=80',
    char: '/char-naruto.png',
    accent: '#e36c1c',
    flip: true,
  },
  {
    anime: 'Demon Slayer',
    slug: 'demon-slayer',
    tagline: 'Total Concentration.',
    desc: 'Breathing Form apparel, lamps, and accessories from the Demon Slayer Corps.',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200&q=80',
    char: '/char-demonslayer.png',
    accent: '#1c7be3',
  },
];

export default function AnimeCollectionBanner() {
  return (
    <section style={{ background: '#0a0a0a' }}>
      {BANNERS.map((b, i) => (
        <div
          key={b.slug}
          style={{
            position: 'relative', overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: b.flip ? '1fr 1fr' : '1fr 1fr',
            minHeight: '500px',
          }}
          className={`acb-row ${b.flip ? 'acb-flip' : ''}`}
        >
          {/* Image bg */}
          <div style={{ position: 'relative', overflow: 'hidden', background: '#111', order: b.flip ? 2 : 1 }}>
            <img
              src={b.image} alt={b.anime} loading={i === 0 ? 'eager' : 'lazy'}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.4) saturate(0.8)', transition: 'transform 0.5s ease' }}
              className="acb-img"
            />
            <img
              src={b.char} alt={b.anime + ' character'}
              style={{ position: 'absolute', bottom: 0, right: b.flip ? 'auto' : 0, left: b.flip ? 0 : 'auto', height: '90%', width: 'auto', objectFit: 'contain', zIndex: 2 }}
            />
            <div style={{ position: 'absolute', inset: 0, background: b.flip ? 'linear-gradient(to left, rgba(10,10,10,0.1), rgba(10,10,10,0.7))' : 'linear-gradient(to right, rgba(10,10,10,0.1), rgba(10,10,10,0.7))', zIndex: 1 }} />
          </div>

          {/* Text */}
          <div style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            padding: 'clamp(48px,7vw,100px) clamp(24px,5vw,80px)',
            background: '#111',
            order: b.flip ? 1 : 2,
          }}>
            <p style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: b.accent, marginBottom: '12px' }}>
              {b.anime} Collection
            </p>
            <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(48px,7vw,96px)', lineHeight: 0.88, color: '#fff', margin: '0 0 20px' }}>
              {b.tagline}
            </h2>
            <p style={{ fontFamily: 'DM Sans', fontSize: 'clamp(14px,1.6vw,17px)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: '400px', marginBottom: '36px' }}>
              {b.desc}
            </p>
            <Link
              href={`/anime/${b.slug}`}
              style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', padding: '14px 32px', background: b.accent, color: '#fff', textDecoration: 'none', display: 'inline-block', alignSelf: 'flex-start' }}
            >
              Shop {b.anime} →
            </Link>
          </div>
        </div>
      ))}

      <style>{`
        .acb-row:hover .acb-img { transform: scale(1.04); }
        @media (max-width: 680px) {
          .acb-row { grid-template-columns: 1fr !important; }
          .acb-flip > :first-child { order: 1 !important; }
          .acb-flip > :last-child { order: 2 !important; }
        }
      `}</style>
    </section>
  );
}
