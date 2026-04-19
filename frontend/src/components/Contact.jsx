import { useState } from 'react';
import { BRAND } from '../data/mock';
import { Phone, Mail, MapPin, Send, Loader2 } from 'lucide-react';
import { createEnquiry } from '../lib/api';
import { toast } from 'sonner';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: 'Farmstay', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return toast.error('Please share your name and email.');
    setSubmitting(true);
    try {
      const res = await createEnquiry('contact', form);
      toast.success(`Namaste ${form.name.split(' ')[0]} — opening WhatsApp to finish.`);
      window.open(res.whatsapp_url, '_blank', 'noopener,noreferrer');
      setForm({ name: '', email: '', phone: '', interest: 'Farmstay', message: '' });
    } catch { toast.error('Could not submit. Please retry.'); }
    finally { setSubmitting(false); }
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-cream)' }}>
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-14">
          <div className="md:col-span-5 reveal">
            <div className="eyebrow mb-4">Plan Your Visit</div>
            <h2 className="section-title">Let’s begin a <em className="font-italic" style={{ color: 'var(--terracotta)' }}>slower</em> conversation.</h2>
            <p className="section-lead mt-6">Ready to experience authentic organic living? Get in touch to plan your visit, place a microlot order, or discuss a partnership.</p>

            <div className="mt-10 space-y-6">
              {[
                { icon: MapPin, label: 'Farm Address', value: BRAND.address },
                { icon: Phone, label: 'Phone & WhatsApp', value: BRAND.phone },
                { icon: Mail, label: 'Email', value: BRAND.email },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--bg-cream-2)', display: 'grid', placeItems: 'center', color: 'var(--forest)', flexShrink: 0 }}>
                    <c.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--muted)' }}>{c.label}</div>
                    <div style={{ fontSize: 16, color: 'var(--deep)', marginTop: 4 }}>{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={submit} className="md:col-span-7 reveal" style={{ background: 'var(--bg-paper)', border: '1px solid var(--line)', padding: 'clamp(32px, 5vw, 56px)', borderRadius: 4 }}>
            <h3 className="font-display" style={{ fontSize: 32, color: 'var(--deep)', marginBottom: 28 }}>Send us a Message</h3>
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <input name="name" value={form.name} onChange={onChange} placeholder="Your name" className="field" />
              <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email address" className="field" />
            </div>
            <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone (optional)" className="field" />
            <div className="mb-6">
              <label style={{ fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--muted)' }}>I am interested in</label>
              <select name="interest" value={form.interest} onChange={onChange} className="field" style={{ paddingTop: 12 }}>
                <option>Farmstay</option>
                <option>Organic Products</option>
                <option>Elder Retreat</option>
                <option>Work Retreat</option>
                <option>Workshops &amp; Training</option>
                <option>CSR / Partnership</option>
              </select>
            </div>
            <textarea name="message" value={form.message} onChange={onChange} rows={4} placeholder="Tell us about your plans…" className="field" style={{ resize: 'vertical' }} />
            <button type="submit" disabled={submitting} className="btn btn-primary mt-8">
              {submitting ? (<><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>) : (<>Send on WhatsApp <Send className="w-4 h-4" /></>)}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
