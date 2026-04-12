import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '14px 16px',
    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
    color: '#fff', fontFamily: 'DM Sans', fontSize: '14px', outline: 'none', display: 'block',
  };

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', padding: 'clamp(60px,8vw,120px) clamp(20px,5vw,80px)' }}>
      <p style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#e31c1c', marginBottom: '8px', opacity: 0.9 }}>Get in Touch</p>
      <h1 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(52px,9vw,120px)', lineHeight: 0.9, color: '#fff', marginBottom: '60px' }}>
        CONTACT US
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '64px 60px' }}>
        {/* Form */}
        <div>
          {sent ? (
            <div style={{ padding: '32px', border: '1px solid rgba(227,28,28,0.3)', background: 'rgba(227,28,28,0.06)', textAlign: 'center' }}>
              <p style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '32px', color: '#fff', marginBottom: '8px' }}>MESSAGE SENT!</p>
              <p style={{ fontFamily: 'DM Sans', fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', display: 'block', marginBottom: '6px' }}>Name</label>
                  <input type="text" placeholder="Your Name" value={form.name} onChange={e => update('name', e.target.value)} required style={inputStyle} />
                </div>
                <div>
                  <label style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', display: 'block', marginBottom: '6px' }}>Email</label>
                  <input type="email" placeholder="you@email.com" value={form.email} onChange={e => update('email', e.target.value)} required style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', display: 'block', marginBottom: '6px' }}>Subject</label>
                <input type="text" placeholder="Order inquiry, product question..." value={form.subject} onChange={e => update('subject', e.target.value)} style={inputStyle} />
              </div>
              <div>
                <label style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', display: 'block', marginBottom: '6px' }}>Message</label>
                <textarea placeholder="How can we help you?" value={form.message} onChange={e => update('message', e.target.value)} required rows={6} style={{ ...inputStyle, resize: 'vertical' as const }} />
              </div>
              <button type="submit" style={{ padding: '15px', background: '#e31c1c', border: 'none', color: '#fff', fontFamily: 'DM Sans', fontWeight: 700, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer' }}>
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {[
            { label: 'WhatsApp', val: '+92 300 0000000', sub: 'Mon–Sat, 10am–8pm PKT' },
            { label: 'Email', val: 'hello@senpaimerch.pk', sub: 'Response within 24 hours' },
            { label: 'Instagram', val: '@senpaimerch', sub: 'DM us anytime' },
            { label: 'Delivery', val: 'Nationwide, Pakistan', sub: 'COD available everywhere' },
          ].map(({ label, val, sub }) => (
            <div key={label} style={{ paddingLeft: '16px', borderLeft: '2px solid #e31c1c' }}>
              <p style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '4px' }}>{label}</p>
              <p style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '16px', color: '#fff', marginBottom: '2px' }}>{val}</p>
              <p style={{ fontFamily: 'DM Sans', fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
