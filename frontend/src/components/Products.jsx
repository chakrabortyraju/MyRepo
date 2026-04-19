import * as Icons from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/mock';
import { toast } from 'sonner';

export default function Products() {
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
            Small batches of seasonal, organically grown produce — reflecting the rhythms of the land and the care that goes into growing food responsibly.
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
                    onClick={() => toast.success(`${p.name} — collection opens soon`)}
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
    </section>
  );
}
