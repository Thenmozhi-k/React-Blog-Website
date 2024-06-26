import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage , setCurrentPage] = useState(1)
  const pageSize = 12;
  const [selectedCategory , setSelectedCategory] = useState(null);
  const [activeCategory , setActiveCategory] = useState(null);


  useEffect(() => {
    async function fetchBlogs() {
      const url = `http://localhost:5000/blogs?page=${currentPage} & limit=${pageSize}`;

      if(selectedCategory) {
        url += `&category=${selectedCategory}`
      }

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
  }, [currentPage, pageSize, selectedCategory]);

  const handlePageChange = (category) => {
    setCurrentPage(category)
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category)

  }

  return (
    <div>
      {/* {blogs.map(blog => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <img src={blog.image} alt={blog.title} />
          <p>{blog.content}</p>
        </div>
      ))} */}
      <div>Page Category</div>

      {/* blogcards section */}
      <div><BlogCard blogs={blogs} currentPage={currentPage} pageSize={pageSize} selectedCategory={selectedCategory}/></div>

      {/* pagination section */}
      <div>Pagination</div>
    </div>
  );
};

export default BlogPage;
