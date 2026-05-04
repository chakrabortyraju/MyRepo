import { ChefHat, Wheat, Soup } from 'lucide-react';

export default function Food() {
  return (
    <section className="section" style={{ background: 'var(--bg-paper)' }}>
      <div className="container-x">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 4 }}>
              <img src="https://images.pexels.com/photos/25440306/pexels-photo-25440306.jpeg" alt="Pahadi thali" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', aspectRatio: '4/5' }} />
            </div>
          </div>
          <div className="reveal" style={{ transitionDelay: '.1s' }}>
            <div className="eyebrow mb-4">Farm to Table</div>
            <h2 className="section-title">Scrumptious food, <em className="font-italic" style={{ color: 'var(--terracotta)' }}>home-cooked</em>.</h2>
            <p className="section-lead mt-6">
              Phagoli’s kitchen is a mix of traditional Pahadi dishes and other home-style meals — simple, fresh, and nourishing.
              Many vegetables come directly from our farm, depending on the season. To reduce our footprint, we minimise packaged
              food and skip carbonated drinks entirely.
            </p>
            <div className="mt-10 space-y-6">
              {[
                { icon: ChefHat, title: 'Fixed meal system', body: 'Three wholesome meals daily. No à la carte or room service — just good, mindful food.' },
                { icon: Wheat, title: 'Stone-ground &amp; seasonal', body: 'Pahadi gahat dal paranthas, makki ki rotis, jau ki roti, seasonal sabzis, and surprise desserts.' },
                { icon: Soup, title: 'Wood-fired specials', body: 'Neapolitan pizzas from our handcrafted Tuscan-style oven, reserved on request.' },
              ].map((it, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--bg-cream-2)', display: 'grid', placeItems: 'center', color: 'var(--forest)', flexShrink: 0 }}>
                    <it.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display" style={{ fontSize: 22, color: 'var(--deep)' }} dangerouslySetInnerHTML={{ __html: it.title }} />
                    <p style={{ color: 'var(--ink-soft)', fontSize: 14.5, lineHeight: 1.7, marginTop: 4 }} dangerouslySetInnerHTML={{ __html: it.body }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
