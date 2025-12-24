import React from 'react';

const About = () => {
  return (
    <section id="about" className="container mx-auto items-center justify-center md:justify-between px-6 pt-1 lg:px-8 py-16 sm:py-16">
      <h2 className='text-3xl text-center text-blue-600 py-4'>About me</h2>
      <p>I'm <span className='text-blue-600 font-bold'>software </span> developer and I love building and learning new things.</p>
      <p>I studied electronics engineering at National University of Engineering in Peru where I got a bachelor's degree and a title. Then I started studying on my own through online resources such as Youtube, Udemy and a bunch of documentation.</p>
      <p>I like building backend applications as well as the frontend. Besides, I enjoy robotics and programming microcontrollers.</p>
    </section>
  );
};

export default About;