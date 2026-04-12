import { useState } from 'react';

export default function Account() {
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const inputStyle = {
    width: '100%', padding: '14px 16px',
    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
    color: '#fff', fontFamily: 'DM Sans', fontSize: '14px', outline: 'none',
    marginBottom: '14px',
  };

  const labelStyle = {
    fontFamily: 'DM Sans', fontWeight: 600, fontSize: '11px',
    letterSpacing: '0.15em', textTransform: 'uppercase' as const,
    color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: '6px',
  };

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(40px,5vw,80px) clamp(20px,5vw,80px)' }}>
      <div style={{ width: '100%', maxWidth: '440px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <img src="/logo-white.png" alt="Senpai Merch" style={{ height: '40px', width: 'auto', margin: '0 auto 24px' }} />
          <h1 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '48px', color: '#fff', letterSpacing: '0.05em' }}>
            {tab === 'login' ? 'WELCOME BACK' : 'JOIN THE CIRCLE'}
          </h1>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', marginBottom: '32px', border: '1px solid rgba(255,255,255,0.08)' }}>
          {(['login', 'register'] as const).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                flex: 1, padding: '12px',
                background: tab === t ? '#e31c1c' : 'transparent',
                border: 'none', cursor: 'pointer',
                fontFamily: 'DM Sans', fontWeight: 700, fontSize: '12px',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: tab === t ? '#fff' : 'rgba(255,255,255,0.4)',
                transition: 'all 0.2s',
              }}
            >
              {t === 'login' ? 'Sign In' : 'Register'}
            </button>
          ))}
        </div>

        <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column' }}>
          {tab === 'register' && (
            <div>
              <label style={labelStyle}>Full Name</label>
              <input type="text" placeholder="Itadori Yuji" value={name} onChange={e => setName(e.target.value)} style={inputStyle} />
            </div>
          )}
          <div>
            <label style={labelStyle}>Email</label>
            <input type="email" placeholder="you@email.com" value={email} onChange={e => setEmail(e.target.value)} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Password</label>
            <input type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} style={inputStyle} />
          </div>
          {tab === 'login' && (
            <div style={{ textAlign: 'right', marginBottom: '20px', marginTop: '-6px' }}>
              <a href="#" style={{ fontFamily: 'DM Sans', fontSize: '12px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Forgot Password?</a>
            </div>
          )}
          <button
            type="submit"
            style={{ padding: '15px', background: '#e31c1c', border: 'none', color: '#fff', fontFamily: 'DM Sans', fontWeight: 700, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer', transition: 'background 0.2s', marginTop: '8px' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#b81515')}
            onMouseLeave={e => (e.currentTarget.style.background = '#e31c1c')}
          >
            {tab === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  );
}
