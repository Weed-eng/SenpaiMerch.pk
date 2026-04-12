import { useEffect } from 'react';

interface Props { open: boolean; onClose: () => void; }

const navLinks = [
  { label: 'Shop All', sub: 'Browse every product' },
  { label: 'Dragon Ball Z', sub: 'Figures, keychains & more' },
  { label: 'Naruto', sub: 'Konoha collection' },
  { label: 'One Piece', sub: 'Grand Line merch' },
  { label: 'Jujutsu Kaisen', sub: 'Cursed energy gear' },
  { label: 'Demon Slayer', sub: 'Nichirin & Hashira' },
  { label: 'Attack on Titan', sub: 'Scout Regiment' },
  { label: 'Apparel', sub: 'Haori, hoodies & tees' },
  { label: 'New Arrivals', sub: 'Just dropped' },
];

export default function Drawer({ open, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <div className={`drawer-overlay ${open ? 'open' : ''}`} onClick={onClose} />
      <div className={`drawer ${open ? 'open' : ''}`}>
        {/* Header */}
        <div style={{ padding: '24px', borderBottom: '1px solid #1e1e1e', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ fontFamily: "'Bebas Neue'", fontSize: '1.3rem', letterSpacing: '0.1em' }}>SENPAI MERCH</p>
            <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', marginTop: '2px' }}>Karachi, Pakistan</p>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: '1px solid #2a2a2a', width: '36px', height: '36px', color: '#fff', fontSize: '1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
        </div>

        {/* Nav links */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '12px 0' }}>
          {navLinks.map((link, i) => (
            <a key={i} href="#" onClick={onClose} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '14px 24px',
              borderBottom: '1px solid #141414',
              transition: 'background 0.15s',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = '#161616')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <div>
                <p style={{ fontSize: '0.95rem', fontWeight: 500 }}>{link.label}</p>
                <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', marginTop: '2px' }}>{link.sub}</p>
              </div>
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.8rem' }}>→</span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div style={{ padding: '20px 24px', borderTop: '1px solid #1e1e1e' }}>
          <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
            {['Facebook', 'Instagram'].map(s => (
              <a key={s} href="#" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', transition: 'color 0.2s' }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = '#fff')}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.35)')}
              >{s}</a>
            ))}
          </div>
          <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.2)' }}>+92 321 8202052 · senpaimerch@gmail.com</p>
        </div>
      </div>
    </>
  );
}
