// Home.js
import React from 'react';
import jean from '../assets/images/jean_photo.png'

const Home = () => {
  return (
    
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-6 pt-1 lg:px-8">
        <div className="mx-auto w-3/5 md:w-3/5 py-4 sm:py-4 lg:py-4 order-2 md:order-1">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Hi, I'm Jean Vega
            </h1>
            <h2 className="text-3xl font-bold tracking-tight text-blue-500 sm:text-4xl">
              and welcome to my website
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              I'm a software developer from Peru and have over 3 years of experience and I'm a skilled programmer using Python, SQL and Javascript. I also have worked with C, C++, Assembly, Java among others.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/Projects"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Projects
              </a>
              <a href="Contact" className="text-sm font-semibold leading-6 text-gray-900">
                Contact <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        
        <div class="w-2/5 md:w-2/5 mx-auto py-4 px-6 order-1 md:order-2">
            <img src={jean} alt="jean" class="rounded-full"/>
        </div>
    </div>
  );
};

export default Home;