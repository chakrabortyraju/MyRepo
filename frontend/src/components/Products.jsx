import { useEffect, useState } from 'react';
import * as Icons from 'lucide-react';
import { ArrowUpRight, Plus, X, Loader2 } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/mock';
import { fetchProducts } from '../lib/api';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

export default function Products() {
  const [openCat, setOpenCat] = useState(null); // category_id when expanded
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { add } = useCart();

  useEffect(() => {
    if (!openCat) return;
    setLoading(true);
    fetchProducts(openCat)
      .then(setItems)
      .catch(() => toast.error('Could not load products. Please retry.'))
      .finally(() => setLoading(false));
  }, [openCat]);

  return (
    <section id="products" className="section" style={{ background: 'var(--bg-paper)' }}>
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 reveal">
          <div>
            <div className="eyebrow mb-4">Phagoli Microlots</div>
            <h2 className="section-title" style={{ maxWidth: 720 }}>
              Premium organic products,<br />
              <em className="font-italic" style={{ color: 'var(--forest)' }}>grown with intention.</em>
            </h2>
          </div>
          <p className="section-lead">
            Small batches of seasonal, organically grown produce. Add to cart and checkout on WhatsApp — we’ll reach out to confirm.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_CATEGORIES.map((p, i) => {
            const Icon = Icons[p.icon] || Icons.Leaf;
            return (
              <article key={p.id} className="card-surface reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="card-img" style={{ aspectRatio: '4/5' }}>
                  <img src={p.img} alt={p.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '28px 28px 32px' }}>
                  <div className="flex items-center gap-3 mb-3" style={{ color: 'var(--forest)' }}>
                    <Icon className="w-5 h-5" />
                    <span style={{ fontSize: 11, letterSpacing: '.25em', textTransform: 'uppercase' }}>Collection</span>
                  </div>
                  <h3 className="font-display" style={{ fontSize: 28, lineHeight: 1.15, color: 'var(--deep)' }}>{p.name}</h3>
                  <p style={{ color: 'var(--ink-soft)', marginTop: 12, fontSize: 14.5, lineHeight: 1.7 }}>{p.blurb}</p>
                  <button
                    onClick={() => setOpenCat(p.id)}
                    className="mt-6 inline-flex items-center gap-2 group"
                    style={{ background: 'transparent', border: 'none', color: 'var(--deep)', fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase', fontWeight: 600, cursor: 'pointer' }}
                  >
                    Explore Collection
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {openCat && (
        <div
          className="fixed inset-0 z-[80] flex items-end md:items-center justify-center p-0 md:p-8"
          style={{ background: 'rgba(20,26,16,.55)', backdropFilter: 'blur(4px)' }}
          onClick={() => setOpenCat(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ background: 'var(--bg-cream)', width: '100%', maxWidth: 1100, maxHeight: '92vh', overflow: 'hidden', borderRadius: 4, display: 'flex', flexDirection: 'column' }}
          >
            <div className="flex items-center justify-between" style={{ padding: '22px 28px', borderBottom: '1px solid var(--line)' }}>
              <div>
                <div className="eyebrow" style={{ color: 'var(--forest)' }}>{PRODUCT_CATEGORIES.find((c) => c.id === openCat)?.name}</div>
                <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 4 }}>Tap any item to add to cart</div>
              </div>
              <button onClick={() => setOpenCat(null)} aria-label="Close" style={{ background: 'transparent', border: 'none', color: 'var(--deep)', cursor: 'pointer' }}><X className="w-6 h-6" /></button>
            </div>
            <div style={{ overflowY: 'auto', padding: 28 }}>
              {loading ? (
                <div className="flex items-center justify-center py-16" style={{ color: 'var(--muted)' }}>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" /> Loading microlots…
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {items.map((it) => (
                    <div key={it.id} style={{ background: 'var(--bg-paper)', border: '1px solid var(--line)', borderRadius: 4, overflow: 'hidden' }}>
                      <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                        <img src={it.image} alt={it.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <div style={{ padding: 18 }}>
                        <h4 className="font-display" style={{ fontSize: 22, color: 'var(--deep)', lineHeight: 1.2 }}>{it.name}</h4>
                        <div style={{ fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 4 }}>{it.unit}</div>
                        <p style={{ color: 'var(--ink-soft)', fontSize: 13.5, lineHeight: 1.65, marginTop: 10 }}>{it.description}</p>
                        <div className="mt-4 flex items-center justify-between">
                          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 24, color: 'var(--deep)' }}>₹{it.price}</div>
                          <button
                            onClick={() => { add(it, 1); toast.success(`${it.name} added`); }}
                            className="inline-flex items-center gap-1.5"
                            style={{ background: 'var(--forest)', color: '#f7f1e3', border: 'none', padding: '8px 14px', borderRadius: 999, fontSize: 11.5, letterSpacing: '.16em', textTransform: 'uppercase', fontWeight: 600, cursor: 'pointer' }}
                          >
                            <Plus className="w-3.5 h-3.5" /> Add
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
