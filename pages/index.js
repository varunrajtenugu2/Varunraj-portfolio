import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const NeuralCanvas = dynamic(() => import('../components/NeuralCanvas'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <NeuralCanvas />
      <Navbar />
      <main>
        <Hero />
        <div id="impact" className="glow-line w-full max-w-6xl mx-auto" />
        <Experience />
        <TechStack />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
