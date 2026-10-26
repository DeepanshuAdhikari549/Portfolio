import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Data Engineer',
    company: 'Cholamandalam Investment and Finance Company Limited',
    type: 'Full-time',
    location: 'Chennai, India',
    duration: 'Oct 2026 – Present',
    status: 'Current Role',
    isCurrent: true,
    description:
      'Spearheading data engineering workflows, Customer Data Platform (CDP) concepts, and reliable ETL data pipelines for enterprise financial services.',
    points: [
      'Work with Customer Data Platform (CDP) concepts and ETL pipelines using Python and SQL for data integration and processing.',
      'Use Docker and Docker Compose to configure and manage containerized development environments.',
      'Support data ingestion, transformation, and database operations in data engineering workflows.',
      'Perform data quality validation and schema checks to maintain integrity across relational and analytical data stores.',
    ],
    tech: ['Python', 'SQL', 'Customer Data Platforms (CDP)', 'ETL Pipelines', 'Docker', 'Docker Compose', 'Data Ingestion', 'PostgreSQL', 'Data Quality Checks'],
  },
  {
    role: 'Software Engineer Trainee',
    company: 'MountBlue Technologies',
    type: 'Full-time / Trainee',
    location: 'Bengaluru, India',
    duration: 'Jul 2026 – Oct 2026',
    status: 'Completed',
    isCurrent: false,
    description:
      'Rigorous industry engineering training and application development focused on backend engineering with Java, Spring Boot, and enterprise SQL databases.',
    points: [
      'Completed three months of intensive training in Java, Spring Boot, PostgreSQL, MySQL, Linux, Git/GitHub, and software engineering practices.',
      'Developed and tested REST APIs using Java and Spring Boot, integrating backend functionality with relational databases.',
      'Built a Blog Application using Spring Boot, PostgreSQL, and Spring Security, implementing CRUD operations for posts, comments, and tags, authentication, authorization, pagination, search, filtering, and sorting.',
      'Practiced Git/GitHub version control, branching, and collaborative development workflows.',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'PostgreSQL', 'MySQL', 'REST APIs', 'Linux', 'Git & GitHub'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">
            Industry Experience
          </span>
          <h2 className="section-title">Work Experience</h2>
          <div className="section-divider" />
          <p className="text-base text-neutral-400 max-w-2xl mx-auto font-serif">
            Professional track record engineering production data pipelines, Customer Data Platforms, and Java Spring Boot services.
          </p>
        </motion.div>

        {/* Experience List */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="glass-card p-6 sm:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 mb-4 border-b border-[#242424]">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                      {exp.role}
                    </h3>
                    <span
                      className={`text-xs font-serif px-2.5 py-0.5 rounded border ${
                        exp.isCurrent
                          ? 'border-[#3f3f3f] bg-[#1a1a1a] text-[#c9a96e]'
                          : 'border-[#2e2e2e] bg-[#161616] text-neutral-400'
                      }`}
                    >
                      {exp.status}
                    </span>
                  </div>
                  <div className="text-sm font-serif text-[#c9a96e] mt-1 font-semibold">
                    {exp.company}
                  </div>
                </div>

                <div className="text-xs sm:text-right font-serif text-neutral-400">
                  <div className="text-neutral-300 font-medium">{exp.duration}</div>
                  <div className="mt-0.5">{exp.location}</div>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm leading-relaxed text-neutral-300 font-serif mb-5">
                {exp.description}
              </p>

              {/* Points */}
              <div className="space-y-2 mb-6">
                {exp.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 font-serif leading-relaxed">
                    <span className="text-[#c9a96e] select-none">▸</span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#222222]">
                {exp.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs px-2.5 py-0.5 rounded bg-[#181818] text-neutral-300 border border-[#2a2a2a] font-serif"
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
