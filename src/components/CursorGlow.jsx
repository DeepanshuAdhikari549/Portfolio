import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function CursorGlow() {
  const { isDark, theme } = useTheme();
  const glowRef = useRef(null);
  const posRef = useRef({ x: -400, y: -400 });
  const rafRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      if (glowRef.current) {
        glowRef.current.style.left = `${posRef.current.x}px`;
        glowRef.current.style.top  = `${posRef.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', move, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Only show on non-touch devices
  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-0 hidden lg:block"
      style={{
        width: '600px',
        height: '600px',
        transform: 'translate(-50%, -50%)',
        background: `radial-gradient(circle closest-side, ${theme.primary}10 0%, transparent 70%)`,
        transition: 'background 0.4s ease',
        willChange: 'left, top',
      }}
      aria-hidden="true"
    />
  );
}
