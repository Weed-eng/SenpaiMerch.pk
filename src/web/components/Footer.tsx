import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '48px 40px',
        padding: 'clamp(48px,7vw,90px) clamp(20px,5vw,80px) 40px',
      }}>
        {/* Shop Now */}
        <div>
          <p style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '26px', color: '#fff', letterSpacing: '0.05em', marginBottom: '20px' }}>SHOP NOW</p>
          {[
            ['Shop By Category', '/collections'],
            ['Shop by Anime.', '/anime'],
            ['New Arrivals.', '/new'],
            ['Shop All.', '/shop'],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              style={{ display: 'block', fontFamily: 'DM Sans', fontSize: '14px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', marginBottom: '10px', transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Policies */}
        <div>
          <p style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '26px', color: '#fff', letterSpacing: '0.05em', marginBottom: '20px' }}>POLICIES</p>
          {[
            ['Privacy policy', '/privacy-policy'],
            ['Terms of service', '/terms'],
            ['Refund policy', '/refund-policy'],
            ['Shipping policy', '/shipping-policy'],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              style={{ display: 'block', fontFamily: 'DM Sans', fontSize: '14px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', marginBottom: '10px', transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Contact Us */}
        <div>
          <p style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '26px', color: '#fff', letterSpacing: '0.05em', marginBottom: '20px' }}>CONTACT US</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              {
                icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                text: 'Pakistanisenpaimerch@gmail.com',
              },
              {
                icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
                text: '+92 321 8202052',
              },
              {
                icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
                text: 'Tariq Bin Ziyad Society, Malir Halt, Karachi, Sindh Pakistan',
              },
              {
                icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
                text: '11:00 Am To 11:00 Pm',
              },
            ].map(({ icon, text }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: 'rgba(255,255,255,0.5)', flexShrink: 0, marginTop: '2px' }}>{icon}</span>
                <span style={{ fontFamily: 'DM Sans', fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '18px clamp(20px,5vw,80px)', textAlign: 'center' }}>
        <p style={{ fontFamily: 'DM Sans', fontSize: '12px', color: 'rgba(255,255,255,0.3)', margin: 0 }}>
          © 2025 Senpai Merch. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
