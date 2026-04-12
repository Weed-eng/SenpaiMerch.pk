import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setDone(true); }
  };

  return (
    <section style={{ background: '#111', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: 'clamp(64px,8vw,120px) clamp(20px,5vw,80px)' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#e31c1c', marginBottom: '16px' }}>
          Stay Connected
        </p>
        <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(44px,7vw,88px)', lineHeight: 0.9, color: '#fff', margin: '0 0 16px' }}>
          JOIN THE<br />SENPAI CIRCLE
        </h2>
        <p style={{ fontFamily: 'DM Sans', fontSize: 'clamp(14px,1.6vw,16px)', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: '36px' }}>
          Early access to drops, exclusive deals, and anime news — delivered to your inbox.
        </p>

        {done ? (
          <div style={{ padding: '20px', border: '1px solid rgba(227,28,28,0.3)', background: 'rgba(227,28,28,0.06)' }}>
            <p style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '24px', color: '#fff', margin: 0 }}>YOU'RE IN. WELCOME, SENPAI.</p>
          </div>
        ) : (
          <form onSubmit={submit} style={{ display: 'flex', gap: '0', maxWidth: '480px', margin: '0 auto' }}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={{
                flex: 1, padding: '14px 18px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRight: 'none',
                color: '#fff', fontFamily: 'DM Sans', fontSize: '14px',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              style={{
                padding: '14px 28px', background: '#e31c1c', border: 'none',
                color: '#fff', fontFamily: 'DM Sans', fontWeight: 700,
                fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase',
                cursor: 'pointer', whiteSpace: 'nowrap',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#b81515')}
              onMouseLeave={e => (e.currentTarget.style.background = '#e31c1c')}
            >
              Subscribe
            </button>
          </form>
        )}

        <p style={{ fontFamily: 'DM Sans', fontSize: '11px', color: 'rgba(255,255,255,0.2)', marginTop: '12px' }}>
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
