import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
const NAV_LINKS = [
  { label: 'Home',            href: '#home'          },
  { label: 'About',           href: '#about'         },
  { label: 'Skills',          href: '#skills'        },
  { label: 'Projects',        href: '#projects'      },
  { label: 'Education',       href: '#education'     },
  { label: 'Certifications',  href: '#certifications'},
  { label: 'Contact',         href: '#contact'       },
];

const COLOR_THEMES = [
  { key: 'midnight', label: 'Midnight ✨',   color: '#6366f1' },
  { key: 'cyber',    label: 'Cyber Blue',    color: '#06b6d4' },
  { key: 'aurora',   label: 'Aurora Purple', color: '#8b5cf6' },
  { key: 'emerald',  label: 'Emerald',       color: '#10b981' },
  { key: 'rose',     label: 'Rose Pink',     color: '#ec4899' },
];

export default function Navbar() {
  const { isDark, toggleDark, colorTheme, setColorTheme, theme } = useTheme();
  const [active, setActive]       = useState('home');
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);

  // Track active section on scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 140) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const id = href.slice(1);
    const element = document.getElementById(id);
    const offset = 80; // Offset for the fixed header
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      setMenuOpen(false); // Close menu first
      
      // Delay slightly to let the menu close animation start or complete
      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        setActive(id);
      }, 50);
    }
  };

  // Close theme menu when clicking outside
  useEffect(() => {
    const close = () => setThemeOpen(false);
    if (themeOpen) document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [themeOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'nav-glass shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-4">

          {/* Logo */}
          <a
            href="#home"
            className={`flex items-center gap-2 font-bold text-base sm:text-lg flex-shrink-0 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}
          >
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-black flex-shrink-0"
              style={{ background: 'var(--color-gradient)' }}
            >
              D
            </span>
            <span className="hidden xs:inline">Deepanshu</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-2.5 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? isDark ? 'text-white' : 'text-slate-900'
                      : isDark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-800'
                  }`}
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg -z-10"
                      style={{ background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-1.5 sm:gap-2">

            {/* Theme picker (Desktop only) */}
            <div className="hidden lg:block relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setThemeOpen((p) => !p)}
                className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-200 ${
                  isDark
                    ? 'border-slate-700 text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-700/50'
                    : 'border-slate-200 text-slate-500 hover:text-slate-800 bg-white hover:bg-slate-50'
                }`}
                aria-label="Change color theme"
                title="Change color theme"
              >
                <i className="fa-solid fa-palette text-xs" aria-hidden="true" />
              </button>

              <AnimatePresence>
                {themeOpen && (
                  <motion.div
                    className={`absolute right-0 top-11 w-44 rounded-2xl shadow-2xl border overflow-hidden p-2 flex flex-col gap-1 ${
                      isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'
                    }`}
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                  >
                    {COLOR_THEMES.map((t) => (
                      <button
                        key={t.key}
                        onClick={() => { setColorTheme(t.key); setThemeOpen(false); }}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-150 ${
                          colorTheme === t.key
                            ? isDark ? 'bg-slate-700 text-white' : 'bg-slate-100 text-slate-900'
                            : isDark ? 'text-slate-400 hover:bg-slate-800 hover:text-slate-200' : 'text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <span className="w-3.5 h-3.5 rounded-full flex-shrink-0 ring-2 ring-offset-1" style={{ background: t.color, ringOffsetColor: isDark ? '#0f172a' : '#fff' }} />
                        <span className="text-xs">{t.label}</span>
                        {colorTheme === t.key && (
                          <span className="ml-auto text-xs" style={{ color: t.color }}>✓</span>
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dark/Light toggle (Desktop only) */}
            <button
              onClick={toggleDark}
              className={`hidden lg:flex w-9 h-9 rounded-lg items-center justify-center border transition-all duration-200 ${
                isDark
                  ? 'border-slate-700 text-yellow-400 bg-slate-800/50 hover:bg-slate-700/50'
                  : 'border-slate-200 text-slate-500 bg-white hover:bg-slate-50 hover:text-slate-800'
              }`}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <i className={`fa-solid ${isDark ? 'fa-sun' : 'fa-moon'} text-xs`} aria-hidden="true" />
            </button>

            {/* Mobile hamburger */}
            <button
              className={`lg:hidden w-9 h-9 flex items-center justify-center rounded-lg border transition-all duration-200 ${
                isDark ? 'border-slate-700 text-slate-400 bg-slate-800/50' : 'border-slate-200 text-slate-500 bg-white'
              }`}
              onClick={() => setMenuOpen((p) => !p)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-ellipsis-vertical'} text-xs`} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              className={`lg:hidden border-t overflow-hidden ${
                isDark ? 'bg-slate-950/98 border-slate-800' : 'bg-white/98 border-slate-200'
              } backdrop-blur-xl`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col py-3 px-4 gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`py-3 px-4 rounded-xl text-sm font-medium transition-colors duration-150 flex items-center gap-3 ${
                      active === link.href.slice(1)
                        ? isDark
                          ? 'bg-white/10 text-white shadow-sm ring-1 ring-white/10'
                          : 'bg-slate-900 text-white shadow-md'
                        : isDark
                          ? 'text-slate-400 hover:text-white hover:bg-white/5'
                          : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                    onClick={(e) => scrollToSection(e, link.href)}
                  >
                    {active === link.href.slice(1) && (
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: theme.primary }}
                      />
                    )}
                    {link.label}
                  </a>
                ))}

                {/* Mobile appearance settings */}
                <div className={`mt-3 pt-4 border-t ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                  <p className={`px-4 mb-3 text-[10px] uppercase tracking-[0.15em] font-black ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                    Appearance
                  </p>
                  
                  <div className="flex flex-col gap-2">
                      {/* Theme selector in mobile menu */}
                      <div className="grid grid-cols-5 gap-2 px-2">
                        {COLOR_THEMES.map((t) => (
                          <button
                            key={t.key}
                            onClick={() => setColorTheme(t.key)}
                            className={`aspect-square rounded-xl flex items-center justify-center border-2 transition-all ${
                              colorTheme === t.key
                                ? 'border-[var(--color-primary)] scale-110 shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.3)] bg-white/5'
                                : isDark 
                                  ? 'border-slate-800/50 bg-slate-900/50 hover:border-slate-700' 
                                  : 'border-slate-200 bg-white hover:border-slate-300'
                            }`}
                            title={t.label}
                          >
                            <span className="w-5 h-5 rounded-full shadow-inner" style={{ background: t.color }} />
                          </button>
                        ))}
                      </div>

                      {/* Dark mode toggle in mobile menu */}
                      <button
                        onClick={toggleDark}
                        className={`mx-2 mt-2 flex items-center justify-between px-4 py-3 rounded-xl border transition-all ${
                          isDark 
                            ? 'bg-slate-900/50 border-slate-800 text-slate-200 hover:bg-slate-800/50' 
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm'
                        }`}
                      >
                        <span className="text-sm font-semibold">Dark Mode</span>
                        <div className={`w-11 h-6 rounded-full relative transition-colors ${isDark ? 'bg-indigo-600' : 'bg-slate-200'}`}>
                          <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all ${isDark ? 'left-6' : 'left-1'}`} />
                        </div>
                      </button>
                  </div>
                </div>

                {/* Mobile quick contact */}
                <div className="mt-2">
                  <a
                    href="mailto:deepanshuadhikari549@gmail.com"
                    className="w-full btn-primary justify-center text-xs py-3 rounded-xl shadow-lg"
                    onClick={() => setMenuOpen(false)}
                  >
                    <i className="fas fa-envelope text-[10px]" />
                    Send Email
                  </a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu-overlay lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
