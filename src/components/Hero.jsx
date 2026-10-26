import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TechMarquee from './TechMarquee';

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socials = [
    { icon: 'fa-brands fa-github', href: 'https://github.com/DeepanshuAdhikari549', label: 'GitHub' },
    { icon: 'fa-brands fa-linkedin-in', href: 'https://www.linkedin.com/in/deepanshuadhikari/', label: 'LinkedIn' },
    { icon: 'fa-solid fa-envelope', href: 'mailto:deepanshuadhikari549@gmail.com', label: 'Email' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <section
        id="home"
        className="min-h-[90vh] flex flex-col justify-between w-full relative pt-20 pb-8"
      >
        <div className="section-container flex-1 flex flex-col justify-center">
          <motion.div
            className="max-w-4xl mx-auto w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full text-xs font-serif border border-[#2a2a2a] bg-[#141414] text-neutral-300 mb-6">
              <span className="status-dot" />
              <span>Data Engineer at Cholamandalam Investment and Finance Company Limited</span>
            </div>

            {/* Name Heading in Times New Roman */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 leading-[1.15]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Deepanshu Adhikari
            </h1>

            {/* Sub-headline */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#c9a96e] italic mb-6">
              Data Engineer &amp; Java Backend Developer
            </h2>

            {/* Editorial Bio */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl mb-8 font-serif">
              Software Engineer with deep experience in Data Engineering, Customer Data Platforms (CDPs), ETL pipelines, Python, SQL, Java, and Spring Boot. Skilled in end-to-end data ingestion, complex transformations, relational modeling, containerized Docker environments, and high-performance REST APIs.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 mb-8">
              <div className="p-4 rounded-lg bg-[#141414] border border-[#262626]">
                <div className="text-xs text-[#c9a96e] font-serif uppercase tracking-wider mb-1">Current Role</div>
                <div className="text-sm font-semibold text-white">Data Engineer</div>
                <div className="text-xs text-neutral-400 mt-0.5">Cholamandalam Investment &amp; Finance</div>
              </div>

              <div className="p-4 rounded-lg bg-[#141414] border border-[#262626]">
                <div className="text-xs text-[#c9a96e] font-serif uppercase tracking-wider mb-1">Core Competencies</div>
                <div className="text-sm font-semibold text-white">CDP &amp; ETL Pipelines</div>
                <div className="text-xs text-neutral-400 mt-0.5">Python, SQL, PostgreSQL, ClickHouse</div>
              </div>

              <div className="p-4 rounded-lg bg-[#141414] border border-[#262626]">
                <div className="text-xs text-[#c9a96e] font-serif uppercase tracking-wider mb-1">Backend Architecture</div>
                <div className="text-sm font-semibold text-white">Java &amp; Spring Boot</div>
                <div className="text-xs text-neutral-400 mt-0.5">Spring Data JPA, REST APIs, Docker</div>
              </div>
            </div>

            {/* Actions & Socials */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="/assets/Deepanshu_s_Resume-.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <i className="fa-solid fa-file-pdf text-xs" />
                <span>Download Curriculum Vitae</span>
              </a>

              <a
                href="#experience"
                className="btn-secondary"
              >
                <span>View Work Experience</span>
              </a>

              <a
                href="#projects"
                className="btn-secondary"
              >
                <span>Browse Projects</span>
              </a>

              <div className="flex items-center gap-2.5 ml-auto pt-2 sm:pt-0">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-md flex items-center justify-center border border-[#2e2e2e] bg-[#141414] text-neutral-300 hover:text-white hover:border-[#666666] transition-colors"
                  >
                    <i className={`${s.icon} text-sm`} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Muted Clean Marquee */}
        <div className="w-full py-3.5 border-t border-b border-[#222222] bg-[#0f0f0f] mt-8">
          <TechMarquee />
        </div>
      </section>
    </>
  );
}
