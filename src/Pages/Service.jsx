import React from 'react';

const Service = () => {
  return (
    <div>
      {/* Header Section */}
      <div className='py-40 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Our Services</h2>
        <p className='text-lg lg:text-xl mt-4'>
          We offer a wide range of services to meet your needs. Explore what we can do for you.
        </p>
      </div>
      
      {/* Services Section */}
      <div className='max-w-7xl mx-auto px-4 py-12'>
        <h3 className='text-3xl font-semibold text-center mb-8'>What We Offer</h3>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='border p-6 rounded-lg shadow-lg'>
            <h4 className='text-2xl font-bold mb-4'>Web Development</h4>
            <p>
              Our team of experienced developers can help you build responsive, efficient, and beautiful websites to help your business grow.
            </p>
          </div>
          
          <div className='border p-6 rounded-lg shadow-lg'>
            <h4 className='text-2xl font-bold mb-4'>SEO Optimization</h4>
            <p>
              We offer professional SEO services to help improve your website's visibility on search engines, attracting more visitors and potential customers.
            </p>
          </div>
          
          <div className='border p-6 rounded-lg shadow-lg'>
            <h4 className='text-2xl font-bold mb-4'>Content Creation</h4>
            <p>
              Our creative team can produce high-quality content tailored to your brand's voice and audience, enhancing your online presence.
            </p>
          </div>
          
          <div className='border p-6 rounded-lg shadow-lg'>
            <h4 className='text-2xl font-bold mb-4'>Social Media Management</h4>
            <p>
              We manage your social media accounts, creating engaging posts and growing your follower base to strengthen your brand's online community.
            </p>
          </div>
          
          <div className='border p-6 rounded-lg shadow-lg'>
            <h4 className='text-2xl font-bold mb-4'>Graphic Design</h4>
            <p>
              Our talented designers can create stunning visuals for your website, social media, and marketing materials, helping you stand out from the competition.
            </p>
          </div>
          
          <div className='border p-6 rounded-lg shadow-lg'>
            <h4 className='text-2xl font-bold mb-4'>Digital Marketing</h4>
            <p>
              We develop comprehensive digital marketing strategies to promote your brand, increase your reach, and drive conversions through various online channels.
            </p>
          </div>
        </div>
      </div>
      
      {/* Additional Information Section */}
      <div className='bg-gray-100 py-12'>
        <div className='max-w-7xl mx-auto px-4'>
          <h3 className='text-3xl font-semibold text-center mb-8'>Why Choose Us</h3>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <h4 className='text-xl font-bold mb-4'>Experienced Team</h4>
              <p>
                Our team consists of professionals with years of experience in their respective fields, ensuring high-quality service and expert guidance.
              </p>
            </div>
            
            <div>
              <h4 className='text-xl font-bold mb-4'>Customer Satisfaction</h4>
              <p>
                We prioritize our clients' satisfaction, working closely with you to understand your needs and deliver results that exceed your expectations.
              </p>
            </div>
            
            <div>
              <h4 className='text-xl font-bold mb-4'>Affordable Pricing</h4>
              <p>
                We offer competitive pricing for our services without compromising on quality, making professional services accessible to businesses of all sizes.
              </p>
            </div>
            
            <div>
              <h4 className='text-xl font-bold mb-4'>Comprehensive Support</h4>
              <p>
                Our support team is available to assist you with any questions or issues, ensuring a smooth and hassle-free experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Us Section */}
      <div className='py-12 text-center'>
        <h3 className='text-3xl font-semibold mb-8'>Get in Touch</h3>
        <p className='text-lg mb-4'>
          Ready to take your business to the next level? Contact us today to discuss your project and how we can help you achieve your goals.
        </p>
        <a href="/contact" className='bg-black text-white px-6 py-3 rounded hover:bg-orange-500 transition-all duration-200'>
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Service;
