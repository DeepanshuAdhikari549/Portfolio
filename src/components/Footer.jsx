import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { isDark, theme } = useTheme();
  const year = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const socials = [
    { icon: 'fab fa-github',      link: 'https://github.com/DeepanshuAdhikari549',                   label: 'GitHub'    },
    { icon: 'fab fa-linkedin-in', link: 'https://www.linkedin.com/in/deepanshu-adhikari-1b768028b',  label: 'LinkedIn'  },
    { icon: 'fab fa-instagram',   link: 'https://www.instagram.com/deepanshu_549',                   label: 'Instagram' },
  ];

  const quickLinks = [
    { label: 'Home',           href: '#home'          },
    { label: 'About',          href: '#about'         },
    { label: 'Skills',         href: '#skills'        },
    { label: 'Projects',       href: '#projects'      },
    { label: 'Education',      href: '#education'     },
    { label: 'Certifications', href: '#certifications'},
    { label: 'Contact',        href: '#contact'       },
  ];

  const contactItems = [
    { icon: '📧', label: 'deepanshuadhikari549@gmail.com', href: 'mailto:deepanshuadhikari549@gmail.com' },
    { icon: '📍', label: 'Dehradun, Uttarakhand, India',    href: '#'                                     },
    { icon: '💼', label: 'Open to Work',                    href: '#contact'                              },
  ];

  return (
    <>
      <footer
        className={`relative z-10 border-t ${
          isDark ? 'border-slate-800/60 bg-slate-950/90' : 'border-slate-200 bg-white/90'
        } backdrop-blur-xl`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-16">

          {/* Top grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">

            {/* Brand column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <a href="#home" className="flex items-center gap-3 mb-4 group w-max">
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-bold text-white text-base sm:text-lg flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                    boxShadow: `0 0 18px ${theme.glow}`,
                  }}
                >
                  D
                </div>
                <span
                  className={`font-bold text-lg sm:text-xl ${isDark ? 'text-white' : 'text-slate-900'}`}
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Deepanshu Adhikari
                </span>
              </a>

              <p className={`text-xs sm:text-sm leading-relaxed mb-5 max-w-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                Full Stack Developer crafting high-performance web applications with passion &amp; precision.
              </p>

              <div className="flex gap-2.5">
                {socials.map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    aria-label={s.label}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                      isDark
                        ? 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                        : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900 shadow-sm'
                    }`}
                    whileHover={{ y: -3, scale: 1.1, borderColor: theme.primary }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className={`${s.icon} text-xs sm:text-sm`} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className={`font-bold text-xs uppercase tracking-widest mb-4 sm:mb-5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Quick Links
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className={`text-xs sm:text-sm flex items-center gap-2 transition-all duration-200 group ${
                        isDark ? 'text-slate-500 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      <span
                        className="w-1 h-1 rounded-full transition-all duration-300 group-hover:w-3 flex-shrink-0"
                        style={{ background: theme.primary }}
                      />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className={`font-bold text-xs uppercase tracking-widest mb-4 sm:mb-5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Get in Touch
              </h4>
              <div className="space-y-2.5 sm:space-y-3">
                {contactItems.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className={`flex items-start gap-2.5 text-xs sm:text-sm group transition-colors duration-200 ${
                      isDark ? 'text-slate-500 hover:text-slate-300' : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    <span className="text-sm flex-shrink-0 mt-0.5">{item.icon}</span>
                    <span className="group-hover:underline underline-offset-2 break-all" style={{ textDecorationColor: theme.primary }}>
                      {item.label}
                    </span>
                  </a>
                ))}
              </div>

              {/* Quick hire CTA */}
              <a
                href="#contact"
                className="mt-5 sm:mt-6 btn-primary text-xs sm:text-sm px-4 py-2.5 inline-flex w-full sm:w-auto justify-center"
              >
                <i className="fas fa-paper-plane text-[10px]" />
                Hire Me
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6 sm:pt-8"
            style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.07)'}` }}
          >
            <p
              className={`text-[11px] sm:text-sm text-center sm:text-left ${isDark ? 'text-slate-600' : 'text-slate-400'}`}
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              © {year} Deepanshu Adhikari. All rights reserved.
            </p>
            <p className={`text-[10px] sm:text-xs ${isDark ? 'text-slate-700' : 'text-slate-400'}`}>
              Built with ❤️ using React &amp; Framer Motion
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll-to-top FAB — only visible after scrolling */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.a
            href="#home"
            className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white z-50 shadow-2xl"
            style={{
              background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
              boxShadow: `0 0 22px ${theme.glow}`,
            }}
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1,   y: 0  }}
            exit={{   opacity: 0, scale: 0.6,  y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
            title="Back to top"
            aria-label="Scroll to top"
          >
            <i className="fas fa-arrow-up text-xs sm:text-sm" />
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
}
