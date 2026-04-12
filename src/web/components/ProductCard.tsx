import { useState } from 'react';
import { Link } from 'wouter';
import type { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

interface Props {
  product: Product;
  showAnime?: boolean;
}

const BADGE_STYLES = {
  NEW:  { bg: '#e31c1c', color: '#fff' },
  SALE: { bg: '#fff', color: '#0a0a0a' },
  HOT:  { bg: '#0a0a0a', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' },
};

export default function ProductCard({ product, showAnime = true }: Props) {
  const [hovered, setHovered] = useState(false);
  const [imgIdx, setImgIdx] = useState(0);
  const { addItem } = useCart();
  const { toggle, has } = useWishlist();
  const wished = has(product.id);

  const onHoverEnter = () => { setHovered(true); if (product.images[1]) setImgIdx(1); };
  const onHoverLeave = () => { setHovered(false); setImgIdx(0); };

  const bs = product.badge ? BADGE_STYLES[product.badge] : null;

  return (
    <div
      style={{
        background: '#111',
        position: 'relative',
        overflow: 'hidden',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 12px 32px rgba(0,0,0,0.5)' : '0 0 0 rgba(0,0,0,0)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        border: '1px solid rgba(255,255,255,0.05)',
      }}
      onMouseEnter={onHoverEnter}
      onMouseLeave={onHoverLeave}
    >
      {/* Image */}
      <div style={{ position: 'relative', paddingBottom: '125%', overflow: 'hidden', background: '#1a1a1a' }}>
        <img
          src={product.images[imgIdx]}
          alt={product.title}
          loading="lazy"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.4s ease, opacity 0.3s ease',
          }}
        />

        {/* Badge */}
        {bs && (
          <span style={{
            position: 'absolute', top: '10px', left: '10px',
            background: bs.bg, color: bs.color,
            fontFamily: 'DM Sans', fontWeight: 700, fontSize: '10px',
            letterSpacing: '0.12em', padding: '4px 9px',
            ...(bs as any).border ? { border: (bs as any).border } : {},
          }}>
            {product.badge}
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={e => { e.preventDefault(); toggle(product.id); }}
          style={{
            position: 'absolute', top: '10px', right: '10px',
            background: wished ? '#e31c1c' : 'rgba(10,10,10,0.6)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '50%', width: '32px', height: '32px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: '#fff',
            opacity: hovered || wished ? 1 : 0,
            transition: 'opacity 0.2s ease, background 0.2s ease',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill={wished ? '#fff' : 'none'} stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>

        {/* Quick add */}
        <button
          onClick={() => addItem(product)}
          style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            background: '#e31c1c', color: '#fff',
            fontFamily: 'DM Sans', fontWeight: 700, fontSize: '11px',
            letterSpacing: '0.12em', textTransform: 'uppercase', padding: '12px',
            border: 'none', cursor: 'pointer',
            transform: hovered ? 'translateY(0)' : 'translateY(100%)',
            transition: 'transform 0.25s ease',
          }}
        >
          + Quick Add
        </button>
      </div>

      {/* Info */}
      <Link href={`/products/${product.slug}`} style={{ display: 'block', padding: '14px 12px 16px', textDecoration: 'none' }}>
        {showAnime && (
          <p style={{ fontFamily: 'DM Sans', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#e31c1c', marginBottom: '4px', opacity: 0.8 }}>
            {product.anime}
          </p>
        )}
        <p style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '13px', color: '#fff', marginBottom: '8px', lineHeight: 1.3 }}>
          {product.title}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '14px', color: '#fff' }}>
            PKR {product.price.toLocaleString()}
          </span>
          {product.comparePrice && (
            <span style={{ fontFamily: 'DM Sans', fontSize: '12px', color: 'rgba(255,255,255,0.3)', textDecoration: 'line-through' }}>
              PKR {product.comparePrice.toLocaleString()}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
}
