import { Building2, Tractor, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';

export default function Partnership() {
  return (
    <section className="section" style={{ background: 'var(--bg-cream-2)', position: 'relative', overflow: 'hidden' }}>
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 reveal">
            <div className="eyebrow mb-4">Business Partnerships</div>
            <h2 className="section-title">Partner with <em className="font-italic" style={{ color: 'var(--forest)' }}>Phagoli</em>.</h2>
            <p className="section-lead mt-6">
              Scale your business with premium organic products and sustainable farming partnerships.
              From bulk supply to farmer networks, we build partnerships rooted in impact.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={() => toast.success('Bulk enquiry saved — we will reach out')} className="btn btn-primary">Request Bulk Quote</button>
              <button onClick={() => toast.success('Farmer network application sent')} className="btn btn-outline">Join Farmer Network</button>
            </div>
          </div>

          <div className="md:col-span-7 grid sm:grid-cols-2 gap-5">
            {[
              { icon: Building2, title: 'Bulk Supply', body: 'Restaurants, hotels & retailers — wholesale pricing, reliable supply, certified quality.' },
              { icon: Tractor, title: 'Farmer Connect', body: 'Guaranteed purchase at premium prices with training, certification and input supply.' },
              { icon: ShoppingBag, title: 'Private Label', body: 'Custom packaging and brand labeling solutions for organic retail chains.' },
              { icon: Building2, title: 'CSR & ESG', body: 'Meaningful corporate partnerships that advance rural impact and ESG goals.' },
            ].map((c, i) => (
              <div key={i} className="reveal" style={{ background: 'var(--bg-paper)', border: '1px solid var(--line)', padding: 28, borderRadius: 4, transitionDelay: `${i * 0.08}s` }}>
                <c.icon className="w-6 h-6" style={{ color: 'var(--forest)' }} />
                <h4 className="font-display" style={{ fontSize: 24, color: 'var(--deep)', marginTop: 14 }}>{c.title}</h4>
                <p style={{ color: 'var(--ink-soft)', fontSize: 14.5, lineHeight: 1.7, marginTop: 6 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
