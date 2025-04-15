import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Poyects';
import Contact from '../pages/Contact';
import Footer from '../components/Footer';

import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
