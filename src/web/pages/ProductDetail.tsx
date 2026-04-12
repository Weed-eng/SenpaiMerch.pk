import { useState } from 'react';
import { useParams, Link } from 'wouter';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find(p => p.slug === slug);
  const { addItem } = useCart();
  const { toggle, has } = useWishlist();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [qty, setQty] = useState(1);
  const [imgIdx, setImgIdx] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '48px', color: 'rgba(255,255,255,0.2)' }}>PRODUCT NOT FOUND</p>
        <Link href="/shop" style={{ fontFamily: 'DM Sans', fontSize: '14px', color: '#e31c1c', textDecoration: 'none' }}>← Back to Shop</Link>
      </div>
    </div>
  );

  const related = PRODUCTS.filter(p => p.anime === product.anime && p.id !== product.id).slice(0, 4);
  const wished = has(product.id);

  const handleAddToCart = () => {
    addItem(product, selectedSize || undefined);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      {/* Breadcrumb */}
      <div style={{ padding: '20px clamp(20px,5vw,80px)', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '8px', alignItems: 'center' }}>
        {[['Home', '/'], ['Shop', '/shop'], [product.anime, `/anime/${product.anime.toLowerCase().replace(/\s+/g,'-')}`], [product.title, '']].map(([l, h], i, arr) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {h ? <Link href={h} style={{ fontFamily: 'DM Sans', fontSize: '12px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>{l}</Link>
              : <span style={{ fontFamily: 'DM Sans', fontSize: '12px', color: 'rgba(255,255,255,0.65)' }}>{l}</span>}
            {i < arr.length - 1 && <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '12px' }}>/</span>}
          </span>
        ))}
      </div>

      {/* Main product layout */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '0', padding: 'clamp(32px,5vw,60px) clamp(20px,5vw,80px)', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Gallery */}
        <div>
          <div style={{ position: 'relative', paddingBottom: '120%', overflow: 'hidden', background: '#111', marginBottom: '8px' }}>
            <img src={product.images[imgIdx]} alt={product.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            {product.badge && (
              <span style={{ position: 'absolute', top: '16px', left: '16px', background: product.badge === 'SALE' ? '#fff' : '#e31c1c', color: product.badge === 'SALE' ? '#0a0a0a' : '#fff', fontFamily: 'DM Sans', fontWeight: 700, fontSize: '11px', letterSpacing: '0.12em', padding: '5px 10px' }}>
                {product.badge}
              </span>
            )}
          </div>
          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div style={{ display: 'flex', gap: '4px' }}>
              {product.images.map((img, i) => (
                <button key={i} onClick={() => setImgIdx(i)} style={{ width: '80px', height: '80px', padding: 0, border: i === imgIdx ? '2px solid #e31c1c' : '2px solid transparent', cursor: 'pointer', overflow: 'hidden', background: '#111', flexShrink: 0 }}>
                  <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div style={{ padding: '0 0 0 clamp(0px,4vw,48px)' }}>
          <p style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#e31c1c', marginBottom: '10px', opacity: 0.9 }}>
            {product.anime}
          </p>
          <h1 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(32px,5vw,56px)', lineHeight: 1, color: '#fff', marginBottom: '20px', letterSpacing: '0.02em' }}>
            {product.title}
          </h1>

          {/* Price */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <span style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '32px', color: '#fff', letterSpacing: '0.03em' }}>
              PKR {product.price.toLocaleString()}
            </span>
            {product.comparePrice && (
              <span style={{ fontFamily: 'DM Sans', fontSize: '16px', color: 'rgba(255,255,255,0.3)', textDecoration: 'line-through' }}>
                PKR {product.comparePrice.toLocaleString()}
              </span>
            )}
            {product.comparePrice && (
              <span style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '12px', background: '#e31c1c', color: '#fff', padding: '3px 8px' }}>
                SAVE {Math.round((1 - product.price / product.comparePrice) * 100)}%
              </span>
            )}
          </div>

          <p style={{ fontFamily: 'DM Sans', fontSize: '15px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: '28px' }}>
            {product.description}
          </p>

          {/* Size selector */}
          {product.sizes && (
            <div style={{ marginBottom: '24px' }}>
              <p style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '10px' }}>
                Size {selectedSize && <span style={{ color: '#fff', marginLeft: '8px' }}>{selectedSize}</span>}
              </p>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {product.sizes.map(s => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    style={{
                      fontFamily: 'DM Sans', fontWeight: 600, fontSize: '13px',
                      padding: '8px 16px',
                      border: selectedSize === s ? '1px solid #e31c1c' : '1px solid rgba(255,255,255,0.15)',
                      background: selectedSize === s ? 'rgba(227,28,28,0.12)' : 'transparent',
                      color: selectedSize === s ? '#fff' : 'rgba(255,255,255,0.5)',
                      cursor: 'pointer', transition: 'all 0.15s',
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Qty + Add */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(255,255,255,0.15)' }}>
              <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', width: '40px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>−</button>
              <span style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '15px', color: '#fff', padding: '0 16px', minWidth: '48px', textAlign: 'center' }}>{qty}</span>
              <button onClick={() => setQty(q => q + 1)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', width: '40px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>+</button>
            </div>
            <button
              onClick={handleAddToCart}
              style={{ flex: 1, minWidth: '180px', fontFamily: 'DM Sans', fontWeight: 700, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0 28px', height: '48px', background: added ? '#1a7a3a' : '#e31c1c', color: '#fff', border: 'none', cursor: 'pointer', transition: 'background 0.2s' }}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            style={{ width: '100%', fontFamily: 'DM Sans', fontWeight: 700, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '15px', background: '#fff', color: '#0a0a0a', border: 'none', cursor: 'pointer', marginBottom: '20px', transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#e0e0e0')}
            onMouseLeave={e => (e.currentTarget.style.background = '#fff')}
          >
            Buy Now
          </button>

          {/* Wishlist */}
          <button
            onClick={() => toggle(product.id)}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', color: wished ? '#e31c1c' : 'rgba(255,255,255,0.4)', fontFamily: 'DM Sans', fontSize: '13px', padding: 0, marginBottom: '28px' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill={wished ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            {wished ? 'Saved to Wishlist' : 'Add to Wishlist'}
          </button>

          {/* Trust badges */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px', border: '1px solid rgba(255,255,255,0.07)', background: '#111' }}>
            {[
              ['🚚', 'Free Shipping above PKR 3,000'],
              ['🔄', 'Easy 7-day returns'],
              ['💳', 'COD available nationwide'],
              ['✅', 'Authentic & quality guaranteed'],
            ].map(([icon, text]) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '16px' }}>{icon}</span>
                <span style={{ fontFamily: 'DM Sans', fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div style={{ padding: 'clamp(40px,6vw,80px) clamp(20px,5vw,80px)' }}>
          <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(32px,5vw,60px)', color: '#fff', marginBottom: '32px' }}>MORE FROM {product.anime.toUpperCase()}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2px' }}>
            {related.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      )}
    </div>
  );
}
