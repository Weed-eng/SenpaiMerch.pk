import './styles.css';
import { useState, useCallback } from 'react';
import { Route, Switch } from 'wouter';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import AnimeCollection from './pages/AnimeCollection';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Search from './pages/Search';
import Account from './pages/Account';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

function NotFound() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
      <p style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '120px', color: 'rgba(255,255,255,0.06)', lineHeight: 1 }}>404</p>
      <p style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '32px', color: '#fff', marginTop: '-60px' }}>PAGE NOT FOUND</p>
      <a href="/" style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '14px 36px', background: '#e31c1c', color: '#fff', textDecoration: 'none' }}>
        Go Home
      </a>
    </div>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const handleDone = useCallback(() => setLoaded(true), []);

  return (
    <CartProvider>
      <WishlistProvider>
        {!loaded && <LoadingScreen onDone={handleDone} />}
        <div style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.6s ease',
          transitionDelay: '0.1s',
        }}>
        <Navbar />
        <CartDrawer />
        <main>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/new" component={Shop} />
            <Route path="/products/:slug" component={ProductDetail} />
            <Route path="/anime/:slug" component={AnimeCollection} />
            <Route path="/collections/:slug" component={AnimeCollection} />
            <Route path="/cart" component={Cart} />
            <Route path="/wishlist" component={Wishlist} />
            <Route path="/search" component={Search} />
            <Route path="/account" component={Account} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/faq" component={FAQ} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
        </div>
      </WishlistProvider>
    </CartProvider>
  );
}
