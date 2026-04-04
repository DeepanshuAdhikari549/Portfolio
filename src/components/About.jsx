import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function About() {
  const { isDark, theme } = useTheme();
  const [gh, setGh] = useState(null);

  // Fetch real GitHub data
  useEffect(() => {
    fetch('https://api.github.com/users/DeepanshuAdhikari549')
      .then((r) => r.json())
      .then((d) => setGh(d))
      .catch(() => {});
  }, []);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  });

  const cardBase = `glass-card p-5 sm:p-6 flex flex-col`;

  return (
    <section id="about" className="section-container">
      {/* Header */}
      <motion.div className="text-center mb-10 sm:mb-14" {...fadeUp()}>
        <span className="section-label" style={{ color: theme.primary }}>
          — Get to know me —
        </span>
        <h2 className="section-title text-gradient">About Me</h2>
        <div className="section-divider" />
        <p className={`text-base sm:text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          A curious developer on a mission to build things that matter.
        </p>
      </motion.div>

      {/* ── Bento Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-4 sm:gap-5">

        {/* [1] Large — What I Do (spans 2 cols on lg) */}
        <motion.div className={`${cardBase} lg:col-span-2 gap-4`} {...fadeUp(0.05)}>
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
              style={{ background: `${theme.primary}18`, border: `1px solid ${theme.primary}30` }}
            >
              💻
            </div>
            <h3 className={`text-base font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>What I Do</h3>
          </div>
          <p className={`text-sm leading-relaxed flex-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            I build full-stack web applications and AI-powered solutions using modern technologies like React, Node.js, and Machine Learning. Every project I ship is focused on solving a real-world problem with clean, maintainable code and a great user experience.
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {['React', 'Node.js', 'MongoDB', 'Express', 'Python', 'REST APIs'].map((t) => (
              <span
                key={t}
                className={`text-[10px] sm:text-xs px-2.5 py-1 rounded-lg font-semibold ${
                  isDark ? 'bg-slate-800 text-slate-300 border border-slate-700' : 'bg-slate-100 text-slate-600 border border-slate-200'
                }`}
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* [2] GitHub Live Stats */}
        <motion.div className={`${cardBase} gap-3`} {...fadeUp(0.1)}>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <span className="text-xl">🐙</span>
              <h3 className={`text-sm font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>GitHub Stats</h3>
            </div>
            <a
              href="https://github.com/DeepanshuAdhikari549"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold"
              style={{ color: theme.primary }}
            >
              @DeepanshuAdhikari549 ↗
            </a>
          </div>

          {gh ? (
            <div className="grid grid-cols-2 gap-2 flex-1">
              {[
                { label: 'Public Repos', value: gh.public_repos },
                { label: 'Followers',    value: gh.followers    },
                { label: 'Following',    value: gh.following    },
                { label: 'Gists',        value: gh.public_gists },
              ].map((s) => (
                <div
                  key={s.label}
                  className={`rounded-xl p-3 flex flex-col gap-1 ${
                    isDark ? 'bg-slate-800/60' : 'bg-slate-50'
                  }`}
                >
                  <span className="text-lg font-black" style={{ color: theme.primary }}>{s.value}</span>
                  <span className={`text-[10px] font-medium leading-tight ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className={`flex-1 rounded-xl flex items-center justify-center text-xs animate-pulse ${isDark ? 'bg-slate-800/50 text-slate-600' : 'bg-slate-50 text-slate-400'}`}>
              Loading stats...
            </div>
          )}
        </motion.div>

        {/* [3] Current Focus */}
        <motion.div className={`${cardBase} gap-3`} {...fadeUp(0.15)}>
          <div className="flex items-center gap-3 mb-1">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
              style={{ background: `${theme.primary}18`, border: `1px solid ${theme.primary}30` }}
            >
              ⚙️
            </div>
            <h3 className={`text-sm font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Current Focus</h3>
          </div>
          <p className={`text-xs sm:text-sm leading-relaxed flex-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Improving my MERN stack skills, working on scalable applications, and exploring AI integration, APIs, and deployment using Vercel and Render.
          </p>
          <div
            className="flex items-center gap-2 rounded-xl px-3 py-2 mt-auto"
            style={{ background: `${theme.primary}10`, border: `1px solid ${theme.primary}25` }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse flex-shrink-0" style={{ background: '#22c55e' }} />
            <span className="text-xs font-semibold" style={{ color: theme.primary }}>Open to Work</span>
          </div>
        </motion.div>

        {/* [4] Quick Facts */}
        <motion.div className={`${cardBase} gap-3`} {...fadeUp(0.2)}>
          <h3 className={`text-sm font-bold mb-1 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Quick Facts</h3>
          <div className="flex flex-col gap-2.5 flex-1">
            {[
              { emoji: '📍', label: 'Location', value: 'India' },
              { emoji: '🎓', label: 'Degree',   value: 'MCA (Pursuing)' },
              { emoji: '📧', label: 'Email',    value: 'deepanshuadhikari549@gmail.com' },
            ].map((f) => (
              <div
                key={f.label}
                className={`rounded-xl px-3 py-2.5 border ${
                  isDark ? 'bg-slate-800/50 border-slate-800' : 'bg-white border-slate-100'
                }`}
              >
                <p className={`text-[9px] font-bold uppercase tracking-widest mb-0.5 ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
                  {f.label}
                </p>
                <p className={`text-xs font-semibold flex items-center gap-1.5 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                  <span>{f.emoji}</span>
                  <span className="truncate">{f.value}</span>
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* [5] Career Goal (spans 2 cols on lg) */}
        <motion.div className={`${cardBase} lg:col-span-2 gap-3`} {...fadeUp(0.25)}>
          <div className="flex items-center gap-3 mb-1">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
              style={{ background: `${theme.primary}18`, border: `1px solid ${theme.primary}30` }}
            >
              🚀
            </div>
            <h3 className={`text-sm font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Career Goal</h3>
          </div>
          <p className={`text-xs sm:text-sm leading-relaxed flex-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            To become a skilled Full Stack Developer and build high-performance applications that solve real problems while continuously improving my development and problem-solving skills. My vision extends beyond writing code — I want to create experiences that matter.
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            {[
              { icon: '🌐', label: 'Full Stack' },
              { icon: '🤖', label: 'AI/ML'      },
              { icon: '☁️', label: 'Cloud'      },
              { icon: '🏆', label: 'Impact'     },
            ].map((g) => (
              <span
                key={g.label}
                className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${
                  isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'
                }`}
              >
                <span>{g.icon}</span>
                {g.label}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
