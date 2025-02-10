import React from "react";

const BlogCard = ({ items }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300">
      <img src={items.img} alt={items.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{items.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{items.description.slice(0,150)} ....</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
