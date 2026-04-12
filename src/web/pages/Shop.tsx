import { useState, useMemo } from 'react';
import { PRODUCTS, ANIME_LIST } from '../data/products';
import ProductCard from '../components/ProductCard';

const CATEGORIES = ['All', 'Apparel', 'Jewelry', 'Figures', 'Lamps', 'Keychains'];
const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'On Sale', value: 'sale' },
];

export default function Shop() {
  const [category, setCategory] = useState('All');
  const [anime, setAnime] = useState<string[]>([]);
  const [sort, setSort] = useState('featured');
  const [saleOnly, setSaleOnly] = useState(false);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [page, setPage] = useState(1);
  const PER_PAGE = 12;

  const toggleAnime = (a: string) => setAnime(prev => prev.includes(a) ? prev.filter(x => x !== a) : [...prev, a]);

  const filtered = useMemo(() => {
    let p = [...PRODUCTS];
    if (category !== 'All') p = p.filter(x => x.category === category);
    if (anime.length) p = p.filter(x => anime.includes(x.anime));
    if (saleOnly) p = p.filter(x => x.badge === 'SALE');
    p = p.filter(x => x.price <= maxPrice);
    if (sort === 'price-asc') p.sort((a,b) => a.price - b.price);
    else if (sort === 'price-desc') p.sort((a,b) => b.price - a.price);
    else if (sort === 'sale') p = p.filter(x => x.comparePrice);
    return p;
  }, [category, anime, sort, saleOnly, maxPrice]);

  const paginated = filtered.slice(0, page * PER_PAGE);
  const hasMore = paginated.length < filtered.length;

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '24px' }}>
      {/* Page header */}
      <div style={{ padding: 'clamp(32px,5vw,60px) clamp(20px,5vw,80px) 0', borderBottom: '1px solid rgba(255,255,255,0.06)', marginBottom: '0' }}>
        <p style={{ fontFamily: 'DM Sans', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#e31c1c', marginBottom: '8px', opacity: 0.9 }}>Browse</p>
        <h1 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(48px,8vw,100px)', lineHeight: 0.9, color: '#fff', marginBottom: '24px' }}>SHOP ALL ANIME</h1>
        {/* Category pills */}
        <div style={{ display: 'flex', gap: '2px', overflowX: 'auto', paddingBottom: '0' }}>
          {CATEGORIES.map(c => (
            <button
              key={c}
              onClick={() => { setCategory(c); setPage(1); }}
              style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '10px 22px', border: 'none', background: category === c ? '#e31c1c' : 'rgba(255,255,255,0.05)', color: category === c ? '#fff' : 'rgba(255,255,255,0.5)', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.2s', flexShrink: 0 }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', padding: '0 clamp(20px,5vw,80px)' }}>
        {/* Sidebar */}
        <aside style={{ width: '240px', flexShrink: 0, padding: '32px 24px 32px 0', borderRight: '1px solid rgba(255,255,255,0.06)', display: 'block' }} className="shop-sidebar">
          <div style={{ marginBottom: '32px' }}>
            <p style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '14px' }}>Filter by Anime</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', maxHeight: '300px', overflowY: 'auto' }}>
              {ANIME_LIST.map(a => (
                <label key={a} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', padding: '6px 4px' }}>
                  <input type="checkbox" checked={anime.includes(a)} onChange={() => { toggleAnime(a); setPage(1); }} style={{ accentColor: '#e31c1c', width: '14px', height: '14px' }} />
                  <span style={{ fontFamily: 'DM Sans', fontSize: '13px', color: anime.includes(a) ? '#fff' : 'rgba(255,255,255,0.5)' }}>{a}</span>
                </label>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <p style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '14px' }}>Max Price: PKR {maxPrice.toLocaleString()}</p>
            <input type="range" min="500" max="10000" step="500" value={maxPrice} onChange={e => { setMaxPrice(Number(e.target.value)); setPage(1); }} style={{ width: '100%', accentColor: '#e31c1c' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
              <span style={{ fontFamily: 'DM Sans', fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}>PKR 500</span>
              <span style={{ fontFamily: 'DM Sans', fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}>PKR 10,000</span>
            </div>
          </div>

          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
            <input type="checkbox" checked={saleOnly} onChange={() => { setSaleOnly(p => !p); setPage(1); }} style={{ accentColor: '#e31c1c', width: '14px', height: '14px' }} />
            <span style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '13px', color: saleOnly ? '#e31c1c' : 'rgba(255,255,255,0.5)' }}>Sale Items Only</span>
          </label>

          {(anime.length > 0 || saleOnly || category !== 'All') && (
            <button onClick={() => { setAnime([]); setSaleOnly(false); setCategory('All'); setMaxPrice(10000); setPage(1); }} style={{ marginTop: '24px', background: 'none', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.4)', fontFamily: 'DM Sans', fontWeight: 600, fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '8px 16px', cursor: 'pointer', width: '100%' }}>
              Clear Filters
            </button>
          )}
        </aside>

        {/* Products area */}
        <div style={{ flex: 1, padding: '32px 0 32px clamp(16px,3vw,40px)' }}>
          {/* Sort + count row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
            <p style={{ fontFamily: 'DM Sans', fontSize: '13px', color: 'rgba(255,255,255,0.35)' }}>
              {filtered.length} products
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontFamily: 'DM Sans', fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>Sort:</span>
              <select value={sort} onChange={e => { setSort(e.target.value); setPage(1); }} style={{ background: '#111', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontFamily: 'DM Sans', fontSize: '13px', padding: '8px 12px', cursor: 'pointer', outline: 'none' }}>
                {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div style={{ padding: '80px 0', textAlign: 'center' }}>
              <p style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '32px', color: 'rgba(255,255,255,0.2)' }}>NO PRODUCTS FOUND</p>
              <p style={{ fontFamily: 'DM Sans', fontSize: '14px', color: 'rgba(255,255,255,0.3)', marginTop: '8px' }}>Try adjusting your filters.</p>
            </div>
          ) : (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2px' }}>
                {paginated.map(p => <ProductCard key={p.id} product={p} />)}
              </div>
              {hasMore && (
                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                  <button onClick={() => setPage(p => p + 1)} style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '14px 40px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', cursor: 'pointer', transition: 'border-color 0.2s, background 0.2s' }}
                    onMouseEnter={e => { (e.currentTarget.style.borderColor = '#e31c1c'); (e.currentTarget.style.color = '#e31c1c'); }}
                    onMouseLeave={e => { (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'); (e.currentTarget.style.color = '#fff'); }}>
                    Load More ({filtered.length - paginated.length} remaining)
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .shop-sidebar { display: none !important; } }
      `}</style>
    </div>
  );
}
