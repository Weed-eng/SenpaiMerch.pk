import { useState } from 'react';
import { Link } from 'wouter';

const ANIME_LIST = [
  'One Piece','Naruto','Demon Slayer','Attack on Titan','Solo Leveling',
  'Jujutsu Kaisen','Dragon Ball Z','My Hero Academia','Berserk','Bleach',
  'Chainsaw Man','Death Note','Tokyo Ghoul','Hunter x Hunter','Pokemon',
  "JoJo's Bizarre Adventure",'Other Animes',
];

const CATEGORY_LIST = [
  'Jewelry & Accessories','Figures & Collectibles','Cosplay & Weapons','Movie & Gaming',
];

interface Props { open: boolean; onClose: () => void; }

export default function MobileDrawer({ open, onClose }: Props) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  const toggle = (key: string) => setExpanded(prev => prev === key ? null : key);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 400,
          opacity: open ? 1 : 0, pointerEvents: open ? 'all' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      />
      {/* Drawer */}
      <div style={{
        position: 'fixed', top: 0, left: 0, bottom: 0,
        width: 'min(360px, 90vw)',
        background: '#111', zIndex: 500,
        transform: open ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
        overflowY: 'auto',
        display: 'flex', flexDirection: 'column',
      }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <img src="/logo-white.png" alt="Senpai Merch" style={{ height: '32px', width: 'auto' }} />
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', display: 'flex', padding: '4px' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        {/* Nav items */}
        <div style={{ flex: 1, padding: '16px 0' }}>
          {/* Shop All */}
          <Link href="/shop" onClick={onClose} style={{ display: 'block', fontFamily: 'DM Sans', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff', padding: '14px 24px', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            Shop All Anime
          </Link>

          {/* Shop by Anime accordion */}
          <div>
            <button
              onClick={() => toggle('anime')}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', background: 'none', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)', cursor: 'pointer', fontFamily: 'DM Sans', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff', padding: '14px 24px' }}
            >
              Shop by Anime
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transform: expanded === 'anime' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            {expanded === 'anime' && (
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '8px 0' }}>
                {ANIME_LIST.map(a => (
                  <Link key={a} href={`/anime/${slugify(a)}`} onClick={onClose} style={{ display: 'block', fontFamily: 'DM Sans', fontSize: '14px', color: 'rgba(255,255,255,0.6)', padding: '10px 40px', textDecoration: 'none' }}>
                    {a}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Shop by Category accordion */}
          <div>
            <button
              onClick={() => toggle('cat')}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', background: 'none', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)', cursor: 'pointer', fontFamily: 'DM Sans', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff', padding: '14px 24px' }}
            >
              Shop by Category
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transform: expanded === 'cat' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            {expanded === 'cat' && (
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '8px 0' }}>
                {CATEGORY_LIST.map(c => (
                  <Link key={c} href={`/collections/${slugify(c)}`} onClick={onClose} style={{ display: 'block', fontFamily: 'DM Sans', fontSize: '14px', color: 'rgba(255,255,255,0.6)', padding: '10px 40px', textDecoration: 'none' }}>
                    {c}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/new" onClick={onClose} style={{ display: 'block', fontFamily: 'DM Sans', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#e31c1c', padding: '14px 24px', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            New Arrivals
          </Link>

          <div style={{ marginTop: '24px', padding: '0 24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {[['Account', '/account'], ['Wishlist', '/wishlist'], ['Cart', '/cart'], ['About', '/about'], ['Contact', '/contact'], ['FAQ', '/faq']].map(([label, href]) => (
              <Link key={label} href={href} onClick={onClose} style={{ fontFamily: 'DM Sans', fontSize: '14px', color: 'rgba(255,255,255,0.45)', padding: '10px 0', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
