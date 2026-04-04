import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const SECTIONS = [
  { id: 'home',          label: 'Home',           icon: '🏠', desc: 'Back to the top'          },
  { id: 'about',         label: 'About',           icon: '👋', desc: 'Get to know me'           },
  { id: 'skills',        label: 'Skills',          icon: '⚡', desc: 'My tech stack'             },
  { id: 'projects',      label: 'Projects',        icon: '🚀', desc: 'What I've built'           },
  { id: 'education',     label: 'Education',       icon: '🎓', desc: 'Academic background'       },
  { id: 'certifications',label: 'Certifications',  icon: '🏅', desc: 'Verified credentials'      },
  { id: 'contact',       label: 'Contact',         icon: '📬', desc: 'Let\'s work together'       },
];

const ACTIONS = [
  { label: 'Download Resume',  icon: '📄', action: () => window.open('/assets/Deepanshu_s_Resume.pdf', '_blank') },
  { label: 'GitHub Profile',   icon: '🐙', action: () => window.open('https://github.com/DeepanshuAdhikari549', '_blank') },
  { label: 'LinkedIn Profile', icon: '💼', action: () => window.open('https://www.linkedin.com/in/deepanshu-adhikari-1b768028b', '_blank') },
  { label: 'Send Email',       icon: '✉️', action: () => window.location.href = 'mailto:deepanshuadhikari549@gmail.com' },
];

export default function CommandPalette() {
  const { isDark, theme } = useTheme();
  const [open, setOpen]   = useState(false);
  const [query, setQuery] = useState('');
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef(null);

  const allItems = [
    ...SECTIONS.map((s) => ({ ...s, type: 'section' })),
    ...ACTIONS.map((a)  => ({ ...a, type: 'action'  })),
  ];

  const filtered = query.trim()
    ? allItems.filter((i) =>
        i.label.toLowerCase().includes(query.toLowerCase()) ||
        (i.desc || '').toLowerCase().includes(query.toLowerCase())
      )
    : allItems;

  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((p) => !p);
        setQuery('');
        setCursor(0);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setCursor((p) => Math.min(p + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setCursor((p) => Math.max(p - 1, 0));
    } else if (e.key === 'Enter' && filtered[cursor]) {
      execute(filtered[cursor]);
    }
  };

  const execute = (item) => {
    setOpen(false);
    setQuery('');
    if (item.type === 'section') {
      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
    } else if (item.action) {
      item.action();
    }
  };

  return (
    <>
      {/* Trigger hint — shown in navbar area or floating */}
      <button
        onClick={() => { setOpen(true); setQuery(''); setCursor(0); }}
        className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all duration-200 ${
          isDark
            ? 'border-slate-700 text-slate-500 bg-slate-800/50 hover:border-slate-600 hover:text-slate-300'
            : 'border-slate-200 text-slate-400 bg-white hover:border-slate-300 hover:text-slate-600'
        }`}
        title="Open command palette"
        aria-label="Open command palette"
      >
        <i className="fas fa-search text-[10px]" />
        <span>Search...</span>
        <kbd
          className={`ml-1 px-1.5 py-0.5 text-[9px] font-bold rounded border ${
            isDark ? 'border-slate-700 text-slate-600' : 'border-slate-200 text-slate-400'
          }`}
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[998] bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setOpen(false)}
            />

            {/* Palette */}
            <motion.div
              className={`fixed z-[999] left-1/2 top-1/4 w-full max-w-lg mx-auto rounded-2xl shadow-2xl border overflow-hidden ${
                isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'
              }`}
              style={{ transform: 'translateX(-50%)' }}
              initial={{ opacity: 0, scale: 0.94, y: -20 }}
              animate={{ opacity: 1, scale: 1,    y: 0   }}
              exit={{   opacity: 0, scale: 0.94,  y: -20 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Search input */}
              <div
                className={`flex items-center gap-3 px-4 py-4 border-b ${
                  isDark ? 'border-slate-800' : 'border-slate-100'
                }`}
              >
                <i className={`fas fa-search text-sm ${isDark ? 'text-slate-500' : 'text-slate-400'}`} />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setCursor(0); }}
                  onKeyDown={handleKeyDown}
                  placeholder="Search sections or actions..."
                  className={`flex-1 bg-transparent text-sm font-medium outline-none ${
                    isDark ? 'text-slate-100 placeholder-slate-600' : 'text-slate-800 placeholder-slate-400'
                  }`}
                  autoComplete="off"
                />
                <kbd
                  className={`px-2 py-1 text-[10px] rounded border cursor-pointer ${
                    isDark ? 'border-slate-700 text-slate-600' : 'border-slate-200 text-slate-400'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div className="max-h-80 overflow-y-auto py-2">
                {/* Section navigation group */}
                {filtered.some((i) => i.type === 'section') && (
                  <div className="mb-1">
                    <p className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
                      Navigate
                    </p>
                    {filtered.filter((i) => i.type === 'section').map((item, idx) => {
                      const globalIdx = filtered.indexOf(item);
                      return (
                        <button
                          key={item.id}
                          className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-all duration-100 ${
                            cursor === globalIdx
                              ? isDark ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-900'
                              : isDark ? 'text-slate-400 hover:bg-slate-800 hover:text-slate-200' : 'text-slate-600 hover:bg-slate-50'
                          }`}
                          onClick={() => execute(item)}
                          onMouseEnter={() => setCursor(globalIdx)}
                        >
                          <span className="text-base w-6 text-center">{item.icon}</span>
                          <div className="flex-1 text-left">
                            <span>{item.label}</span>
                            <span className={`ml-2 text-xs ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
                              {item.desc}
                            </span>
                          </div>
                          {cursor === globalIdx && (
                            <kbd className={`text-[10px] px-1.5 py-0.5 rounded border ${isDark ? 'border-slate-700 text-slate-600' : 'border-slate-200 text-slate-400'}`}>
                              ↵
                            </kbd>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Actions group */}
                {filtered.some((i) => i.type === 'action') && (
                  <div>
                    <p className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
                      Quick Actions
                    </p>
                    {filtered.filter((i) => i.type === 'action').map((item) => {
                      const globalIdx = filtered.indexOf(item);
                      return (
                        <button
                          key={item.label}
                          className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-all duration-100 ${
                            cursor === globalIdx
                              ? isDark ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-900'
                              : isDark ? 'text-slate-400 hover:bg-slate-800 hover:text-slate-200' : 'text-slate-600 hover:bg-slate-50'
                          }`}
                          onClick={() => execute(item)}
                          onMouseEnter={() => setCursor(globalIdx)}
                        >
                          <span className="text-base w-6 text-center">{item.icon}</span>
                          <span className="flex-1 text-left">{item.label}</span>
                          {cursor === globalIdx && (
                            <kbd className={`text-[10px] px-1.5 py-0.5 rounded border ${isDark ? 'border-slate-700 text-slate-600' : 'border-slate-200 text-slate-400'}`}>
                              ↵
                            </kbd>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}

                {filtered.length === 0 && (
                  <div className={`px-4 py-8 text-center text-sm ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
                    No results for "
                    <span style={{ color: theme.primary }}>{query}</span>"
                  </div>
                )}
              </div>

              {/* Footer hint */}
              <div
                className={`px-4 py-2.5 border-t flex items-center gap-4 text-[10px] font-mono ${
                  isDark ? 'border-slate-800 text-slate-700' : 'border-slate-100 text-slate-400'
                }`}
              >
                <span><kbd>↑↓</kbd> Navigate</span>
                <span><kbd>↵</kbd> Select</span>
                <span><kbd>Esc</kbd> Close</span>
                <span className="ml-auto" style={{ color: theme.primary }}>⌘K</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
