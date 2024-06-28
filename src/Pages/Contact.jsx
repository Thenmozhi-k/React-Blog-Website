import React from 'react';
import { FaFacebook, FaTwitterSquare, FaDribbbleSquare } from 'react-icons/fa';


const Contact = () => {
  return (
    <div>
      {/* Header Section */}
      <div className='py-40 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Contact Us</h2>
        <p className='text-lg lg:text-xl mt-4'>
          We would love to hear from you! Fill out the form below or reach out to us directly.
        </p>
      </div>

      {/* Contact Form Section */}
      <div className='max-w-7xl mx-auto px-4 py-12'>
        <h3 className='text-3xl font-semibold text-center mb-8'>Get in Touch</h3>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <form>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                  Name
                </label>
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='name' type='text' placeholder='Your name' />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                  Email
                </label>
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='email' type='email' placeholder='Your email' />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='message'>
                  Message
                </label>
                <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='message' rows='5' placeholder='Your message'></textarea>
              </div>
              <div className='flex items-center justify-between'>
                <button className='bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-orange-500 transition-all duration-200' type='button'>
                  Send Message
                </button>
              </div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h4 className='text-2xl font-bold mb-4'>Contact Information</h4>
            <p className='text-gray-700 mb-4'>
              Feel free to contact us directly if you have any questions or inquiries.
            </p>
            <p className='text-gray-700 mb-2'>
              <strong>Email:</strong> info@example.com
            </p>
            <p className='text-gray-700 mb-2'>
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p className='text-gray-700 mb-4'>
              <strong>Address:</strong> 1234 Street Name, City, State, Zip Code
            </p>
            <div className='mt-4'>
              <h5 className='text-xl font-semibold mb-2'>Follow Us</h5>
              <div className='flex gap-4'>
                <a href='#' className='text-gray-700 hover:text-orange-500'>
                  <FaFacebook size={24} />
                </a>
                <a href='#' className='text-gray-700 hover:text-orange-500'>
                  <FaTwitterSquare size={24} />
                </a>
                <a href='#' className='text-gray-700 hover:text-orange-500'>
                  <FaDribbbleSquare size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
