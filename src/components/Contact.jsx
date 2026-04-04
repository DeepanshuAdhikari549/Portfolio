import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useTheme } from '../context/ThemeContext';

export default function Contact() {
  const { isDark, theme } = useTheme();
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

  const inputBase = [
    'w-full px-4 py-3 sm:py-3.5 rounded-xl border text-sm font-medium',
    'transition-all duration-300 focus:outline-none focus:ring-2',
    isDark
      ? 'bg-slate-800/80 border-slate-700 text-slate-100 placeholder-slate-600 focus:border-indigo-500 focus:ring-indigo-500/20'
      : 'bg-white/80 border-slate-200 text-slate-800 placeholder-slate-400 focus:border-indigo-400 focus:ring-indigo-400/20',
  ].join(' ');

  const contactItems = [
    {
      emoji: '📧',
      label: 'Email',
      value: 'deepanshuadhikari549@gmail.com',
      href: 'mailto:deepanshuadhikari549@gmail.com',
      short: 'Send Email',
    },
    {
      emoji: '📞',
      label: 'Phone',
      value: '+91 76680 70347',
      href: 'tel:+917668070347',
      short: 'Call Me',
    },
    {
      emoji: '📍',
      label: 'Location',
      value: 'Dehradun, Uttarakhand, India',
      href: 'https://maps.google.com/?q=Dehradun,Uttarakhand,India',
      short: 'View Map',
    },
  ];

  const socials = [
    { icon: 'fab fa-github',      link: 'https://github.com/DeepanshuAdhikari549',                         label: 'GitHub'    },
    { icon: 'fab fa-linkedin-in', link: 'https://www.linkedin.com/in/deepanshu-adhikari-1b768028b',        label: 'LinkedIn'  },
    { icon: 'fab fa-instagram',   link: 'https://www.instagram.com/deepanshu_549',                         label: 'Instagram' },
  ];

  return (
    <section
      id="contact"
      className="section-container"
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label" style={{ color: theme.primary }}>
            — Let's work together —
          </span>
          <h2 className="section-title text-gradient">Get In Touch</h2>
          <div className="section-divider" />
          <p className={`text-base sm:text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Have a project in mind or want to collaborate? Feel free to reach out. Let's build something amazing!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-8 lg:gap-10">

          {/* ── Contact Info Panel ── */}
          <motion.div
            className="lg:col-span-2 glass-card p-5 sm:p-8 flex flex-col gap-5 sm:gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className={`text-lg sm:text-xl font-bold mb-1 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                Contact Info
              </h3>
              <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                I reply within 24 hours. ⚡
              </p>
            </div>

            {/* Contact items */}
            <div className="flex flex-col gap-4 sm:gap-5">
              {contactItems.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 group"
                  whileHover={{ x: 4 }}
                >
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-lg sm:text-xl flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${theme.primary}15`,
                      border: `1px solid ${theme.cardBorder}`,
                      boxShadow: `0 0 14px ${theme.glow}`,
                    }}
                  >
                    {item.emoji}
                  </div>
                  <div className="min-w-0">
                    <p className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-0.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      {item.label}
                    </p>
                    <p
                      className="text-xs sm:text-sm font-medium truncate transition-colors duration-200"
                      style={{ color: isDark ? '#e2e8f0' : '#1e293b' }}
                    >
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Socials */}
            <div
              className="pt-4 sm:pt-5"
              style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}` }}
            >
              <p className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                Follow Me
              </p>
              <div className="flex gap-2.5 sm:gap-3">
                {socials.map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border transition-all ${
                      isDark
                        ? 'bg-slate-800 border-slate-700 text-slate-400'
                        : 'bg-white border-slate-200 text-slate-500 shadow-sm'
                    }`}
                    whileHover={{ y: -3, scale: 1.1, borderColor: theme.primary, color: theme.primary }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className={`${s.icon} text-xs sm:text-sm`} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div
              className="flex items-center gap-3 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 mt-auto"
              style={{ background: `${theme.primary}10`, border: `1px solid ${theme.cardBorder}` }}
            >
              <span
                className="w-2.5 h-2.5 rounded-full animate-pulse flex-shrink-0"
                style={{ background: theme.primary }}
              />
              <span className="text-xs sm:text-sm font-semibold" style={{ color: theme.primary }}>
                Available for freelance &amp; full-time roles
              </span>
            </div>
          </motion.div>

          {/* ── Contact Form ── */}
          <motion.div
            className="lg:col-span-3 glass-card p-5 sm:p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={`text-lg sm:text-xl font-bold mb-5 sm:mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
              Send a Message 💬
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className={inputBase}
                    autoComplete="name"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="reply_to"
                    value={formData.reply_to}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className={inputBase}
                    autoComplete="email"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry / Collaboration"
                  className={inputBase}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Hello Deepanshu, I'd love to discuss..."
                  rows={4}
                  className={`${inputBase} resize-none`}
                />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium"
                >
                  ✅ Message sent! I'll get back to you within 24 hours.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 bg-red-500/10 text-red-400 border border-red-500/30 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium"
                >
                  ❌ Something went wrong. Please email me directly at deepanshuadhikari549@gmail.com
                </motion.div>
              )}

              {/* Footer row */}
              <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-between mt-1">
                <p className={`text-[10px] sm:text-xs text-center sm:text-left ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
                  Or email:{' '}
                  <a
                    href="mailto:deepanshuadhikari549@gmail.com"
                    className="hover:underline"
                    style={{ color: theme.primary }}
                  >
                    deepanshuadhikari549@gmail.com
                  </a>
                </p>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full sm:w-auto justify-center min-w-[140px]"
                  whileHover={{ scale: status === 'sending' ? 1 : 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {status === 'sending' ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane text-xs" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
