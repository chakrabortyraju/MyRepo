import { BRAND } from '../data/mock';

export default function Intro() {
  return (
    <section id="story" className="section" style={{ background: 'var(--bg-cream)' }}>
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-14 items-start">
          <div className="md:col-span-5 reveal">
            <div className="eyebrow mb-4">{BRAND.name}</div>
            <h2 className="section-title">A small, sustainable homestead in the lower Himalayas.</h2>
          </div>
          <div className="md:col-span-7 reveal" style={{ transitionDelay: '.1s' }}>
            <p className="section-lead">
              Born in a remote mountain hamlet near Shimla Airport, Phagoli is powered by clean mountain energy
              and guided by a simple idea: to live in harmony with nature and to share the journey
              with others. Over time, we have grown into a collection of interconnected experiences
              — a farmstay, a permaculture farm, a fresh mountain produce — each rooted
              in sustainability, simplicity, and mindful living.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-8">
              {[
                { k: '285 km', v: 'From New Delhi' },
                { k: '~6 hrs', v: 'Driving time' },
                { k: '100+ spp', v: 'Birds & butterflies' },
                { k: '100%', v: 'Organic' },
              ].map((s, i) => (
                <div key={i} className="reveal" style={{ transitionDelay: `${0.15 + i * 0.08}s` }}>
                  <div className="font-display" style={{ fontSize: 38, color: 'var(--forest)' }}>{s.k}</div>
                  <div style={{ fontSize: 12, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 4 }}>{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
