import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const tabs = ['Frontend', 'Backend', 'Tools'];

const skills = {
  Frontend: [
    { name: 'HTML5', pct: 95, color: '#e34f26', icon: '🌐' },
    { name: 'CSS3', pct: 90, color: '#264de4', icon: '🎨' },
    { name: 'JavaScript', pct: 85, color: '#f7df1e', icon: '⚡' },
    { name: 'React', pct: 88, color: '#61dafb', icon: '⚛️' },
    { name: 'Tailwind', pct: 82, color: '#38bdf8', icon: '💨' },
  ],
  Backend: [
    { name: 'Node.js', pct: 82, color: '#68a063', icon: '🟢' },
    { name: 'Express', pct: 80, color: '#aaaaaa', icon: '🚂' },
    { name: 'MongoDB', pct: 78, color: '#4db33d', icon: '🍃' },
    { name: 'REST APIs', pct: 83, color: '#06b6d4', icon: '🔗' },
  ],
  Tools: [
    { name: 'Git & GitHub', pct: 88, color: '#f05032', icon: '🐙' },
    { name: 'VS Code', pct: 93, color: '#007acc', icon: '⌨️' },
    { name: 'Postman', pct: 80, color: '#ff6c37', icon: '📮' },
    { name: 'Java', pct: 70, color: '#5382a1', icon: '☕' },
    { name: 'C', pct: 68, color: '#a8b9cc', icon: '🔧' },
  ],
};

const techLogos = [
  'HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js',
  'Express', 'MongoDB', 'GitHub', 'Java', 'C',
  'REST API', 'Postman',
];

export default function Skills() {
  const { isDark, theme } = useTheme();
  const [activeTab, setActiveTab] = useState('Frontend');

  return (
    <section id="skills" className="section-container">
      <motion.div
        className="text-center mb-10 sm:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label" style={{ color: theme.primary }}>
          — What I work with —
        </span>
        <h2 className="section-title text-gradient">Skills &amp; Technologies</h2>
        <div className="section-divider" />
        <p className={`text-base sm:text-lg max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Tools I use to build scalable, performant web experiences.
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="flex justify-center gap-2 mb-8 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${activeTab === tab
              ? 'text-white shadow-lg'
              : isDark
                ? 'text-slate-400 hover:text-slate-200 bg-slate-800/60'
                : 'text-slate-500 hover:text-slate-700 bg-slate-100'
              }`}
            style={activeTab === tab ? { background: 'var(--color-gradient)' } : {}}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skills list */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="glass-card p-5 sm:p-8"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.22 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {skills[activeTab].map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{skill.icon}</span>
                    <span className={`text-xs sm:text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                      {skill.name}
                    </span>
                  </div>
                  <span
                    className="text-xs font-bold tabular-nums"
                    style={{ color: skill.color, fontFamily: 'var(--font-mono)' }}
                  >
                    {skill.pct}%
                  </span>
                </div>
                <div className={`h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: skill.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: i * 0.06, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Tech tag cloud */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <p className={`text-[10px] font-bold uppercase tracking-widest mb-3 text-center ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
          All Technologies
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {techLogos.map((t) => (
            <span
              key={t}
              className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 hover:scale-105 cursor-default ${isDark
                ? 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-600'
                : 'bg-white border-slate-200 text-slate-600 shadow-sm hover:border-slate-300'
                }`}
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
