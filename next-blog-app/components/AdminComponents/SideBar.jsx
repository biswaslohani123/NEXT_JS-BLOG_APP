import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (

    <div className='flex flex-col bg-slate-100'>

        <div className='px-2 sm:pl-14 py-3 border border-black'>
            <Image src={assets.logo} width={120} alt=''/>
        </div>

        <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>

            <div className='w-[50%] sm:w-[80%] absolute right-0'>

              <Link href='/admin/addProduct' className='flex cursor-pointer items-center border border-black gap-3 font-medium px-3 py-2 bg-white hover:active:bg-gray-400'>
                  <Image src={assets.add_icon} alt='' width={28}/>
                  <p>Add blogs</p>
              </Link>

              <Link href='/admin/blogList' className='flex mt-5 cursor-pointer items-center border border-black gap-3 font-medium px-2 py-2 bg-white hover:active:bg-gray-400'>
                  <Image src={assets.blog_icon} alt='' width={28}/>
                  <p>Blog List</p>
              </Link>

              <Link href='/admin/subscription' className='flex mt-5 cursor-pointer items-center border border-black gap-3 font-medium px-2 py-2 bg-white hover:active:bg-gray-400'>
                  <Image src={assets.email_icon} alt='' width={28}/>
                  <p>Subscription</p>
              </Link>

              

            </div>
        </div>

    </div>
  )
}

export default SideBar