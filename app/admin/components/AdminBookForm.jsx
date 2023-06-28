"use client"
import { useRouter } from 'next/navigation';

import React, { useState } from 'react'

const AdminBookForm = ({update,value,categoryData}) => {

  const [title,setTitle]  = useState((update) ? value.title : "");
  const [author,setauthor]  = useState((update) ? value.author : "");
  const [nop,setnop]  = useState((update) ? value.author : "");
  const [isbn,setisbn]  = useState((update) ? value.author : "");
  const [description,setdescription]  = useState((update) ? value.author : "");
  const [category,setcategory]  = useState((update) ? value.author : "");

  const router = useRouter();

  const handleInsert = async () => {
        let data = await fetch("/api/book",{
            method:"POST",
            body:JSON.stringify({title,author,nop,isbn,description,category}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        data = await data.json();
        router.push("/admin/books");
  }

  const handleUpdate = async (id) => {
    let data = await fetch(`/api/book/${id}`,{
        method:"PUT",
        body:JSON.stringify({title,author,nop,isbn,description,category}),
        headers:{
            "Content-Type":"application/json"
        }
    })
    data = await data.json();
    router.push("/admin/books");
}

  return (
    <div className='flex'>
        <form method='post' onSubmit={(update)? () => handleUpdate(value._id) : handleInsert} className='w-5/12 mx-auto bg-slate-300 p-5 rounded-xl mt-5'> 
            <div className="mb-3 flex-col flex">
                <label htmlFor="title">Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} id="title" className="border px-2 py-3" />
            </div>
            <div className="mb-3 flex-col flex">
                <label htmlFor="title">author</label>
                <input type="text" value={author} onChange={(e) => setauthor(e.target.value)} id="author" className="border px-2 py-3" />
            </div>
            <div className="mb-3 flex-col flex">
                <label htmlFor="title">nop</label>
                <input type="number" value={nop} onChange={(e) => setnop(e.target.value)} id="nop" className="border px-2 py-3" />
            </div>
            <div className="mb-3 flex-col flex">
                <label htmlFor="title">category</label>
                <select className="border px-2 py-3" onChange={(e) => setcategory(e.target.value)}>
                        <option value="">select Category</option>
                        {
                            categoryData.map((value, key) => (
                                <option key={key} value={value._id}>{value.cat_title}</option>
                            ))
                        }
                </select>
            </div>
            <div className="mb-3 flex-col flex">
                <label htmlFor="title">description</label>
                <input type="text" value={description} onChange={(e) => setdescription(e.target.value)} id="description" className="border px-2 py-3" />
            </div>
            <div className="mb-3 flex-col flex">
                <label htmlFor="title">isbn</label>
                <input type="text" value={isbn} onChange={(e) => setisbn(e.target.value)} id="isbn" className="border px-2 py-3" />
            </div>
            <div className="mb-3">
                <button type="submit" className='bg-teal-600 text-white px-3 py-2 rounded w-full'>{(update)? "Update" : "Insert"} Book</button>
            </div>
        </form>
    </div>
  )
}

export default AdminBookForm