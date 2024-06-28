import React from 'react';

const About = () => {
  return (
    <div>
      {/* Header Section */}
      <div className='py-40 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>About Us</h2>
        <p className='text-lg lg:text-xl mt-4'>
          Learn more about our story, mission, and the team behind our success.
        </p>
      </div>

      {/* About Us Section */}
      <div className='max-w-7xl mx-auto px-4 py-12'>
        <h3 className='text-3xl font-semibold text-center mb-8'>Our Story</h3>
        <p className='text-lg leading-relaxed text-gray-700 mb-8'>
          Our journey began in 2010 when a group of passionate individuals came together with a shared vision of creating a platform that delivers high-quality content on various topics. Over the years, we have grown into a dedicated team of writers, designers, and marketers who strive to provide our readers with valuable insights and engaging articles.
        </p>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div>
            <h4 className='text-2xl font-bold mb-4'>Our Mission</h4>
            <p className='text-lg leading-relaxed text-gray-700'>
              Our mission is to inform, inspire, and empower our readers through well-researched and thoughtfully crafted content. We believe in the power of knowledge and aim to create a community where ideas can be shared and discussed.
            </p>
          </div>
          <div>
            <img src='src/assets/about.png' alt='Our Story' className='rounded-lg shadow-lg'/>
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      <div className='bg-gray-100 py-12'>
        <div className='max-w-7xl mx-auto px-4'>
          <h3 className='text-3xl font-semibold text-center mb-8'>Meet the Team</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
              <img src='src/assets/user-01.png' alt='Team Member' className='w-32 h-32 rounded-full mx-auto mb-4'/>
              <h4 className='text-xl font-bold mb-2'>John Doe</h4>
              <p className='text-gray-700'>Founder & CEO</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
              <img src='src/assets/user-02.png' alt='Team Member' className='w-32 h-32 rounded-full mx-auto mb-4'/>
              <h4 className='text-xl font-bold mb-2'>Jane Smith</h4>
              <p className='text-gray-700'>Chief Editor</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
              <img src='src/assets/user-03.png' alt='Team Member' className='w-32 h-32 rounded-full mx-auto mb-4'/>
              <h4 className='text-xl font-bold mb-2'>Alex Johnson</h4>
              <p className='text-gray-700'>Marketing Head</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
              <img src='src/assets/user-04.avif' alt='Team Member' className='w-32 h-32 rounded-full mx-auto mb-4'/>
              <h4 className='text-xl font-bold mb-2'>Emily Davis</h4>
              <p className='text-gray-700'>Content Writer</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
              <img src='src/assets/user-05.avif' alt='Team Member' className='w-32 h-32 rounded-full mx-auto mb-4'/>
              <h4 className='text-xl font-bold mb-2'>Michael Brown</h4>
              <p className='text-gray-700'>Web Developer</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
              <img src='src/assets/user-06.avif' alt='Team Member' className='w-32 h-32 rounded-full mx-auto mb-4'/>
              <h4 className='text-xl font-bold mb-2'>Sarah Wilson</h4>
              <p className='text-gray-700'>Graphic Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
