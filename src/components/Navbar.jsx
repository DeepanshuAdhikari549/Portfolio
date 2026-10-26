import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Home',           href: '#home' },
  { label: 'About',          href: '#about' },
  { label: 'Experience',     href: '#experience' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Education',      href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    const offset = 75;

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      setMenuOpen(false);

      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
        setActive(id);
      }, 30);
    }
  };

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled ? 'nav-glass' : 'bg-transparent'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="font-serif text-lg font-bold text-white tracking-tight flex items-center gap-2"
        >
          <span>Deepanshu Adhikari</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5 text-sm font-serif" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors py-1 ${
                  isActive
                    ? 'text-[#c9a96e] font-semibold border-b border-[#c9a96e]'
                    : 'text-neutral-400 hover:text-white'
                }`}
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Resume button */}
        <div className="flex items-center gap-3">
          <a
            href="/assets/Deepanshu_s_Resume-.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded border border-[#333333] text-xs font-serif text-neutral-300 hover:text-white hover:border-[#666666] bg-[#141414] transition-colors"
          >
            <span>Resume</span>
            <i className="fa-solid fa-arrow-up-right-from-square text-[9px] text-[#c9a96e]" />
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-8 h-8 flex items-center justify-center rounded border border-[#333333] text-neutral-300 bg-[#141414]"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-xs`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="md:hidden border-t border-[#222222] bg-[#0c0c0c] overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col py-4 px-6 gap-2 font-serif text-sm">
              {NAV_LINKS.map((link) => {
                const isActive = active === link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`py-2 transition-colors ${
                      isActive ? 'text-[#c9a96e] font-semibold' : 'text-neutral-300'
                    }`}
                    onClick={(e) => scrollToSection(e, link.href)}
                  >
                    {link.label}
                  </a>
                );
              })}

              <div className="pt-3 mt-2 border-t border-[#222222]">
                <a
                  href="/assets/Deepanshu_s_Resume-.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full text-center text-xs justify-center py-2"
                >
                  Download Curriculum Vitae
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
