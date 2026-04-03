import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const educationData = [
  {
    emoji: '🎓',
    degree: 'MCA – Master of Computer Applications',
    year: '2024 – 2026 (Expected)',
    inst: 'Graphic Era Hill University, Dehradun',
    desc: 'Pursuing advanced studies in computer applications with focus on modern web technologies, software engineering principles, and emerging technologies.',
    tags: ['Web Technologies', 'Advanced Programming', 'Database Management'],
    current: true,
  },
  {
    emoji: '💻',
    degree: 'B.Sc Computer Science',
    year: '2020 – 2023',
    inst: 'SSJ University, Almora, Uttarakhand',
    desc: 'Completed undergraduate degree focused on programming fundamentals, data structures, algorithms, and database management. Strong foundation in software development.',
    tags: ['C', 'Java', 'Data Structures', 'DBMS', 'Networking'],
    current: false,
  },
  {
    emoji: '🏫',
    degree: 'High School & Intermediate (10th & 12th)',
    year: '2018 – 2020',
    inst: 'Vivekanand Inter College, Almora, Uttarakhand',
    desc: 'Grounding in Mathematics, Physics, and Chemistry – shaping an analytical and problem-solving mindset.',
    tags: ['Mathematics', 'Physics', 'Chemistry'],
    current: false,
  },
];

export default function Education() {
  const { isDark, theme } = useTheme();

  return (
    <section id="education" className="section-container relative z-10 w-full">
      <div
        className="absolute inset-0 -mx-[9999px]"
        style={{ background: isDark ? 'rgba(5,11,24,0.45)' : 'rgba(241,245,249,0.5)', zIndex: -1 }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono font-bold uppercase tracking-widest mb-3" style={{ color: theme.primary }}>
            — Academic journey —
          </p>
          <h2 className="section-title text-gradient">Education</h2>
          <div className="section-divider" />
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            The foundation behind my passion for building technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Timeline */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Vertical line */}
            <div className="relative">
              {educationData.map((edu, i) => (
                <motion.div
                  key={i}
                  className="relative flex gap-6 mb-8 last:mb-0"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  {/* Timeline dot */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-lg relative z-10"
                      style={{
                        background: edu.current
                          ? `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`
                          : isDark ? '#1e293b' : '#e2e8f0',
                        border: `2px solid ${edu.current ? theme.primary : isDark ? '#334155' : '#cbd5e1'}`,
                        boxShadow: edu.current ? `0 0 20px ${theme.glow}` : 'none',
                      }}
                    >
                      {edu.emoji}
                    </div>
                    {i < educationData.length - 1 && (
                      <div
                        className="w-0.5 flex-1 mt-2"
                        style={{ background: `linear-gradient(to bottom, ${theme.primary}60, transparent)`, minHeight: '40px' }}
                      />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className={`glass-card flex-1 p-6 group ${edu.current ? 'ring-1' : ''}`}
                    style={edu.current ? { '--tw-ring-color': theme.cardBorder } : {}}
                  >
                    {edu.current && (
                      <span
                        className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full mb-3"
                        style={{ background: `${theme.primary}20`, color: theme.primary }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: theme.primary }} />
                        Currently Pursuing
                      </span>
                    )}

                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h3 className={`text-lg font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                        {edu.degree}
                      </h3>
                      <span
                        className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full"
                        style={{ background: `${theme.primary}15`, color: theme.primary }}
                      >
                        📅 {edu.year}
                      </span>
                    </div>

                    <p className={`text-sm mb-3 flex items-center gap-1.5 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                      🏛️ {edu.inst}
                    </p>

                    <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {edu.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {edu.tags.map((t, ti) => (
                        <span
                          key={ti}
                          className={`text-xs px-2.5 py-1 rounded-lg font-mono font-medium ${
                            isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Vision sidebar */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="sticky top-28 glass-card p-8">
              <div className="flex items-center gap-3 mb-6 pb-6" style={{ borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}` }}>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: `linear-gradient(135deg, ${theme.primary}20, ${theme.secondary}20)`, border: `1px solid ${theme.cardBorder}` }}
                >
                  💡
                </div>
                <h3 className={`text-xl font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                  My Vision
                </h3>
              </div>

              <div className={`space-y-4 text-sm leading-7 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                <p>
                  Education is not just about degrees — it's about{' '}
                  <strong style={{ color: theme.primary }}>evolving daily</strong>,
                  challenging limits, and staying curious.
                </p>
                <p>
                  I believe in{' '}
                  <strong style={{ color: theme.primary }}>learning by doing</strong>{' '}
                  and turning every challenge into an opportunity for growth.
                </p>
                <p>
                  My vision extends beyond writing code — I want to create experiences that matter and contribute to a future where technology serves humanity.
                </p>
              </div>

              <div
                className="mt-8 pt-6 text-sm font-medium"
                style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`, color: isDark ? '#64748b' : '#94a3b8' }}
              >
                — Deepanshu Adhikari
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
