import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Collaboration from './components/Collaboration';
import Showcase from './components/Showcase';
import Jobs from './components/Jobs';
import Feed from './components/Feed';
import Footer from './components/Footer';
import ProjectDetailModal from './components/ProjectDetailModal';

function App() {
  const [projectOpen, setProjectOpen] = useState(false);

  return (
    <div className="font-inter text-slate-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Collaboration onOpenProject={() => setProjectOpen(true)} />
        <Feed />
        <Showcase />
        <Jobs />
      </main>
      <Footer />

      <ProjectDetailModal open={projectOpen} onClose={() => setProjectOpen(false)} />
    </div>
  );
}

export default App;
