import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import CategorySection from './CategorySection';
import SideBar from './SideBar';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
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

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  return (
    <div>
      {/* category section */}
      <div>
        <CategorySection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory}/>
      </div>
      {/* BlogCards Section */}
      <div className='flex flex-col  lg:flex-row gap-12'>
        <BlogCard blogs={blogs} currentPage={currentPage} pageSize={pageSize} selectedCategory={selectedCategory} />

         {/* sidebar */}
      <div>
        <SideBar/>
      </div>
      </div>

     

      {/* Pagination Section */}
      <div>
        <Pagination onPageChange={handlePageChange} totalBlogs={blogs.length} currentPage={currentPage} pageSize={pageSize} />
      </div>
    </div>
  );
};

export default BlogPage;
