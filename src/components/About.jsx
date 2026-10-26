import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const cardBase = 'glass-card p-6 sm:p-7 flex flex-col justify-between';

  return (
    <section id="about" className="section-container">
      {/* Header */}
      <motion.div
        className="text-center mb-12 sm:mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="section-label">
          Professional Background
        </span>
        <h2 className="section-title">About Me</h2>
        <div className="section-divider" />
        <p className="text-base max-w-2xl mx-auto text-neutral-400 font-serif">
          Data Engineer &amp; Java Developer dedicated to robust pipeline architecture, data integrity, and high-performance backend systems.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        {/* Core Narrative (Spans 2 cols) */}
        <div className={`${cardBase} lg:col-span-2 space-y-4`}>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#c9a96e] text-sm">◆</span>
              <h3 className="text-lg font-serif font-bold text-white">Engineering Focus &amp; Philosophy</h3>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-neutral-300 font-serif mb-4">
              I am a Software Engineer currently working as a <strong className="text-white">Data Engineer at Cholamandalam Investment and Finance Company Limited</strong>. My day-to-day focus centers around Customer Data Platform (CDP) concepts, data ingestion architectures, and production ETL pipelines using Python and SQL.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-neutral-300 font-serif">
              With a strong background in <strong className="text-white">Java, Spring Boot, Spring Data JPA, and PostgreSQL</strong>, I bridge the critical gap between reliable data engineering pipelines and scalable backend microservices. I emphasize clean architecture, deterministic schema validations, and reproducible containerized development with Docker.
            </p>
          </div>

          <div className="pt-4 border-t border-[#222222]">
            <div className="text-xs font-serif uppercase tracking-wider text-[#c9a96e] mb-2.5">
              Core Technical Competencies
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                'Customer Data Platforms (CDP)',
                'ETL Pipelines',
                'Java',
                'Spring Boot',
                'ClickHouse OLAP',
                'PostgreSQL',
                'Python & SQL',
                'Docker & Compose',
                'Data Quality Validation',
                'RESTful APIs',
              ].map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded bg-[#1c1c1c] text-neutral-300 border border-[#2c2c2c] font-serif"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Profile & Credentials (1 col) - No Vanity Stats */}
        <div className={`${cardBase} space-y-5`}>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#c9a96e] text-sm">◆</span>
              <h3 className="text-base font-serif font-bold text-white">Profile Overview</h3>
            </div>

            <div className="space-y-3.5 text-xs font-serif">
              <div className="pb-3 border-b border-[#222222]">
                <div className="text-neutral-500 uppercase tracking-wider text-[11px] mb-0.5">Current Role</div>
                <div className="text-neutral-200 font-medium">Data Engineer</div>
                <div className="text-neutral-400">Cholamandalam Investment &amp; Finance</div>
              </div>

              <div className="pb-3 border-b border-[#222222]">
                <div className="text-neutral-500 uppercase tracking-wider text-[11px] mb-0.5">Education</div>
                <div className="text-neutral-200 font-medium">MCA (Master of Computer Applications)</div>
                <div className="text-neutral-400">Graphic Era Hill University (2024–2026)</div>
              </div>

              <div className="pb-3 border-b border-[#222222]">
                <div className="text-neutral-500 uppercase tracking-wider text-[11px] mb-0.5">Location Base</div>
                <div className="text-neutral-200 font-medium">Dehradun &amp; Chennai, India</div>
              </div>

              <div>
                <div className="text-neutral-500 uppercase tracking-wider text-[11px] mb-0.5">Availability</div>
                <div className="text-[#c9a96e] font-medium">Open to Technical Opportunities</div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-[#222222] flex items-center justify-between">
            <a
              href="https://github.com/DeepanshuAdhikari549"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-serif text-neutral-400 hover:text-white transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/deepanshuadhikari/"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-serif text-neutral-400 hover:text-white transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="/assets/Deepanshu_s_Resume-.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-serif text-[#c9a96e] hover:underline"
            >
              Resume PDF ↗
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
