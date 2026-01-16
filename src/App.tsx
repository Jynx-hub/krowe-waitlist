import Navbar from './components/Navbar';
import { Hero } from './components/Hero';
import Features from './components/Features';
import Why from './components/Why';
import Timeline from './components/Timeline';
import Footer from './components/footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="why-krowe">
        <Why />
      </section>
      <section id="how-it-works">
        <Timeline />
      </section>
      <Footer />
    </div>
  );
}

export default App;
