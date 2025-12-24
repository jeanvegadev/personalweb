import React from 'react';

const Contact = () => {
  const contactMethods = [
    {
      icon: '✉️',
      label: 'Email',
      value: 'jcvega.dev@gmail.com',
      link: 'mailto:jcvega.dev@gmail.com',
      description: 'Reach out for collaborations or inquiries'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Jean Carlos Vega',
      link: 'https://linkedin.com/in/jean-carlos-vega',
      description: 'Connect with me professionally'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'jeanvegadev',
      link: 'https://github.com/jeanvegadev',
      description: 'Check out my repositories'
    }
  ];

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
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{method.icon}</div>
                <h3 className='text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors'>{method.label}</h3>
                <p className="text-indigo-600 font-semibold mb-3 break-all">{method.value}</p>
                <p className="text-sm text-gray-600">{method.description}</p>
              </div>
            </a>
          ))}
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