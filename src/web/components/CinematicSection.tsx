import { useEffect, useRef } from 'react';

const PAD = 'clamp(40px, 7vw, 120px)';

export default function CinematicSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const charRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!charRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = -rect.top / (rect.height + window.innerHeight);
      charRef.current.style.transform = `translateY(${progress * -70}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <section
      ref={sectionRef}
      id="new"
      style={{
        background: '#000',
        minHeight: '80vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      {/* OTAKU watermark */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        pointerEvents: 'none', userSelect: 'none', opacity: 0.025,
      }}>
        <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '28vw', color: '#CC0000', whiteSpace: 'nowrap' }}>
          OTAKU
        </span>
      </div>

      {/* AOT Character */}
      <img
        ref={charRef}
        src="/aot-character.png"
        alt=""
        aria-hidden
        style={{
          position: 'absolute',
          right: '4%', bottom: 0,
          height: '92%',
          objectFit: 'contain',
          objectPosition: 'bottom',
          opacity: 0.85,
          filter: 'drop-shadow(0 0 40px rgba(50,180,50,0.15))',
          willChange: 'transform',
          zIndex: 1,
        }}
      />

      {/* Gradient shield for text */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(0,0,0,1) 42%, rgba(0,0,0,0.15) 75%, transparent 100%)',
        zIndex: 2,
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 3,
        paddingLeft: PAD, paddingRight: '48px',
        paddingTop: '100px', paddingBottom: '100px',
        maxWidth: '620px',
      }}>
        <div className="reveal">
          <span style={{
            fontFamily: "'Oswald', sans-serif", color: '#CC0000',
            fontSize: '0.7rem', letterSpacing: '0.38em', display: 'block', marginBottom: '16px',
          }}>
            ◆ ATTACK ON TITAN
          </span>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(52px, 9vw, 112px)',
            color: '#FFFFFF', lineHeight: 0.88,
          }}>
            JOIN THE<br />
            <span style={{ color: '#4a7c59' }}>SURVEY CORPS</span>
          </h2>
          <div style={{ width: '44px', height: '3px', background: '#4a7c59', margin: '22px 0' }} />
          <p style={{ color: '#888', fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', lineHeight: 1.7 }}>
            Scout Regiment necklaces, premium chain editions, and gear for every
            titan slayer. Official-quality AOT merchandise, delivered to your door.
          </p>
        </div>

        <div className="reveal" style={{ marginTop: '36px', transitionDelay: '0.15s' }}>
          <button className="btn-primary" style={{ background: '#4a7c59', padding: '14px 32px', fontSize: '0.82rem' }}>
            SHOP AOT COLLECTION
          </button>
        </div>

        {/* Stats */}
        <div className="reveal" style={{ display: 'flex', gap: '52px', marginTop: '56px', transitionDelay: '0.25s' }}>
          {[{ num: '500+', label: 'Products' }, { num: '15+', label: 'Anime Series' }, { num: '10K+', label: 'Happy Otakus' }].map((s) => (
            <div key={s.label}>
              <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.4rem', color: '#FFF', lineHeight: 1 }}>
                {s.num}
              </p>
              <p style={{ color: '#555', fontSize: '0.72rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.1em', marginTop: '4px' }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
