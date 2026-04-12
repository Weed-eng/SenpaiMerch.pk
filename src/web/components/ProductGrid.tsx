import { Link } from 'wouter';
import type { Product } from '../data/products';
import ProductCard from './ProductCard';

interface Props {
  title: string;
  subtitle?: string;
  products: Product[];
  viewAllHref?: string;
  bg?: string;
}

export default function ProductGrid({ title, subtitle, products, viewAllHref, bg = '#0a0a0a' }: Props) {
  return (
    <section style={{ padding: 'clamp(64px,8vw,120px) clamp(20px,5vw,80px)', background: bg }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
        <div>
          {subtitle && <p style={{ fontFamily: 'DM Sans', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#e31c1c', marginBottom: '8px', opacity: 0.9 }}>{subtitle}</p>}
          <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(40px,6vw,72px)', lineHeight: 0.9, color: '#fff', margin: 0 }}>{title}</h2>
        </div>
        {viewAllHref && (
          <Link href={viewAllHref} style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '2px' }}>
            View All →
          </Link>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2px' }}>
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}
