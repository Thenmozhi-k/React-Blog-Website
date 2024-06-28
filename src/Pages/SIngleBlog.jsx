import React, { useEffect, useState } from 'react';
import { FaClock, FaUser } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import SideBar from '../Components/SideBar';

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:5000/blogs/${id}`);
        if (!response.ok) {
          throw new Error('Blog not found');
        }
        const data = await response.json();
        setBlog(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog:', error);
        setError('Blog not found');
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      {/* <img src={blog.image} alt="" />
      <h1>{blog.title}</h1>
      <p>{blog.content}</p> */}
      <div className='py-40 bg-black text-center text-white px-4'>
         <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Single Blog Page</h2>
      </div>

      {/* blog details */}
      <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
        <div className='lg:w-3/4 mx-auto'>
          <div>
            <img src={blog.image} alt="" className='w-full mx-auto rounded' />
          </div>

          < h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer'>{blog.title}</h2>
          <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2'/>{blog.author} |  {blog.published_date}</p>
          <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center mr-2'/> {blog.reading_time}</p>
          <p className='text-base text-gray-500 mb-6'>{blog.content}</p>
          <div className='text-base text-gray-600'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis corporis ratione
               aperiam laudantium. Alias assumenda, atque reiciendis dolorem quae, fuga, nulla necessitatibus
                voluptatum nemo eveniet fugiat voluptatem possimus odit minus?</p>
                <br />

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex rem similique magnam
                   quas ad eligendi soluta. Aliquid magnam sapiente modi! Recusandae corporis nam maiores, enim eaque est nihil obcaecati?</p>
                   <br />

                   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis corporis ratione
               aperiam laudantium. Alias assumenda, atque reiciendis dolorem quae, fuga, nulla necessitatibus
                voluptatum nemo eveniet fugiat voluptatem possimus odit minus?</p> <br />

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis corporis ratione
               aperiam laudantium. Alias assumenda, atque reiciendis dolorem quae, fuga, nulla necessitatibus
                voluptatum nemo eveniet fugiat voluptatem possimus odit minus?</p> <br />

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis corporis ratione
               aperiam laudantium. Alias assumenda, atque reiciendis dolorem quae, fuga, nulla necessitatibus
                voluptatum nemo eveniet fugiat voluptatem possimus odit minus?</p>
            <br />

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis corporis ratione
               aperiam laudantium. Alias assumenda, atque reiciendis dolorem quae, fuga, nulla necessitatibus
                voluptatum nemo eveniet fugiat voluptatem possimus odit minus?</p>



                   
          </div>
        </div>

        <div className='lg:w-1/2'>
          <SideBar/>
        </div>
      </div>
      
    </div>
  );
};

export default SingleBlog;
