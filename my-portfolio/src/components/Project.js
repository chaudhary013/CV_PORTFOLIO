import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projectList = [
    {
      title: 'Covid-19 Tracker',
      description: 'Developed a dynamic COVID-19 Tracker using ReactJS, fetching live data from APIs to display cases worldwide with maps, flowcharts, and bar charts. Used CSS, React libraries, and Material UI for modern, responsive design, ensuring a consistent and appealing user experience across all devices.',
      category: 'web app',
      thumbnail: `${process.env.PUBLIC_URL}/covid-landing-page.jpg`,
      github: 'https://github.com/chaudhary013/Covid-19-Tracker',
      deployed: 'https://covid-19-tracker-three-coral.vercel.app/',
    },
    {
      title: 'Google Gemini-Clone',
      description: 'Developed a Google Gemini OpenAI platform clone, replicating key features and design for enhanced AI capabilities and user interaction. Utilized React.js and Material-UI for the frontend, integrated Redux for state management, and connected to the OpenAI API.',
      category: 'web app',
      thumbnail: `${process.env.PUBLIC_URL}/Gemini.jpg`,
      github: 'https://github.com/chaudhary013/gemini-clone',
      deployed: 'https://gemini-clone-teal-omega.vercel.app/',
    },
    {
      title: 'Weather Forecast site',
      description: 'Developed a responsive weather forecast application using ReactJS, JavaScript, and CSS libraries. Integrated Open APIs to fetch and display real-time weather data for accurate, up-to-date information.',
      category: 'web app',
      thumbnail: `${process.env.PUBLIC_URL}/sunny-weather-forecast-.jpg`,
      github: 'https://github.com/chaudhary013/WeatherForecast-app',
      deployed: 'https://weather-forecast-app-qy1v.vercel.app/',
    },
    {
      title: 'Video Recorder app',
      description: 'Developed a dynamic, responsive Video Recorder web application using JavaScript and Open Web APIs for an interactive user experience. Integrated IndexedDB for storing videos and photos in a gallery.',
      category: 'all',
      thumbnail: `${process.env.PUBLIC_URL}/vedio-recoder.jpg`,
      github: 'https://github.com/chaudhary013/Video-recorder',
      deployed: 'https://amanvediogallaryrecorder.netlify.app/',
    },
    {
      title: 'Speech Recognition app',
      description: 'Implemented the frontend using ReactJS and CSS libraries, featuring real-time voice-to-text conversion utilizing the Web Speech API, allowing users to dictate text into a microphone and receive instant transcription.',
      category: 'all',
      thumbnail: `${process.env.PUBLIC_URL}/speechRecogPic.jpg`,
      github: 'https://github.com/chaudhary013/SpeechRecognition',
      deployed: 'https://speech-recognition-kappa-one.vercel.app/',
    },
    {
      title: 'Chrome Extension',
      description: 'Developed a dynamic and responsive Chrome extension using only Javascript.',
      category: 'all',
      thumbnail: `${process.env.PUBLIC_URL}/chromeExt.png`,
      github: 'https://github.com/chaudhary013/JS_chrome_ext',
      deployed: 'https://project2.example.com',
    },
    {
      title: 'Quiz App',
      description: 'Developed a responsive Quiz App inspired by "Kaun Banega Crorepati," using ReactJS and JavaScript to ensure a seamless and engaging user experience.',
      category: 'web app',
      thumbnail: `${process.env.PUBLIC_URL}/QuizappPic.png`,
      github: 'https://github.com/chaudhary013/QwizApp_project',
      deployed: 'https://qwiz-app-project.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="p-10 bg-white dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((project, index) => (
          <div 
            key={index} 
            className="group relative bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl"
          >
            <div className="relative h-40 w-full overflow-hidden">
              <img 
                src={project.thumbnail} 
                alt={project.title} 
                className="h-full w-full object-cover transition-all duration-500 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-red-700 text-lg flex items-center justify-center mb-2"
                  >
                    <FaGithub className="mr-2 text-red-700" /><strong>GitHub</strong> 
                  </a>
                  <a 
                    href={project.deployed} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-red-700 text-lg flex items-center justify-center"
                  >
                    <FaExternalLinkAlt className="mr-2 text-red-700" /><strong>Live Demo</strong> 
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
