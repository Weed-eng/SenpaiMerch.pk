const IG_IMAGES = [
  'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=400&q=80',
  'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&q=80',
  'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&q=80',
  'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&q=80',
  'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&q=80',
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400&q=80',
];

export default function InstagramSection() {
  return (
    <section style={{ background: '#0a0a0a', padding: 'clamp(64px,8vw,120px) 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px', padding: '0 clamp(20px,5vw,80px)' }}>
        <p style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#e31c1c', marginBottom: '8px', opacity: 0.9 }}>Community</p>
        <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(40px,6vw,72px)', lineHeight: 0.9, color: '#fff', margin: '0 0 12px' }}>
          FOLLOW US ON<br />INSTAGRAM
        </h2>
        <a href="https://www.instagram.com/senpaimerch.pk?igsh=cjFkN2ljdXVuNmY4" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '2px' }}>
          @senpaimerch.pk →
        </a>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '2px' }} className="ig-grid">
        {IG_IMAGES.map((src, i) => (
          <a
            key={i}
            href="https://www.instagram.com/senpaimerch.pk?igsh=cjFkN2ljdXVuNmY4"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', position: 'relative', paddingBottom: '100%', overflow: 'hidden', background: '#111' }}
            className="ig-cell"
          >
            <img src={src} alt={`Post ${i+1}`} loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} className="ig-img" />
            <div className="ig-over" style={{ position: 'absolute', inset: 0, background: 'rgba(227,28,28,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/></svg>
            </div>
          </a>
        ))}
      </div>

      <style>{`
        .ig-cell:hover .ig-img { transform: scale(1.06); }
        .ig-cell:hover .ig-over { opacity: 1 !important; }
        @media (max-width: 640px) { .ig-grid { grid-template-columns: repeat(3,1fr) !important; } }
      `}</style>
    </section>
  );
}
