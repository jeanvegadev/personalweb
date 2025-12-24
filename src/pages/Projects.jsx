import React from 'react';
import SpecificRepoStars from '../components/GithubStars'

const Projects = () => {
  const projects = [
    {
      name: 'JeanDev Personal Web',
      repo: 'personalweb',
      description: 'Modern personal portfolio built with React and Tailwind CSS, deployed on Vercel for optimal performance.',
      tags: ['React', 'Tailwind CSS', 'Vercel'],
      link: 'https://github.com/jeanvegadev/personalweb'
    },
    {
      name: 'Django Web Application',
      repo: 'Django-webpage',
      description: 'Full-featured web application developed with Django framework and Bootstrap for responsive design.',
      tags: ['Django', 'Python', 'Bootstrap'],
      link: 'https://github.com/jeanvegadev/Django-webpage'
    },
    {
      name: 'ESP32Cam WebServer',
      repo: 'ESP32CamWebServer',
      description: 'IoT web server implementation for ESP32 Camera, showcasing embedded systems and real-time data streaming.',
      tags: ['ESP32', 'IoT', 'C++'],
      link: 'https://github.com/jeanvegadev/ESP32CamWebServer'
    },
    {
      name: 'Flask Authentication',
      repo: 'BasicHttpAuthentication',
      description: 'Secure web application demonstrating HTTP basic authentication implementation with Flask.',
      tags: ['Flask', 'Python', 'Security'],
      link: 'https://github.com/jeanvegadev/BasicHttpAuthentication'
    }
  ];

  return (
    <section id="projects" className="py-20 lg:py-28 px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-slate-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-indigo-200">
              <div className="mb-4">
                <SpecificRepoStars repoName={project.repo}/>
              </div>
              
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block">
                <h3 className='text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200 mb-3'>
                  {project.name}
                </h3>
              </a>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors duration-200">
                View on GitHub
                <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;