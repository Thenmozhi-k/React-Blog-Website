// BlogCard.jsx

import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BlogCard = ({ blogs, selectedCategory, pageSize, currentPage }) => {
  const filteredBlogs = blogs
    .filter(blog => !selectedCategory || blog.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
      {filteredBlogs.map(blog => (
        <Link to={`/blogs/${blog.id}`} key={blog.id} className='p-5 shadow-lg cursor-pointer rounded'>
          <div>
            <img src={blog.image} alt='' className='w-full' />
          </div>
          <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>{blog.title}</h3>
          <p className='mb-2 text-gray-600'><FaUser className='inline-flex' /> {blog.author}</p>
          <p className='text-sm text-gray-500'>{blog.published_date}</p>
        </Link>
      ))}
    </div>
  );
};

export default BlogCard;
