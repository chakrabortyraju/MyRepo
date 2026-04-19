import { BRAND, NAV_LINKS } from '../data/mock';
import { Instagram, Facebook, Youtube, Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-5" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 30, color: '#f2ead3' }}>
              <Leaf className="w-6 h-6" style={{ color: '#c9b67b' }} />
              {BRAND.name}
            </div>
            <p style={{ color: '#a89b7a', fontSize: 14.5, lineHeight: 1.8, maxWidth: 420 }}>
              A sustainable homestead, permaculture farm, foundation, and producer of organic microlots — nestled in the lower Himalayas.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, Youtube].map((I, i) => (
                <a key={i} href="#" aria-label="social" style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid #3e4d35', display: 'grid', placeItems: 'center' }}>
                  <I className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="md:col-span-3">
            <h4>Explore</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (<li key={l.href}><a href={l.href}>{l.label}</a></li>))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <h4>Visit Us</h4>
            <p style={{ color: '#a89b7a', fontSize: 14.5, lineHeight: 1.8 }}>{BRAND.address}</p>
            <p style={{ color: '#a89b7a', fontSize: 14.5, marginTop: 8 }}>{BRAND.phone}</p>
            <p style={{ color: '#a89b7a', fontSize: 14.5 }}>{BRAND.email}</p>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #3e4d35', marginTop: 56, paddingTop: 24, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 16, fontSize: 12, color: '#8f8269', letterSpacing: '.12em', textTransform: 'uppercase' }}>
          <span>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</span>
          <span>Solar-powered · Permaculture Certified · {BRAND.est}</span>
        </div>
      </div>
    </footer>
  );
}
