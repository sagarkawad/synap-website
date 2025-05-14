import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-animate>
            About <span className="text-red-600">SynapTechVerse</span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto" data-animate>
            Expert web development and SEO to grow your business online.
            Our team specializes in creating responsive, user-friendly websites that not only attract visitors but also convert them into loyal customers.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div 
            className="text-center p-6 bg-gray-50 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
            data-animate
          >
            <h3 className="text-xl font-bold text-red-600 mb-2">Award Winning</h3>
            <p className="text-gray-600">Recognition for excellence in web development and digital solutions</p>
          </div>

          <div 
            className="text-center p-6 bg-gray-50 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
            data-animate
          >
            <h3 className="text-xl font-bold text-red-600 mb-2">Professional Staff</h3>
            <p className="text-gray-600">Expert team dedicated to delivering exceptional results</p>
          </div>

          <div 
            className="text-center p-6 bg-gray-50 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
            data-animate
          >
            <h3 className="text-xl font-bold text-red-600 mb-2">24/7 Support</h3>
            <p className="text-gray-600">Round-the-clock assistance for all your technical needs</p>
          </div>

          <div 
            className="text-center p-6 bg-gray-50 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
            data-animate
          >
            <h3 className="text-xl font-bold text-red-600 mb-2">Fair Prices</h3>
            <p className="text-gray-600">Competitive rates for high-quality technology solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;