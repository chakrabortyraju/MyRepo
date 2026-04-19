import { useState } from 'react';
import * as Icons from 'lucide-react';
import { EXPERIENCES } from '../data/mock';
import { ArrowRight, X, Loader2 } from 'lucide-react';
import { createEnquiry } from '../lib/api';
import { toast } from 'sonner';

function ReserveModal({ experience, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', guests: '2', notes: '' });
  const [submitting, setSubmitting] = useState(false);
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return toast.error('Please share your name and phone.');
    setSubmitting(true);
    try {
      const res = await createEnquiry('experience', { experience: experience.title, ...form });
      toast.success('Saved. Opening WhatsApp…');
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
            <div className="eyebrow" style={{ color: 'var(--forest)' }}>Reserve Experience</div>
            <div className="font-display" style={{ fontSize: 28, color: 'var(--deep)', marginTop: 4 }}>{experience.title}</div>
          </div>
          <button type="button" onClick={onClose} aria-label="Close" style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--deep)' }}><X className="w-5 h-5" /></button>
        </div>
        <input name="name" value={form.name} onChange={onChange} placeholder="Full name *" className="field" />
        <div className="grid grid-cols-2 gap-4">
          <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone *" className="field" />
          <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email" className="field" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label style={{ fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--muted)' }}>Preferred date</label>
            <input name="date" type="date" value={form.date} onChange={onChange} className="field" />
          </div>
          <div>
            <label style={{ fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--muted)' }}>Guests</label>
            <input name="guests" type="number" min="1" max="12" value={form.guests} onChange={onChange} className="field" />
          </div>
        </div>
        <textarea name="notes" value={form.notes} onChange={onChange} rows={2} placeholder="Anything we should know?" className="field" />
        <button type="submit" disabled={submitting} className="btn btn-terra mt-6" style={{ width: '100%', justifyContent: 'center' }}>
          {submitting ? (<><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>) : 'Continue on WhatsApp'}
        </button>
      </form>
    </div>
  );
}

export default function Experiences() {
  const [modal, setModal] = useState(null);

  return (
    <section id="experiences" className="section" style={{ background: 'var(--bg-cream-2)' }}>
      <div className="container-x">
        <div className="text-center mb-16 reveal" style={{ maxWidth: 760, margin: '0 auto 64px' }}>
          <div className="eyebrow mb-4">Immersive Experiences</div>
          <h2 className="section-title">Reconnect with nature, mindfully.</h2>
          <p className="section-lead mt-5" style={{ margin: '20px auto 0' }}>
            Carefully crafted experiences for wellness, learning, and authentic rural living — from farm walks and slow-living immersions to hands-on workshops.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {EXPERIENCES.map((e, i) => {
            const Icon = Icons[e.icon] || Icons.Sparkles;
            return (
              <article key={e.id} className="reveal" style={{ position: 'relative', overflow: 'hidden', borderRadius: 4, aspectRatio: '4/3', transitionDelay: `${i * 0.08}s` }}>
                <img src={e.img} alt={e.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1s ease' }} onMouseEnter={(ev) => (ev.currentTarget.style.transform = 'scale(1.05)')} onMouseLeave={(ev) => (ev.currentTarget.style.transform = 'scale(1)')} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(31,42,28,.1) 30%, rgba(31,42,28,.85) 100%)' }} />
                <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '32px 36px', color: '#fff' }}>
                  <div className="flex items-center gap-3 mb-3" style={{ fontSize: 12, letterSpacing: '.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,.85)' }}>
                    <Icon className="w-4 h-4" />
                    {e.tag}
                  </div>
                  <h3 className="font-display" style={{ fontSize: 36, lineHeight: 1.1 }}>{e.title}</h3>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,.88)', lineHeight: 1.7, marginTop: 10, maxWidth: 520 }}>{e.desc}</p>
                  <button onClick={() => setModal(e)} className="mt-5 inline-flex items-center gap-2" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,.7)', color: '#fff', padding: '10px 18px', borderRadius: 999, fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', cursor: 'pointer' }}>Reserve <ArrowRight className="w-3.5 h-3.5" /></button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      {modal && <ReserveModal experience={modal} onClose={() => setModal(null)} />}
    </section>
  );
}
