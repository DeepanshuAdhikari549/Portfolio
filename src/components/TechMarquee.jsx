import React from 'react';

const TECHS = [
  { name: 'Python' },
  { name: 'SQL' },
  { name: 'Java' },
  { name: 'Spring Boot' },
  { name: 'ETL Pipelines' },
  { name: 'Customer Data Platforms (CDP)' },
  { name: 'ClickHouse' },
  { name: 'PostgreSQL' },
  { name: 'Docker' },
  { name: 'Docker Compose' },
  { name: 'REST APIs' },
  { name: 'Spring Data JPA' },
  { name: 'Spring Security' },
  { name: 'MySQL' },
  { name: 'Linux' },
  { name: 'Git & GitHub' },
  { name: 'Data Ingestion' },
  { name: 'Data Quality Validation' },
];

const ITEMS = [...TECHS, ...TECHS];

export default function TechMarquee() {
  return (
    <div className="w-full overflow-hidden py-1 relative">
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, #0f0f0f, transparent)',
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to left, #0f0f0f, transparent)',
        }}
      />

      {/* Track */}
      <div
        className="flex gap-4 sm:gap-6 items-center"
        style={{
          width: 'max-content',
          animation: 'tech-marquee 45s linear infinite',
          willChange: 'transform',
        }}
      >
        {ITEMS.map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-xs sm:text-sm font-serif text-neutral-400 hover:text-white transition-colors cursor-default whitespace-nowrap"
          >
            <span className="text-[#c9a96e] text-xs">◆</span>
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
