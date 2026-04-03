import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const projects = [
  {
    tags: ['Next.js', 'Full Stack', 'AI'],
    emoji: '🏥',
    title: 'MediCompare',
    desc: 'A comprehensive healthcare platform for comparing medical costs and finding the best treatment options.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Gemini AI'],
    live: 'https://github.com/DeepanshuAdhikari549/MediCompare',
    code: 'https://github.com/DeepanshuAdhikari549/MediCompare',
    featured: true,
  },
  {
    tags: ['Python', 'ML'],
    emoji: '🩺',
    title: 'Medical Cost Predictor',
    desc: 'Machine learning application that predicts medical insurance costs based on user demographics and health data.',
    tech: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas'],
    live: 'https://github.com/DeepanshuAdhikari549/Medical-Cost-Predictor',
    code: 'https://github.com/DeepanshuAdhikari549/Medical-Cost-Predictor',
    featured: true,
  },
  {
    tags: ['React', 'Full Stack'],
    emoji: '🛒',
    title: 'FitBae E-commerce',
    desc: 'Premium e-commerce website with a focus on fitness products, featuring a modern UI and seamless checkout.',
    tech: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
    live: 'https://github.com/DeepanshuAdhikari549/E-commerce-website',
    code: 'https://github.com/DeepanshuAdhikari549/E-commerce-website',
    featured: true,
  },
  {
    tags: ['AI', 'React'],
    emoji: '🤖',
    title: 'SkillProof-AI',
    desc: 'AI-powered platform for verifying technical skills through automated assessments and feedback.',
    tech: ['React', 'OpenAI API', 'Node.js', 'PostgreSQL'],
    live: 'https://github.com/DeepanshuAdhikari549/SkillProof-AI',
    code: 'https://github.com/DeepanshuAdhikari549/SkillProof-AI',
  },
  {
    tags: ['React', 'Dev'],
    emoji: '📊',
    title: 'Blog Admin Dashboard',
    desc: 'A powerful administrative interface for managing blog content, users, and analytics in real-time.',
    tech: ['React', 'Chart.js', 'Firebase'],
    live: 'https://github.com/DeepanshuAdhikari549/blog-admin-dashboard',
    code: 'https://github.com/DeepanshuAdhikari549/blog-admin-dashboard',
  },
  {
    tags: ['ML', 'Python'],
    emoji: '🍿',
    title: 'Movie Recommendation',
    desc: 'Personalized movie suggestion engine using collaborative filtering and content-based algorithms.',
    tech: ['Python', 'Flask', 'TMDB API'],
    live: 'https://github.com/DeepanshuAdhikari549/Movie-Recommendation',
    code: 'https://github.com/DeepanshuAdhikari549/Movie-Recommendation',
  },
];

const FILTERS = ['All', 'Full Stack', 'AI', 'Python', 'ML', 'React'];

export default function Projects() {
  const { isDark, theme } = useTheme();
  const [filter, setFilter] = useState('All');

  const visible = filter === 'All' ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="section-container">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-mono font-bold uppercase tracking-widest mb-3" style={{ color: theme.primary }}>
          — What I've built —
        </p>
        <h2 className="section-title text-gradient">Featured Projects</h2>
        <div className="section-divider" />
        <p className={`text-lg max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          A selection of my best work demonstrating technical depth and problem-solving.
        </p>
      </motion.div>

      {/* Filters */}
      <div className="flex justify-center gap-2 mb-10 flex-wrap">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 text-sm font-semibold rounded-full border transition-all duration-200 ${
              filter === f
                ? 'text-white border-transparent shadow'
                : isDark
                ? 'border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200'
                : 'border-slate-200 text-slate-500 hover:border-slate-400 hover:text-slate-700 bg-white'
            }`}
            style={filter === f ? { background: 'var(--color-gradient)' } : {}}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Cards grid */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" layout>
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.div
              key={p.title}
              className="glass-card flex flex-col overflow-hidden group"
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
            >
              {/* Card header */}
              <div
                className="relative px-6 pt-6 pb-10"
                style={{
                  background: isDark
                    ? `linear-gradient(135deg, ${theme.primary}10, transparent)`
                    : `linear-gradient(135deg, ${theme.primary}08, transparent)`,
                }}
              >
                {p.featured && (
                  <span
                    className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ background: `${theme.primary}20`, color: theme.primary, border: `1px solid ${theme.primary}35` }}
                  >
                    ⭐ Featured
                  </span>
                )}
                <p className="text-3xl mb-3">{p.emoji}</p>
                <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                  {p.title}
                </h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {p.desc}
                </p>
              </div>

              {/* Card footer */}
              <div
                className="px-6 pb-5 pt-4 flex flex-wrap items-center justify-between gap-4 mt-auto"
                style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}` }}
              >
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-xs px-2 py-1 rounded-md font-mono font-medium ${
                        isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {p.live !== '#' && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-lg border flex items-center justify-center text-xs transition-all hover:scale-105"
                      style={{ borderColor: theme.primary, color: theme.primary }}
                      title="Live Demo"
                    >
                      <i className="fas fa-external-link-alt" />
                    </a>
                  )}
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-8 h-8 rounded-lg border flex items-center justify-center text-xs transition-all hover:scale-105 ${
                      isDark ? 'border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white' : 'border-slate-200 text-slate-500 hover:border-slate-400 hover:text-slate-800'
                    }`}
                    title="Source Code"
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
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <a
          href="https://github.com/DeepanshuAdhikari549"
          target="_blank"
          rel="noreferrer"
          className="btn-secondary inline-flex"
        >
          <i className="fab fa-github" />
          View all projects on GitHub
        </a>
      </motion.div>
    </section>
  );
}
