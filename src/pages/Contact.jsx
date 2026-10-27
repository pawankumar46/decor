import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';
import Reveal from '../components/Reveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!formData.name.trim()) next.name = 'Please enter your name';
    if (!formData.email.trim()) next.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) next.email = 'Enter a valid email';
    if (!formData.message.trim()) next.message = 'Please tell us about your event';
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const next = validate();
    if (Object.keys(next).length) {
      setErrors(next);
      const first = Object.keys(next)[0];
      document.getElementById(first)?.focus();
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    console.log('Form submitted:', formData);
    setSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[var(--paper)]">
      <section className="relative overflow-hidden bg-[var(--ink)] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 20% 80%, rgba(63,143,126,0.35), transparent 45%)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[var(--champagne-soft)]">
            Get in touch
          </p>
          <h1 className="font-display text-5xl font-semibold sm:text-6xl md:text-7xl">Contact</h1>
          <p className="mt-4 max-w-xl text-lg text-white/70">
            Share your date, venue, and vision — we&apos;ll respond within a day with ideas and a quote.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <Reveal>
              <div className="rounded-3xl border border-[var(--ink)]/6 bg-white p-7 sm:p-8">
                <h2 className="font-display text-2xl font-semibold text-[var(--ink)]">
                  Studio details
                </h2>
                <ul className="mt-6 space-y-5">
                  <li className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--mist)] text-[var(--sage)]">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[var(--ink)]">Phone</p>
                      <a href="tel:+917338046069" className="block text-[var(--muted)] hover:text-[var(--sage)]">
                        +91 73380 46069
                      </a>
                      <a href="tel:+919845496940" className="block text-[var(--muted)] hover:text-[var(--sage)]">
                        +91 98454 96940
                      </a>
                      <p className="mt-1 text-xs text-[var(--muted)]">Available 9 AM – 7 PM</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--mist)] text-[var(--sage)]">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[var(--ink)]">Email</p>
                      <a
                        href="mailto:narensadan510@gmail.com"
                        className="text-[var(--muted)] hover:text-[var(--sage)]"
                      >
                        narensadan510@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--mist)] text-[var(--sage)]">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[var(--ink)]">Address</p>
                      <p className="text-[var(--muted)]">
                        #510, 14th Main Road, 4th Block, Nandini Layout, Bengaluru-560096
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-3xl border border-[var(--ink)]/6 bg-white p-7 sm:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <Clock className="h-5 w-5 text-[var(--sage)]" aria-hidden="true" />
                  <h2 className="font-display text-2xl font-semibold text-[var(--ink)]">Hours</h2>
                </div>
                <div className="space-y-3 text-sm">
                  {[
                    ['Monday – Friday', '9:00 AM – 7:00 PM'],
                    ['Saturday', '9:00 AM – 5:00 PM'],
                    ['Sunday', '10:00 AM – 4:00 PM'],
                  ].map(([day, hours]) => (
                    <div
                      key={day}
                      className="flex items-center justify-between rounded-xl bg-[var(--paper)] px-4 py-3"
                    >
                      <span className="font-medium text-[var(--ink)]">{day}</span>
                      <span className="text-[var(--muted)]">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-[var(--ink)]/6 bg-white p-7 sm:p-8">
              <h2 className="font-display text-2xl font-semibold text-[var(--ink)]">
                Send a message
              </h2>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Fields marked * are required.
              </p>

              {submitted ? (
                <div className="mt-10 flex flex-col items-center py-10 text-center">
                  <CheckCircle2 className="mb-4 h-12 w-12 text-[var(--sage)]" aria-hidden="true" />
                  <h3 className="font-display text-2xl font-semibold text-[var(--ink)]">
                    Message sent
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-[var(--muted)]">
                    Thank you — we&apos;ll get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn-primary mt-6"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[var(--ink)]">
                        Full name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="Your name"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-xs text-red-600">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[var(--ink)]">
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="you@email.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-xs text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-[var(--ink)]">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="+91 …"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[var(--ink)]">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="input-field resize-none"
                      placeholder="Event type, date, venue, colour preferences…"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-xs text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <button type="submit" disabled={submitting} className="btn-primary w-full !rounded-xl">
                    {submitting ? 'Sending…' : 'Send message'}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;
