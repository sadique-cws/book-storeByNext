"use client"
import { useRouter } from 'next/navigation';

import React, { useState } from 'react'

const AdminCategoryInsert = ({update,value}) => {

  const [cat_title,setCat_title]  = useState((update) ? value.cat_title : "");

  const router = useRouter();

  const handleInsert = async () => {
    console.log("insert")
        let data = await fetch("/api/category",{
            method:"POST",
            body:JSON.stringify({cat_title}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        data = await data.json();
        router.push("/admin/category");
  }

  const handleUpdate = async (id) => {
    console.log("update")
    let data = await fetch(`/api/category/${id}`,{
        method:"PUT",
        body:JSON.stringify({cat_title}),
        headers:{
            "Content-Type":"application/json"
        }
    })
    data = await data.json();
    router.push("/admin/category");
}

  return (
    <div className='flex'>
        <form method='post' onSubmit={(update)? () => handleUpdate(value._id) : handleInsert} className='w-5/12 mx-auto bg-slate-300 p-5 rounded-xl mt-5'> 
            <div className="mb-3 flex-col flex">
                <label htmlFor="cat_title">Title</label>
                <input type="text" value={cat_title} onChange={(e) => setCat_title(e.target.value)} id="title" className="border px-2 py-3" />
            </div>
            <div className="mb-3">
                <button type="submit" className='bg-teal-600 text-white px-3 py-2 rounded w-full'>{(update)? "Update" : "Insert"} Category</button>
            </div>
        </form>
    </div>
  )
}

export default AdminCategoryInsert