import React from 'react';
import { useTheme } from '../context/ThemeContext';

const TECHS = [
  { name: 'React',       icon: '⚛️' },
  { name: 'Node.js',     icon: '🟢' },
  { name: 'MongoDB',     icon: '🍃' },
  { name: 'JavaScript',  icon: '⚡' },
  { name: 'Express',     icon: '🚂' },
  { name: 'Python',      icon: '🐍' },
  { name: 'Tailwind',    icon: '💨' },
  { name: 'Git',         icon: '🐙' },
  { name: 'REST API',    icon: '🔗' },
  { name: 'HTML5',       icon: '🌐' },
  { name: 'CSS3',        icon: '🎨' },
  { name: 'Java',        icon: '☕' },
  { name: 'VS Code',     icon: '⌨️' },
  { name: 'Postman',     icon: '📮' },
  { name: 'Vercel',      icon: '▲' },
  { name: 'Render',      icon: '🌊' },
];

// Duplicate for seamless loop
const ITEMS = [...TECHS, ...TECHS];

export default function TechMarquee() {
  const { isDark, theme } = useTheme();

  return (
    <div className="w-full overflow-hidden py-4 sm:py-6 relative">
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none"
        style={{
          background: isDark
            ? 'linear-gradient(to right, #040d1a, transparent)'
            : 'linear-gradient(to right, #f8faff, transparent)',
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none"
        style={{
          background: isDark
            ? 'linear-gradient(to left, #040d1a, transparent)'
            : 'linear-gradient(to left, #f8faff, transparent)',
        }}
      />

      {/* Track */}
      <div
        className="flex gap-3 sm:gap-4"
        style={{
          width: 'max-content',
          animation: 'tech-marquee 32s linear infinite',
          willChange: 'transform',
        }}
      >
        {ITEMS.map((tech, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl border text-xs sm:text-sm font-semibold flex-shrink-0 transition-all duration-200 hover:scale-105 cursor-default ${
              isDark
                ? 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-600 hover:text-slate-200'
                : 'bg-white border-slate-200 text-slate-600 shadow-sm hover:border-slate-300 hover:text-slate-800'
            }`}
          >
            <span className="text-sm sm:text-base">{tech.icon}</span>
            <span style={{ fontFamily: 'var(--font-mono)' }}>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
