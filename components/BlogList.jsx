'use client'
import { blog_data } from '@/assets/assets'
import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import axios from 'axios';

const BlogList = () => {

    const [menu, setMenu] = useState("All");
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {

        const response = await axios.get('/api/blog');
        setBlogs(response.data.blogs)

    }

    useEffect(() => {
        fetchBlogs()
    },[])


  return (

    <div>
  {/* Filter Buttons */}
  <div className="flex flex-wrap justify-center gap-4 my-10">
    <button
      onClick={() => setMenu("All")}
      className={`px-5 py-2 rounded-md transition cursor-pointer ${
        menu === "All"
          ? "bg-black text-white"
          : "bg-gray-100 hover:bg-gray-200"
      }`}
    >
      All
    </button>

    <button
      onClick={() => setMenu("Technology")}
      className={`px-5 py-2 rounded-md transition cursor-pointer ${
        menu === "Technology"
          ? "bg-black text-white"
          : "bg-gray-100 hover:bg-gray-200"
      }`}
    >
      Technology
    </button>

    <button
      onClick={() => setMenu("Startup")}
      className={`px-5 py-2 rounded-md transition cursor-pointer ${
        menu === "Startup"
          ? "bg-black text-white"
          : "bg-gray-100 hover:bg-gray-200"
      }`}
    >
      Startup
    </button>

    <button
      onClick={() => setMenu("LifeStyle")}
      className={`px-5 py-2 rounded-md transition cursor-pointer ${
        menu === "LifeStyle"
          ? "bg-black text-white"
          : "bg-gray-100 hover:bg-gray-200"
      }`}
    >
      Lifestyle
    </button>
  </div>

  {/* Blog Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 mb-16">
    {blogs
      .filter((item) =>
        menu === "All" ? true : item.category === menu
      )
      .map((item, index) => (
        <BlogItem
          key={index}
          id={item._id}
          title={item.title}
          image={item.image}
          description={item.description}
        />
      ))}
  </div>
</div>
  )
}

export default BlogList