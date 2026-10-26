import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import CommandPalette from './components/CommandPalette';
import './index.css';

function AppInner() {
  useEffect(() => {
    window.scrollTo(0, 0);
    localStorage.setItem('portfolio-dark', 'true');
    localStorage.setItem('portfolio-theme', 'executive');
  }, []);

  return (
    <div className="relative min-h-screen font-serif selection:bg-neutral-800 bg-[#0c0c0c] text-neutral-200">
      <Background3D />
      <Navbar />
      <CommandPalette />

      <main className="relative z-10 flex flex-col items-center w-full">
        <Hero />
        <About />
        <Experience />
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
