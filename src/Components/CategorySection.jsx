import React from 'react'

const CategorySection = ({onSelectCategory , selectedCategory , activeCategory }) => {
    const categories = ["AI", "Apps", "Tech", "Security", "Startups"]
  return (
    <div className='px-4 mb-8 lg:space-x-16 flex flex-wrap items-center border-b-2 py-5 text-gray-900 font-semibold'>
        <button className={`lg:ml-12 ${activeCategory ? "" : "active-button"}`} onClick={() => selectedCategory(null)}>All</button>
        {categories.map((category) => (
            <button onClick={() => onSelectCategory(category)} 
            key={category} className={`mr-2 space-x-16 ${activeCategory === category ? "active-button" : ""}`}>
                {category}
            </button>
        ))}
    </div>
  )
}

export default CategorySection