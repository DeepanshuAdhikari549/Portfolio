import React, { useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import CursorGlow from './components/CursorGlow';
import TechMarquee from './components/TechMarquee';
import './index.css';

function AppInner() {
  const { isDark } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`relative min-h-screen font-sans selection:bg-primary/30`}>
      <CursorGlow />
      <div className="bg-mesh" />
      <Background3D />
      <Navbar />

      <main className="relative z-10 flex flex-col items-center w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}

export default App;
