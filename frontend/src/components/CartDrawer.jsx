import { useState } from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag, Loader2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { createOrder } from '../lib/api';
import { toast } from 'sonner';

export default function CartDrawer() {
  const { items, setQty, remove, subtotal, open, setOpen, clear } = useCart();
  const [checkout, setCheckout] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', address: '', city: '', pincode: '', notes: '' });
  const [submitting, setSubmitting] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return toast.error('Name and phone are required.');
    if (items.length === 0) return toast.error('Your cart is empty.');
    setSubmitting(true);
    try {
      const res = await createOrder({
        items: items.map((i) => ({ product_id: i.product_id, name: i.name, unit: i.unit, price: i.price, qty: i.qty })),
        customer: form,
      });
      toast.success(`Order ${res.order_code} ready. Opening WhatsApp…`);
      window.open(res.whatsapp_url, '_blank', 'noopener,noreferrer');
      clear();
      setCheckout(false);
      setOpen(false);
      setForm({ name: '', phone: '', address: '', city: '', pincode: '', notes: '' });
    } catch (err) {
      toast.error('Could not place order. Please retry.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: 'fixed', inset: 0, background: 'rgba(20,26,16,.45)', zIndex: 70,
          opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none', transition: 'opacity .35s ease',
        }}
      />
      {/* Drawer */}
      <aside
        style={{
          position: 'fixed', top: 0, right: 0, bottom: 0, width: '100%', maxWidth: 460, zIndex: 80,
          background: 'var(--bg-cream)', boxShadow: '-20px 0 60px -20px rgba(20,26,16,.3)',
          transform: open ? 'translateX(0)' : 'translateX(100%)', transition: 'transform .4s cubic-bezier(.6,.2,.2,1)',
          display: 'flex', flexDirection: 'column',
        }}
      >
        <div className="flex items-center justify-between" style={{ padding: '22px 24px', borderBottom: '1px solid var(--line)' }}>
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5" style={{ color: 'var(--forest)' }} />
            <div>
              <div className="font-display" style={{ fontSize: 22, color: 'var(--deep)', lineHeight: 1 }}>{checkout ? 'Checkout' : 'Your Basket'}</div>
              <div style={{ fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 2 }}>{items.length} item{items.length !== 1 ? 's' : ''}</div>
            </div>
          </div>
          <button onClick={() => setOpen(false)} aria-label="Close" style={{ background: 'transparent', border: 'none', color: 'var(--deep)', cursor: 'pointer' }}><X className="w-5 h-5" /></button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center" style={{ padding: 40, textAlign: 'center', color: 'var(--muted)' }}>
            <ShoppingBag className="w-10 h-10 mb-4" style={{ color: 'var(--line)' }} />
            <div className="font-display" style={{ fontSize: 24, color: 'var(--deep)' }}>Your basket is empty</div>
            <p style={{ marginTop: 8, fontSize: 14 }}>Browse our microlots and add a few harvest-fresh items.</p>
            <button onClick={() => setOpen(false)} className="btn btn-primary mt-6">Explore Products</button>
          </div>
        ) : !checkout ? (
          <>
            <div style={{ flex: 1, overflowY: 'auto', padding: '16px 24px' }}>
              {items.map((i) => (
                <div key={i.product_id} className="flex gap-4" style={{ padding: '16px 0', borderBottom: '1px solid var(--line)' }}>
                  <img src={i.image} alt={i.name} style={{ width: 72, height: 72, objectFit: 'cover', borderRadius: 4, flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--deep)' }}>{i.name}</div>
                    <div style={{ fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 2 }}>{i.unit}</div>
                    <div className="mt-2 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1" style={{ border: '1px solid var(--line)', borderRadius: 999, padding: '2px 6px' }}>
                        <button onClick={() => setQty(i.product_id, i.qty - 1)} aria-label="Decrease" style={{ width: 24, height: 24, background: 'transparent', border: 'none', cursor: 'pointer', display: 'grid', placeItems: 'center', color: 'var(--ink-soft)' }}><Minus className="w-3.5 h-3.5" /></button>
                        <span style={{ minWidth: 20, textAlign: 'center', fontSize: 13, fontWeight: 500 }}>{i.qty}</span>
                        <button onClick={() => setQty(i.product_id, i.qty + 1)} aria-label="Increase" style={{ width: 24, height: 24, background: 'transparent', border: 'none', cursor: 'pointer', display: 'grid', placeItems: 'center', color: 'var(--ink-soft)' }}><Plus className="w-3.5 h-3.5" /></button>
                      </div>
                      <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 20, color: 'var(--deep)' }}>₹{i.price * i.qty}</div>
                      <button onClick={() => remove(i.product_id)} aria-label="Remove" style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--muted)' }}><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding: 24, borderTop: '1px solid var(--line)', background: 'var(--bg-paper)' }}>
              <div className="flex items-center justify-between mb-4">
                <span style={{ fontSize: 13, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)' }}>Subtotal</span>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 30, color: 'var(--deep)' }}>₹{subtotal}</span>
              </div>
              <button onClick={() => setCheckout(true)} className="btn btn-primary w-full justify-center" style={{ width: '100%' }}>Continue to Checkout</button>
              <div style={{ fontSize: 11, color: 'var(--muted)', textAlign: 'center', marginTop: 10, letterSpacing: '.05em' }}>Final confirmation & delivery on WhatsApp.</div>
            </div>
          </>
        ) : (
          <form onSubmit={submit} style={{ flex: 1, overflowY: 'auto', padding: '16px 24px 24px' }}>
            <div style={{ fontSize: 12, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 14 }}>Delivery Details</div>
            <input name="name" value={form.name} onChange={onChange} placeholder="Full name *" className="field" />
            <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone number *" className="field" />
            <input name="address" value={form.address} onChange={onChange} placeholder="Address" className="field" />
            <div className="grid grid-cols-2 gap-4">
              <input name="city" value={form.city} onChange={onChange} placeholder="City" className="field" />
              <input name="pincode" value={form.pincode} onChange={onChange} placeholder="PIN code" className="field" />
            </div>
            <textarea name="notes" value={form.notes} onChange={onChange} rows={2} placeholder="Notes (optional)" className="field" />
            <div style={{ marginTop: 20, padding: 16, background: 'var(--bg-paper)', border: '1px solid var(--line)', borderRadius: 4 }}>
              <div className="flex items-center justify-between">
                <span style={{ fontSize: 13, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)' }}>Subtotal</span>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 26, color: 'var(--deep)' }}>₹{subtotal}</span>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button type="button" onClick={() => setCheckout(false)} className="btn btn-outline" style={{ flex: 1, justifyContent: 'center' }}>Back</button>
              <button type="submit" disabled={submitting} className="btn btn-terra" style={{ flex: 2, justifyContent: 'center' }}>
                {submitting ? (<><Loader2 className="w-4 h-4 animate-spin" /> Placing…</>) : 'Order on WhatsApp'}
              </button>
            </div>
            <div style={{ fontSize: 11, color: 'var(--muted)', textAlign: 'center', marginTop: 12 }}>We’ll open WhatsApp with your order summary.</div>
          </form>
        )}
      </aside>
    </>
  );
}
