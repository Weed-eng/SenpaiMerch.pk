import { Link } from 'wouter';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { items, removeItem, updateQty, total, count } = useCart();

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', padding: 'clamp(40px,5vw,80px) clamp(20px,5vw,80px)' }}>
      <div style={{ marginBottom: '40px' }}>
        <p style={{ fontFamily: 'DM Sans', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#e31c1c', marginBottom: '8px', opacity: 0.9 }}>Review</p>
        <h1 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(48px,8vw,100px)', lineHeight: 0.9, color: '#fff' }}>
          YOUR CART <span style={{ color: 'rgba(255,255,255,0.25)' }}>({count})</span>
        </h1>
      </div>

      {items.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '80px 0' }}>
          <p style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '32px', color: 'rgba(255,255,255,0.2)', marginBottom: '24px' }}>YOUR CART IS EMPTY</p>
          <Link href="/shop" style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '14px 36px', background: '#e31c1c', color: '#fff', textDecoration: 'none', display: 'inline-block' }}>
            Start Shopping
          </Link>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '48px', alignItems: 'start' }} className="cart-layout">
          {/* Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {/* Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr auto auto', gap: '20px', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              {['', 'Product', 'Quantity', 'Total'].map(h => (
                <p key={h} style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>{h}</p>
              ))}
            </div>

            {items.map(item => (
              <div key={item.product.id + (item.size || '')} style={{ display: 'grid', gridTemplateColumns: '80px 1fr auto auto', gap: '20px', padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', alignItems: 'center' }}>
                <div style={{ width: '80px', height: '80px', background: '#111', overflow: 'hidden' }}>
                  <img src={item.product.images[0]} alt={item.product.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <p style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#e31c1c', marginBottom: '4px', opacity: 0.9 }}>{item.product.anime}</p>
                  <p style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '14px', color: '#fff', marginBottom: '4px' }}>{item.product.title}</p>
                  {item.size && <p style={{ fontFamily: 'DM Sans', fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>Size: {item.size}</p>}
                  <p style={{ fontFamily: 'DM Sans', fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>PKR {item.product.price.toLocaleString()} each</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <button onClick={() => updateQty(item.product.id, item.quantity - 1, item.size)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>−</button>
                  <span style={{ fontFamily: 'DM Sans', fontSize: '14px', color: '#fff', padding: '0 12px', minWidth: '40px', textAlign: 'center' }}>{item.quantity}</span>
                  <button onClick={() => updateQty(item.product.id, item.quantity + 1, item.size)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>+</button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                  <span style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '20px', color: '#fff', letterSpacing: '0.03em' }}>PKR {(item.product.price * item.quantity).toLocaleString()}</span>
                  <button onClick={() => removeItem(item.product.id, item.size)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.3)', fontFamily: 'DM Sans', fontSize: '12px', textDecoration: 'underline', padding: 0 }}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div style={{ minWidth: '300px', padding: '28px', background: '#111', border: '1px solid rgba(255,255,255,0.07)', position: 'sticky', top: '100px' }}>
            <p style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '22px', color: '#fff', letterSpacing: '0.05em', marginBottom: '20px' }}>ORDER SUMMARY</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'DM Sans', fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>Subtotal ({count} items)</span>
                <span style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '13px', color: '#fff' }}>PKR {total.toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'DM Sans', fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>Shipping</span>
                <span style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '13px', color: total >= 3000 ? '#4caf50' : '#fff' }}>{total >= 3000 ? 'FREE' : 'PKR 200'}</span>
              </div>
              {total < 3000 && (
                <p style={{ fontFamily: 'DM Sans', fontSize: '11px', color: '#e31c1c', background: 'rgba(227,28,28,0.08)', padding: '8px 10px', borderLeft: '2px solid #e31c1c' }}>
                  Add PKR {(3000 - total).toLocaleString()} more for FREE shipping
                </p>
              )}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderTop: '1px solid rgba(255,255,255,0.07)', marginBottom: '20px' }}>
              <span style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '14px', color: '#fff' }}>Total</span>
              <span style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '26px', color: '#fff', letterSpacing: '0.03em' }}>PKR {(total + (total >= 3000 ? 0 : 200)).toLocaleString()}</span>
            </div>
            <Link href="/checkout" style={{ display: 'block', textAlign: 'center', fontFamily: 'DM Sans', fontWeight: 700, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '16px', background: '#e31c1c', color: '#fff', textDecoration: 'none', marginBottom: '12px' }}>
              Proceed to Checkout
            </Link>
            <Link href="/shop" style={{ display: 'block', textAlign: 'center', fontFamily: 'DM Sans', fontWeight: 600, fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '12px', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
              Continue Shopping
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .cart-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
