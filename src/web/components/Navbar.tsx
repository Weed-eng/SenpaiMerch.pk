import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import { useCart } from '../context/CartContext';
import MobileDrawer from './MobileDrawer';

const NAV_ITEMS = ['SHOP ALL ANIME', 'SHOP BY CATEGORY', 'SHOP BY ANIME', 'NEW ARRIVALS'];

const SHOP_BY_ANIME = [
  'One Piece','Naruto','Demon Slayer','Attack on Titan','Solo Leveling',
  'Jujutsu Kaisen','Dragon Ball Z','My Hero Academia','Berserk','Bleach',
  'Chainsaw Man','Death Note','Tokyo Ghoul','Hunter x Hunter','Pokemon',
  "JoJo's Bizarre Adventure",'Other Animes Merchandise',
];

const SHOP_BY_CATEGORY = {
  'Jewelry & Accessories': ['Shop All Jewelry','Necklaces','Keychains','Rings & Earrings','Bracelets & Wristbands','Wallets & Watches'],
  'Figures & Collectibles': ['Shop All Collectibles','Action Figures','Anime Lamps','Booster Packs','Stickers & Card Skins'],
  'Cosplay & Weapons': ['Shop All Cosplay','Cosplay Accessories','Kimonos & Cloaks','Katana & Kunai','Anime Headwear','Ties & Glasses'],
  'Movie & Gaming': ['Shop All Movie & Gaming','Gaming Merchandise','Movie Collectibles','Posters','Accessories'],
};

