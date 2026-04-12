export default function About() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      {/* Hero */}
      <div style={{ position: 'relative', height: 'clamp(300px,45vh,500px)', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0808 50%, #0a0a0a 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 60px)' }} />
        <div style={{ position: 'relative', zIndex: 1, padding: 'clamp(24px,5vw,80px)' }}>
          <p style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#e31c1c', marginBottom: '12px', opacity: 0.9 }}>Our Story</p>
          <h1 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(52px,9vw,120px)', lineHeight: 0.88, color: '#fff' }}>
            BORN FROM<br />THE CULTURE
          </h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: 'clamp(64px,8vw,120px) clamp(20px,5vw,80px)', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px 60px' }}>
          <div>
            <p style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(32px,4vw,48px)', color: '#fff', marginBottom: '20px', lineHeight: 1 }}>WHY WE EXIST</p>
            <p style={{ fontFamily: 'DM Sans', fontSize: '16px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: '16px' }}>
              Senpai Merch was born out of frustration. Pakistani anime fans had no dedicated, quality source for authentic merchandise. We were tired of overpriced imports and cheap knockoffs.
            </p>
            <p style={{ fontFamily: 'DM Sans', fontSize: '16px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8 }}>
              So we built what we wanted: a premium, curated anime merch store built specifically for Pakistan — with COD, fast shipping, and a selection that actually matches the culture.
            </p>
          </div>
          <div>
            <p style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(32px,4vw,48px)', color: '#fff', marginBottom: '20px', lineHeight: 1 }}>WHAT WE STAND FOR</p>
            {[
              ['Premium Quality', 'Every product we stock meets our quality bar — no cheap knockoffs.'],
              ['Authentic Culture', 'We\'re fans first. We\'ll never sell something that doesn\'t respect the source material.'],
              ['Community', 'Senpai Merch is for Pakistani anime fans, built by Pakistani anime fans.'],
              ['Access', 'COD, reasonable prices, and nationwide delivery. Anime merch for everyone.'],
            ].map(([title, desc]) => (
              <div key={title} style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '2px solid #e31c1c' }}>
                <p style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '14px', color: '#fff', marginBottom: '4px' }}>{title}</p>
                <p style={{ fontFamily: 'DM Sans', fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2px', marginTop: '80px' }}>
          {[
            ['2500+', 'Happy Customers'],
            ['500+', 'Products'],
            ['20+', 'Anime Series'],
            ['50+', 'Cities Delivered'],
          ].map(([num, label]) => (
            <div key={label} style={{ background: '#111', padding: '32px 24px', textAlign: 'center' }}>
              <p style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '52px', color: '#e31c1c', lineHeight: 1, marginBottom: '8px' }}>{num}</p>
              <p style={{ fontFamily: 'DM Sans', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
