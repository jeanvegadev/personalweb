import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto items-center justify-center md:justify-between px-6 pt-1 lg:px-8 py-16 sm:py-16">
      <h2 className='text-3xl text-center text-blue-600 py-4'>Contact</h2>
      <div id="email-j" className="my-4 mx-4">
        You can email me at:
        <p className="flex items-center">
          jcvega.dev@gmail.com
          <a href="mailto:jcvega.dev@gmail.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 block h-6 mx-3"><svg aria-labelledby="svg-inline--fa-title-w0kjvXBWrJXR" data-prefix="fas" data-icon="envelope" className="svg-inline--fa fa-envelope fa-w-16 h-full" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title id="svg-inline--fa-title-w0kjvXBWrJXR">Email</title><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg></a>
        </p>
      </div>
      <div id="linkedin-j" className="my-4 mx-4">
        My Linkedin:
        <p className="flex items-center">
          linkedin.com/in/jean-carlos-vega
          <a href="https://linkedin.com/in/jean-carlos-vega" target="_blank" rel="noopener noreferrer" className="text-blue-600 block h-6 mx-3"><svg aria-labelledby="svg-inline--fa-title-G4bNwzv2BTMh" data-prefix="fab" data-icon="linkedin" className="svg-inline--fa fa-linkedin fa-w-14 h-full" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><title id="svg-inline--fa-title-G4bNwzv2BTMh">LinkedIn</title><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></a>
        </p>
      </div>
    </section>
  );
};

export default Contact;