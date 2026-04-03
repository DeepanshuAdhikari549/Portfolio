import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const tabs = ['Frontend', 'Backend', 'Tools'];

const skills = {
  Frontend: [
    { name: 'HTML5',      pct: 95, color: '#e34f26' },
    { name: 'CSS3',       pct: 90, color: '#264de4' },
    { name: 'JavaScript', pct: 85, color: '#f7df1e' },
    { name: 'React',      pct: 88, color: '#61dafb' },
    { name: 'Tailwind CSS', pct: 85, color: '#38bdf8' },
  ],
  Backend: [
    { name: 'Node.js',   pct: 82, color: '#68a063' },
    { name: 'Express',   pct: 80, color: '#ffffff'  },
    { name: 'MongoDB',   pct: 78, color: '#4db33d'  },
    { name: 'REST APIs', pct: 83, color: '#06b6d4'  },
  ],
  Tools: [
    { name: 'Git & GitHub', pct: 88, color: '#f05032' },
    { name: 'VS Code',      pct: 93, color: '#007acc' },
    { name: 'Postman',      pct: 80, color: '#ff6c37' },
    { name: 'Linux',        pct: 72, color: '#fcc624' },
    { name: 'Java',         pct: 70, color: '#5382a1' },
    { name: 'C',            pct: 68, color: '#a8b9cc' },
  ],
};

export default function Skills() {
  const { isDark, theme } = useTheme();
  const [activeTab, setActiveTab] = useState('Frontend');

  return (
    <section id="skills" className="section-container">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-mono font-bold uppercase tracking-widest mb-3" style={{ color: theme.primary }}>
          — What I work with —
        </p>
        <h2 className="section-title text-gradient">Skills & Technologies</h2>
        <div className="section-divider" />
        <p className={`text-lg max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Tools I use to build scalable, performant web experiences.
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="flex justify-center gap-2 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
              activeTab === tab
                ? 'text-white shadow-md'
                : isDark ? 'text-slate-400 hover:text-slate-200 bg-slate-800/60' : 'text-slate-500 hover:text-slate-700 bg-slate-100'
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
          className="glass-card p-8"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills[activeTab].map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                    {skill.name}
                  </span>
                  <span className="text-xs font-mono font-bold" style={{ color: skill.color }}>
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
                    transition={{ duration: 0.8, delay: i * 0.07, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Tech tag cloud */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <p className={`text-xs font-bold uppercase tracking-widest mb-4 text-center ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
          All Technologies
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Git', 'Java', 'C', 'Tailwind', 'REST API'].map((t) => (
            <span
              key={t}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all duration-200 hover:border-primary cursor-default ${
                isDark ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-white border-slate-200 text-slate-600 shadow-sm'
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
