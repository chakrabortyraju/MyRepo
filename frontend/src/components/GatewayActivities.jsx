import { MountainSnow, Trees, Waves, TreePine, Flower, Droplets } from 'lucide-react';

const ACTIVITIES = [
  {
    icon: MountainSnow,
    title: 'Ziplining',
    desc: 'Soar across pine-scented valleys on safety-certified ziplines — short thrills with endless mountain views.',
    img: 'https://images.unsplash.com/photo-1648853070657-6d58398bee93',
  },
  {
    icon: Trees,
    title: 'Mountain Trail',
    desc: 'Guided hikes along ancient Himachali trails — wildflowers, alpine streams, and quiet clearings.',
    img: 'https://images.unsplash.com/photo-1548713466-70b0e7bb7cd2',
  },
  {
    icon: Waves,
    title: 'Old Watermill Experience',
    desc: 'Watch heritage stone watermills where flowing water churns the miller — freshly ground wheat, milled the way our grandparents did.',
    img: 'https://customer-assets.emergentagent.com/job_agro-store-10/artifacts/3itm8z8q_mill.jpeg',
  },
  {
    icon: TreePine,
    title: 'Tree Walks',
    desc: 'Slow, guided walks identifying native trees, medicinal herbs, and the forest canopy that shelters Phagoli.',
    img: 'https://images.unsplash.com/photo-1762770663512-75713008f486',
  },
  {
    icon: Flower,
    title: 'Planting, Beehive Family & Butterfly Park',
    desc: 'Plant a sapling you’ll leave behind. Meet our working beehives and stroll through the seasonal butterfly park.',
    img: 'https://images.unsplash.com/photo-1533048324814-79b0a31982f1',
  },
  {
    icon: Droplets,
    title: 'Fresh Mountain Water Pods (Bawri)',
    desc: 'Traditional natural spring catchments — taste sweet, mineral-rich bawri water straight from the hill.',
    img: 'https://images.unsplash.com/photo-1625242432869-93b560c1762d',
  },
];

export default function GatewayActivities() {
  return (
    <section id="activities" className="section" style={{ background: 'var(--bg-cream)' }}>
      <div className="container-x">
        <div className="text-center mb-16 reveal" style={{ maxWidth: 760, margin: '0 auto 64px' }}>
          <div className="eyebrow mb-4">Gateway Experiences</div>
          <h2 className="section-title">
            Activities woven into<br />
            <em className="font-italic" style={{ color: 'var(--forest)' }}>the mountain</em>.
          </h2>
          <p className="section-lead mt-5" style={{ margin: '20px auto 0' }}>
            A curated list of experiences that come with your stay at Phagoli — each one grounded in the land, the water, and the quiet rhythm of Himachal.
          </p>
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
                overflow: 'hidden',
                transitionDelay: `${i * 0.06}s`,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <img
                  src={a.img}
                  alt={a.title}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.9s ease' }}
                  onMouseEnter={(ev) => (ev.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={(ev) => (ev.currentTarget.style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: 18,
                    left: 18,
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    background: 'rgba(247,241,227,0.92)',
                    backdropFilter: 'blur(4px)',
                    color: 'var(--forest)',
                    display: 'grid',
                    placeItems: 'center',
                  }}
                >
                  <a.icon className="w-5 h-5" />
                </div>
              </div>
              <div style={{ padding: 28, flex: 1 }}>
                <div
                  style={{
                    fontSize: 12,
                    letterSpacing: '.26em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                    fontWeight: 600,
                  }}
                >
                  {String(i + 1).padStart(2, '0')} · Experience
                </div>
                <h3 className="font-display" style={{ fontSize: 26, color: 'var(--deep)', lineHeight: 1.2, marginTop: 8 }}>
                  {a.title}
                </h3>
                <p style={{ color: 'var(--ink-soft)', fontSize: 14.5, lineHeight: 1.7, marginTop: 10 }}>
                  {a.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
