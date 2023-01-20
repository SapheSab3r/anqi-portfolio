import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Project from './components/projects/Project';
import Footer from './components/footer/Footer';

import './App.scss';


export default function App() {
  

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <About />
        <Project />
        <Footer />
      </div>
    </div>
  );
}

