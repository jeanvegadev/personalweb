import React from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const SinglePage = ({h1color}) => {
  return (
    <div>
      <Home h1color={h1color} />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default SinglePage;
