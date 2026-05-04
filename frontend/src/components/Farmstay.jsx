import { useState } from 'react';
import { ROOMS } from '../data/mock';
import { Users, MapPin, Mountain, ArrowRight, X, Loader2 } from 'lucide-react';
import { createEnquiry } from '../lib/api';
import { toast } from 'sonner';

function BookingModal({ room, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', checkin: '', checkout: '', guests: '2', notes: '' });
  const [submitting, setSubmitting] = useState(false);
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return toast.error('Please share your name and phone.');
    setSubmitting(true);
    try {
      const res = await createEnquiry('booking', { room: room?.name || 'Any', ...form });
      toast.success('Booking enquiry saved. Opening WhatsApp…');
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
            <div className="eyebrow" style={{ color: 'var(--forest)' }}>Farmstay Enquiry</div>
            <div className="font-display" style={{ fontSize: 28, color: 'var(--deep)', marginTop: 4 }}>{room?.name || 'Book your stay'}</div>
          </div>
          <button type="button" onClick={onClose} aria-label="Close" style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--deep)' }}><X className="w-5 h-5" /></button>
        </div>
        <input name="name" value={form.name} onChange={onChange} placeholder="Full name *" className="field" />
        <div className="grid grid-cols-2 gap-4">
          <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone *" className="field" />
          <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email" className="field" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label style={{ fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--muted)' }}>Check-in</label>
            <input name="checkin" type="date" value={form.checkin} onChange={onChange} className="field" />
          </div>
          <div>
            <label style={{ fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--muted)' }}>Check-out</label>
            <input name="checkout" type="date" value={form.checkout} onChange={onChange} className="field" />
          </div>
          <div>
            <label style={{ fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--muted)' }}>Guests</label>
            <input name="guests" type="number" min="1" max="8" value={form.guests} onChange={onChange} className="field" />
          </div>
        </div>
        <textarea name="notes" value={form.notes} onChange={onChange} rows={2} placeholder="Any special requests?" className="field" />
        <button type="submit" disabled={submitting} className="btn btn-terra mt-6" style={{ width: '100%', justifyContent: 'center' }}>
          {submitting ? (<><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>) : 'Continue on WhatsApp'}
        </button>
      </form>
    </div>
  );
}

export default function Farmstay() {
  const [modal, setModal] = useState(null);

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
              Built stone by stone by a local Himachali farmer, Phagoli Farmstay is our rustic mountain home that
              celebrates simple living and minimalist charm. Three bespoke rooms, eight guests at most, one forest.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6" style={{ fontSize: 13 }}>
              <div className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-1" style={{ color: '#c9b67b' }} /><span>3 km from Shimla Airport, in the lower hills of Himalayas</span></div>
              <div className="flex items-start gap-3"><Mountain className="w-4 h-4 mt-1" style={{ color: '#c9b67b' }} /><span>~5,000 ft altitude, surrounded by forest</span></div>
              <div className="flex items-start gap-3"><Users className="w-4 h-4 mt-1" style={{ color: '#c9b67b' }} /><span>Max 8 guests</span></div>
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
                  {r.name === 'The Barbet Suite' ? (
                    <span
                      aria-disabled="true"
                      style={{ background: 'transparent', border: '1px solid #6b6451', color: '#8f8269', padding: '9px 16px', borderRadius: 999, fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', cursor: 'not-allowed' }}
                    >
                      Booking Closed
                    </span>
                  ) : (
                    <button onClick={() => setModal(r)} style={{ background: 'transparent', border: '1px solid #c9b67b', color: '#c9b67b', padding: '9px 16px', borderRadius: 999, fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', cursor: 'pointer' }}>Book</button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-14 reveal">
          <button onClick={() => setModal({ name: 'Any room' })} className="btn btn-terra">Check Availability <ArrowRight className="w-4 h-4" /></button>
        </div>
      </div>
      {modal && <BookingModal room={modal} onClose={() => setModal(null)} />}
    </section>
  );
}
