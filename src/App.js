import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/Navbar';
import Contact from './Components/Contact';
import About from './Components/About';
import Services from './Components/Services';
import Projects from './Components/Projects';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
