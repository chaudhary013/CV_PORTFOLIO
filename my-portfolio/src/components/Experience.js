import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineering Job Simulation',
      company: 'Hewlett Packard Enterprise.',
      duration: 'SEP 2024 - Present',
      internship: 'Virtual Internship',
      certificate_link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Hewlett%20Packard%20Enterprise%20/da2T3WZCbMAJD7bNB_Hewlett%20Packard%20Enterprise_yFgZpugc8Yz6PHGAb_1725527064477_completion_certificate.pdf", 
      description: 'Create a proposal for a RESTful Web Service → Build a basic RESTful Web Service → Implement the ability to upload data → Create unit tests.',
    },
    {
      title: 'Software Engineering Lite',
      company: 'JPMorgan Chase & Co.',
      duration: 'SEP 2024',
      internship: 'Virtual Internship',
      certificate_link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/Wb4yEmHvZrC2qxiyX_JPMorgan%20Chase%20&%20Co._yFgZpugc8Yz6PHGAb_1726179229214_completion_certificate.pdf",
      description: 'Completed a simulation for JPMorgan Chase & Co.s credit-card rewards system, where I developed a new class and wrote a test suite to restore system functionality',
    },
     {
      title: 'Front-End Software Engineering',
      company: 'Skyscanner',
      duration: 'SEP 2024',
      internship: 'Virtual Internship',
      certificate_link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Skyscanner/km4rw7dihDr3etqom_Skyscanner_yFgZpugc8Yz6PHGAb_1726262713244_completion_certificate.pdf",
      description: 'In this recent job simulation as a front-end engineer at Skyscanner, I built a web application using React, developed a travel date-picking page with Skyscanner open-source Backpack React library, customized the application, and ran automated tests to ensure proper rendering',
    },
    {
      title: 'Tech Explorer',
      company: 'Commonwealth Bank',
      duration: 'SEP 2024',
      internship: 'Virtual Internship',
      certificate_link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Commonwealth%20Bank/GYcpProEZQFCiSmT6_Commonwealth%20Bank_yFgZpugc8Yz6PHGAb_1726264310944_completion_certificate.pdf",
      description: 'Coordinated the needs of stakeholders and users in requirement gathering, identified the correct groups for access to particular tools, and analyzed demographics to target for advertising a new banking app.',
    },
  ];

  return (
    <section id="experience" className="p-10 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-200">
      <h2 className="text-4xl font-bold mb-8 text-center tracking-wide text-blue-500 dark:text-blue-300">
        Certifications
      </h2>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div key={index} className="relative bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border-l-8 border-blue-500 dark:border-blue-300 transition transform hover:-translate-y-2 hover:shadow-xl hover:scale-105">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 rounded-l-lg"></div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
              {experience.title}
            </h3>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-400 mb-1">
              {experience.company}
            </p>
            <p className="text-md text-gray-600 dark:text-gray-400 mb-3">
              {experience.duration}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
              {experience.description}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              <strong>Internship: </strong>{experience.internship}
            </p>
            {experience.certificate_link && (
              <p>
                <a
                  href={experience.certificate_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-blue-400 hover:underline transition hover:text-blue-600 dark:hover:text-blue-300"
                >
                  View Certificate
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
