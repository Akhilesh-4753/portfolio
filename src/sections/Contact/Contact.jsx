import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy } from 'lucide-react';
import { WhatsappIcon } from '../../components/common/BrandIcons';
import { personalInfo } from '../../data/personal';
import { SectionTitle } from '../../components/common/SectionTitle';
import { Button } from '../../components/common/Button';
import { SocialLinks } from '../../components/common/SocialLinks';
import { TiltCard } from '../../components/animations/TiltCard';
import { FadeIn } from '../../components/animations/FadeIn';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      // Open mail client with composed message as standard transparent behavior
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, '_blank');
    }
  };

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="site-container">
        <SectionTitle
          badge="GET IN TOUCH"
          title="Let's Build Something"
          highlight="Useful"
          subtitle="Have a project, opportunity, or idea? Let's connect and build something meaningful."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.3fr',
            gap: '3rem',
            alignItems: 'start'
          }}
          className="contact-grid"
        >
          {/* Left: Contact Info & Channels */}
          <div>
            <FadeIn direction="right" delay={0.1}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                Contact Information
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {/* Email Card */}
                <div
                  className="glass-panel"
                  style={{
                    padding: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(56, 189, 248, 0.1)',
                        color: 'var(--color-blue)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <Mail size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Email</div>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    title="Copy Email"
                    style={{
                      background: 'none',
                      border: 'none',
                      color: copiedField === 'email' ? 'var(--color-emerald)' : 'var(--text-muted)',
                      cursor: 'pointer',
                      padding: '0.4rem'
                    }}
                  >
                    {copiedField === 'email' ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Phone Card */}
                <div
                  className="glass-panel"
                  style={{
                    padding: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(56, 189, 248, 0.1)',
                        color: 'var(--color-blue)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <Phone size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Phone & WhatsApp</div>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    title="Copy Phone"
                    style={{
                      background: 'none',
                      border: 'none',
                      color: copiedField === 'phone' ? 'var(--color-emerald)' : 'var(--text-muted)',
                      cursor: 'pointer',
                      padding: '0.4rem'
                    }}
                  >
                    {copiedField === 'phone' ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Location Card */}
                <div
                  className="glass-panel"
                  style={{
                    padding: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem'
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(56, 189, 248, 0.1)',
                      color: 'var(--color-blue)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Location</div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{personalInfo.location}</div>
                  </div>
                </div>
              </div>

              {/* Direct Quick WhatsApp Button */}
              <div style={{ marginBottom: '2rem' }}>
                <Button
                  href="https://wa.me/+919526008613"
                  variant="secondary"
                  icon={WhatsappIcon}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Quick Chat on WhatsApp
                </Button>
              </div>

              {/* Social Network Links */}
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                  Professional Profiles:
                </div>
                <SocialLinks />
              </div>
            </FadeIn>
          </div>

          {/* Right: Validated Interactive Message Form */}
          <div>
            <FadeIn direction="left" delay={0.15}>
              <TiltCard style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  Send a Direct Message
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem' }}>
                  Fill in your project or inquiry details to initiate direct communication.
                </p>

                {submitted ? (
                  <div
                    style={{
                      padding: '2rem',
                      textAlign: 'center',
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      borderRadius: '12px'
                    }}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-emerald)',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1rem auto'
                      }}
                    >
                      <Check size={24} />
                    </div>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                      Ready to Send!
                    </h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                      Your email client has been prepared with your inquiry. You can also reach out directly via WhatsApp or LinkedIn.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', message: '' });
                      }}
                      className="btn-outline"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    {/* Name */}
                    <div style={{ marginBottom: '1.25rem' }}>
                      <label
                        htmlFor="contact-name"
                        style={{
                          display: 'block',
                          fontSize: '0.86rem',
                          fontWeight: 600,
                          marginBottom: '0.45rem',
                          color: 'var(--text-primary)'
                        }}
                      >
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="Akhilesh P"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: null });
                        }}
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem',
                          borderRadius: '10px',
                          border: errors.name ? '1px solid #ef4444' : '1px solid var(--border-subtle)',
                          backgroundColor: 'var(--bg-main)',
                          color: 'var(--text-primary)',
                          fontSize: '0.95rem',
                          outline: 'none',
                          fontFamily: 'inherit'
                        }}
                      />
                      {errors.name && (
                        <div style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '0.35rem' }}>
                          {errors.name}
                        </div>
                      )}
                    </div>

                    {/* Email */}
                    <div style={{ marginBottom: '1.25rem' }}>
                      <label
                        htmlFor="contact-email"
                        style={{
                          display: 'block',
                          fontSize: '0.86rem',
                          fontWeight: 600,
                          marginBottom: '0.45rem',
                          color: 'var(--text-primary)'
                        }}
                      >
                        Your Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: null });
                        }}
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem',
                          borderRadius: '10px',
                          border: errors.email ? '1px solid #ef4444' : '1px solid var(--border-subtle)',
                          backgroundColor: 'var(--bg-main)',
                          color: 'var(--text-primary)',
                          fontSize: '0.95rem',
                          outline: 'none',
                          fontFamily: 'inherit'
                        }}
                      />
                      {errors.email && (
                        <div style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '0.35rem' }}>
                          {errors.email}
                        </div>
                      )}
                    </div>

                    {/* Message */}
                    <div style={{ marginBottom: '1.75rem' }}>
                      <label
                        htmlFor="contact-message"
                        style={{
                          display: 'block',
                          fontSize: '0.86rem',
                          fontWeight: 600,
                          marginBottom: '0.45rem',
                          color: 'var(--text-primary)'
                        }}
                      >
                        Your Message
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        placeholder="Tell me about your project, software needs, or opportunity..."
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: null });
                        }}
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem',
                          borderRadius: '10px',
                          border: errors.message ? '1px solid #ef4444' : '1px solid var(--border-subtle)',
                          backgroundColor: 'var(--bg-main)',
                          color: 'var(--text-primary)',
                          fontSize: '0.95rem',
                          outline: 'none',
                          resize: 'vertical',
                          fontFamily: 'inherit'
                        }}
                      />
                      {errors.message && (
                        <div style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '0.35rem' }}>
                          {errors.message}
                        </div>
                      )}
                    </div>

                    <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                      <span>Send Message</span>
                      <Send size={18} />
                    </button>
                  </form>
                )}
              </TiltCard>
            </FadeIn>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
