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
      title: 'Advanced Software Engineering Job Simulation',
      company: 'Walmart USA',
      duration: 'SEP 2024',
      internship: 'Virtual Internship',
      certificate_link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Walmart%20USA/oX6f9BbCL9kJDJzfg_Walmart%20USA_yFgZpugc8Yz6PHGAb_1725342851571_completion_certificate.pdf",
      description: 'Advanced Data Structures → Software Architecture → Relational Database Design → Data Munging',
    },
  ];

  return (
    <section id="experience" className="p-10 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-200">
      <h2 className="text-4xl font-bold mb-8 text-center tracking-wide text-blue-500 dark:text-blue-300">
        Experience
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
