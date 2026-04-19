import * as Icons from 'lucide-react';
import { JOURNAL } from '../data/mock';
import { ArrowUpRight } from 'lucide-react';

export default function Journal() {
  return (
    <section id="journal" className="section" style={{ background: 'var(--bg-paper)' }}>
      <div className="container-x">
        <div className="flex items-end justify-between mb-14 reveal">
          <div>
            <div className="eyebrow mb-4">Journal</div>
            <h2 className="section-title">Latest from the land.</h2>
          </div>
          <a href="#contact" className="hidden md:inline-flex btn btn-outline">All Articles</a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {JOURNAL.map((j, i) => {
            const Icon = Icons[j.icon] || Icons.BookOpen;
            return (
              <article
                key={i}
                className="reveal"
                style={{ borderTop: '1px solid var(--line)', paddingTop: 28, transitionDelay: `${i * 0.08}s`, cursor: 'pointer' }}
              >
                <div className="flex items-center justify-between mb-5">
                  <div style={{ width: 46, height: 46, borderRadius: '50%', background: 'var(--bg-cream-2)', display: 'grid', placeItems: 'center', color: 'var(--forest)' }}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span style={{ fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--muted)' }}>{j.tag}</span>
                </div>
                <h3 className="font-display" style={{ fontSize: 30, lineHeight: 1.15, color: 'var(--deep)' }}>{j.title}</h3>
                <p style={{ color: 'var(--ink-soft)', fontSize: 14.5, lineHeight: 1.7, marginTop: 12 }}>{j.excerpt}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span style={{ fontSize: 12, color: 'var(--muted)' }}>{j.date}</span>
                  <span className="inline-flex items-center gap-2" style={{ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--forest)', fontWeight: 600 }}>
                    Read <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
