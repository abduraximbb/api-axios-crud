import { request } from "@/api";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const token = useSelector((s) => s.token.value);
  const navigate = useNavigate()

   const handleCreateCategory = (e) => {
     e.preventDefault();
     let formData = new FormData(e.target);
     const category = Object.fromEntries(formData);
     request.post("/product-category/create", category, {
       headers: {
         Authorization: `Bearer ${token}`,
       },
     });

     e.target.reset();
     alert("New category success added")
   };

  return (
    <div className="flex flex-col text-center gap-4 mt-8">
      <p className="text-3xl">Category create</p>
      <form
        className="flex flex-col w-[50%] mx-auto gap-4"
        onSubmit={handleCreateCategory}
        action=""
      >
        <input
          className="border-2 border-blue-300 rounded-lg p-3"
          type="text"
          name="name"
          placeholder="name"
        />
        <textarea
          className="border-2 border-blue-300 rounded-lg p-3"
          name="description"
          id=""
          placeholder="description"
        ></textarea>
        <button className="border p-3 bg-blue-300 rounded-lg">Create</button>
      </form>
        <button onClick={()=>navigate("/showcategories")} className="border p-3 bg-blue-300 rounded-lg w-[50%] mx-auto">View categories</button>
    </div>
  );
};

export default Categories;
