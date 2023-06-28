import AdminCategoryInsert from '@/app/admin/components/AdminCategoryInsert';
import Link from 'next/link'

const page = async ({params}) => {
    
    let callingOneCategory = await fetch(`http://127.0.0.1:3000/api/category/${params.catid}`);
    callingOneCategory = await callingOneCategory.json();

  return (
    <div className='flex flex-col p-10'>
        <div className="flex justify-between items-center">
          <h2 className='text-2xl font-black'>Update Category</h2>
          <Link href="/admin/category" className='bg-teal-600 text-white px-3 py-2 rounded'>Show All Categories</Link>
        </div>
        <div className="flex flex-col mt-5">
            <AdminCategoryInsert update={true} value={callingOneCategory.data}/>
        </div>
    </div>
  )
}

export default page