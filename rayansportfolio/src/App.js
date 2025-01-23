import './App.css';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import About from './About/About';
import Resume from "./Resume/Resume";
import Projects from './Projects/Projects';  
import HPIcons from './HPIcons/HPIcons';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="sidebar">
          <div>
            <Homepage />
          </div>
          <nav>
  <ul className="custom-list">
    <li className='navlinks'>
      <NavLink to="#about"><span>About</span></NavLink>
    </li>
    <li className='navlinks'>
      <NavLink to="#resume"><span>Resume</span></NavLink>
    </li>
    <li className='navlinks'>
      <NavLink to="#projects"><span>Projects</span></NavLink>
    </li>
  </ul>
</nav>

          <div>
            <HPIcons />
          </div>
        </div>

      
        <div className="content">    
          <section id="about">
            <About />
          </section>
          <section id="resume">
            <Resume />
          </section>
          <section id="projects">
            <Projects />
          </section>
        </div>
      </div>
    </Router>
  );
}

export default App;

