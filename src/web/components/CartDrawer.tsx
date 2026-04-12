import { useCart } from '../context/CartContext';
import { Link } from 'wouter';

export default function CartDrawer() {
  const { items, drawerOpen, closeDrawer, removeItem, updateQty, total, count } = useCart();

  return (
    <>
      <div
        onClick={closeDrawer}
        style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 600,
          opacity: drawerOpen ? 1 : 0, pointerEvents: drawerOpen ? 'all' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      />
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0,
        width: 'min(420px, 100vw)',
        background: '#111', zIndex: 700,
        transform: drawerOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
        display: 'flex', flexDirection: 'column',
        borderLeft: '1px solid rgba(255,255,255,0.07)',
      }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div>
            <p style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '22px', color: '#fff', margin: 0, letterSpacing: '0.05em' }}>YOUR CART</p>
            <p style={{ fontFamily: 'DM Sans', fontSize: '12px', color: 'rgba(255,255,255,0.35)', margin: 0 }}>{count} {count === 1 ? 'item' : 'items'}</p>
          </div>
          <button onClick={closeDrawer} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.5)', display: 'flex', padding: '4px' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {items.length === 0 ? (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', paddingTop: '60px' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <p style={{ fontFamily: 'DM Sans', fontSize: '14px', color: 'rgba(255,255,255,0.35)', textAlign: 'center' }}>Your cart is empty</p>
              <Link href="/shop" onClick={closeDrawer} style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '12px 28px', background: '#e31c1c', color: '#fff', textDecoration: 'none', display: 'inline-block' }}>
                Shop Now
              </Link>
            </div>
          ) : items.map(item => (
            <div key={item.product.id + (item.size || '')} style={{ display: 'flex', gap: '14px', padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ width: '80px', height: '80px', flexShrink: 0, background: '#1a1a1a', overflow: 'hidden' }}>
                <img src={item.product.images[0]} alt={item.product.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '13px', color: '#fff', margin: '0 0 4px', lineHeight: 1.3 }}>{item.product.title}</p>
                {item.size && <p style={{ fontFamily: 'DM Sans', fontSize: '11px', color: 'rgba(255,255,255,0.35)', margin: '0 0 8px' }}>Size: {item.size}</p>}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(255,255,255,0.12)' }}>
                    <button onClick={() => updateQty(item.product.id, item.quantity - 1, item.size)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>−</button>
                    <span style={{ fontFamily: 'DM Sans', fontSize: '13px', color: '#fff', padding: '0 10px' }}>{item.quantity}</span>
                    <button onClick={() => updateQty(item.product.id, item.quantity + 1, item.size)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>+</button>
                  </div>
                  <span style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '14px', color: '#fff' }}>PKR {(item.product.price * item.quantity).toLocaleString()}</span>
                </div>
              </div>
              <button onClick={() => removeItem(item.product.id, item.size)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.3)', flexShrink: 0, padding: '2px', alignSelf: 'flex-start' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div style={{ padding: '20px 24px', borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'DM Sans', fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>Subtotal</span>
              <span style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '22px', color: '#fff', letterSpacing: '0.05em' }}>PKR {total.toLocaleString()}</span>
            </div>
            <p style={{ fontFamily: 'DM Sans', fontSize: '11px', color: 'rgba(255,255,255,0.3)', margin: 0, textAlign: 'center' }}>Shipping calculated at checkout</p>
            <Link href="/cart" onClick={closeDrawer} style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '15px', background: '#e31c1c', color: '#fff', textDecoration: 'none', display: 'block', textAlign: 'center' }}>
              Checkout — PKR {total.toLocaleString()}
            </Link>
            <button onClick={closeDrawer} style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '12px', background: 'none', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.5)', cursor: 'pointer' }}>
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
