import { useEffect, useState } from 'react';
import { HERO_SLIDES } from '../data/mock';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % HERO_SLIDES.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="hero">
      {HERO_SLIDES.map((s, i) => (
        <div key={i} className={`hero-slide ${i === active ? 'active' : ''}`}>
          <img src={s.img} alt={s.title} />
          <div className="hero-overlay" />
        </div>
      ))}

      <div className="hero-content">
        <div className="container-x w-full">
          <div style={{ maxWidth: 820 }}>
            <div className="hero-eyebrow mb-5">{HERO_SLIDES[active].eyebrow}</div>
            <h1 className="hero-title">{HERO_SLIDES[active].title}</h1>
            <p className="hero-sub mt-6">{HERO_SLIDES[active].subtitle}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#farmstay" className="btn btn-terra">
                {HERO_SLIDES[active].cta} <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#products" className="btn btn-ghost">Shop Fresh Mountain Produces</a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-dots">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === active ? 'active' : ''}`}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="scroll-hint">SCROLL</div>
    </section>
  );
}
