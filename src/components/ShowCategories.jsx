import { request } from '@/api';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const ShowCategories = () => {
    const token = useSelector((s) => s.token.value);
    const [deleteStatus,setDeleteStatus]=useState(false)

     const [categories, setCategories] = useState(null);
     useEffect(() => {
       request
         .get("/product-category/get")
         .then((res) => setCategories(res.data));
     }, [deleteStatus]);

       const handleDelete = (id) => {
         request
           .delete(`/product-category/delete/${id}`, {
             headers: {
               Authorization: `Bearer ${token}`,
             },
           })
           .then(() => alert("Category deleted succesfully"))
           .catch((err) =>
             alert(
               "Cannot delete this category"
             )
           )
           .finally(()=>setDeleteStatus(true))
       };

   const categoryItems = categories?.map((category) => (
     <div
       key={category.id}
       className="w-80 p-3 border-2 border-blue-600 rounded-lg bg-blue-200 flex flex-col gap-4"
     >
       <h3>Name: {category.name}</h3>
       <p className='max-w-[90%] overflow-hidden text-nowrap mx-auto'>Description: {category.description}</p>
      <div className='flex w-[80%] justify-evenly mx-auto'>
           <button
             onClick={() => handleDelete(category.id)}
             className="border-2 border-blue-600 p-2 rounded-lg bg-blue-300"
           >
             Delete
           </button>
           <button
             className="border-2 border-blue-600 p-2 rounded-lg bg-blue-300"
           >
             Edit
           </button>
      </div>
     </div>
   ));
   return (
    <div className='w-full p-4 text-center flex flex-col gap-4'>
        <h2 className='text-3xl'>Categories</h2>
         <div className="flex gap-3 flex-wrap container mx-auto">
           {categoryItems}
         </div>
    </div>
   );
}

export default ShowCategories