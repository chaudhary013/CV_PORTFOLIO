import React from 'react';
import { Progress } from 'antd'; // Ant Design Progress Bar
import { FaJs, FaReact, FaHtml5, FaNodeJs, FaCss3Alt } from 'react-icons/fa';
import { SiExpress, SiMysql, SiMongodb } from 'react-icons/si'; // Additional icons for other skills

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: <FaJs />, percent: 90 },
    { name: 'React', icon: <FaReact />, percent: 80 },
    { name: 'Ant Design', icon: <FaHtml5 />, percent: 75 }, // Placeholder for Ant Design
    { name: 'Node.js', icon: <FaNodeJs />, percent: 70 },
    { name: 'HTML5', icon: <FaHtml5 />, percent: 85 },
    { name: 'CSS3', icon: <FaCss3Alt />, percent: 70 },
    { name: 'Express', icon: <SiExpress />, percent: 65 },
    { name: 'MySQL', icon: <SiMysql />, percent: 60 },
    { name: 'MongoDB', icon: <SiMongodb />, percent: 65 },
  ];

  return (
    <section id="skills" className="p-10 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="flex items-center space-x-4 group"
          >
            {/* Icon with 3D effect on hover */}
            <div 
              className="text-3xl text-gray-800 dark:text-gray-200 group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-3xl transition-transform duration-300 ease-in-out"
              title={skill.name} // Tooltip for skill name
            >
              {skill.icon}
            </div>
            <div className="flex-grow">
              <p 
                className="font-semibold text-gray-800 dark:text-gray-200 relative group-hover:text-blue-400 group-hover:glow-text transition-colors duration-300 ease-in-out"
              >
                {skill.name}
                {/* Animated underline */}
                <span 
                  className="block h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
                  style={{ transformOrigin: 'left' }}
                ></span>
              </p>
              <div className="relative">
                {/* 3D effect on progress bar */}
                <div className="group-hover:translate-y-[-2px] group-hover:shadow-xl transition-all duration-300 ease-in-out">
                  <Progress 
                    percent={skill.percent} 
                    strokeColor={{
                      '0%': '#108ee9',
                      '100%': '#87d068',
                    }}
                  />
                </div>
                {/* 3D effect on percentage text */}
                <span 
                  className="absolute right-0 top-0 text-xs font-bold text-gray-800 dark:text-gray-200 group-hover:text-purple-500 transition-colors duration-300 ease-in-out group-hover:translate-y-[-2px] group-hover:shadow-md"
                >
                  {skill.percent}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
