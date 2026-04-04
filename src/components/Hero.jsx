import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import TechMarquee from './TechMarquee';

const roles = [
  'MERN Stack Developer',
  'Software Engineer',
  'React Frontend Expert',
  'Node.js Developer',
];

export default function Hero() {
  const { isDark, theme } = useTheme();
  const [roleIdx, setRoleIdx] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

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
        setTimeout(() => setRoleIdx((p) => (p + 1) % roles.length), 2200);
      }
    }, 60);
    return () => clearInterval(timer);
  }, [roleIdx]);

  // Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socials = [
    { icon: 'fab fa-github', href: 'https://github.com/DeepanshuAdhikari549', label: 'GitHub' },
    { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/deepanshu-adhikari-1b768028b', label: 'LinkedIn' },
    { icon: 'fab fa-instagram', href: 'https://www.instagram.com/deepanshu_549', label: 'Instagram' },
    { icon: 'fas fa-envelope', href: '#contact', label: 'Email' },
  ];

  const stats = [
    { value: 'Fresher', label: 'Experience' },
    { value: '15+', label: 'Projects' },
    { value: '4+', label: 'Certificates' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <section
        id="home"
        className="min-h-screen flex items-center w-full relative"
        style={{ paddingTop: '4.5rem' }}
      >
        <div className="section-container pt-2 pb-36 sm:pt-12 sm:pb-40 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center w-full">

            {/* ── Left: Text ── */}
            <motion.div
              className="flex flex-col items-start order-2 lg:order-1"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Status badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5 sm:mb-7"
                style={{
                  background: `${theme.primary}14`,
                  border: `1px solid ${theme.primary}35`,
                  color: theme.primary,
                }}
              >
                <span className="status-dot" style={{ background: theme.primary, boxShadow: `0 0 0 3px ${theme.primary}30` }} />
                Open to opportunities
              </div>

              {/* Name */}
              <h1
                className={`font-extrabold leading-[1.08] tracking-tight mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}
                style={{ fontSize: 'clamp(2.2rem, 8vw, 4rem)' }}
              >
                Hi, I'm{' '}
                <span className="text-gradient">Deepanshu</span>
                <span className={isDark ? 'text-slate-200' : 'text-slate-900'}>.</span>
              </h1>

              {/* Role typing */}
              <div className="h-8 sm:h-9 flex items-center mb-5">
                <span
                  className="text-base sm:text-xl font-semibold"
                  style={{ color: theme.primary, fontFamily: 'var(--font-mono)' }}
                >
                  {typingText}
                  <span className="cursor-blink">|</span>
                </span>
              </div>

              {/* Bio */}
              <p className={`text-sm sm:text-base lg:text-lg leading-relaxed mb-7 max-w-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                I build intelligent, high-performance web applications that bridge the gap between complex data and intuitive user experiences.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 mb-7">
                <motion.a
                  href="#projects"
                  className="btn-primary"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <i className="fas fa-rocket text-xs" />
                  View Projects
                </motion.a>
                <motion.a
                  href="/assets/Deepanshu_s_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <i className="fas fa-download text-xs" />
                  Download CV
                </motion.a>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-2.5 mb-8 sm:mb-10">
                {socials.map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    target={s.icon === 'fas fa-envelope' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    title={s.label}
                    aria-label={s.label}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center border text-sm transition-all duration-200 ${isDark
                      ? 'border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white bg-slate-900/50'
                      : 'border-slate-200 text-slate-500 hover:border-slate-400 hover:text-slate-900 bg-white shadow-sm'
                      }`}
                    whileHover={{ y: -3, scale: 1.08 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className={s.icon} />
                  </motion.a>
                ))}
              </div>

              {/* Stats */}
              <div
                className="flex items-center gap-5 sm:gap-8 pt-6 sm:pt-8 border-t w-full flex-wrap"
                style={{ borderColor: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)' }}
              >
                {stats.map((s, i) => (
                  <div key={i} className="flex flex-col">
                    <div
                      className="text-lg sm:text-2xl font-black"
                      style={{ color: theme.primary }}
                    >
                      {s.value}
                    </div>
                    <div className={`text-[10px] sm:text-xs mt-0.5 font-medium uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── Right: Photo ── */}
            <motion.div
              className="flex justify-center items-center order-1 lg:order-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              <div className="relative">
                {/* Photo frame */}
                <div
                  className="relative overflow-hidden cursor-pointer group rounded-3xl"
                  style={{
                    width: 'clamp(200px, 45vw, 320px)',
                    height: 'clamp(200px, 45vw, 320px)',
                    border: `2px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.07)'}`,
                    boxShadow: isDark
                      ? `0 20px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04)`
                      : `0 20px 60px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.04)`,
                  }}
                >
                  <img
                    src="/assets/img.jpg"
                    alt="Deepanshu Adhikari"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />

                  {/* Name tag */}
                  <div
                    className="absolute bottom-0 left-0 right-0 px-4 py-3"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)' }}
                  >
                    <p className="text-white font-bold text-xs sm:text-sm">Deepanshu Adhikari</p>
                    <p className="text-white/60 text-[10px] sm:text-xs">Full Stack Developer</p>
                  </div>
                </div>

                {/* Floating: Available badge */}
                <motion.div
                  className={`absolute -bottom-4 -right-3 sm:-right-5 flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-semibold shadow-xl ${isDark ? 'bg-slate-900 border border-slate-700' : 'bg-white border border-slate-200'
                    }`}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#22c55e' }} />
                  <span className={isDark ? 'text-slate-200' : 'text-slate-700'}>Available</span>
                </motion.div>

                {/* Floating: Location badge */}
                <motion.div
                  className={`absolute -top-4 -left-3 sm:-left-5 flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold shadow-lg ${isDark ? 'bg-slate-900 border border-slate-700' : 'bg-white border border-slate-200'
                    }`}
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                >
                  <span>📍</span>
                  <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>India</span>
                </motion.div>

                {/* Glow behind image */}
                <div
                  className="absolute inset-0 rounded-3xl -z-10 blur-2xl opacity-25"
                  style={{
                    background: `radial-gradient(circle, ${theme.primary}, transparent 70%)`,
                    transform: 'scale(1.15)',
                    pointerEvents: 'none',
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Scroll hint */}
          <motion.div
            className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <span className={`text-[9px] tracking-[0.2em] uppercase font-semibold ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
              Scroll
            </span>
            <motion.div
              className="w-0.5 h-6 rounded-full"
              style={{ background: `linear-gradient(to bottom, ${theme.primary}, transparent)` }}
              animate={{ scaleY: [1, 0.4, 1], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Marquee at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 py-6 sm:py-8 lg:py-10 bg-mesh/10">
          <TechMarquee />
        </div>
      </section>
    </>
  );
}
