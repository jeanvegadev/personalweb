import './App.css';
import MenuHeader from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React , { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';


function App() {
  // State variable to track the current mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle the mode
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
  // Apply classes based on the current mode
  const containerClasses = isDarkMode ? 'bg-gray-900 text-white min-h-screen' : 'bg-white text-black ';
  const h1color = isDarkMode ? 'text-white' : 'text-gray-900'

  const containerClasses2 = isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black';

  return (
    <div className={containerClasses}>
      <Router>
      <MenuHeader toggleDarkMode={toggleDarkMode} c1={containerClasses2}/>
      <Routes>
        <Route path="/" exact element={<Home h1color={h1color}/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Analytics />
      </Router>
    </div>
    
  );
}

export default App;
