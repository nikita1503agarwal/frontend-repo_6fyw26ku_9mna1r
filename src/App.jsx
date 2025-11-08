import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-inter text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} RAIHAN AZIZ FURQONI. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
