import React from 'react';

const YouTubeIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
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
      icon: <span className="text-4xl">💼</span>,
      label: 'LinkedIn',
      value: 'Jean Carlos Vega',
      link: 'https://linkedin.com/in/jean-carlos-vega',
      description: 'Connect with me professionally'
    },
    {
      icon: <span className="text-4xl">🐙</span>,
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