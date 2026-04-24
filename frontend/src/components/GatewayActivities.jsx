import { MountainSnow, Trees, Waves, TreePine, Flower, Droplets } from 'lucide-react';

const ACTIVITIES = [
  {
    icon: MountainSnow,
    title: 'Ziplining',
    desc: 'Soar across pine-scented valleys on safety-certified ziplines — short thrills with endless mountain views.',
  },
  {
    icon: Trees,
    title: 'Mountain Trail',
    desc: 'Guided hikes along ancient Himachali trails — wildflowers, alpine streams, and quiet clearings.',
  },
  {
    icon: Waves,
    title: 'Old Watermill Experience',
    desc: 'Watch heritage stone watermills where flowing water churns the miller — freshly ground wheat, milled the way our grandparents did.',
  },
  {
    icon: TreePine,
    title: 'Tree Walks',
    desc: 'Slow, guided walks identifying native trees, medicinal herbs, and the forest canopy that shelters Phagoli.',
  },
  {
    icon: Flower,
    title: 'Planting, Beehive Family & Butterfly Park',
    desc: 'Plant a sapling you’ll leave behind. Meet our working beehives and stroll through the seasonal butterfly park.',
  },
  {
    icon: Droplets,
    title: 'Fresh Mountain Water Pods (Bawri)',
    desc: 'Traditional natural spring catchments — taste sweet, mineral-rich bawri water straight from the hill.',
  },
];

export default function GatewayActivities() {
  return (
    <section id="activities" className="section" style={{ background: 'var(--bg-cream)' }}>
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-12 items-end mb-14">
          <div className="md:col-span-6 reveal">
            <div className="eyebrow mb-4">Gateway Experiences</div>
            <h2 className="section-title">
              Activities woven into<br />
              <em className="font-italic" style={{ color: 'var(--forest)' }}>the mountain</em>.
            </h2>
          </div>
          <div className="md:col-span-6 reveal" style={{ transitionDelay: '.08s' }}>
            <p className="section-lead">
              A curated list of experiences that come with your stay at Phagoli — each one grounded in the land, the water, and the quiet rhythm of Himachal.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACTIVITIES.map((a, i) => (
            <article
              key={a.title}
              className="reveal"
              style={{
                background: 'var(--bg-paper)',
                border: '1px solid var(--line)',
                borderRadius: 4,
                padding: 32,
                transitionDelay: `${i * 0.06}s`,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: '50%',
                  background: 'var(--bg-cream-2)',
                  color: 'var(--forest)',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                <a.icon className="w-6 h-6" />
              </div>
              <div
                className="font-display"
                style={{ fontSize: 14, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 24, fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="font-display" style={{ fontSize: 26, color: 'var(--deep)', lineHeight: 1.2, marginTop: 6 }}>
                {a.title}
              </h3>
              <p style={{ color: 'var(--ink-soft)', fontSize: 14.5, lineHeight: 1.7, marginTop: 10 }}>
                {a.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