type MegaMenu = 'SHOP BY CATEGORY' | 'SHOP BY ANIME' | null;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState<MegaMenu>(null);
  const [activeCat, setActiveCat] = useState<string>('Jewelry & Accessories');
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openDrawer } = useCart();
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const [, navigate] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openMega = (label: string) => {
    clearTimeout(timeoutRef.current);
    if (label === 'SHOP BY CATEGORY' || label === 'SHOP BY ANIME') setMega(label as MegaMenu);
    else setMega(null);
  };

  const closeMega = () => {
    timeoutRef.current = setTimeout(() => setMega(null), 120);
  };

  const keepMega = () => clearTimeout(timeoutRef.current);

  const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <>
      {/* Top promo bar */}
      <div style={{ background: '#111', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '8px clamp(20px,5vw,80px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Social icons */}
        <div style={{ display: 'flex', gap: '16px' }}>
          {[
            { label: 'IG', href: 'https://www.instagram.com/senpaimerch.pk?igsh=cjFkN2ljdXVuNmY4', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg> },
            { label: 'TK', href: 'https://tiktok.com/@senpaimerch', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg> },
            { label: 'FB', href: 'https://facebook.com/senpaimerch', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center' }}>{s.icon}</a>
          ))}
        </div>
        {/* Promo text */}
        <p style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', margin: 0, textAlign: 'center' }}>
          FREE NATIONWIDE DELIVERY ABOVE RS. 3000
        </p>
        {/* Right spacer */}
        <div style={{ width: '62px' }} />
      </div>

      {/* Main header */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 200,
        background: scrolled ? 'rgba(10,10,10,0.97)' : '#0a0a0a',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        transition: 'background 0.3s ease',
      }}>
        {/* Main bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 clamp(20px,5vw,80px)', height: '68px' }}>
          {/* Left: search */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1 }}>
            <button onClick={() => navigate('/search')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', display: 'flex', padding: '4px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </button>
            {/* Mobile hamburger */}
            <button onClick={() => setMobileOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', display: 'none', padding: '4px' }} className="nav-hamburger">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
          </div>

          {/* Center: logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <img src="/logo-white.png" alt="Senpai Merch" style={{ height: '38px', width: 'auto', objectFit: 'contain' }} />
          </Link>

          {/* Right: icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1, justifyContent: 'flex-end' }}>
            <button onClick={() => navigate('/account')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', display: 'flex', padding: '4px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </button>
            <button onClick={() => navigate('/wishlist')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', display: 'flex', padding: '4px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </button>
            <button onClick={openDrawer} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', display: 'flex', alignItems: 'center', gap: '6px', padding: '4px', position: 'relative' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              {count > 0 && (
                <span style={{ position: 'absolute', top: '-4px', right: '-4px', background: '#e31c1c', color: '#fff', fontFamily: 'DM Sans', fontWeight: 700, fontSize: '10px', width: '18px', height: '18px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Desktop nav */}
        <nav style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '0 clamp(20px,5vw,80px)' }} className="desktop-nav">
          <ul style={{ display: 'flex', gap: '0', listStyle: 'none', margin: 0, padding: 0 }}>
            {NAV_ITEMS.map(item => (
              <li key={item} style={{ position: 'relative' }}
                onMouseEnter={() => openMega(item)}
                onMouseLeave={closeMega}
              >
                <button
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontFamily: 'DM Sans', fontWeight: 700, fontSize: '12px',
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: mega === item ? '#fff' : 'rgba(255,255,255,0.6)',
                    padding: '14px 20px',
                    display: 'flex', alignItems: 'center', gap: '5px',
                    transition: 'color 0.2s',
                    position: 'relative',
                  }}
                  onClick={() => item === 'NEW ARRIVALS' && navigate('/new') || item === 'SHOP ALL ANIME' && navigate('/shop')}
                >
                  {item}
                  {(item === 'SHOP BY CATEGORY' || item === 'SHOP BY ANIME') && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transition: 'transform 0.2s', transform: mega === item ? 'rotate(180deg)' : 'none' }}>
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  )}
                  {/* Active underline */}
                  <span style={{
                    position: 'absolute', bottom: 0, left: '20px', right: '20px', height: '2px',
                    background: '#e31c1c',
                    transform: mega === item ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.2s ease',
                  }} />
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mega menu — SHOP BY ANIME */}
        {mega === 'SHOP BY ANIME' && (
          <div
            onMouseEnter={keepMega}
            onMouseLeave={closeMega}
            style={{
              position: 'absolute', top: '100%', left: 0, right: 0,
              background: '#111', borderTop: '2px solid #e31c1c',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              padding: '32px clamp(20px,5vw,80px)',
              zIndex: 300,
              animation: 'megaFade 0.18s ease',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '4px 24px' }}>
              {SHOP_BY_ANIME.map(anime => (
                <Link
                  key={anime}
                  href={`/anime/${slugify(anime)}`}
                  onClick={() => setMega(null)}
                  style={{
                    fontFamily: 'DM Sans', fontSize: '14px', fontWeight: 500,
                    color: 'rgba(255,255,255,0.65)', textDecoration: 'none',
                    padding: '8px 0',
                    borderBottom: '1px solid transparent',
                    transition: 'color 0.15s, border-color 0.15s',
                    display: 'block',
                  }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.color = '#fff'; (e.target as HTMLElement).style.borderBottomColor = '#e31c1c'; }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.65)'; (e.target as HTMLElement).style.borderBottomColor = 'transparent'; }}
                >
                  {anime}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Mega menu — SHOP BY CATEGORY */}
        {mega === 'SHOP BY CATEGORY' && (
          <div
            onMouseEnter={keepMega}
            onMouseLeave={closeMega}
            style={{
              position: 'absolute', top: '100%', left: 0, right: 0,
              background: '#111', borderTop: '2px solid #e31c1c',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              zIndex: 300,
              animation: 'megaFade 0.18s ease',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr 300px', padding: '0 clamp(20px,5vw,80px)' }}>
              {/* Category list */}
              <div style={{ borderRight: '1px solid rgba(255,255,255,0.07)', padding: '24px 0' }}>
                {Object.keys(SHOP_BY_CATEGORY).map(cat => (
                  <button
                    key={cat}
                    onMouseEnter={() => setActiveCat(cat)}
                    style={{
                      display: 'block', width: '100%', textAlign: 'left',
                      background: activeCat === cat ? 'rgba(227,28,28,0.08)' : 'none',
                      border: 'none', borderLeft: activeCat === cat ? '2px solid #e31c1c' : '2px solid transparent',
                      cursor: 'pointer',
                      fontFamily: 'DM Sans', fontWeight: 600, fontSize: '13px',
                      letterSpacing: '0.06em', textTransform: 'uppercase',
                      color: activeCat === cat ? '#fff' : 'rgba(255,255,255,0.5)',
                      padding: '14px 24px',
                      transition: 'all 0.15s',
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Sub-items */}
              <div style={{ padding: '24px 40px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <p style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '12px' }}>
                  {activeCat}
                </p>
                {SHOP_BY_CATEGORY[activeCat as keyof typeof SHOP_BY_CATEGORY].map(sub => (
                  <Link
                    key={sub}
                    href={`/collections/${slugify(sub)}`}
                    onClick={() => setMega(null)}
                    style={{
                      fontFamily: 'DM Sans', fontSize: '14px', fontWeight: 500,
                      color: 'rgba(255,255,255,0.65)', textDecoration: 'none',
                      padding: '8px 0',
                      borderBottom: '1px solid transparent',
                      transition: 'color 0.15s, border-color 0.15s',
                      display: 'block',
                    }}
                    onMouseEnter={e => { (e.target as HTMLElement).style.color = '#fff'; (e.target as HTMLElement).style.borderBottomColor = '#e31c1c'; }}
                    onMouseLeave={e => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.65)'; (e.target as HTMLElement).style.borderBottomColor = 'transparent'; }}
                  >
                    {sub}
                  </Link>
                ))}
              </div>

              {/* Promo panel */}
              <div style={{ borderLeft: '1px solid rgba(255,255,255,0.07)', padding: '24px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'rgba(227,28,28,0.04)' }}>
                <p style={{ fontFamily: 'DM Sans', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '8px' }}>Featured</p>
                <p style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '32px', color: '#fff', lineHeight: 1, margin: '0 0 12px' }}>
                  NEW DROPS<br/>EVERY WEEK
                </p>
                <p style={{ fontFamily: 'DM Sans', fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: '20px' }}>
                  From rare figures to streetwear collabs — freshest anime merch in PK.
                </p>
                <Link
                  href="/new"
                  onClick={() => setMega(null)}
                  style={{
                    fontFamily: 'DM Sans', fontWeight: 700, fontSize: '12px', letterSpacing: '0.12em',
                    textTransform: 'uppercase', padding: '10px 20px',
                    background: '#e31c1c', color: '#fff', textDecoration: 'none',
                    display: 'inline-block', alignSelf: 'flex-start',
                  }}
                >
                  See New Arrivals →
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <style>{`
        @keyframes megaFade {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
