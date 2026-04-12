export default function NewArrivalsMarquee() {
  const items = [
    'TOKYO REVENGERS DRAKEN HAORI',
    'ONE PIECE LUFFY LED LAMP',
    'DEMON SLAYER SWORD KEYCHAIN',
    'AOT SCOUT REGIMENT NECKLACE',
    'BERSERK GUTS SHADOW BOX',
    'GREAT WAVE KIMONO HAORI',
    'AKAZA ACTION FIGURE',
  ];

  return (
    <div
      style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        background: '#060606',
        position: 'relative',
        overflow: 'hidden',
        padding: '0',
      }}
    >
      {/* NEW ARRIVALS label */}
      <div className="flex">
        <div
          style={{
            background: '#CC0000',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            minWidth: 'fit-content',
            flexShrink: 0,
            zIndex: 2,
          }}
        >
          <span
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '1rem',
              color: '#FFF',
              letterSpacing: '0.2em',
              whiteSpace: 'nowrap',
            }}
          >
            NEW ARRIVALS
          </span>
        </div>

        {/* Scrolling items */}
        <div style={{ overflow: 'hidden', flex: 1, display: 'flex', alignItems: 'center' }}>
          <div className="marquee-track">
            {[...items, ...items, ...items].map((item, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: '0.8rem',
                  color: '#666',
                  letterSpacing: '0.2em',
                  whiteSpace: 'nowrap',
                  padding: '0 32px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '32px',
                }}
              >
                {item}
                <span style={{ color: '#CC0000' }}>◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
