import React from 'react';

const BlogPostDetail = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog Post Title</h1>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <p className="text-gray-700 mb-4">Blog post content...</p>
        </div>
        <div className="w-full md:w-1/3 md:ml-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Sidebar Title</h2>
            <p className="text-gray-700">Sidebar content...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;
