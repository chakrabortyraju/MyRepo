import { STATS, AWARDS } from '../data/mock';
import { Award } from 'lucide-react';

export default function Impact() {
  return (
    <section className="section" style={{ background: 'var(--bg-cream)' }}>
      <div className="container-x">
        <div className="grid md:grid-cols-4 gap-10 mb-20">
          {STATS.map((s, i) => (
            <div key={i} className="reveal text-center md:text-left" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="font-display" style={{ fontSize: 72, lineHeight: 1, color: 'var(--forest)' }}>{s.value}</div>
              <div style={{ marginTop: 12, fontSize: 12, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--muted)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div className="leaf-divider mb-10"><Award className="w-5 h-5" /> <span style={{ fontSize: 12, letterSpacing: '.28em', textTransform: 'uppercase', fontWeight: 600 }}>Awards &amp; Press</span></div>

        <div style={{ overflow: 'hidden', padding: '20px 0' }}>
          <div className="marquee" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 28, color: 'var(--ink-soft)' }}>
            {[...AWARDS, ...AWARDS].map((a, i) => (
              <span key={i} className="flex items-center gap-16">
                <span>{a}</span>
                <span style={{ color: 'var(--terracotta)' }}>✻</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
