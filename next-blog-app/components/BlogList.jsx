import { blog_data } from '@/assets/assets'
import React, { useState } from 'react'
import BlogItem from './BlogItem'

const BlogList = () => {

    const [menu, setMenu] = useState("All");

  return (

    <div>
        <div className='flex justify-center gap-6 my-10  '>

            <button onClick={() => setMenu('All')} className={menu === "All" ? "bg-black text-white py-1 px-4 cursor-pointer rounded-sm" : "cursor-pointer"}>
                All
            </button>

            <button className={menu === "Technology" ? "bg-black text-white py-1 px-4 rounded-sm cursor-pointer" : "cursor-pointer"} onClick={() => setMenu('Technology')}>Technology</button>

            <button className={menu === "Startup" ? "bg-black text-white py-1 px-4 cursor-pointer rounded-sm" : "cursor-pointer"} onClick={() => setMenu("Startup")}>Startup</button>

            <button className={menu === "LifeStyle" ? "bg-black text-white py-1 cursor-pointer px-4 rounded-sm" : "cursor-pointer"} onClick={() => setMenu("LifeStyle")}>LifeStyle</button>

        </div>
        <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>

            {blog_data.filter((item) => menu === "All" ? true  : item.category === menu ).map((item, index) => (

                <BlogItem key={index} id={item.id} title={item.title} image={item.image} description={item.description}/>
            ))}
            
        </div>
    </div>
  )
}

export default BlogList