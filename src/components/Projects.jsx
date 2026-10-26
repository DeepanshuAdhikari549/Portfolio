import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'Customer360 – Data Engineering Pipeline',
    category: 'Data Engineering',
    tags: ['Data Engineering', 'Python', 'SQL', 'ClickHouse', 'PostgreSQL', 'Docker'],
    badge: 'Project #1 • Data Engineering',
    desc: 'Production-grade Customer Data Platform (CDP) ETL pipeline ingesting, cleansing, and harmonizing customer, order, payment, and consent data from raw CSV and JSONL files.',
    bulletPoints: [
      'Built a data ingestion pipeline to load customer, order, payment, identity, support ticket, campaign, and consent data from CSV and JSONL files.',
      'Implemented SQL transformations to create cleaned datasets and performed rigorous data quality checks for missing values, duplicate records, and data relationships.',
      'Configured PostgreSQL and ClickHouse using Docker Compose to support the local data engineering and analytical storage environment.',
    ],
    tech: ['Python', 'SQL', 'PostgreSQL', 'ClickHouse', 'Docker', 'Docker Compose'],
    code: 'https://github.com/DeepanshuAdhikari549/Customer360_Data-Engineering-',
  },
  {
    title: 'MotionVille – Video-Sharing Platform',
    category: 'Java & Spring',
    tags: ['Java & Spring', 'Java', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'REST APIs'],
    badge: 'Project #2 • Java Backend',
    desc: 'Enterprise video-sharing backend architecture engineered to manage high-volume channel relationships, subscriptions, and user metadata.',
    bulletPoints: [
      'Developed backend REST APIs for user management, channel management, and subscriptions in a video-sharing platform.',
      'Used Spring Boot, Spring Data JPA, and PostgreSQL to manage application data and entity relationships.',
      'Implemented subscription and unsubscription operations, subscriber retrieval, and subscription-status checks.',
      'Applied database constraints to maintain data integrity and prevent duplicate subscriptions.',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'React.js', 'REST APIs'],
    code: 'https://github.com/DeepanshuAdhikari549/MotionVille',
  },
  {
    title: 'Enterprise Blog Application & Management System',
    category: 'Java & Spring',
    tags: ['Java & Spring', 'Java', 'Spring Boot', 'Spring Security', 'PostgreSQL'],
    badge: 'Backend Architecture',
    desc: 'Enterprise publishing engine built with Java, Spring Boot, PostgreSQL, and Spring Security featuring role-based authorization and full-text search.',
    bulletPoints: [
      'Built a comprehensive blog application using Spring Boot, PostgreSQL, and Spring Security.',
      'Implemented full CRUD operations for posts, comments, and tags with pagination, search, filtering, and sorting.',
      'Configured secure authentication, authorization, and endpoint protection.',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'REST APIs'],
    code: 'https://github.com/DeepanshuAdhikari549/blog-admin-dashboard',
  },
  {
    title: 'Medical Cost Predictor',
    category: 'Python & ML',
    tags: ['Python & ML', 'Python', 'Machine Learning', 'Pandas', 'Scikit-learn'],
    badge: 'Machine Learning',
    desc: 'Supervised predictive model analyzing demographic and clinical attributes to forecast healthcare insurance costs.',
    bulletPoints: [
      'Trained regression models on multi-feature medical datasets with extensive exploratory data analysis.',
      'Executed data preprocessing, feature normalization, and correlation matrix analysis using Pandas and NumPy.',
      'Deployed inference engine for automated cost prediction based on risk factors.',
    ],
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Streamlit'],
    code: 'https://github.com/DeepanshuAdhikari549/Medical-Cost-Predictor',
  },
  {
    title: 'FitBae Clothing – E-Commerce Platform',
    category: 'Web Applications',
    tags: ['Web Applications', 'React.js', 'REST APIs', 'E-Commerce'],
    badge: 'Web Application',
    desc: 'Apparel e-commerce platform featuring catalog browsing, cart operations, dynamic filtering, and responsive interface workflows.',
    bulletPoints: [
      'Modular React component hierarchy with responsive layout across all device viewports.',
      'Integrated product catalog filtering, cart state synchronization, and checkout interactions.',
    ],
    tech: ['React.js', 'REST APIs', 'JavaScript', 'CSS3'],
    code: 'https://github.com/DeepanshuAdhikari549/E-commerce-website',
  },
  {
    title: 'QuickSaaS – Modern SaaS Application',
    category: 'Web Applications',
    tags: ['Web Applications', 'React.js', 'Tailwind CSS', 'Vite'],
    badge: 'Web Application',
    desc: 'Modern software-as-a-service application interface featuring structured layouts, component modularity, and clean dashboard interactions.',
    bulletPoints: [
      'Engineered responsive user interface layouts with clean state handling and utility-driven styling.',
      'Structured modular dashboard components and user management screens.',
    ],
    tech: ['React.js', 'Tailwind CSS', 'Vite', 'JavaScript'],
    code: 'https://github.com/DeepanshuAdhikari549/Quick-SaaS-App',
  },
];

const FILTERS = ['All', 'Data Engineering', 'Java & Spring', 'Python & ML', 'Web Applications'];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const visible =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.tags.includes(filter) || p.category === filter);

  return (
    <section id="projects" className="section-container">
      <motion.div
        className="text-center mb-10 sm:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="section-label">
          Featured Engineering Work
        </span>
        <h2 className="section-title">Projects</h2>
        <div className="section-divider" />
        <p className="text-base max-w-xl mx-auto text-neutral-400 font-serif">
          Production-tested Customer Data Platform pipelines, enterprise Java backend architectures, and machine learning models.
        </p>
      </motion.div>

      {/* Filters */}
      <div className="mb-8">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 justify-start sm:justify-center">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 text-xs sm:text-sm font-serif rounded transition-colors border ${
                filter === f
                  ? 'bg-[#f5f5f5] text-[#0c0c0c] border-[#f5f5f5] font-semibold'
                  : 'bg-[#141414] text-neutral-400 border-[#262626] hover:text-white hover:border-[#444444]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of exactly 6 projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
        <AnimatePresence mode="popLayout">
          {visible.map((proj) => (
            <motion.div
              key={proj.title}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="glass-card p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                {/* Header Badge & Title */}
                <div className="mb-3">
                  <span className="text-[11px] font-serif uppercase tracking-wider text-[#c9a96e]">
                    {proj.badge}
                  </span>
                  <h3 className="text-xl font-bold font-serif text-white mt-1">
                    {proj.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-neutral-300 font-serif leading-relaxed mb-4">
                  {proj.desc}
                </p>

                {/* Bullets */}
                <div className="space-y-2 mb-5 p-3.5 rounded bg-[#101010] border border-[#222222]">
                  {proj.bulletPoints.map((bp, bpIdx) => (
                    <div key={bpIdx} className="flex items-start gap-2 text-xs text-neutral-400 font-serif leading-relaxed">
                      <span className="text-[#c9a96e] select-none">▸</span>
                      <span>{bp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & GitHub Link Only (No Live Demo) */}
              <div className="pt-3 border-t border-[#222222]">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-serif px-2.5 py-0.5 rounded bg-[#181818] text-neutral-300 border border-[#262626]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.code}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded text-xs font-serif font-semibold bg-[#1a1a1a] border border-[#333333] text-neutral-200 hover:text-white hover:bg-[#252525] hover:border-[#555555] transition-colors"
                >
                  <i className="fa-brands fa-github text-sm" />
                  <span>View Repository on GitHub ↗</span>
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
