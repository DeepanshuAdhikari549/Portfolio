import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SECTIONS = [
  { id: 'home',           label: 'Home',           desc: 'Back to the top' },
  { id: 'about',          label: 'About',          desc: 'Background & core focus' },
  { id: 'experience',     label: 'Experience',     desc: 'Cholamandalam & MountBlue' },
  { id: 'skills',         label: 'Skills',         desc: 'Data engineering & backend stack' },
  { id: 'projects',       label: 'Projects',       desc: 'Customer360, MotionVille, Blog' },
  { id: 'education',      label: 'Education',      desc: 'MCA & B.Sc Computer Science' },
  { id: 'certifications', label: 'Certifications', desc: 'Oracle Cloud GenAI & Meta' },
  { id: 'contact',        label: 'Contact',        desc: 'Direct email & inquiries' },
];

const ACTIONS = [
  { label: 'Download Curriculum Vitae (PDF)', action: () => window.open('/assets/Deepanshu_s_Resume-.pdf', '_blank') },
  { label: 'View GitHub Profile',             action: () => window.open('https://github.com/DeepanshuAdhikari549', '_blank') },
  { label: 'View LinkedIn Profile',           action: () => window.open('https://www.linkedin.com/in/deepanshuadhikari/', '_blank') },
  { label: 'Send Direct Email',              action: () => window.location.href = 'mailto:deepanshuadhikari549@gmail.com' },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef(null);

  const allItems = [
    ...SECTIONS.map((s) => ({ ...s, type: 'Section' })),
    ...ACTIONS.map((a) => ({ ...a, type: 'Action' })),
  ];

  const filtered = query.trim()
    ? allItems.filter(
        (i) =>
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
    if (item.type === 'Section') {
      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
    } else if (item.action) {
      item.action();
    }
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[998] bg-black/75 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="fixed z-[999] left-1/2 top-1/4 w-full max-w-lg mx-auto rounded-lg shadow-2xl border border-[#333333] bg-[#141414] overflow-hidden font-serif"
              style={{ transform: 'translateX(-50%)' }}
              initial={{ opacity: 0, scale: 0.96, y: -15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -15 }}
              transition={{ duration: 0.15 }}
            >
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#242424]">
                <i className="fa-solid fa-magnifying-glass text-neutral-400 text-sm" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setCursor(0);
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Navigate or search portfolio..."
                  className="flex-1 bg-transparent border-none text-white text-sm outline-none placeholder-neutral-500 font-serif"
                />
                <kbd className="px-1.5 py-0.5 text-[10px] rounded bg-[#222222] text-neutral-400 font-serif">
                  ESC
                </kbd>
              </div>

              <div className="max-h-72 overflow-y-auto p-2 space-y-1">
                {filtered.length === 0 ? (
                  <div className="py-6 text-center text-xs text-neutral-500 font-serif">
                    No results found
                  </div>
                ) : (
                  filtered.map((item, idx) => (
                    <div
                      key={item.label}
                      onClick={() => execute(item)}
                      onMouseEnter={() => setCursor(idx)}
                      className={`flex items-center justify-between p-2.5 rounded cursor-pointer transition-colors ${
                        cursor === idx
                          ? 'bg-[#222222] text-white'
                          : 'text-neutral-300 hover:bg-[#1a1a1a]'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-medium">{item.label}</div>
                        {item.desc && (
                          <div className="text-xs text-neutral-500">{item.desc}</div>
                        )}
                      </div>
                      <span className="text-[10px] text-neutral-500 uppercase tracking-wider">
                        {item.type}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
