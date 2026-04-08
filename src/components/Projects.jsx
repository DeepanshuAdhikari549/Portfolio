import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const projects = [
  {
    tags: ['React', 'MERN', 'Responsive'],
    emoji: '🛒',
    title: 'FitBae Clothing',
    desc: 'A fashion-forward clothing e-commerce platform featuring a complete user experience for browsing and purchasing apparel.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: 'https://fitbae-frontend-five.vercel.app',
    code: 'https://github.com/DeepanshuAdhikari549/E-commerce-website',
    featured: true,
  },
  {
    tags: ['C', 'Console', 'Finance'],
    emoji: '🏦',
    title: 'SwiftBank',
    desc: 'Robust console-based banking application designed for secure account management, transactions, and administrative oversight.',
    tech: ['C', 'Data Structures', 'File Handling'],
    live: '#',
    code: 'https://github.com/DeepanshuAdhikari549/SwiftBank',
    featured: true,
  },
  {
    tags: ['React', 'Healthcare', 'MERN'],
    emoji: '🏥',
    title: 'Mediora',
    desc: 'A modern healthcare platform that allows users to search, compare, and book hospitals and laboratory tests seamlessly.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: 'https://medi-compare-omega.vercel.app',
    code: 'https://github.com/DeepanshuAdhikari549/Mediora',
    featured: true,
  },
  {
    tags: ['HTML', 'CSS'],
    emoji: '📺',
    title: 'Netflix Clone',
    desc: 'A high-fidelity landing page clone of Netflix, focusing on design accuracy and fully responsive layout across all devices.',
    tech: ['HTML', 'CSS', 'Responsive Design'],
    live: 'https://netflix-clone-tau-orcin.vercel.app',
    code: 'https://github.com/DeepanshuAdhikari549/Netflix-Clone',
  },
  {
    tags: ['JS', 'Frontend', 'Design'],
    emoji: '🍕',
    title: 'Food Delivery Webpage',
    desc: 'Sleek landing page for a food delivery service, featuring modern design elements and smooth interactive navigation.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://deepanshuadhikari549.github.io/Food-Delivery-Webpage/',
    code: 'https://github.com/DeepanshuAdhikari549/Food-Delivery-Webpage',
  },
  {
    tags: ['React', 'QR'],
    emoji: '📸',
    title: 'Portfolio QR Card',
    desc: 'A digital contact card featuring a QR generator, geolocation map, and a clean glassmorphic premium UI.',
    tech: ['React', 'JavaScript', 'Google Maps API'],
    live: 'https://portfolio-qr-code.vercel.app',
    code: 'https://github.com/DeepanshuAdhikari549/Portfolio-QR-Code',
  },
  {
    tags: ['JS', 'Game', 'DOM'],
    emoji: '🎮',
    title: 'Guess the Number',
    desc: 'An interactive and fun number-guessing game that provides a dynamic user experience through expert DOM manipulation.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    live: '#',
    code: 'https://github.com/DeepanshuAdhikari549/Guess-the-number',
  },
  {
    tags: ['JS', 'Logic', 'Switcher'],
    emoji: '🎨',
    title: 'BG Switcher JS',
    desc: 'Simple tool for dynamically changing webpage background colors based on user input or events.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    live: 'https://deepanshuadhikari549.github.io/Background-color-switcher/',
    code: 'https://github.com/DeepanshuAdhikari549/Background-color-switcher',
  },
  {
    tags: ['Python', 'ML', 'AI'],
    emoji: '🩺',
    title: 'Medical Cost Predictor',
    desc: 'Machine learning application that predicts medical insurance costs based on health data using Scikit-learn.',
    tech: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas'],
    live: 'https://medical-cost-predictor-app.onrender.com',
    code: 'https://github.com/DeepanshuAdhikari549/Medical-Cost-Predictor',
  },
];

const FILTERS = ['All', 'React', 'MERN', 'AI', 'Python', 'JS', 'C'];

export default function Projects() {
  const { isDark, theme } = useTheme();
  const [filter, setFilter] = useState('All');

  const visible =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="section-container">
      <motion.div
        className="text-center mb-10 sm:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label" style={{ color: theme.primary }}>
          — My technical journey —
        </span>
        <h2 className="section-title text-gradient">Best Work &amp; Projects</h2>
        <div className="section-divider" />
        <p className={`text-base sm:text-lg max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Explore my latest projects, ranging from full-stack applications to AI-powered predictive tools.
        </p>
      </motion.div>

      {/* Filters — horizontally scrollable on mobile */}
      <div className="mb-8 sm:mb-12">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 justify-start sm:justify-center">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold rounded-full border transition-all duration-300 flex-shrink-0 ${
                filter === f
                  ? 'text-white border-transparent'
                  : isDark
                    ? 'border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200 bg-slate-900/50'
                    : 'border-slate-200 text-slate-500 hover:border-slate-400 hover:text-slate-700 bg-white shadow-sm'
              }`}
              style={filter === f ? { background: 'var(--color-gradient)' } : {}}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Cards grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
        layout
      >
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.div
              key={p.title}
              className="glass-card flex flex-col overflow-hidden group"
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
            >
              {/* Card header */}
              <div
                className="relative px-5 sm:px-7 pt-5 sm:pt-7 pb-10 sm:pb-12 overflow-hidden"
                style={{
                  background: isDark
                    ? `linear-gradient(135deg, ${theme.primary}12, transparent)`
                    : `linear-gradient(135deg, ${theme.primary}08, transparent)`,
                }}
              >
                {p.featured && (
                  <span
                    className="absolute top-4 right-4 text-[9px] sm:text-[10px] font-black tracking-tight uppercase px-2.5 py-1 rounded-full z-10"
                    style={{
                      background: `${theme.primary}20`,
                      color: theme.primary,
                      border: `1px solid ${theme.primary}35`,
                    }}
                  >
                    ★ Featured
                  </span>
                )}
                <p className="text-3xl sm:text-4xl mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300 w-max">
                  {p.emoji}
                </p>
                <h3 className={`text-base sm:text-xl font-bold mb-2 sm:mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {p.title}
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed truncate-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {p.desc}
                </p>
              </div>

              {/* Card footer */}
              <div
                className="px-5 sm:px-7 pb-4 sm:pb-6 pt-4 sm:pt-5 flex flex-wrap items-center justify-between gap-3 mt-auto"
                style={{
                  borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
                }}
              >
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className={`text-[9px] sm:text-[10px] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md font-bold uppercase ${
                        isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'
                      }`}
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {p.live !== '#' && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border flex items-center justify-center text-xs sm:text-sm transition-all hover:scale-110 active:scale-95"
                      style={{ borderColor: theme.primary, color: theme.primary }}
                      title="Live Preview"
                      aria-label={`View ${p.title} live`}
                    >
                      <i className="fas fa-external-link-alt" />
                    </a>
                  )}
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl border flex items-center justify-center text-xs sm:text-sm transition-all hover:scale-110 active:scale-95 ${
                      isDark
                        ? 'border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white bg-slate-900/40'
                        : 'border-slate-200 text-slate-400 hover:border-slate-400 hover:text-slate-900 bg-white'
                    }`}
                    title="Source Code"
                    aria-label={`View ${p.title} source code`}
                  >
                    <i className="fab fa-github" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* GitHub CTA */}
      <motion.div
        className="text-center mt-10 sm:mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <a
          href="https://github.com/DeepanshuAdhikari549?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="btn-secondary inline-flex gap-2.5 px-6 sm:px-8"
        >
          <i className="fab fa-github" />
          See More on GitHub
        </a>
      </motion.div>
    </section>
  );
}
