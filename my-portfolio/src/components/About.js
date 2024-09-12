import React, { useState } from 'react';
import { Button, Card } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const AboutMe = () => {
  const [image, setImage] = useState(null);

  // Handle image upload and preview
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="about" className="h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-900 dark:via-purple-800 dark:to-pink-700 text-white flex flex-col items-center justify-center transition-all duration-500">
      <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>

      {/* Fixed image at the center */}
      <div className="flex justify-center mb-6">
        <img
          src={`${process.env.PUBLIC_URL}/myproffimg2.jpg`} // Replace with the correct path for your fixed image
          alt="Fixed Profile"
          className="w-40 h-40 rounded-full shadow-lg object-cover"
        />
      </div>

      {/* Modified Card Section */}
      <div className="text-white flex justify-center items-center">
        <Card
          title="HELLO EVERYONE"
          bordered={false}
          className="relative backdrop-blur-lg bg-white bg-opacity-20 dark:bg-gray-800 dark:bg-opacity-30 shadow-xl rounded-lg p-6 text-blue-950
            transform transition-all hover:scale-105 hover:bg-opacity-30 hover:shadow-2xl duration-300 ease-in-out"
        >
          <h3 className="text-xl font-bold text-white text-shadow-md mb-4">
            Welcome to My Portfolio
          </h3>
          <div className="bg-white dark:bg-gray-800 bg-opacity-0 p-6 rounded-lg shadow-lg">
            <p className="text-base text-white font-normal leading-relaxed">
              I am a passionate <strong>full-stack developer</strong> with a background in building and deploying dynamic and responsive web and mobile applications. With expertise in JavaScript, ReactJS, Node.js, and various other technologies, I enjoy creating innovative solutions that enhance user experiences. My interests include exploring new technologies, solving complex problems, and continuously improving my skills. I thrive in collaborative environments and am always eager to take on new challenges. Welcome to my portfolio, where you can explore a range of projects showcasing my skills and dedication to development.
            </p>
          </div>
        </Card>
      </div>

      {/* Image upload section */}
      <div className="mb-6 mt-8">
        <label htmlFor="upload-photo" className="block text-lg font-bold mb-2 text-center">
          Upload Your Photo:
        </label>
        <input
          type="file"
          id="upload-photo"
          accept="image/*"
          onChange={handleImageUpload}
          className="mb-4 mx-auto block"
        />
        {/* Display the uploaded image */}
        {image && (
          <div className="mt-4 flex justify-center">
            <img src={image} alt="Uploaded Profile" className="w-32 h-32 rounded-full shadow-lg object-cover" />
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutMe;
