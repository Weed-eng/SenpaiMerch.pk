import { useState } from 'react';

const PAD = 'clamp(32px, 6vw, 100px)';

const animeList = [
  {
    label: 'DRAGON BALL Z',
    subtitle: 'Power Beyond Limits',
    description: 'Super Saiyan figures, Dragon Radar keychains, energy blast lamps and exclusive DBZ apparel.',
    cta: 'SHOP DBZ',
    accent: '#4a9eff',
    bg: '#0a0f1a',
    char: '/char-dbz.png',
    stats: [{ num: '40+', label: 'Products' }, { num: 'SSJ4', label: 'Max Power' }, { num: '9000+', label: 'Power Level' }],
  },
  {
    label: 'NARUTO',
    subtitle: 'Believe It',
    description: 'Akatsuki cloaks, Sharingan keychains, Konoha headbands and premium Naruto action figures.',
    cta: 'SHOP NARUTO',
    accent: '#e05c00',
    bg: '#150800',
    char: '/char-naruto.png',
    stats: [{ num: '60+', label: 'Products' }, { num: '9', label: 'Tailed Beasts' }, { num: '7th', label: 'Hokage' }],
  },
  {
    label: 'ONE PIECE',
    subtitle: 'King of the Pirates',
    description: 'Luffy, Zoro, the whole crew — action figures, LED lamps, Den Den Mushi keychains and more.',
    cta: 'SHOP ONE PIECE',
    accent: '#e8a020',
    bg: '#141000',
    char: '/char-onepiece.png',
    stats: [{ num: '80+', label: 'Products' }, { num: '1000+', label: 'Episodes' }, { num: '9', label: 'Straw Hats' }],
  },
  {
    label: 'JUJUTSU KAISEN',
    subtitle: 'Unlimited Void',
    description: 'Gojo, Itadori, Megumi — cursed energy figures, Domain Expansion lamps and JJK keychains.',
    cta: 'SHOP JJK',
    accent: '#00b4d8',
    bg: '#000d12',
    char: '/char-jjk.png',
    stats: [{ num: '35+', label: 'Products' }, { num: '6', label: 'Eyes' }, { num: '∞', label: 'Cursed Energy' }],
  },
  {
    label: 'DEMON SLAYER',
    subtitle: 'Total Concentration',
    description: 'Nichirin sword keychains, Hashira figures, Mugen Train lamps and Tanjiro apparel.',
    cta: 'SHOP DEMON SLAYER',
    accent: '#C8A227',
    bg: '#120e00',
    char: '/char-demonslayer.png',
    stats: [{ num: '55+', label: 'Products' }, { num: '9', label: 'Hashira' }, { num: '12', label: 'Breathing Styles' }],
  },
  {
    label: 'ATTACK ON TITAN',
    subtitle: 'Join the Survey Corps',
    description: 'Scout Regiment necklaces, premium chain editions, and gear for every titan slayer.',
    cta: 'SHOP AOT',
    accent: '#4a7c59',
    bg: '#030f07',
    char: '/char-aot.png',
    stats: [{ num: '45+', label: 'Products' }, { num: '104th', label: 'Cadet Corps' }, { num: '3', label: 'Walls' }],
  },
];

