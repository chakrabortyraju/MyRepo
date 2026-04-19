import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartCtx = createContext(null);
const KEY = 'phagoli_cart_v1';

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch { return []; }
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(items));
  }, [items]);

  const add = (product, qty = 1) => {
    setItems((prev) => {
      const ex = prev.find((i) => i.product_id === product.id);
      if (ex) return prev.map((i) => (i.product_id === product.id ? { ...i, qty: i.qty + qty } : i));
      return [...prev, {
        product_id: product.id,
        name: product.name,
        unit: product.unit,
        price: product.price,
        image: product.image,
        qty,
      }];
    });
    setOpen(true);
  };

  const setQty = (product_id, qty) =>
    setItems((prev) => prev.map((i) => (i.product_id === product_id ? { ...i, qty: Math.max(1, qty) } : i)));
  const remove = (product_id) => setItems((prev) => prev.filter((i) => i.product_id !== product_id));
  const clear = () => setItems([]);

  const subtotal = useMemo(() => items.reduce((s, i) => s + i.price * i.qty, 0), [items]);
  const count = useMemo(() => items.reduce((s, i) => s + i.qty, 0), [items]);

  return (
    <CartCtx.Provider value={{ items, add, setQty, remove, clear, subtotal, count, open, setOpen }}>
      {children}
    </CartCtx.Provider>
  );
}

export const useCart = () => useContext(CartCtx);
