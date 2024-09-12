import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-900 dark:via-purple-800 dark:to-pink-700 text-white flex flex-col items-center justify-center transition-all duration-500"
    >
      <div className="text-center">
        {/* Adding fade-in effect and animation */}
        <h1 className="text-white 6xl font-bold animate-fadeIn mb-4">
          Welcome to My Portfolio
        </h1>

        {/* Adding a typing effect */}
        <p className="text-xl font-medium text-gray-200 dark:text-gray-400">
          <span className="border-r-4 border-white pr-2 animate-type">
            Full-Stack Developer | React Enthusiast
          </span>
        </p>
      </div>

      {/* Floating button effect */}
      <div className="mt-8">
        <a
          href="#about"
          className="px-6 py-3 bg-white text-blue-500 font-bold text-lg rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 animate-float"
        >
          Explore More
        </a>
      </div>
    </section>
  );
};

export default Home;
