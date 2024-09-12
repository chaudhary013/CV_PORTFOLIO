import React from 'react';
import { Card, Button, Carousel } from 'antd'; // Import Ant Design Carousel
import 'antd/dist/reset.css'; // Ensure Ant Design CSS is loaded

const Blogs = () => {
  const blogList = [
    { title: 'REACT-REDUX', description: 'ReduxReact Wizard: A Journey into Advanced State Management....', link: 'https://medium.com/@chaudharyaman0013/react-redux-30bd2fa6c399' },
    { title: 'Routers in React', description: 'Diving into React Router for Beginners in the World of Web Development”...', link: 'https://medium.com/@chaudharyaman0013/react-router-d6c7d898f1ab' },
    { title: 'Clousers in Javascript', description: 'Understanding JavaScript Closures: Unlocking the Power of Function Environments...', link: 'https://medium.com/@chaudharyaman0013/clousers-1f843a25bf2f' },
    { title: 'Material-UI', description: 'Material-UI is a popular React UI framework based on Google’s Material Design principles...', link: 'https://medium.com/@chaudharyaman0013/material-ui-e09326df9e93' },
    { title: 'Socket.IO', description: 'Socket.IO is a JavaScript library that enables real-time, bidirectional communication between web clients (such as browsers) and servers...', link: 'https://medium.com/@chaudharyaman0013/socket-io-b5daa9900175' },
  ];

  return (
    <section id="blogs" className="p-10 bg-gradient-to-br from-blue-200 via-purple-300 to-pink-200 dark:from-gray-800 dark:to-gray-900 transition-all duration-700">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800 dark:text-gray-200 tracking-wide animate-fade-in">
        My Blogs
      </h2>
      <div className="relative">
        <Carousel 
          dots={false} 
          arrows
          className="custom-carousel"
          autoplay
        >
          {blogList.map((blog, index) => (
            <div key={index} className="flex justify-center items-center">
              <Card 
                title={blog.title} 
                bordered={false} 
                className="dark:bg-gray-800 dark:text-gray-200 bg-white shadow-xl hover:shadow-2xl transform transition-transform duration-500 hover:scale-105 rounded-lg overflow-hidden animate-slide-in"
                style={{ width: '100%', maxWidth: '700px', margin: '0 auto' }} // Center card
              >
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  {blog.description}
                </p>
                <Button 
                  type="primary" 
                  href={blog.link} 
                  target="_blank" 
                  className="mt-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 border-none"
                >
                  Read More
                </Button>
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Blogs;
