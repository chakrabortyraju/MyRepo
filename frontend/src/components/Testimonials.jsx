import { useState } from 'react';
import { TESTIMONIALS } from '../data/mock';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  const next = () => setI((i + 1) % TESTIMONIALS.length);
  const prev = () => setI((i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="section" style={{ background: 'var(--forest)', color: '#f7f1e3', position: 'relative', overflow: 'hidden' }}>
      <div className="grain" />
      <div className="container-x">
        <div className="text-center mb-12 reveal">
          <div className="eyebrow mb-4" style={{ color: '#c9d6b4' }}>Guest Reflections</div>
          <h2 className="section-title" style={{ color: '#f7f1e3' }}>Stories from the hills.</h2>
        </div>

        <div className="reveal" style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <Quote className="w-10 h-10 mx-auto mb-6" style={{ color: '#c9d6b4' }} />
          <p className="font-display" style={{ fontSize: 'clamp(22px, 3vw, 34px)', lineHeight: 1.4, fontStyle: 'italic', color: '#f7f1e3' }}>
            “{t.quote}”
          </p>
          <div className="mt-8">
            <div style={{ fontSize: 15, letterSpacing: '.08em', fontWeight: 600 }}>{t.name}</div>
            <div style={{ fontSize: 12, letterSpacing: '.24em', textTransform: 'uppercase', color: '#b6c49c', marginTop: 4 }}>{t.place}</div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button onClick={prev} aria-label="Previous" style={{ width: 44, height: 44, borderRadius: '50%', border: '1px solid rgba(255,255,255,.3)', background: 'transparent', color: '#f7f1e3', cursor: 'pointer', display: 'grid', placeItems: 'center' }}>
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div style={{ fontSize: 12, letterSpacing: '.2em', color: '#b6c49c' }}>
              {String(i + 1).padStart(2, '0')} / {String(TESTIMONIALS.length).padStart(2, '0')}
            </div>
            <button onClick={next} aria-label="Next" style={{ width: 44, height: 44, borderRadius: '50%', border: '1px solid rgba(255,255,255,.3)', background: 'transparent', color: '#f7f1e3', cursor: 'pointer', display: 'grid', placeItems: 'center' }}>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
