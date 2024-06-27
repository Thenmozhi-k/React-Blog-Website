import React from 'react'

const CategorySection = ({onSelectCategory , selectedCategory , activeCategory }) => {
    const categories = ["AI", "Apps", "Tech", "Security", "Startups"]
  return (
    <div>
        <button onClick={() => selectedCategory(null)}>All</button>
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