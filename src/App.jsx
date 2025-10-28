import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Jobs from './components/Jobs';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter text-slate-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Jobs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
