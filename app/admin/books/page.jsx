import Link from 'next/link'
import React from 'react'
import AdminBookCalling from '../components/AdminBookCalling';

const page = async () => {
  let callingBook = await fetch("http://127.0.0.1:3000/api/book",{cache:"no-store"});
  callingBook = await callingBook.json();

  return (
    <div className='flex flex-col p-10'>
        <div className="flex justify-between items-center">
          <h2 className='text-2xl font-black'>Manage Books (1)</h2>
          <Link href="/admin/books/insert" className='bg-teal-600 text-white px-3 py-2 rounded'>Insert Book</Link>
        </div>
        <div className="flex flex-col mt-5">
          <AdminBookCalling allBooks={callingBook.data}/>
        </div>
    </div>
  )
}

export default page