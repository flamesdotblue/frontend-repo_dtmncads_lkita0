import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Collaboration from './components/Collaboration';
import Showcase from './components/Showcase';
import Jobs from './components/Jobs';
import Feed from './components/Feed';
import Footer from './components/Footer';
import ProjectDetailModal from './components/ProjectDetailModal';

function HomePage() {
  return (
    <>
      <Hero />
    </>
  );
}

function FeaturesPage() {
  return (
    <>
      <div className="pt-10" />
      <Features />
    </>
  );
}

function CollaborationPage() {
  const [projectOpen, setProjectOpen] = useState(false);
  return (
    <>
      <div className="pt-10" />
      <Collaboration onOpenProject={() => setProjectOpen(true)} />
      <ProjectDetailModal open={projectOpen} onClose={() => setProjectOpen(false)} />
    </>
  );
}

function FeedPage() {
  return (
    <>
      <div className="pt-10" />
      <Feed />
    </>
  );
}

function ShowcasePage() {
  return (
    <>
      <div className="pt-10" />
      <Showcase />
    </>
  );
}

function JobsPage() {
  return (
    <>
      <div className="pt-10" />
      <Jobs />
    </>
  );
}

function App() {
  return (
    <div className="font-inter text-slate-900 bg-white min-h-screen flex flex-col">
      <HashRouter>
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/collab" element={<CollaborationPage />} />
            <Route path="/feed" element={<FeedPage />} />
            <Route path="/showcase" element={<ShowcasePage />} />
            <Route path="/jobs" element={<JobsPage />} />
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
