import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import MyBlogs from './components/MyBlogs';
import Experience from './components/Experience';
import ContactMe from './components/ContactMe';
import Resume from './components/Resume';
import "./App.css"

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div className={darkMode ? 'dark' : ''}>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home />
      <About />
      <Skills />
      <Project />
      <MyBlogs />
      <Experience />
      <ContactMe />
      <Resume />
    </div>
  );
}

export default App;
