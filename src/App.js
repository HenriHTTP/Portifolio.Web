import React from 'react';
import Navbar from './components/Navbar/navbar';
import About from './components/about/about';
import Info from './components/Info/info';
import Project from './components/projects/projects';
function App() {
  return (
   <>
   <Navbar/>
    <About/>
    <Info/>
    <Project/>
   </>
  );
}

export default App;
