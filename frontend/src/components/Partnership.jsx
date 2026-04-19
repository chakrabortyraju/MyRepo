import { useState } from 'react';
import { Building2, Tractor, ShoppingBag, X, Loader2 } from 'lucide-react';
import { createEnquiry } from '../lib/api';
import { toast } from 'sonner';

function PartnerModal({ kind, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', company: '', volume: '', notes: '' });
  const [submitting, setSubmitting] = useState(false);
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return toast.error('Please share your name and phone.');
    setSubmitting(true);
    try {
      const res = await createEnquiry('partnership', { kind, ...form });
      toast.success('Enquiry saved. Opening WhatsApp…');
      window.open(res.whatsapp_url, '_blank', 'noopener,noreferrer');
      onClose();
    } catch { toast.error('Could not submit. Please retry.'); }
    finally { setSubmitting(false); }
  };

  return (
    <div onClick={onClose} className="fixed inset-0 z-[80] flex items-end md:items-center justify-center p-0 md:p-8" style={{ background: 'rgba(20,26,16,.55)', backdropFilter: 'blur(4px)' }}>
      <form onSubmit={submit} onClick={(e) => e.stopPropagation()} style={{ background: 'var(--bg-cream)', width: '100%', maxWidth: 560, borderRadius: 4, padding: 32 }}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="eyebrow" style={{ color: 'var(--forest)' }}>Partnership Enquiry</div>
            <div className="font-display" style={{ fontSize: 28, color: 'var(--deep)', marginTop: 4 }}>{kind}</div>
          </div>
          <button type="button" onClick={onClose} aria-label="Close" style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--deep)' }}><X className="w-5 h-5" /></button>
        </div>
        <input name="name" value={form.name} onChange={onChange} placeholder="Full name *" className="field" />
        <div className="grid grid-cols-2 gap-4">
          <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone *" className="field" />
          <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email" className="field" />
        </div>
        <input name="company" value={form.company} onChange={onChange} placeholder="Company / Farm name" className="field" />
        <input name="volume" value={form.volume} onChange={onChange} placeholder="Approx volume / frequency" className="field" />
        <textarea name="notes" value={form.notes} onChange={onChange} rows={2} placeholder="Tell us a little more" className="field" />
        <button type="submit" disabled={submitting} className="btn btn-primary mt-6" style={{ width: '100%', justifyContent: 'center' }}>
          {submitting ? (<><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>) : 'Continue on WhatsApp'}
        </button>
      </form>
    </div>
  );
}

export default function Partnership() {
  const [modal, setModal] = useState(null);

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
              <button onClick={() => setModal('Bulk Supply Partnership')} className="btn btn-primary">Request Bulk Quote</button>
              <button onClick={() => setModal('Farmer Connect Program')} className="btn btn-outline">Join Farmer Network</button>
            </div>
          </div>

          <div className="md:col-span-7 grid sm:grid-cols-2 gap-5">
            {[
              { icon: Building2, title: 'Bulk Supply', body: 'Restaurants, hotels & retailers — wholesale pricing, reliable supply, certified quality.', kind: 'Bulk Supply Partnership' },
              { icon: Tractor, title: 'Farmer Connect', body: 'Guaranteed purchase at premium prices with training, certification and input supply.', kind: 'Farmer Connect Program' },
              { icon: ShoppingBag, title: 'Private Label', body: 'Custom packaging and brand labeling solutions for organic retail chains.', kind: 'Private Label Partnership' },
              { icon: Building2, title: 'CSR & ESG', body: 'Meaningful corporate partnerships that advance rural impact and ESG goals.', kind: 'CSR / ESG Partnership' },
            ].map((c, i) => (
              <button
                key={i} onClick={() => setModal(c.kind)} className="reveal"
                style={{ textAlign: 'left', background: 'var(--bg-paper)', border: '1px solid var(--line)', padding: 28, borderRadius: 4, transitionDelay: `${i * 0.08}s`, cursor: 'pointer' }}
              >
                <c.icon className="w-6 h-6" style={{ color: 'var(--forest)' }} />
                <h4 className="font-display" style={{ fontSize: 24, color: 'var(--deep)', marginTop: 14 }}>{c.title}</h4>
                <p style={{ color: 'var(--ink-soft)', fontSize: 14.5, lineHeight: 1.7, marginTop: 6 }}>{c.body}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
      {modal && <PartnerModal kind={modal} onClose={() => setModal(null)} />}
    </section>
  );
}
