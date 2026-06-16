'use client';
import dynamic from 'next/dynamic';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Cursor = dynamic(() => import('./components/Cursor'), { ssr: false });
const LoadingScreen = dynamic(() => import('./components/LoadingScreen'), { ssr: false });

export default function Home() {
  return (
    <main className="noise">
      <LoadingScreen />
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
