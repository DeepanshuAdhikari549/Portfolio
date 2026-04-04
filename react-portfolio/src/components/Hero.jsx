import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const roles = [
  'Full Stack Developer',
  'AI Solutions Architect',
  'Next.js Specialist',
  'Python Developer',
];

export default function Hero() {
  const { isDark, theme } = useTheme();
  const [roleIdx, setRoleIdx] = useState(0);
  const [typingText, setTypingText] = useState('');

  // Typing effect
  useEffect(() => {
    let i = 0;
    const role = roles[roleIdx];
    const timer = setInterval(() => {
      if (i <= role.length) {
        setTypingText(role.substring(0, i));
        i++;
      } else {
        clearInterval(timer);
        setTimeout(() => setRoleIdx((p) => (p + 1) % roles.length), 2000);
      }
    }, 65);
    return () => clearInterval(timer);
  }, [roleIdx]);

  const socials = [
    { icon: 'fab fa-github', href: 'https://github.com/DeepanshuAdhikari549', label: 'GitHub' },
    { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/deepanshu-adhikari-1b768028b', label: 'LinkedIn' },
    { icon: 'fab fa-instagram', href: 'https://www.instagram.com/deepanshu_549', label: 'Instagram' },
    { icon: 'fas fa-envelope', href: '#contact', label: 'Email' },
  ];

  const stats = [
    { value: '2+', label: 'Years Exp.' },
    { value: '10+', label: 'Projects' },
    { value: '4+', label: 'Certificates' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center section-container pt-28 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

        {/* ── Left: Text ── */}
        <motion.div
          className="flex flex-col items-start"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Status badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-8"
            style={{
              background: `${theme.primary}14`,
              border: `1px solid ${theme.primary}35`,
              color: theme.primary,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: theme.primary }} />
            Open to opportunities
          </div>

          {/* Name */}
          <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Hi, I'm{' '}
            <span className="text-gradient">Deepanshu</span>
            <span className={isDark ? 'text-slate-200' : 'text-slate-900'}>.</span>
          </h1>

          {/* Role typing */}
          <div className="h-9 flex items-center mb-6">
            <span
              className="text-xl sm:text-2xl font-mono font-semibold"
              style={{ color: theme.primary }}
            >
              {typingText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          {/* Bio */}
          <p className={`text-base sm:text-lg leading-relaxed mb-10 max-w-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            I build intelligent, high-performance web applications that bridge the gap between complex data and intuitive user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            <motion.a
              href="#projects"
              className="btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="/assets/Deepanshu_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Download CV
            </motion.a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3 mb-12">
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target={s.icon === 'fas fa-envelope' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                title={s.label}
                className={`w-10 h-10 rounded-lg flex items-center justify-center border text-sm transition-all duration-200 ${
                  isDark
                    ? 'border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white bg-slate-900/50'
                    : 'border-slate-200 text-slate-500 hover:border-slate-400 hover:text-slate-900 bg-white'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className={s.icon} />
              </motion.a>
            ))}
          </div>

          {/* Stats */}
          <div
            className="flex items-center gap-8 pt-8 border-t w-full"
            style={{ borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }}
          >
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-2xl font-black" style={{ color: theme.primary }}>{s.value}</div>
                <div className={`text-xs mt-0.5 font-medium ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Right: Photo ── */}
        <motion.div
          className="flex justify-center items-center order-first lg:order-last"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <div className="relative">
            {/* Photo frame with hover emoji */}
            <div
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px] rounded-3xl overflow-hidden cursor-pointer group"
              style={{
                border: `2px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                boxShadow: isDark
                  ? `0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)`
                  : `0 24px 64px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)`,
              }}
            >
              {/* Photo */}
              <img
                src="/assets/img.jpg"
                alt="Deepanshu Adhikari"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Subtle gradient bottom overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ background: 'rgba(0,0,0,0.15)' }}
              >
                {/* Overlay content removed for cleaner professional look */}
              </div>

              {/* Name tag at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 px-5 py-4"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)' }}
              >
                <p className="text-white font-bold text-sm">Deepanshu Adhikari</p>
                <p className="text-white/60 text-xs">Full Stack Developer</p>
              </div>
            </div>

            {/* Floating accent: available badge */}
            <motion.div
              className={`absolute -bottom-4 -right-4 flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-semibold shadow-xl ${
                isDark ? 'bg-slate-900 border border-slate-700' : 'bg-white border border-slate-200'
              }`}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#22c55e' }} />
              <span className={isDark ? 'text-slate-200' : 'text-slate-700'}>Available</span>
            </motion.div>

            {/* Floating accent: location badge */}
            <motion.div
              className={`absolute -top-4 -left-4 flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold shadow-lg ${
                isDark ? 'bg-slate-900 border border-slate-700' : 'bg-white border border-slate-200'
              }`}
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <span>📍</span>
              <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>India</span>
            </motion.div>

            {/* Glow dot behind image */}
            <div
              className="absolute inset-0 rounded-3xl -z-10 blur-2xl opacity-20"
              style={{ background: `radial-gradient(circle, ${theme.primary}, transparent 70%)`, transform: 'scale(1.1)' }}
            />
          </div>
        </motion.div>

      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span className={`text-[10px] tracking-widest uppercase font-medium ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
          Scroll
        </span>
        <motion.div
          className="w-0.5 h-6 rounded-full"
          style={{ background: `linear-gradient(to bottom, ${theme.primary}, transparent)` }}
          animate={{ scaleY: [1, 0.4, 1], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
