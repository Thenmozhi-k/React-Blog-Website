import React from 'react'
import { useLoaderData } from 'react-router-dom';

const SIngleBlog = () => {
    const data = useLoaderData();
    const {title, image, category, author, published_date, reading_time, content} = data[0]
  return (
    <div>
   <div className='py-40 bg-black text-center text-white px-4'>
    <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Single Blog Page</h2>
   </div>

   {/* blog details */}
   <div className='max-w-7xl mx-auto my-12'>
      <div className='lg:w-3/4 mx-auto'>
        <div>
            <img src={image} alt="" className='w-full mx-auto rounded' />
        </div>
      </div>
   </div>
  </div>
  )
}

export default SIngleBlog