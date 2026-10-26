import React, { useState, useEffect } from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const socials = [
    { icon: 'fa-brands fa-github',      link: 'https://github.com/DeepanshuAdhikari549',          label: 'GitHub' },
    { icon: 'fa-brands fa-linkedin-in', link: 'https://www.linkedin.com/in/deepanshuadhikari/',   label: 'LinkedIn' },
    { icon: 'fa-solid fa-envelope',     link: 'mailto:deepanshuadhikari549@gmail.com',            label: 'Email' },
    { icon: 'fa-solid fa-file-pdf',     link: '/assets/Deepanshu_s_Resume-.pdf',                  label: 'Resume' },
  ];

  const quickLinks = [
    { label: 'Home',           href: '#home' },
    { label: 'About',          href: '#about' },
    { label: 'Experience',     href: '#experience' },
    { label: 'Skills',         href: '#skills' },
    { label: 'Projects',       href: '#projects' },
    { label: 'Education',      href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact',        href: '#contact' },
  ];

  return (
    <>
      <footer className="relative z-10 border-t border-[#222222] bg-[#0c0c0c] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-8 border-b border-[#222222]">
            <div>
              <a href="#home" className="text-xl font-bold font-serif text-white tracking-tight">
                Deepanshu Adhikari
              </a>
              <p className="text-xs text-neutral-400 font-serif mt-1">
                Data Engineer &amp; Java Developer • Cholamandalam Investment and Finance
              </p>
            </div>

            <div className="flex gap-2">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  aria-label={s.label}
                  className="w-8 h-8 rounded flex items-center justify-center border border-[#2a2a2a] bg-[#141414] text-neutral-400 hover:text-white hover:border-[#555555] transition-colors"
                >
                  <i className={`${s.icon} text-xs`} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 py-6 text-xs font-serif text-neutral-400">
            {quickLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pt-4 border-t border-[#1a1a1a] text-xs font-serif text-neutral-500">
            <div>© {year} Deepanshu Adhikari. All rights reserved.</div>
            <div>Dehradun, Uttarakhand, India</div>
          </div>
        </div>
      </footer>

      {/* Scroll-to-top */}
      {showScrollTop && (
        <a
          href="#home"
          className="fixed bottom-6 right-6 w-9 h-9 rounded flex items-center justify-center text-[#0c0c0c] bg-[#f5f5f5] z-50 shadow-md hover:bg-white transition-colors"
          title="Back to top"
          aria-label="Scroll to top"
        >
          <i className="fa-solid fa-arrow-up text-xs" />
        </a>
      )}
    </>
  );
}
