import Link from 'next/link'
import React from 'react'
import AdminCategoryCalling from '../components/AdminCategoryCalling';

const page = async () => {
  let callingCategory = await fetch("http://127.0.0.1:3000/api/category",{cache:"no-store"});
  callingCategory = await callingCategory.json();

  return (
    <div className='flex flex-col p-10'>
        <div className="flex justify-between items-center">
          <h2 className='text-2xl font-black'>Manage Category (1)</h2>
          <Link href="/admin/category/insert" className='bg-teal-600 text-white px-3 py-2 rounded'>Insert Category</Link>
        </div>
        <div className="flex flex-col mt-5">
          <AdminCategoryCalling allCategory={callingCategory.data}/>
        </div>
    </div>
  )
}

export default page