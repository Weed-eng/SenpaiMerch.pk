import { createContext, useContext, useState, ReactNode } from 'react';
import type { Product } from '../data/products';

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
}

interface CartCtx {
  items: CartItem[];
  drawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  addItem: (product: Product, size?: string) => void;
  removeItem: (id: string, size?: string) => void;
  updateQty: (id: string, qty: number, size?: string) => void;
  total: number;
  count: number;
}

const CartContext = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const addItem = (product: Product, size?: string) => {
    setItems(prev => {
      const key = product.id + (size || '');
      const existing = prev.find(i => i.product.id + (i.size || '') === key);
      if (existing) return prev.map(i => i.product.id + (i.size || '') === key ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { product, quantity: 1, size }];
    });
    setDrawerOpen(true);
  };

  const removeItem = (id: string, size?: string) => {
    setItems(prev => prev.filter(i => !(i.product.id === id && i.size === size)));
  };

  const updateQty = (id: string, qty: number, size?: string) => {
    if (qty < 1) { removeItem(id, size); return; }
    setItems(prev => prev.map(i => i.product.id === id && i.size === size ? { ...i, quantity: qty } : i));
  };

  const total = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, drawerOpen, openDrawer: () => setDrawerOpen(true), closeDrawer: () => setDrawerOpen(false), addItem, removeItem, updateQty, total, count }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
