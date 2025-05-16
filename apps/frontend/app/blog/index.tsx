import React from 'react';

const BlogIndex = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Placeholder for blog posts */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Blog Post Title</h2>
          <p className="text-gray-700">Blog post excerpt...</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Blog Post Title</h2>
          <p className="text-gray-700">Blog post excerpt...</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Blog Post Title</h2>
          <p className="text-gray-700">Blog post excerpt...</p>
        </div>
      </div>
    </div>
  );
};

export default BlogIndex;
