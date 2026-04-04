import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const certifications = [
  {
    emoji: '🏅',
    title: 'Introduction to Front-End Development',
    provider: 'Meta (Coursera)',
    year: '2025',
    desc: 'Comprehensive introduction to front-end web development fundamentals including HTML5, CSS3, and JavaScript. Covered responsive design principles and UI/UX patterns.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'UI/UX'],
    link: 'https://coursera.org/verify/C0IZCCDK4FSA',
    color: '#0d6efd',
  },
  {
    emoji: '☁️',
    title: 'Oracle Cloud Infrastructure Generative AI',
    provider: 'Oracle',
    year: '2025',
    desc: 'Advanced certification in Oracle Cloud Infrastructure focusing on Generative AI. Mastered implementing AI solutions, working with large language models and cloud deployment.',
    skills: ['Oracle Cloud', 'Generative AI', 'Cloud Computing', 'AI/ML', 'LLM'],
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=E8C5AFEC9112CBF9163DF72590C900D15A4E687052254DF9CF1404658503341C',
    color: '#dc3545',
  },
];

const platforms = [
  { label: 'Coursera', emoji: '📚' },
  { label: 'Oracle',   emoji: '☁️' },
  { label: 'Meta',     emoji: '🏅' },
];

export default function Certifications() {
  const { isDark, theme } = useTheme();

  return (
    <section id="certifications" className="section-container">
      <div className="flex flex-col items-center">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label" style={{ color: theme.primary }}>
            — Verified credentials —
          </span>
          <h2 className="section-title text-gradient">Certifications</h2>
          <div className="section-divider" />
          <p className={`text-base sm:text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Professional certifications validating my expertise and dedication to continuous learning.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 w-full max-w-5xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              className="glass-card flex flex-col p-5 sm:p-8 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ rotateX: -2, rotateY: 3, scale: 1.01 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-5 sm:mb-6 gap-3">
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0"
                  style={{
                    background: `${cert.color}18`,
                    border: `2px solid ${cert.color}40`,
                    boxShadow: `0 0 18px ${cert.color}28`,
                  }}
                >
                  {cert.emoji}
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 hover:scale-105 flex-shrink-0"
                  style={{
                    background: `${theme.primary}15`,
                    border: `1px solid ${theme.cardBorder}`,
                    color: theme.primary,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = theme.primary;
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `${theme.primary}15`;
                    e.currentTarget.style.color = theme.primary;
                  }}
                >
                  <i className="fas fa-external-link-alt text-[10px]" />
                  Verify
                </a>
              </div>

              {/* Content */}
              <h3
                className="text-base sm:text-xl font-bold mb-2 sm:mb-3 leading-tight"
                style={{ color: isDark ? '#f1f5f9' : '#0f172a' }}
              >
                {cert.title}
              </h3>

              <div className={`flex flex-wrap items-center gap-3 text-xs sm:text-sm mb-3 sm:mb-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                <span className="flex items-center gap-1">🏛️ {cert.provider}</span>
                <span className="flex items-center gap-1">📅 {cert.year}</span>
              </div>

              <p className={`text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 flex-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {cert.desc}
              </p>

              {/* Skills */}
              <div
                className="flex flex-wrap gap-1.5 sm:gap-2 pt-4 sm:pt-5"
                style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}` }}
              >
                {cert.skills.map((skill, si) => (
                  <span
                    key={si}
                    className="text-[10px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg"
                    style={{
                      background: `${cert.color}12`,
                      border: `1px solid ${cert.color}30`,
                      color: cert.color,
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning stats strip */}
        <motion.div
          className="mt-8 sm:mt-12 w-full max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div
            className={`rounded-2xl p-4 sm:p-6 border flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center sm:justify-between ${
              isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white/60 border-slate-200'
            }`}
          >
            <span className={`text-sm font-semibold text-center sm:text-left ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              🎯 Continuously learning &amp; growing — more certifications in progress
            </span>
            <div className="flex flex-wrap gap-2 justify-center">
              {platforms.map((p) => (
                <span
                  key={p.label}
                  className={`px-3 py-1.5 text-xs font-bold rounded-xl flex items-center gap-1.5 ${
                    isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  <span>{p.emoji}</span>
                  {p.label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
