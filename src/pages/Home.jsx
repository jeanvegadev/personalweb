import React from 'react';
import jean from '../assets/images/jean_photo4.jpg'

const Home = ({h1color}) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-slate-50 px-6 py-20 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
              <span className={h1color}>Hi, I'm Jean Vega</span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-indigo-600 mb-6">
              Software Engineer & Full-Stack Developer
            </p>
            <p className="text-lg leading-relaxed text-gray-600 mb-8 max-w-lg">
              I'm a passionate software engineer from Peru with 7+ years of experience building robust applications. Proficient in Python, SQL, and JavaScript with expertise in backend and frontend development, robotics, and microcontroller programming.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
                View My Work
              </a>
              <a href="#contact" className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors duration-200">
                Get in Touch
              </a>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-blue-500 rounded-2xl blur-2xl opacity-30"></div>
              <img src={jean} alt="Jean Vega" className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-2xl"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;