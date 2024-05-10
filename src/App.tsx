import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import Resume from './pages/Resume/Resume';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contact/Contact';
import ThemeSwitch from './components/ThemeSwitch/ThemeSwitch';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <ThemeSwitch /> */}
    </div>
  );
}

export default App;
