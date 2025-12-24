import React from 'react';

const About = () => {
  const highlights = [
    { icon: '📚', title: 'Education', desc: 'B.S. in Electronics Engineering from National University of Engineering, Peru' },
    { icon: '💻', title: 'Development', desc: 'Proficient in backend and frontend development with modern frameworks' },
    { icon: '🤖', title: 'Passion', desc: 'Enthusiast of robotics, microcontrollers, and IoT solutions' }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 px-6 lg:px-8 bg-slate-50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-blue-500 mx-auto"></div>
        </div>
        
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            I'm a <span className='text-indigo-600 font-semibold'>software engineer</span> passionate about building elegant solutions and learning new technologies. With a solid foundation in electronics engineering and years of hands-on experience, I've developed expertise across the full technology stack.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            My journey began at the National University of Engineering in Peru, where I earned my degree. Since then, I've continuously expanded my skills through practical projects, online resources, and real-world challenges.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Beyond web development, I'm deeply interested in robotics and microcontroller programming, which allows me to bridge the gap between software and hardware innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {highlights.map((item, index) => (
            <div key={index} className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;