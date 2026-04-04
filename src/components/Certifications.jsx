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

export default function Certifications() {
  const { isDark, theme } = useTheme();

  return (
    <section id="certifications" className="section-container relative z-10 w-full">
      <div className="flex flex-col items-center">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono font-bold uppercase tracking-widest mb-3" style={{ color: theme.primary }}>
            — Verified credentials —
          </p>
          <h2 className="section-title text-gradient">Certifications</h2>
          <div className="section-divider" />
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Professional certifications validating my expertise and dedication to continuous learning.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              className="glass-card flex flex-col p-8 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ rotateX: -3, rotateY: 4, scale: 1.02 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                  style={{
                    background: `${cert.color}18`,
                    border: `2px solid ${cert.color}40`,
                    boxShadow: `0 0 20px ${cert.color}30`,
                  }}
                >
                  {cert.emoji}
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
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
                  Verify ↗
                </a>
              </div>

              {/* Content */}
              <h3
                className="text-xl font-bold mb-3 leading-tight group-hover:text-gradient transition-all"
                style={{ color: isDark ? '#f1f5f9' : '#0f172a' }}
              >
                {cert.title}
              </h3>

              <div className={`flex items-center gap-4 text-sm mb-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                <span>🏛️ {cert.provider}</span>
                <span>📅 {cert.year}</span>
              </div>

              <p className={`text-sm leading-relaxed mb-6 flex-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {cert.desc}
              </p>

              {/* Tags */}
              <div
                className="flex flex-wrap gap-2 pt-5"
                style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}` }}
              >
                {cert.skills.map((skill, si) => (
                  <span
                    key={si}
                    className="text-xs font-mono font-semibold px-2.5 py-1 rounded-lg"
                    style={{
                      background: `${cert.color}12`,
                      border: `1px solid ${cert.color}30`,
                      color: cert.color,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Badge row */}
        <motion.div
          className={`mt-12 w-full max-w-5xl mx-auto rounded-2xl p-6 border flex flex-wrap items-center gap-6 justify-center ${
            isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white/60 border-slate-200'
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <span className={`text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            🎯 Continuously learning & growing
          </span>
          <div className="flex flex-wrap gap-2">
            {['Coursera', 'Oracle', 'Meta'].map((p) => (
              <span
                key={p}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg ${isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'}`}
              >
                {p}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
