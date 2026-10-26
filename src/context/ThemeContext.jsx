import React, { createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const theme = {
  id: 'executive',
  name: 'Executive Dark',
  primary: '#e5e5e5',         // Crisp clean platinum / off-white
  secondary: '#d4af37',       // Warm subtle champagne gold accent
  accent: '#a3a3a3',          // Neutral slate
  glow: 'rgba(212, 175, 55, 0.12)',
  cardBorder: '#262626',
  cardBg: '#141414',
  bgDark: '#0c0c0c',
};

export const ThemeProvider = ({ children }) => {
  const isDark = true;
  const colorTheme = 'executive';

  useEffect(() => {
    localStorage.setItem('portfolio-dark', 'true');
    localStorage.setItem('portfolio-theme', 'executive');
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-theme', 'dark');

    document.documentElement.style.setProperty('--color-primary', theme.primary);
    document.documentElement.style.setProperty('--color-secondary', theme.secondary);
    document.documentElement.style.setProperty('--color-accent', theme.accent);
    document.documentElement.style.setProperty('--color-glow', theme.glow);
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark: () => {}, toggleDark: () => {}, colorTheme, setColorTheme: () => {}, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
