import React from 'react';

function AboutSection() {
  return (
    <section className='min-h-screen bg-gradient-to-br from-blue-700 via-black to-pink-700 text-white flex items-center justify-center'>
      <div className="max-w-4xl p-8 rounded-lg bg-opacity-80">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-white">About Me</h2>
          <p className="text-lg md:text-xl text-gray-300 text-center mb-8">
          I'm a seasoned front-end developer with a passion. My expertise spans across front-end technologies, with a strong foundation in problem-solving thinking. I'm proficient in JavaScript, React, Node.js, HTML, CSS, and more. I've successfully completed several projects, including an Spotify clone app, a Portfolio Website etc.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;