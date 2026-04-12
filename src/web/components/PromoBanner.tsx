const items = [
  'FREE SHIPPING ABOVE RS. 3000', 'NEW ARRIVALS EVERY WEEK',
  'AUTHENTIC ANIME MERCH', 'LIMITED EDITION DROPS',
  'COD AVAILABLE NATIONWIDE', 'EXCLUSIVE BUNDLES',
  'OFFICIAL SENPAI MERCH', 'PREMIUM QUALITY GUARANTEED',
];

export default function PromoBanner() {
  const repeated = [...items, ...items, ...items];
  return (
    <div style={{ background: '#e31c1c', overflow: 'hidden', padding: '11px 0' }}>
      <div style={{ display: 'flex', width: 'max-content', animation: 'marquee 28s linear infinite' }}>
        {repeated.map((item, i) => (
          <span key={i} style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', whiteSpace: 'nowrap', padding: '0 28px', color: '#fff', display: 'flex', alignItems: 'center', gap: '28px' }}>
            {item}
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.5)', display: 'inline-block', flexShrink: 0 }} />
          </span>
        ))}
      </div>
    </div>
  );
}
