import React, { useEffect, useState } from 'react';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      const url = 'http://localhost:5000/blogs';

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setBlogs(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <div>
      {blogs.map(blog => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <img src={blog.image} alt={blog.title} />
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
