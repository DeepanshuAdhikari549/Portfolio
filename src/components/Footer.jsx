import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { isDark, theme } = useTheme();
  const year = new Date().getFullYear();

  const socials = [
    { icon: 'fab fa-github', link: 'https://github.com/DeepanshuAdhikari549', label: 'GitHub' },
    { icon: 'fab fa-linkedin-in', link: 'https://www.linkedin.com/in/deepanshu-adhikari-1b768028b', label: 'LinkedIn' },
    { icon: 'fab fa-instagram', link: 'https://www.instagram.com/deepanshu_549', label: 'Instagram' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      className={`relative z-10 border-t ${isDark ? 'border-slate-800/60 bg-slate-950/80' : 'border-slate-200 bg-white/80'} backdrop-blur-xl`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3 mb-4 group w-max">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-lg"
                style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`, boxShadow: `0 0 20px ${theme.glow}` }}
              >
                D
              </div>
              <span className={`font-bold text-xl font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Deepanshu Adhikari
              </span>
            </a>
            <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
              Full Stack Developer crafting high-performance web applications with passion &amp; precision.
            </p>
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    isDark
                      ? 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                      : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900 shadow-sm'
                  }`}
                  whileHover={{ y: -3, scale: 1.1, borderColor: theme.primary }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={`${s.icon} text-sm`} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className={`font-bold text-sm uppercase tracking-widest mb-5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className={`text-sm flex items-center gap-2 transition-all duration-200 group ${
                      isDark ? 'text-slate-500 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    <span
                      className="w-1 h-1 rounded-full transition-all duration-300"
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

          {/* Contact info */}
          <div>
            <h4 className={`font-bold text-sm uppercase tracking-widest mb-5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Get in Touch
            </h4>
            <div className="space-y-3">
              {[
                { icon: '📧', label: 'deepanshuadhikari549@gmail.com', href: '#contact' },
                { icon: '📍', label: 'India', href: '#' },
                { icon: '💼', label: 'Open to Work', href: '#contact' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className={`flex items-center gap-3 text-sm group transition-colors duration-200 ${
                    isDark ? 'text-slate-500 hover:text-slate-300' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <span className="text-base">{item.icon}</span>
                  <span className="group-hover:underline underline-offset-2" style={{ textDecorationColor: theme.primary }}>
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8"
          style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.07)'}` }}
        >
          <p className={`text-sm font-mono ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
            © {year} Deepanshu Adhikari. All rights reserved.
          </p>
          <p className={`text-xs ${isDark ? 'text-slate-700' : 'text-slate-400'}`}>
            Built with ❤️ using React &amp; Framer Motion
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.a
        href="#home"
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center text-white z-50 shadow-xl"
        style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`, boxShadow: `0 0 20px ${theme.glow}` }}
        whileHover={{ scale: 1.15, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        title="Back to top"
      >
        ↑
      </motion.a>
    </footer>
  );
}
