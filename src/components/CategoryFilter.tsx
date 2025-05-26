import React from 'react';
import { categories } from '../utils/data';

interface CategoryFilterProps {
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      <button
        className={`px-4 py-2 rounded-full transition-all duration-300 ${
          activeCategory === null
            ? 'bg-red-600 text-white shadow-md'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        onClick={() => onCategoryChange(null)}
      >
        Все
      </button>
      
      {categories.map((category) => (
        <button
          key={category.id}
          className={`px-4 py-2 rounded-full transition-all duration-300 ${
            activeCategory === category.id
              ? 'bg-red-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => onCategoryChange(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;