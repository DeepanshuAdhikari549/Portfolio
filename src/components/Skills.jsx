import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = ['Data Engineering', 'Backend & Core', 'Databases & Platforms'];

const skillsData = {
  'Data Engineering': [
    { name: 'ETL Pipelines', category: 'Data Architecture', desc: 'Batch and stream data pipelines with multi-stage transformations and error handling.' },
    { name: 'Customer Data Platforms (CDP)', category: 'Domain Architecture', desc: 'Customer identity stitching, behavioral event ingestion, and consent tracking.' },
    { name: 'Python', category: 'Language', desc: 'Data ingestion scripts, transformation logic, automation, and analytical workflows.' },
    { name: 'SQL & Query Optimization', category: 'Language', desc: 'Complex transformations, aggregation, window functions, CTEs, and schema indexing.' },
    { name: 'Data Ingestion', category: 'Pipeline', desc: 'Reliable ingestion of CSV, JSONL, webhook streams, and external REST endpoints.' },
    { name: 'Data Quality Checks', category: 'Data Governance', desc: 'Automated deduplication, schema validation, null checks, and referential integrity.' },
    { name: 'Docker & Compose', category: 'Containerization', desc: 'Configuring and orchestrating containerized development and database environments.' },
    { name: 'ClickHouse OLAP', category: 'Columnar Analytics', desc: 'High-speed columnar analytics and querying over large event and transaction logs.' },
  ],
  'Backend & Core': [
    { name: 'Java', category: 'Core Language', desc: 'Object-oriented programming, clean design patterns, and enterprise backend logic.' },
    { name: 'Spring Boot', category: 'Framework', desc: 'Production-ready microservices, dependency injection, and RESTful architectures.' },
    { name: 'Spring Data JPA', category: 'ORM & Persistence', desc: 'Entity mappings, transactional boundaries, and repository query methods.' },
    { name: 'Spring Security', category: 'Security & Auth', desc: 'Role-based access control, JWT/session authentication, and endpoint filters.' },
    { name: 'REST API Design', category: 'Architecture', desc: 'Resource modeling, status handling, pagination, filtering, and structured payloads.' },
    { name: 'OOP & System Design', category: 'Methodology', desc: 'SOLID principles, modular decoupling, encapsulation, and maintainable structure.' },
    { name: 'DBMS Principles', category: 'Database Systems', desc: 'ACID guarantees, indexing strategies, normalization, and relational modeling.' },
    { name: 'Data Structures & Algorithms', category: 'Computer Science', desc: 'Efficient time/space complexity, sorting, hashing, trees, and algorithmic logic.' },
  ],
  'Databases & Platforms': [
    { name: 'PostgreSQL', category: 'Relational Database', desc: 'Primary relational data modeling, transactional constraints, and schema migrations.' },
    { name: 'MySQL', category: 'Relational Database', desc: 'Relational storage, table indexing, query execution, and database administration.' },
    { name: 'MongoDB', category: 'Document Database', desc: 'Document schemas, JSON storage, and flexible NoSQL data collections.' },
    { name: 'Linux', category: 'Operating System', desc: 'Command line utilities, shell navigation, environment variables, and process tools.' },
    { name: 'Git & GitHub', category: 'Version Control', desc: 'Branching strategies, code reviews, collaborative pull requests, and commit hygiene.' },
    { name: 'Postman', category: 'API Testing', desc: 'Endpoint validation, automated test suites, environment variables, and payload testing.' },
    { name: 'Docker Compose', category: 'DevOps', desc: 'Multi-service configuration uniting ingestion engines and database services.' },
    { name: 'React.js', category: 'Frontend Interface', desc: 'Component architectures, state management, and user interface workflows.' },
  ],
};

const allTags = [
  'Python', 'SQL', 'Java', 'Spring Boot', 'ClickHouse', 'PostgreSQL',
  'Docker', 'Docker Compose', 'ETL Pipelines', 'CDP', 'Spring Data JPA',
  'Spring Security', 'REST APIs', 'MySQL', 'MongoDB', 'Linux',
  'Git', 'GitHub', 'React.js', 'Data Quality', 'OOP', 'DBMS'
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('Data Engineering');

  return (
    <section id="skills" className="section-container">
      <motion.div
        className="text-center mb-10 sm:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="section-label">
          Core Toolset
        </span>
        <h2 className="section-title">Technical Skills</h2>
        <div className="section-divider" />
        <p className="text-base max-w-xl mx-auto text-neutral-400 font-serif">
          Specialized stack centered on Data Engineering pipelines, enterprise Java backend architectures, and production databases.
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="flex justify-center gap-2 mb-8 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 sm:px-5 py-2 rounded text-xs sm:text-sm font-serif transition-colors border ${
              activeTab === tab
                ? 'bg-[#f5f5f5] text-[#0c0c0c] border-[#f5f5f5] font-semibold'
                : 'bg-[#141414] text-neutral-400 border-[#262626] hover:text-white hover:border-[#444444]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          {skillsData[activeTab].map((skill) => (
            <div
              key={skill.name}
              className="glass-card p-4 sm:p-5 flex flex-col justify-between"
            >
              <div>
                <div className="text-[11px] font-serif uppercase tracking-wider text-[#c9a96e] mb-1.5">
                  {skill.category}
                </div>
                <h4 className="text-base font-bold font-serif text-white mb-2">
                  {skill.name}
                </h4>
                <p className="text-xs text-neutral-400 font-serif leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Summary Tag Cloud */}
      <div className="mt-10 pt-8 border-t border-[#222222]">
        <div className="text-center text-xs font-serif uppercase tracking-widest text-neutral-500 mb-3.5">
          All Technologies &amp; Methodologies
        </div>
        <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
          {allTags.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded text-xs font-serif bg-[#141414] text-neutral-300 border border-[#262626]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
