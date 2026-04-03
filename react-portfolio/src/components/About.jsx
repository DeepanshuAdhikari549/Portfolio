import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const cards = [
  {
    emoji: '🚀',
    title: 'My Passion',
    text: "I'm deeply passionate about creating innovative web solutions that solve real-world problems. My journey started in college and I've been building ever since.",
  },
  {
    emoji: '🔭',
    title: 'Current Focus',
    text: 'Mastering the MERN stack while exploring WebSockets, cloud deployment strategies, and high-level performance optimization techniques.',
  },
  {
    emoji: '🎯',
    title: 'Future Goals',
    text: 'To become a top-tier software engineer who creates impactful products — challenging projects that push boundaries and continuously grow my full-stack expertise.',
  },
];

const facts = [
  { emoji: '📍', label: 'Location',  value: 'India'                        },
  { emoji: '🎓', label: 'Degree',    value: 'MCA (Pursuing)'               },
  { emoji: '📧', label: 'Email',     value: 'deepanshuadhikari549@gmail.com' },
  { emoji: '✅', label: 'Status',    value: 'Open to Work'                 },
];

export default function About() {
  const { isDark, theme } = useTheme();

  return (
    <section id="about" className="section-container">
      {/* Header */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-mono font-bold uppercase tracking-widest mb-3" style={{ color: theme.primary }}>
          — Get to know me —
        </p>
        <h2 className="section-title text-gradient">About Me</h2>
        <div className="section-divider" />
        <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          A curious developer on a mission to build things that matter.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {cards.map((c, i) => (
          <motion.div
            key={i}
            className="glass-card p-7 flex flex-col gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
              style={{
                background: `${theme.primary}14`,
                border: `1px solid ${theme.primary}28`,
              }}
            >
              {c.emoji}
            </div>
            <h3 className={`text-base font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
              {c.title}
            </h3>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {c.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Quick facts */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {facts.map((f, i) => (
          <div
            key={i}
            className={`rounded-xl p-4 border ${
              isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <p className={`text-xs font-bold uppercase tracking-widest mb-1.5 ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
              {f.label}
            </p>
            <p className={`text-sm font-semibold flex items-center gap-1.5 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
              <span>{f.emoji}</span>
              <span className="truncate">{f.value}</span>
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
