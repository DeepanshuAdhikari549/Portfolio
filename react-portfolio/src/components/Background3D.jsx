import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Background3D() {
  const { isDark } = useTheme();

  return (
    <>
      {/* Clean gradient background */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(6,182,212,0.08) 0%, transparent 60%), #040d1a'
            : 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(6,182,212,0.06) 0%, transparent 60%), #f8faff',
          transition: 'background 0.5s ease',
        }}
      />

      {/* Subtle grid lines */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: isDark
            ? `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`
            : `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
    </>
  );
}
