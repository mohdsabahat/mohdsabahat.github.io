import {HashRouter, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import './App.css';
import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import Resume from './pages/Resume/Resume';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import PageSwitchButton from './components/PageSwitchButton/PageSwitchButton';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Toaster 
          position='top-right'
        />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
        <PageSwitchButton />
      </HashRouter>
      {/* <ThemeSwitch /> */}
    </div>
  );
}

export default App;
