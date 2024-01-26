// Contact.js
import React from 'react';
import SpecificRepoStars from '../components/GithubStars'

const Projects = () => {
  return (
    <div className="container mx-auto items-center justify-center md:justify-between px-6 pt-1 lg:px-8 py-16 sm:py-16">
      <ul>
        <li class="my-10 mx-4">
          <SpecificRepoStars repoName="personalweb"/>
          <div>
            <a href="https://github.com/jeanvegadev/personalweb" target="_blank" rel="noopener" class="text-blue-600 hover:underline"><strong>JeanDev Personal Web</strong></a> - <span>This personal web is built with React and Tailwind. It is deployed in Vercel.</span>
          </div>
        </li>
        <li class="my-10 mx-4">
          <SpecificRepoStars repoName="Django-webpage"/>
          <div>
            <a href="https://github.com/jeanvegadev/Django-webpage" target="_blank" rel="noopener" class="text-blue-600 hover:underline"><strong>Django Web</strong></a> - <span>This is a web application built with Django and Bootstrap.</span>
          </div>
        </li>
        <li class="my-10 mx-4">
          <SpecificRepoStars repoName="ESP32CamWebServer"/>
          <div>
            <a href="https://github.com/jeanvegadev/ESP32CamWebServer" target="_blank" rel="noopener" class="text-blue-600 hover:underline"><strong>ESP32Cam WebServer</strong></a> - <span>This is a web server built using the ESP32Cam.</span>
          </div>
        </li>
        <li class="my-10 mx-4">
          <SpecificRepoStars repoName="BasicHttpAuthentication"/>
          <div>
            <a href="https://github.com/jeanvegadev/BasicHttpAuthentication" target="_blank" rel="noopener" class="text-blue-600 hover:underline"><strong>Flask web</strong></a> - <span>This a web application using Flask and it uses a basic HTTP authentication.</span>
          </div>
        </li>
      </ul>
      
      
    </div>
  );
};

export default Projects;