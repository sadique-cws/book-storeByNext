"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const AdminCategoryCalling = ({allCategory}) => {
  const router = useRouter();
  const handleDelete =  async(id) => {
    let data = await fetch(`/api/category/${id}`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      }
    })
    data = await data.json();
    router.push("/admin/category");

  }
  return (
    <table className="border">
      <thead>
        <tr>
          <th className="border p-2">Id</th>
          <th className="border p-2">Cat Title</th>
          <th className="border p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {allCategory.map((value, key) => (
          <tr key={key}>
            <td className="border p-2">{value._id}</td>
            <td className="border p-2">{value.cat_title}</td>
            <td className="border p-2 flex gap-3">
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

export default AdminCategoryCalling;
