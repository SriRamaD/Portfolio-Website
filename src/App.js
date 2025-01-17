//import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Banner } from './components/Banner.js';
import {Skills} from './components/Skills.js';
import {Experience} from './components/Experience.js';
import {Projects} from './components/Projects.js';
import {Connect} from './components/Connect.js';
// import {Footer} from './components/Footer.js';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <Skills />
      <Experience />
      <Projects />
      <Connect />
      {/* <Footer /> */}
    </div>

  );
}

export default App;
