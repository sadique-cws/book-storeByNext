"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const AdminBookCalling = ({allBooks}) => {
  const router = useRouter();

  const handleDelete =  async(id) => {
    let data = await fetch(`/api/book/${id}`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      }
    })
    data = await data.json();
    router.push("/admin/books");

  }
  return (
    <table className="border">
      <thead>
        <tr>
          <th className="border p-1">Id</th>
          <th className="border p-1">Title</th>
          <th className="border p-1">author</th>
          <th className="border p-1">Pages</th>
          <th className="border p-1">description</th>
          <th className="border p-1">isbn</th>
          <th className="border p-1">category</th>
          <th className="border p-1">Action</th>
        </tr>
      </thead>
      <tbody>
        {allBooks.map((value, key) => (
          <tr key={key}>
            <td className="border p-1 text-xs">{value._id}</td>
            <td className="border p-1 text-xs">{value.title}</td>
            <td className="border p-1 text-xs">{value.author}</td>
            <td className="border p-1 text-xs">{value.nop}</td>
            <td className="border p-1 text-xs">{value.description}</td>
            <td className="border p-1 text-xs">{value.isbn}</td>
            <td className="border p-1 text-xs">{value.category}</td>
            <td className="border p-1 text-xs flex gap-3">
              <button onClick={() => handleDelete(value._id)}
                type="button"
                className="bg-red-600 text-white px-3 py-2 rounded"
              >
                Delete
              </button>
              <Link href={`/admin/category/update/${value._id}`} className="bg-sky-600 text-white px-3 py-2 rounded">Edit Record</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdminBookCalling;
