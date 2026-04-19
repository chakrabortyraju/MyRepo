import { useEffect, useState } from 'react';
import { Menu, X, Leaf, ShoppingBag } from 'lucide-react';
import { NAV_LINKS, BRAND } from '../data/mock';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count, setOpen: openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const iconColor = scrolled ? 'var(--deep)' : '#fff';

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#home" className="nav-logo flex items-center gap-2">
            <Leaf className="w-5 h-5" style={{ color: scrolled ? 'var(--forest)' : '#fff' }} />
            {BRAND.name}
          </a>
          <div className="nav-links">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => openCart(true)}
              aria-label="Open cart"
              style={{ position: 'relative', background: 'transparent', border: 'none', color: iconColor, cursor: 'pointer', padding: 8 }}
            >
              <ShoppingBag className="w-5 h-5" />
              {count > 0 && (
                <span style={{
                  position: 'absolute', top: 0, right: 0,
                  background: 'var(--terracotta)', color: '#fff',
                  fontSize: 10, fontWeight: 700, borderRadius: 999,
                  minWidth: 18, height: 18, padding: '0 5px',
                  display: 'grid', placeItems: 'center', letterSpacing: 0,
                }}>{count}</span>
              )}
            </button>
            <a href="#contact" className="hidden md:inline-flex btn btn-ghost" style={{ padding: '10px 20px', fontSize: 12, borderColor: scrolled ? 'var(--deep)' : 'rgba(255,255,255,.7)', color: iconColor }}>Book a Stay</a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="md:hidden"
              style={{ background: 'transparent', border: 'none', color: iconColor, cursor: 'pointer' }}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-panel ${open ? 'open' : ''}`}>
        <button onClick={() => setOpen(false)} aria-label="Close menu" style={{ position: 'absolute', top: 28, right: 28, background: 'transparent', border: 'none', color: 'var(--deep)' }}>
          <X className="w-6 h-6" />
        </button>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
      </div>
    </>
  );
}
