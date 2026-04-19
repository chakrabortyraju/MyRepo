import * as Icons from 'lucide-react';
import { EXPERIENCES } from '../data/mock';
import { ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export default function Experiences() {
  return (
    <section id="experiences" className="section" style={{ background: 'var(--bg-cream-2)' }}>
      <div className="container-x">
        <div className="text-center mb-16 reveal" style={{ maxWidth: 760, margin: '0 auto 64px' }}>
          <div className="eyebrow mb-4">Immersive Experiences</div>
          <h2 className="section-title">Reconnect with nature, mindfully.</h2>
          <p className="section-lead mt-5" style={{ margin: '20px auto 0' }}>
            Carefully crafted experiences for wellness, learning, and authentic rural living — from farm walks and slow-living immersions to hands-on workshops.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {EXPERIENCES.map((e, i) => {
            const Icon = Icons[e.icon] || Icons.Sparkles;
            return (
              <article
                key={e.id}
                className="reveal"
                style={{ position: 'relative', overflow: 'hidden', borderRadius: 4, aspectRatio: '4/3', transitionDelay: `${i * 0.08}s` }}
              >
                <img
                  src={e.img}
                  alt={e.title}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1s ease' }}
                  onMouseEnter={(ev) => (ev.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(ev) => (ev.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(31,42,28,.1) 30%, rgba(31,42,28,.85) 100%)' }} />
                <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '32px 36px', color: '#fff' }}>
                  <div className="flex items-center gap-3 mb-3" style={{ fontSize: 12, letterSpacing: '.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,.85)' }}>
                    <Icon className="w-4 h-4" />
                    {e.tag}
                  </div>
                  <h3 className="font-display" style={{ fontSize: 36, lineHeight: 1.1 }}>{e.title}</h3>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,.88)', lineHeight: 1.7, marginTop: 10, maxWidth: 520 }}>{e.desc}</p>
                  <button
                    onClick={() => toast.success(`${e.title} — enquiry form opening`)}
                    className="mt-5 inline-flex items-center gap-2"
                    style={{ background: 'transparent', border: '1px solid rgba(255,255,255,.7)', color: '#fff', padding: '10px 18px', borderRadius: 999, fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', cursor: 'pointer' }}
                  >
                    Reserve <ArrowRight className="w-3.5 h-3.5" />
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
