import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const tabs = ['Frontend', 'Backend', 'Tools'];

const skills = {
  Frontend: [
    { name: 'HTML5', color: '#e34f26', icon: '🌐' },
    { name: 'CSS3', color: '#264de4', icon: '🎨' },
    { name: 'JavaScript', color: '#f7df1e', icon: '⚡' },
    { name: 'React', color: '#61dafb', icon: '⚛️' },
    { name: 'Tailwind', color: '#38bdf8', icon: '💨' },
  ],
  Backend: [
    { name: 'Node.js', color: '#68a063', icon: '🟢' },
    { name: 'Express', color: '#aaaaaa', icon: '🚂' },
    { name: 'MongoDB', color: '#4db33d', icon: '🍃' },
    { name: 'REST APIs', color: '#06b6d4', icon: '🔗' },
  ],
  Tools: [
    { name: 'Git & GitHub', color: '#f05032', icon: '🐙' },
    { name: 'VS Code', color: '#007acc', icon: '⌨️' },
    { name: 'Postman', color: '#ff6c37', icon: '📮' },
    { name: 'Vercel', color: '#000000', icon: '▲' },
    { name: 'Render', color: '#46e3b7', icon: '🚀' },
    { name: 'Java', color: '#5382a1', icon: '☕' },
    { name: 'C', color: '#a8b9cc', icon: '🔧' },
  ],
};

const techLogos = [
  'HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js',
  'Express', 'MongoDB', 'GitHub', 'Java', 'C',
  'REST API', 'Postman', 'Vercel', 'Render',
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

      {/* Skills grid — pill cards, no percentages */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="glass-card p-5 sm:p-8"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.22 }}
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {skills[activeTab].map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ scale: 1.07 }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border font-semibold text-sm cursor-default transition-all duration-200 ${
                  isDark
                    ? 'bg-slate-800/70 border-slate-700 text-slate-200 hover:border-slate-500'
                    : 'bg-white border-slate-200 text-slate-800 shadow-sm hover:border-slate-300'
                }`}
                style={{ borderLeftColor: skill.color, borderLeftWidth: 3 }}
              >
                <span className="text-lg leading-none">{skill.icon}</span>
                <span>{skill.name}</span>
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