export default function AnimeSection() {
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [busy, setBusy] = useState(false);

  const go = (i: number) => {
    if (busy || i === active) return;
    setBusy(true);
    setActive(i);
    setAnimKey(k => k + 1);
    setTimeout(() => setBusy(false), 400);
  };

  const prev = () => go((active - 1 + animeList.length) % animeList.length);
  const next = () => go((active + 1) % animeList.length);

  const a = animeList[active];

  return (
    <section
      id="anime"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '580px',
        maxHeight: '860px',
        overflow: 'hidden',
        background: a.bg,
        transition: 'background 0.6s ease',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      {/* Full-bleed character — right side */}
      <img
        key={`c-${animKey}`}
        src={a.char}
        alt={a.label}
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          height: '100%',
          width: '55%',
          objectFit: 'cover',
          objectPosition: 'top center',
          zIndex: 1,
          animation: 'fadeSlideIn 0.45s cubic-bezier(0.22,1,0.36,1) forwards',
        }}
      />

      {/* Left gradient over character so text is readable */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: `linear-gradient(to right, ${a.bg} 40%, ${a.bg}cc 58%, transparent 80%)`,
        transition: 'background 0.6s ease',
      }} />

      {/* Top gradient */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '120px',
        background: `linear-gradient(to bottom, ${a.bg} 0%, transparent 100%)`,
        zIndex: 2, pointerEvents: 'none',
        transition: 'background 0.6s ease',
      }} />

      {/* Accent glow behind character */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: `radial-gradient(ellipse 50% 70% at 75% 60%, ${a.accent}22 0%, transparent 65%)`,
        transition: 'background 0.6s ease',
      }} />

      {/* ── LEFT CONTENT ── */}
      <div
        key={`t-${animKey}`}
        style={{
          position: 'absolute', inset: 0, zIndex: 3,
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          paddingLeft: PAD, paddingRight: '40px',
          paddingBottom: '80px', // space for bottom bar
          animation: 'fadeSlideText 0.4s cubic-bezier(0.22,1,0.36,1) forwards',
          maxWidth: '520px',
        }}
      >
        {/* Section eyebrow */}
        <p style={{
          fontFamily: "'Oswald', sans-serif", color: '#666',
          fontSize: '0.65rem', letterSpacing: '0.35em', marginBottom: '32px',
        }}>
          ◆ EXPLORE UNIVERSES
        </p>

        {/* Series name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <span style={{ display: 'block', width: '28px', height: '2px', background: a.accent }} />
          <span style={{
            fontFamily: "'Oswald', sans-serif", color: a.accent,
            fontSize: '0.72rem', letterSpacing: '0.28em',
          }}>
            {a.label}
          </span>
        </div>

        {/* Big title */}
        <h2 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(52px, 7vw, 92px)',
          lineHeight: 0.92, color: '#FFF',
          marginBottom: '18px',
        }}>
          {a.subtitle}
        </h2>

        {/* Accent bar */}
        <div style={{ width: '48px', height: '3px', background: a.accent, marginBottom: '18px' }} />

        {/* Description */}
        <p style={{
          fontFamily: "'Inter', sans-serif", color: '#999',
          fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '340px', marginBottom: '28px',
        }}>
          {a.description}
        </p>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '36px' }}>
          <button className="btn-primary" style={{
            background: a.accent, padding: '12px 28px',
            fontSize: '0.8rem', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.12em',
          }}>
            {a.cta}
          </button>
          <span style={{ color: '#444', fontFamily: "'Inter', sans-serif", fontSize: '0.8rem' }}>
            {a.stats[0].num} products
          </span>
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: '32px' }}>
          {a.stats.map(s => (
            <div key={s.label}>
              <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: '#FFF', lineHeight: 1 }}>{s.num}</p>
              <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: '0.62rem', color: '#555', letterSpacing: '0.1em', marginTop: '2px' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── BOTTOM BAR: thumbnails + arrows ── */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 5,
        display: 'flex', alignItems: 'stretch',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        background: 'rgba(0,0,0,0.7)',
        backdropFilter: 'blur(12px)',
      }}>
        {/* Anime thumb tabs */}
        <div style={{ flex: 1, display: 'flex', overflowX: 'auto' }}>
          {animeList.map((item, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              style={{
                flex: '0 0 auto',
                minWidth: '80px',
                padding: '10px 14px',
                background: 'none',
                border: 'none',
                borderTop: `2px solid ${i === active ? item.accent : 'transparent'}`,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
              }}
            >
              {/* Mini character preview */}
              <div style={{
                width: '36px', height: '36px',
                borderRadius: '2px',
                overflow: 'hidden',
                border: `1px solid ${i === active ? item.accent : 'rgba(255,255,255,0.1)'}`,
                transition: 'border-color 0.25s ease',
                background: item.bg,
              }}>
                <img src={item.char} alt={item.label} style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'top',
                  opacity: i === active ? 1 : 0.5,
                  transition: 'opacity 0.25s ease',
                }} />
              </div>
              <span style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: '0.55rem', letterSpacing: '0.08em',
                color: i === active ? item.accent : 'rgba(255,255,255,0.25)',
                whiteSpace: 'nowrap',
                transition: 'color 0.25s ease',
              }}>
                {item.label.split(' ')[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Arrow buttons */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '1px',
          borderLeft: '1px solid rgba(255,255,255,0.07)',
          padding: '0 16px', gap: '8px',
        }}>
          <ArrowBtn onClick={prev} dir="left" accent={a.accent} />
          <span style={{ color: 'rgba(255,255,255,0.2)', fontFamily: "'Oswald', sans-serif", fontSize: '0.65rem', letterSpacing: '0.1em', minWidth: '40px', textAlign: 'center' }}>
            {String(active + 1).padStart(2,'0')} / {String(animeList.length).padStart(2,'0')}
          </span>
          <ArrowBtn onClick={next} dir="right" accent={a.accent} />
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(30px) scale(1.02); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes fadeSlideText {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}

function ArrowBtn({ onClick, dir, accent }: { onClick: () => void; dir: 'left' | 'right'; accent: string }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: '36px', height: '36px', flexShrink: 0,
        background: hov ? accent : 'rgba(255,255,255,0.06)',
        border: `1px solid ${hov ? accent : 'rgba(255,255,255,0.1)'}`,
        color: '#FFF', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '0.9rem', transition: 'all 0.2s ease',
      }}
    >
      {dir === 'left' ? '←' : '→'}
    </button>
  );
}
