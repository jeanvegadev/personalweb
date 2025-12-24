import './App.css';
import MenuHeader from './components/Header';
import SinglePage from './pages/SinglePage';
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
      <MenuHeader toggleDarkMode={toggleDarkMode} c1={containerClasses2}/>
      <SinglePage h1color={h1color}/>
      <Analytics />
    </div>
    
  );
}

export default App;
