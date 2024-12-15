//import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Banner } from './components/Banner.js';
import {Skills} from './components/Skills.js'
import {Experience} from './components/Experience.js'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <Skills />
      <Experience />
    </div>

  );
}

export default App;
