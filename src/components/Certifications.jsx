import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: 'Oracle Cloud Infrastructure Generative AI Professional',
    provider: 'Oracle',
    year: '2025',
    desc: 'Advanced enterprise credential validating architecture of Generative AI, cloud infrastructure deployments, large language model integration, and high-performance cloud data operations.',
    skills: ['Oracle Cloud Infrastructure', 'Generative AI', 'Cloud Architecture', 'Data Processing'],
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=E8C5AFEC9112CBF9163DF72590C900D15A4E687052254DF9CF1404658503341C',
  },
  {
    title: 'Introduction to Front-End Development',
    provider: 'Meta (Coursera)',
    year: '2025',
    desc: 'Foundational engineering principles covering responsive interfaces, modern JavaScript standards, component hierarchies, and API integration.',
    skills: ['HTML5 & CSS3', 'JavaScript', 'Responsive Interfaces', 'UI Systems'],
    link: 'https://coursera.org/verify/C0IZCCDK4FSA',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-container">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">
            Industry Verification
          </span>
          <h2 className="section-title">Certifications</h2>
          <div className="section-divider" />
          <p className="text-base max-w-2xl mx-auto text-neutral-400 font-serif">
            Professional certifications validating cloud infrastructure and modern software engineering capabilities.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              className="glass-card p-6 sm:p-7 flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-serif uppercase tracking-wider text-[#c9a96e]">
                    {cert.provider} • {cert.year}
                  </span>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-serif text-neutral-400 hover:text-white transition-colors"
                  >
                    Verify ↗
                  </a>
                </div>

                <h3 className="text-lg font-bold font-serif text-white mb-2 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 font-serif leading-relaxed mb-4">
                  {cert.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#222222]">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((s, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-serif px-2 py-0.5 rounded bg-[#181818] text-neutral-300 border border-[#2a2a2a]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
