export default function ApparelSection() {
  return (
    <section style={{ background: '#0a0a0a', overflow: 'hidden' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        }}
      >
        {/* Image side */}
        <div style={{ position: 'relative', minHeight: '560px', overflow: 'hidden', background: '#111' }}>
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=900&q=80"
            alt="Anime Apparel"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 60%, rgba(10,10,10,0.8) 100%)' }} />
        </div>

        {/* Text side */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 'clamp(48px, 8vw, 100px) clamp(24px, 6vw, 80px)',
            background: '#111',
          }}
        >
          <p style={{ fontFamily: 'DM Sans', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '16px' }}>
            Wearables
          </p>
          <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(48px, 7vw, 90px)', lineHeight: 0.9, color: '#fff', margin: '0 0 24px' }}>
            WEAR YOUR<br />UNIVERSE
          </h2>
          <p style={{ fontFamily: 'DM Sans', fontSize: 'clamp(14px, 1.8vw, 17px)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: '420px', marginBottom: '40px' }}>
            Oversized tees, hoodies, varsity jackets and haori-inspired outerwear — built for fans who live the anime life.
          </p>

          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginBottom: '48px' }}>
            {['Tees', 'Hoodies', 'Jackets', 'Accessories'].map(cat => (
              <a
                key={cat}
                href={`/collections/apparel-${cat.toLowerCase()}`}
                style={{
                  fontFamily: 'DM Sans',
                  fontWeight: 600,
                  fontSize: '13px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.5)',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.15)',
                  paddingBottom: '2px',
                  transition: 'color 0.2s',
                }}
              >
                {cat}
              </a>
            ))}
          </div>

          <a
            href="/collections/apparel"
            style={{
              alignSelf: 'flex-start',
              fontFamily: 'DM Sans',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '14px 32px',
              background: '#fff',
              color: '#0a0a0a',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Shop Apparel
          </a>
        </div>
      </div>
    </section>
  );
}
