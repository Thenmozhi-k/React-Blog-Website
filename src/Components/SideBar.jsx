import React, { useEffect, useState } from 'react'

const SideBar = () => {
    const [popularBlogs , setPopularBlogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/blogs").then(res => res.json()).then(data => setPopularBlogs(data.slice(0 , 15))

        )
    }, [])
  return (
    <div>
        <div>
            <h3 className='text-2xl font-semibold px-4'>Latest Blogs</h3>
        </div>
    </div>
  )
}

export default SideBar