import { useState } from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Search() {
  const [q, setQ] = useState('');
  const results = q.length > 1
    ? PRODUCTS.filter(p => p.title.toLowerCase().includes(q.toLowerCase()) || p.anime.toLowerCase().includes(q.toLowerCase()) || p.category.toLowerCase().includes(q.toLowerCase()))
    : [];

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', padding: 'clamp(40px,5vw,80px) clamp(20px,5vw,80px)' }}>
      <h1 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(48px,8vw,100px)', lineHeight: 0.9, color: '#fff', marginBottom: '32px' }}>SEARCH</h1>

      {/* Search input */}
      <div style={{ position: 'relative', maxWidth: '640px', marginBottom: '48px' }}>
        <input
          autoFocus
          type="text"
          placeholder="Search products, anime, categories..."
          value={q}
          onChange={e => setQ(e.target.value)}
          style={{
            width: '100%', padding: '18px 24px 18px 56px',
            background: '#111', border: '1px solid rgba(255,255,255,0.12)',
            borderBottom: q ? '1px solid #e31c1c' : '1px solid rgba(255,255,255,0.12)',
            color: '#fff', fontFamily: 'DM Sans', fontSize: '16px', outline: 'none',
            transition: 'border-color 0.2s',
          }}
        />
        <svg style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.3)' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      </div>

      {q.length > 1 && (
        <>
          <p style={{ fontFamily: 'DM Sans', fontSize: '13px', color: 'rgba(255,255,255,0.35)', marginBottom: '24px' }}>
            {results.length} results for "{q}"
          </p>
          {results.length === 0 ? (
            <p style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '28px', color: 'rgba(255,255,255,0.2)' }}>NO RESULTS FOUND</p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2px' }}>
              {results.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </>
      )}

      {q.length <= 1 && (
        <div>
          <p style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '16px' }}>Popular Searches</p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {['One Piece', 'Naruto', 'Gojo', 'Levi', 'Figures', 'Hoodies', 'Keychains', 'Lamps', 'Dragon Ball'].map(t => (
              <button key={t} onClick={() => setQ(t)} style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '12px', letterSpacing: '0.08em', padding: '8px 18px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.55)', cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#e31c1c')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}>
                {t}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
