import Link from 'next/link'
import React from 'react'
import AdminBookForm from '../../components/AdminBookForm'




const page = async () => {
    
  let callingCategory = await fetch("http://127.0.0.1:3000/api/category");
  callingCategory = await callingCategory.json();
  return (
    <div className='flex flex-col p-10'>
        <div className="flex justify-between items-center">
          <h2 className='text-2xl font-black'>Insert Book</h2>
          <Link href="/admin/category" className='bg-teal-600 text-white px-3 py-2 rounded'>Show All Books</Link>
        </div>
        <div className="flex flex-col mt-5">
            <AdminBookForm categoryData={callingCategory.data}/>
        </div>
    </div>
  )
}

export default page