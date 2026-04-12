import { Link } from 'wouter';
import { useWishlist } from '../context/WishlistContext';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Wishlist() {
  const { ids } = useWishlist();
  const products = PRODUCTS.filter(p => ids.includes(p.id));

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', padding: 'clamp(40px,5vw,80px) clamp(20px,5vw,80px)' }}>
      <p style={{ fontFamily: 'DM Sans', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#e31c1c', marginBottom: '8px', opacity: 0.9 }}>Saved Items</p>
      <h1 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(48px,8vw,100px)', lineHeight: 0.9, color: '#fff', marginBottom: '40px' }}>
        MY WISHLIST <span style={{ color: 'rgba(255,255,255,0.25)' }}>({ids.length})</span>
      </h1>

      {products.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '80px 0' }}>
          <p style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '32px', color: 'rgba(255,255,255,0.2)', marginBottom: '24px' }}>NOTHING SAVED YET</p>
          <p style={{ fontFamily: 'DM Sans', fontSize: '14px', color: 'rgba(255,255,255,0.35)', marginBottom: '32px' }}>Click the heart icon on any product to save it here.</p>
          <Link href="/shop" style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '14px 36px', background: '#e31c1c', color: '#fff', textDecoration: 'none', display: 'inline-block' }}>
            Browse Products
          </Link>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2px' }}>
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  );
}
