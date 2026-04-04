import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
  midnight: {
    id: 'midnight',
    name: 'Professional Dark',
    emoji: '🕴️',
    primary: '#6366f1',
    secondary: '#38bdf8',
    accent: '#818cf8',
    gradient: 'from-indigo-600 via-blue-600 to-sky-500',
    glow: 'rgba(99,102,241,0.3)',
    glowSecondary: 'rgba(56,189,248,0.3)',
    navActiveBg: 'rgba(99,102,241,0.1)',
    cardBorder: 'rgba(99,102,241,0.2)',
  },
  cyber: {
    id: 'cyber',
    name: 'Cyber Blue',
    emoji: '🔵',
    primary: '#06b6d4',
    secondary: '#6366f1',
    accent: '#22d3ee',
    gradient: 'from-cyan-500 to-indigo-600',
    glow: 'rgba(6,182,212,0.4)',
    glowSecondary: 'rgba(99,102,241,0.4)',
    navActiveBg: 'rgba(6,182,212,0.15)',
    cardBorder: 'rgba(6,182,212,0.3)',
  },
  aurora: {
    id: 'aurora',
    name: 'Aurora Purple',
    emoji: '🟣',
    primary: '#a855f7',
    secondary: '#ec4899',
    accent: '#c084fc',
    gradient: 'from-purple-500 to-pink-500',
    glow: 'rgba(168,85,247,0.4)',
    glowSecondary: 'rgba(236,72,153,0.4)',
    navActiveBg: 'rgba(168,85,247,0.15)',
    cardBorder: 'rgba(168,85,247,0.3)',
  },
  emerald: {
    id: 'emerald',
    name: 'Emerald Green',
    emoji: '🟢',
    primary: '#10b981',
    secondary: '#14b8a6',
    accent: '#34d399',
    gradient: 'from-emerald-500 to-teal-500',
    glow: 'rgba(16,185,129,0.4)',
    glowSecondary: 'rgba(20,184,166,0.4)',
    navActiveBg: 'rgba(16,185,129,0.15)',
    cardBorder: 'rgba(16,185,129,0.3)',
  },
  rose: {
    id: 'rose',
    name: 'Rose Pink',
    emoji: '🌸',
    primary: '#f43f5e',
    secondary: '#e879f9',
    accent: '#fb7185',
    gradient: 'from-rose-500 to-fuchsia-500',
    glow: 'rgba(244,63,94,0.4)',
    glowSecondary: 'rgba(232,121,249,0.4)',
    navActiveBg: 'rgba(244,63,94,0.15)',
    cardBorder: 'rgba(244,63,94,0.3)',
  }
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const [colorTheme, setColorTheme] = useState('emerald');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-dark');
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (saved !== null) setIsDark(JSON.parse(saved));
    if (savedTheme && themes[savedTheme]) setColorTheme(savedTheme);
    else setColorTheme('emerald');
  }, []);


  useEffect(() => {
    localStorage.setItem('portfolio-dark', JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem('portfolio-theme', colorTheme);
    const t = themes[colorTheme];
    document.documentElement.style.setProperty('--color-primary', t.primary);
    document.documentElement.style.setProperty('--color-secondary', t.secondary);
    document.documentElement.style.setProperty('--color-accent', t.accent);
    document.documentElement.style.setProperty('--color-glow', t.glow);
  }, [colorTheme]);

  const toggleDark = () => setIsDark((prev) => !prev);

  const theme = themes[colorTheme];

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark, toggleDark, colorTheme, setColorTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
