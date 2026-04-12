import Hero from '../components/Hero';
import PromoBanner from '../components/PromoBanner';
import CollectionCards from '../components/CollectionCards';
import ProductGrid from '../components/ProductGrid';
import AnimeCollectionBanner from '../components/AnimeCollectionBanner';
import NewsletterSection from '../components/NewsletterSection';
import InstagramSection from '../components/InstagramSection';
import { PRODUCTS } from '../data/products';

const newArrivals = PRODUCTS.filter(p => p.badge === 'NEW').slice(0, 8);

export default function Home() {
  return (
    <>
      <Hero />
      <PromoBanner />
      <CollectionCards />
      <AnimeCollectionBanner />
      <ProductGrid title="NEW ARRIVALS" subtitle="Just Dropped" products={newArrivals} viewAllHref="/new" bg="#0f0f0f" />
      <NewsletterSection />
      <InstagramSection />
    </>
  );
}
