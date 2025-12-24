import React from 'react';

const YouTubeIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.725-2.004 1.428-.103.249-.129.597-.129.946v5.431h-3.553s.047-8.81 0-9.728h3.553v1.375c.429-.663 1.197-1.608 2.905-1.608 2.122 0 3.715 1.388 3.715 4.369v5.592zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.956.77-1.71 1.958-1.71 1.187 0 1.927.754 1.940 1.71 0 .951-.753 1.71-1.983 1.71zm1.582 11.597H3.635V9.024h3.284v11.428zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const Contact = () => {
  const contactMethods = [
    {
      icon: <span className="text-4xl">✉️</span>,
      label: 'Email',
      value: 'jcvega.dev@gmail.com',
      link: 'mailto:jcvega.dev@gmail.com',
      description: 'Reach out for collaborations or inquiries'
    },
    {
      icon: <div className="w-9 h-9" style={{color: '#0077B5'}}><LinkedInIcon /></div>,
      label: 'LinkedIn',
      value: 'Jean Carlos Vega',
      link: 'https://linkedin.com/in/jean-carlos-vega',
      description: 'Connect with me professionally'
    },
    {
      icon: <div className="w-9 h-9 text-gray-900"><GitHubIcon /></div>,
      label: 'GitHub',
      value: 'jeanvegadev',
      link: 'https://github.com/jeanvegadev',
      description: 'Check out my repositories'
    }
  ];

  const youtubeChannel = {
    icon: <div className="w-14 h-14 text-red-600"><YouTubeIcon /></div>,
    label: 'YouTube',
    value: '@jeandevega',
    link: 'https://www.youtube.com/@jeandevega',
    description: 'Subscribe to my coding content'
  };

  return (
    <section id="contact" className="py-20 lg:py-28 px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>Let's Connect</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">Feel free to reach out for collaboration, project inquiries, or just to say hello</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <a key={index} href={method.link} target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white rounded-xl p-8 h-full shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-indigo-300 cursor-pointer hover:scale-105">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{typeof method.icon === 'string' ? method.icon : method.icon}</div>
                <h3 className='text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors'>{method.label}</h3>
                <p className="text-indigo-600 font-semibold mb-3 break-all">{method.value}</p>
                <p className="text-sm text-gray-600">{method.description}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Featured YouTube Channel */}
        <div className="mt-12">
          <a href={youtubeChannel.link} target="_blank" rel="noopener noreferrer" className="group block">
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-red-400 hover:scale-105">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 text-white transform group-hover:scale-110 transition-transform duration-300"><YouTubeIcon /></div>
                  <div>
                    <span className="inline-block px-3 py-1 mb-2 bg-white bg-opacity-30 text-white text-xs font-semibold rounded-full">FEATURED</span>
                    <h3 className='text-2xl md:text-3xl font-bold text-white mb-2'>{youtubeChannel.label}</h3>
                    <p className="text-white text-opacity-90">{youtubeChannel.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white text-lg font-semibold">{youtubeChannel.value}</p>
                  <p className="text-white text-opacity-80 text-sm">Subscribe to my channel</p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="mt-16 text-center p-8 bg-white rounded-xl shadow-md border border-slate-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Open to Opportunities</h3>
          <p className="text-lg text-gray-600 mb-6">
            I'm always interested in hearing about new projects, opportunities, and collaborations. Whether you have a question or want to start a conversation, feel free to contact me.
          </p>
          <a href="mailto:jcvega.dev@gmail.com" className="inline-flex items-center px-8 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
            Send me an Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;