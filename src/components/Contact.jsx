import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || 'service_ri6yl0i';
    const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY   || 'PBwCqhNSduAQOx5I3';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID  || 'template_default';

    emailjs.init(publicKey);

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setStatus('success');
      setFormData({ from_name: '', reply_to: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      if (error?.text?.includes('template') || error?.message?.includes('template')) {
        try {
          await emailjs.sendForm(serviceId, 'template_default', formRef.current, publicKey);
          setStatus('success');
          setFormData({ from_name: '', reply_to: '', subject: '', message: '' });
          setTimeout(() => setStatus('idle'), 5000);
          return;
        } catch (_) {}
      }
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputBase =
    'w-full px-4 py-2.5 rounded border text-sm font-serif transition-colors focus:outline-none focus:border-[#c9a96e] bg-[#101010] border-[#2c2c2c] text-white placeholder-neutral-500';

  const contactItems = [
    {
      label: 'Email Address',
      value: 'deepanshuadhikari549@gmail.com',
      href: 'mailto:deepanshuadhikari549@gmail.com',
    },
    {
      label: 'Telephone',
      value: '+91 76680 70347',
      href: 'tel:+917668070347',
    },
    {
      label: 'Location',
      value: 'Dehradun, Uttarakhand, India',
      href: 'https://maps.google.com/?q=Dehradun,Uttarakhand,India',
    },
  ];

  const socials = [
    { icon: 'fa-brands fa-github',      link: 'https://github.com/DeepanshuAdhikari549',          label: 'GitHub' },
    { icon: 'fa-brands fa-linkedin-in', link: 'https://www.linkedin.com/in/deepanshuadhikari/',   label: 'LinkedIn' },
    { icon: 'fa-solid fa-file-pdf',     link: '/assets/Deepanshu_s_Resume-.pdf',                  label: 'Curriculum Vitae' },
  ];

  return (
    <section
      id="contact"
      className="section-container"
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">
            Correspondence
          </span>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider" />
          <p className="text-base max-w-xl mx-auto text-neutral-400 font-serif">
            Available for conversations regarding Data Engineering roles, Java backend architecture, and technical collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

          {/* Details Column */}
          <div className="md:col-span-2 glass-card p-6 sm:p-7 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-lg font-bold font-serif text-white mb-2">
                Contact Details
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-serif leading-relaxed mb-6">
                Direct communication channels for recruiters, hiring managers, and technical peers.
              </p>

              <div className="space-y-4">
                {contactItems.map((c, i) => (
                  <div key={i} className="pb-3 border-b border-[#222222] last:border-none">
                    <div className="text-xs font-serif uppercase tracking-wider text-[#c9a96e] mb-0.5">
                      {c.label}
                    </div>
                    <a
                      href={c.href}
                      className="text-sm font-serif text-neutral-200 hover:text-white transition-colors break-all"
                    >
                      {c.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#222222]">
              <div className="text-xs font-serif text-neutral-400 mb-2">Profiles &amp; CV</div>
              <div className="flex gap-2">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.link}
                    target="_blank"
                    rel="noreferrer"
                    title={s.label}
                    className="w-8 h-8 rounded flex items-center justify-center bg-[#181818] border border-[#2a2a2a] text-neutral-300 hover:text-white hover:border-[#555555] transition-colors"
                  >
                    <i className={`${s.icon} text-xs`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="md:col-span-3 glass-card p-6 sm:p-7">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-serif text-neutral-400 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    value={formData.from_name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className="block text-xs font-serif text-neutral-400 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="reply_to"
                    required
                    value={formData.reply_to}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputBase}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-serif text-neutral-400 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Data Engineering or Backend role inquiry"
                  className={inputBase}
                />
              </div>

              <div>
                <label className="block text-xs font-serif text-neutral-400 mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message regarding opportunities or technical discussions..."
                  className={`${inputBase} resize-none`}
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full sm:w-auto"
                >
                  {status === 'sending' ? (
                    <span>Sending message...</span>
                  ) : status === 'success' ? (
                    <span>Message Sent Successfully</span>
                  ) : status === 'error' ? (
                    <span>Failed to send (Please email directly)</span>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
