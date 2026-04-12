export default function Hero() {
  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: '640px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>

      {/* Sketchfab 3D embed — full bleed background */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        pointerEvents: 'none', // prevent interaction / fullscreen triggers
      }}>
        {/* Slightly oversized to hide any iframe UI edges */}
        <iframe
          title="Monkey D Luffy"
          src="https://sketchfab.com/models/c8b0d4948813489f9c6980678cdaea46/embed?autostart=1&autospin=0.5&ui_controls=0&ui_infos=0&ui_inspector=0&ui_stop=0&ui_watermark=0&ui_watermark_link=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&transparent=1&dnt=1"
          frameBorder="0"
          allow="autoplay"
          style={{
            position: 'absolute',
            top: '-10%', left: '15%',
            width: '120%', height: '120%',
            border: 'none',
            pointerEvents: 'none',
          }}
        />
        {/* Cover the bottom Sketchfab logo bar */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '52px', background: '#0a0a0a', zIndex: 2 }} />
        {/* Cover top-left logo */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '180px', height: '52px', background: '#0a0a0a', zIndex: 2 }} />
      </div>

      {/* Gradient overlays — blend render into site bg */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(105deg, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.55) 45%, rgba(10,10,10,0.2) 100%)',
      }} />
      {/* Bottom fade to site bg */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '220px',
        background: 'linear-gradient(to top, #0a0a0a 0%, transparent 100%)', zIndex: 2,
      }} />
      {/* Top fade */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '120px',
        background: 'linear-gradient(to bottom, #0a0a0a 0%, transparent 100%)', zIndex: 2,
      }} />

      {/* Red left accent */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px',
        background: 'linear-gradient(to bottom, transparent, #e31c1c 40%, #e31c1c 60%, transparent)',
        zIndex: 3,
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 4, padding: '0 clamp(24px,7vw,120px)', maxWidth: '780px' }}>
        <p style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: 'clamp(10px,1.3vw,13px)', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#e31c1c', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ display: 'inline-block', width: '32px', height: '2px', background: '#e31c1c', flexShrink: 0 }} />
          Premium Anime Merchandise
        </p>
        <h1 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(72px,13vw,160px)', lineHeight: 0.88, letterSpacing: '0.02em', color: '#fff', margin: '0 0 24px' }}>
          SENPAI<br />
          <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)', color: 'transparent' }}>MERCH</span>
        </h1>
        <p style={{ fontFamily: 'DM Sans', fontSize: 'clamp(14px,1.8vw,18px)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, maxWidth: '460px', marginBottom: '40px' }}>
          Figures. Keychains. Streetwear. Lamps. Everything from your favourite universes — delivered across Pakistan.
        </p>
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <a href="/shop"
            style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '15px 36px', background: '#e31c1c', color: '#fff', textDecoration: 'none', display: 'inline-block', transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#b81515')}
            onMouseLeave={e => (e.currentTarget.style.background = '#e31c1c')}>
            Shop Now
          </a>
          <a href="/new"
            style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '15px 36px', background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', textDecoration: 'none', display: 'inline-block', transition: 'border-color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)')}>
            Explore Collection
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{ position: 'absolute', bottom: '48px', left: '50%', transform: 'translateX(-50%)', zIndex: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.25)', fontFamily: 'DM Sans', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
        <span>Scroll</span>
        <div style={{ width: '1px', height: '36px', background: 'rgba(255,255,255,0.15)', animation: 'scrollPulse 2s ease infinite' }} />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%,100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(0.5); }
        }
      `}</style>
    </section>
  );
}
