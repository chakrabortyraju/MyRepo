import { ROOMS } from '../data/mock';
import { Users, MapPin, Mountain, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export default function Farmstay() {
  return (
    <section id="farmstay" className="section" style={{ background: 'var(--deep)', color: '#eee5cf' }}>
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5 reveal">
            <div className="eyebrow mb-4" style={{ color: '#c9b67b' }}>Phagoli Farmstay</div>
            <h2 className="section-title" style={{ color: '#f7f1e3' }}>
              A song in stone,<br />
              <em className="font-italic" style={{ color: '#c9b67b' }}>hidden in the hills.</em>
            </h2>
          </div>
          <div className="md:col-span-7 reveal" style={{ transitionDelay: '.1s' }}>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: '#d9cdb2' }}>
              Built stone by stone by a local Kumaoni farmer, Phagoli Farmstay is our rustic mountain home that
              celebrates simple living and minimalist charm. Three bespoke rooms, eight guests at most, one forest.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6" style={{ fontSize: 13 }}>
              <div className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-1" style={{ color: '#c9b67b' }} /><span>15 km from Nainital, in the Kumaon Himalayas</span></div>
              <div className="flex items-start gap-3"><Mountain className="w-4 h-4 mt-1" style={{ color: '#c9b67b' }} /><span>~5,000 ft altitude, surrounded by forest</span></div>
              <div className="flex items-start gap-3"><Users className="w-4 h-4 mt-1" style={{ color: '#c9b67b' }} /><span>Max 8 guests — personal &amp; intimate</span></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ROOMS.map((r, i) => (
            <article key={r.name} className="reveal" style={{ background: '#2b3826', border: '1px solid #3e4d35', borderRadius: 4, overflow: 'hidden', transitionDelay: `${i * 0.08}s` }}>
              <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                <img src={r.img} alt={r.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 26 }}>
                <h3 className="font-display" style={{ fontSize: 26, color: '#f7f1e3' }}>{r.name}</h3>
                <p style={{ color: '#b7a888', fontSize: 14.5, lineHeight: 1.7, marginTop: 8 }}>{r.desc}</p>
                <div className="mt-5 flex items-center justify-between" style={{ paddingTop: 16, borderTop: '1px solid #3e4d35' }}>
                  <div>
                    <div style={{ color: '#c9b67b', fontSize: 20, fontFamily: 'Cormorant Garamond, serif' }}>{r.price}<span style={{ fontSize: 12, color: '#b7a888' }}> / night</span></div>
                    <div style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: '#8f8269', marginTop: 2 }}>{r.guests}</div>
                  </div>
                  <button onClick={() => toast.success(`${r.name} — checking availability…`)} style={{ background: 'transparent', border: '1px solid #c9b67b', color: '#c9b67b', padding: '9px 16px', borderRadius: 999, fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', cursor: 'pointer' }}>Book</button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-14 reveal">
          <a href="#contact" className="btn btn-terra">Check Availability <ArrowRight className="w-4 h-4" /></a>
        </div>
      </div>
    </section>
  );
}
