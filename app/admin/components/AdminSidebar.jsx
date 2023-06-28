import Link from 'next/link'
import React from 'react'

const AdminSidebar = () => {
  return (
    <div className='w-full bg-slate-800 text-white h-[92vh] flex flex-col'>
        <Link href="/admin" className='px-5 py-3 text-white hover:bg-slate-500'>Dashboard</Link>
        <Link href="/admin/category" className='px-5 py-3 text-white hover:bg-slate-500'>Manage Category</Link>
        <Link href="/admin/category/insert" className='px-5 py-3 text-white hover:bg-slate-500'>Insert Category</Link>
        <Link href="/admin/books" className='px-5 py-3 text-white hover:bg-slate-500'>Manage Books</Link>
        <Link href="/admin/books/insert" className='px-5 py-3 text-white hover:bg-slate-500'>Insert Books</Link>
        <Link href="/" className='px-5 py-3 text-white hover:bg-slate-500'>View Reports</Link>
        <Link href="/" className='px-5 py-3 text-white hover:bg-slate-500'>Setting</Link>
        <Link href="/" className='px-5 py-3 text-white hover:bg-red-500'>Logout</Link>
    </div>
  )
}

export default AdminSidebar