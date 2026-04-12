import { useState } from 'react';

const FAQS = [
  { q: 'Do you offer Cash on Delivery (COD)?', a: 'Yes! COD is available nationwide across Pakistan. Pay when your order arrives at your door.' },
  { q: 'How long does delivery take?', a: 'Standard delivery takes 3–5 business days nationwide. Karachi, Lahore, and Islamabad typically receive orders within 2–3 days.' },
  { q: 'Is free shipping available?', a: 'Yes — free shipping on all orders above PKR 3,000. Orders below that have a flat delivery fee of PKR 200.' },
  { q: 'What is your return policy?', a: 'We offer a 7-day return policy for items in original condition. Damaged or defective items are replaced at no extra cost. Contact us within 7 days of receiving your order.' },
  { q: 'Are the products authentic?', a: 'We only stock products that meet our quality standards. We do not sell cheap knockoffs or low-quality replicas. Every item is reviewed before being listed.' },
  { q: 'How can I track my order?', a: 'Once your order is dispatched, you will receive a tracking number via WhatsApp or email. You can also DM us on Instagram @senpaimerch for order updates.' },
  { q: 'Can I exchange for a different size?', a: 'Yes — apparel can be exchanged for a different size within 7 days provided the item is unworn and in original packaging.' },
  { q: 'Do you ship internationally?', a: 'Currently we only deliver within Pakistan. We\'re working on international shipping and hope to launch it soon.' },
  { q: 'What payment methods do you accept?', a: 'We accept COD (Cash on Delivery), bank transfer (EasyPaisa, JazzCash, bank account), and card payments via our payment gateway.' },
  { q: 'Can I place a bulk or custom order?', a: 'Absolutely. For bulk orders, gifts, or custom merchandise, contact us on WhatsApp at +92 300 0000000 or email hello@senpaimerch.pk.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', padding: 'clamp(60px,8vw,120px) clamp(20px,5vw,80px)' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <p style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#e31c1c', marginBottom: '8px', opacity: 0.9 }}>Help Centre</p>
        <h1 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(52px,9vw,110px)', lineHeight: 0.9, color: '#fff', marginBottom: '60px' }}>
          FREQUENTLY<br />ASKED
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {FAQS.map((faq, i) => (
            <div key={i} style={{ background: '#111', border: '1px solid rgba(255,255,255,0.06)' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: '20px 24px', textAlign: 'left', gap: '16px',
                }}
              >
                <span style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '15px', color: open === i ? '#fff' : 'rgba(255,255,255,0.75)', lineHeight: 1.4 }}>{faq.q}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={open === i ? '#e31c1c' : 'rgba(255,255,255,0.3)'} strokeWidth="2.5" style={{ flexShrink: 0, transition: 'transform 0.2s', transform: open === i ? 'rotate(180deg)' : 'none' }}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              {open === i && (
                <div style={{ padding: '0 24px 20px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <p style={{ fontFamily: 'DM Sans', fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, paddingTop: '16px' }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ marginTop: '60px', padding: '32px', background: '#111', borderLeft: '3px solid #e31c1c', textAlign: 'center' }}>
          <p style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '28px', color: '#fff', marginBottom: '8px' }}>STILL HAVE QUESTIONS?</p>
          <p style={{ fontFamily: 'DM Sans', fontSize: '14px', color: 'rgba(255,255,255,0.45)', marginBottom: '20px' }}>Our team is online Mon–Sat, 10am–8pm PKT</p>
          <a href="/contact" style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '12px 28px', background: '#e31c1c', color: '#fff', textDecoration: 'none', display: 'inline-block' }}>
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
