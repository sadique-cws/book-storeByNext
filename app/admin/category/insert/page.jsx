import Link from 'next/link'
import React from 'react'
import AdminCategoryInsert from '../../components/AdminCategoryInsert'




const page = async () => {
  return (
    <div className='flex flex-col p-10'>
        <div className="flex justify-between items-center">
          <h2 className='text-2xl font-black'>Insert Category</h2>
          <Link href="/admin/category" className='bg-teal-600 text-white px-3 py-2 rounded'>Show All Categories</Link>
        </div>
        <div className="flex flex-col mt-5">
            <AdminCategoryInsert/>
        </div>
    </div>
  )
}

export default page