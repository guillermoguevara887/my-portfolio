import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Poyects';

import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
