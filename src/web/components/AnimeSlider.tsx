const ANIME = [
  { name: 'Dragon Ball Z', char: '/char-dbz.png', count: 24, bg: '#111' },
  { name: 'Naruto', char: '/char-naruto.png', count: 31, bg: '#111' },
  { name: 'One Piece', char: '/char-onepiece.png', count: 28, bg: '#111' },
  { name: 'Jujutsu Kaisen', char: '/char-jjk.png', count: 19, bg: '#111' },
  { name: 'Demon Slayer', char: '/char-demonslayer.png', count: 22, bg: '#111' },
  { name: 'Attack on Titan', char: '/char-aot.png', count: 17, bg: '#111' },
];

export default function AnimeSlider() {
  return (
    <section style={{ padding: 'clamp(60px, 8vw, 120px) 0', background: '#0a0a0a', overflow: 'hidden' }}>
      {/* Header */}
      <div style={{ padding: '0 clamp(16px, 5vw, 80px)', marginBottom: '40px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <p style={{ fontFamily: 'DM Sans', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>
            Shop by Universe
          </p>
          <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(42px, 7vw, 80px)', lineHeight: 0.9, color: '#fff', margin: 0 }}>
            PICK YOUR<br />ANIME
          </h2>
        </div>
        <a href="/collections" style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '2px' }}>
          All Collections →
        </a>
      </div>

      {/* Horizontal scroll row */}
      <div
        style={{
          display: 'flex',
          gap: '2px',
          overflowX: 'auto',
          paddingLeft: 'clamp(16px, 5vw, 80px)',
          paddingRight: 'clamp(16px, 5vw, 80px)',
          paddingBottom: '4px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <style>{`
          .anime-slider-row::-webkit-scrollbar { display: none; }
          .anime-card-inner:hover .anime-card-char { transform: scale(1.06) translateY(-4px); }
          .anime-card-inner:hover { border-color: rgba(255,255,255,0.25) !important; }
        `}</style>
        {ANIME.map((a, i) => (
          <a
            key={i}
            href={`/collections/${a.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="anime-card-inner"
            style={{
              flexShrink: 0,
              width: 'clamp(180px, 22vw, 260px)',
              background: '#111',
              border: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden',
              textDecoration: 'none',
              transition: 'border-color 0.25s ease',
            }}
          >
            {/* Character image */}
            <div style={{ height: 'clamp(200px, 28vw, 300px)', position: 'relative', overflow: 'hidden', background: '#1a1a1a' }}>
              <img
                src={a.char}
                alt={a.name}
                className="anime-card-char"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  height: '90%',
                  width: 'auto',
                  objectFit: 'contain',
                  transition: 'transform 0.4s ease',
                }}
              />
            </div>
            {/* Label */}
            <div style={{ padding: '16px 14px 20px' }}>
              <p style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '22px', color: '#fff', margin: '0 0 4px', letterSpacing: '0.05em' }}>
                {a.name}
              </p>
              <p style={{ fontFamily: 'DM Sans', fontSize: '11px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>
                {a.count} products
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
