import { useParams, Link } from 'wouter';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

const ANIME_HERO: Record<string, { image: string; char: string; tagline: string; desc: string }> = {
  'one-piece':      { image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1400&q=80', char: '/char-onepiece.png', tagline: 'The Pirate King Awaits', desc: 'From Straw Hat figures to Marine-grade accessories — the ultimate One Piece collection.' },
  'naruto':         { image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1400&q=80', char: '/char-naruto.png', tagline: "Believe It.", desc: 'Konoha collectibles, Akatsuki streetwear, Sharingan jewellery. Dattebayo.' },
  'demon-slayer':   { image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1400&q=80', char: '/char-demonslayer.png', tagline: 'Total Concentration.', desc: 'Breathing Form apparel, Corps accessories, and RGB lamps from Demon Slayer.' },
  'attack-on-titan':{ image: 'https://images.unsplash.com/photo-1616499370260-485b3e5ed653?w=1400&q=80', char: '/char-aot.png', tagline: "Shinzou wo Sasageyo.", desc: 'Wings of Freedom gear, Levi merch, and Survey Corps collectibles.' },
  'jujutsu-kaisen': { image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1400&q=80', char: '/char-jjk.png', tagline: 'Unleash the Cursed Energy.', desc: 'Gojo, Sukuna, and Yuji — the sorcerers of Tokyo await in your collection.' },
  'dragon-ball-z':  { image: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=1400&q=80', char: '/char-dbz.png', tagline: 'Power Level: Over 9000.', desc: 'Saiyan figures, Z-Fighter apparel, and Dragon Ball collectibles.' },
};

export default function AnimeCollection() {
  const { slug } = useParams<{ slug: string }>();
  const deslug = (s: string) => s.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const animeName = deslug(slug || '');
  const hero = ANIME_HERO[slug || ''];

  const products = PRODUCTS.filter(p => p.anime.toLowerCase().replace(/\s+/g, '-') === slug || p.anime.toLowerCase().includes(animeName.toLowerCase().split(' ')[0]));

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      {/* Hero banner */}
      <div style={{ position: 'relative', height: 'clamp(300px,50vh,560px)', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
        {hero ? (
          <>
            <img src={hero.image} alt={animeName} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.35)' }} />
            <img src={hero.char} alt="" style={{ position: 'absolute', right: 'clamp(40px,10vw,160px)', bottom: 0, height: '85%', width: 'auto', objectFit: 'contain', zIndex: 2 }} />
          </>
        ) : (
          <div style={{ position: 'absolute', inset: 0, background: '#111' }} />
        )}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,10,10,0.95) 30%, transparent 70%)', zIndex: 1 }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px', background: 'linear-gradient(to top, #0a0a0a, transparent)', zIndex: 2 }} />
        <div style={{ position: 'relative', zIndex: 3, padding: 'clamp(24px,5vw,80px)', paddingBottom: 'clamp(40px,6vw,80px)' }}>
          <Link href="/shop" style={{ fontFamily: 'DM Sans', fontSize: '12px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>← All Collections</Link>
          <p style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#e31c1c', marginBottom: '10px', opacity: 0.9 }}>
            Anime Collection
          </p>
          <h1 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(48px,9vw,110px)', lineHeight: 0.88, color: '#fff', marginBottom: hero ? '12px' : '0' }}>
            {animeName.toUpperCase()}
          </h1>
          {hero && (
            <>
              <p style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(20px,3vw,32px)', color: 'rgba(255,255,255,0.4)', marginBottom: '10px' }}>{hero.tagline}</p>
              <p style={{ fontFamily: 'DM Sans', fontSize: '14px', color: 'rgba(255,255,255,0.45)', maxWidth: '400px', lineHeight: 1.6 }}>{hero.desc}</p>
            </>
          )}
        </div>
      </div>

      {/* Products */}
      <div style={{ padding: 'clamp(40px,5vw,80px) clamp(20px,5vw,80px)' }}>
        <p style={{ fontFamily: 'DM Sans', fontSize: '13px', color: 'rgba(255,255,255,0.35)', marginBottom: '24px' }}>
          {products.length || PRODUCTS.length} products
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2px' }}>
          {(products.length ? products : PRODUCTS).map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  );
}
