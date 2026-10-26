import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: 'Master of Computer Applications (MCA)',
    year: 'July 2024 – June 2026',
    inst: 'Graphic Era Hill University, Dehradun',
    desc: 'Advanced postgraduate computer applications curriculum focusing on enterprise software architecture, database management systems (DBMS), distributed systems, and software engineering principles.',
    tags: ['Database Management Systems', 'Enterprise Software Architecture', 'Data Structures & Algorithms', 'Advanced Java'],
    current: true,
  },
  {
    degree: 'Bachelor of Science in Computer Science (B.Sc CS)',
    year: 'Aug 2020 – Aug 2023',
    inst: 'SSJ University, Almora, Uttarakhand',
    desc: 'Undergraduate degree focused on computer science fundamentals, programming logic in Java, data structures, relational database management, and computer networks.',
    tags: ['Java Programming', 'Data Structures & Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks'],
    current: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="section-container">
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
            Academic Foundation
          </span>
          <h2 className="section-title">Education</h2>
          <div className="section-divider" />
          <p className="text-base max-w-2xl mx-auto text-neutral-400 font-serif">
            Formal computer science education grounding theoretical principles in systems, databases, and algorithms.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-6">
          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              className="glass-card p-6 sm:p-7"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 mb-3 border-b border-[#242424]">
                <div>
                  <h3 className="text-xl font-bold font-serif text-white">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-serif text-[#c9a96e] mt-0.5">
                    {edu.inst}
                  </div>
                </div>

                <div className="text-xs font-serif text-neutral-400">
                  {edu.year}
                </div>
              </div>

              <p className="text-sm leading-relaxed text-neutral-300 font-serif mb-4">
                {edu.desc}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#222222]">
                {edu.tags.map((t, ti) => (
                  <span
                    key={ti}
                    className="text-xs font-serif px-2.5 py-0.5 rounded bg-[#181818] text-neutral-300 border border-[#2a2a2a]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
