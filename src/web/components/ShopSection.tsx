import { useEffect, useRef } from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    name: 'Demon Slayer Zenitsu Agatsuma Nichirin Sword Keychain',
    regularPrice: 1400,
    salePrice: 1100,
    image: 'https://images.unsplash.com/photo-1601987177651-8edfe6c20009?w=400&h=400&fit=crop&q=80',
    category: 'DEMON SLAYER',
  },
  {
    name: 'Attack on Titan Scout Regiment Necklace — Premium Chain Edition',
    regularPrice: 1200,
    salePrice: 1000,
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=400&fit=crop&q=80',
    category: 'ATTACK ON TITAN',
  },
  {
    name: 'Demon Slayer Akaza Action Figure',
    regularPrice: 7200,
    salePrice: 7000,
    image: 'https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?w=400&h=400&fit=crop&q=80',
    category: 'DEMON SLAYER',
  },
  {
    name: 'One Piece Monkey D. Luffy (After Marineford) Action Figure',
    regularPrice: 6800,
    salePrice: 6000,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&q=80',
    category: 'ONE PIECE',
  },
  {
    name: 'Berserk Guts "Brand of Sacrifice" LED Shadow Box Lamp',
    regularPrice: 6500,
    salePrice: 5500,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop&q=80',
    category: 'BERSERK',
  },
  {
    name: 'One Piece Monkey D. Luffy LED Shadow Box Lamp',
    regularPrice: 5500,
    image: 'https://images.unsplash.com/photo-1569701813229-33284b643e3c?w=400&h=400&fit=crop&q=80',
    category: 'ONE PIECE',
    isNew: true,
  },
  {
    name: 'Japanese Great Wave Inspired Kimono Haori',
    regularPrice: 3600,
    image: 'https://images.unsplash.com/photo-1527484673-7f9bbb0c92a2?w=400&h=400&fit=crop&q=80',
    category: 'APPAREL',
  },
  {
    name: 'Tokyo Revengers Ken Ryuguji (Draken) Kimono Haori',
    regularPrice: 3700,
    image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=400&h=400&fit=crop&q=80',
    category: 'APPAREL',
    isNew: true,
  },
];

const PAD = 'clamp(40px, 7vw, 120px)';

export default function ShopSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right')
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="shop" ref={sectionRef} style={{ background: '#000', position: 'relative', overflow: 'hidden' }}>
      {/* Section header */}
      <div
        style={{
          position: 'relative',
          minHeight: '52vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingLeft: PAD,
          paddingRight: PAD,
          paddingTop: '80px',
          paddingBottom: '60px',
        }}
      >
        {/* Ghost Luffy behind header */}
        <img
          src="/luffy-3d.png"
          alt=""
          aria-hidden
          style={{
            position: 'absolute',
            right: '-2%',
            bottom: 0,
            height: '105%',
            objectFit: 'contain',
            objectPosition: 'bottom',
            opacity: 0.07,
            pointerEvents: 'none',
            filter: 'grayscale(20%)',
          }}
        />
        {/* Left accent line */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: '3px',
          background: 'linear-gradient(to bottom, transparent, #CC0000, transparent)',
        }} />

        <div style={{ position: 'relative', zIndex: 2 }}>
          <span className="reveal" style={{
            fontFamily: "'Oswald', sans-serif",
            color: '#CC0000',
            fontSize: '0.7rem',
            letterSpacing: '0.35em',
            display: 'block',
            marginBottom: '16px',
          }}>
            ◆ ALL COLLECTIONS
          </span>
          <h2 className="reveal" style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(56px, 11vw, 148px)',
            lineHeight: 0.88,
            color: '#FFFFFF',
            letterSpacing: '0.01em',
            transitionDelay: '0.1s',
          }}>
            SHOP ALL<br />
            <span style={{ color: '#CC0000' }}>ANIME</span>
          </h2>
          <p className="reveal" style={{
            color: '#777',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.95rem',
            lineHeight: 1.7,
            marginTop: '20px',
            maxWidth: '440px',
            transitionDelay: '0.2s',
          }}>
            From Demon Slayer to One Piece — authentic merch for every otaku.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: '16px', marginTop: '32px', transitionDelay: '0.3s' }}>
            <button className="btn-primary" style={{ padding: '13px 32px', fontSize: '0.82rem' }}>VIEW ALL</button>
            <button className="btn-outline" style={{ padding: '13px 32px', fontSize: '0.82rem' }}>FILTER</button>
          </div>
        </div>
      </div>

      {/* Filter tabs + product grid */}
      <div style={{ paddingLeft: PAD, paddingRight: PAD, paddingBottom: '100px' }}>
        {/* Filter tabs */}
        <div className="reveal" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '40px',
          paddingBottom: '28px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          {['ALL', 'FIGURES', 'KEYCHAINS', 'APPAREL', 'LAMPS', 'SALE'].map((tab, i) => (
            <button
              key={tab}
              className={i === 0 ? 'btn-primary' : 'btn-outline'}
              style={{ padding: '9px 22px', fontSize: '0.78rem', fontFamily: "'Oswald', sans-serif" }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '16px',
        }}>
          {products.map((product, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${(i % 4) * 0.08}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Load more */}
        <div style={{ textAlign: 'center', marginTop: '56px' }} className="reveal">
          <button className="btn-outline" style={{ padding: '14px 48px', fontSize: '0.82rem' }}>
            LOAD MORE
          </button>
        </div>
      </div>
    </section>
  );
}
