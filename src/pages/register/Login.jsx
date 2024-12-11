import React, { useState } from 'react'

import { useDispatch } from "react-redux";
import { signIn } from "@/redux/slices/token-slice";
import { useNavigate } from "react-router-dom";
import { request } from '@/api';

const Login = () => {
  const [loading,setLoading]=useState(false)
   const dispatch = useDispatch();
   const navigate = useNavigate();

  const handleSignIn =e=>{
    e.preventDefault()
    setLoading(true)
    let formData = new FormData(e.target)
    const user = Object.fromEntries(formData)

    request
      .post("/auth/signin-admin", user)
      .then(res=>{
        dispatch(signIn(res.data.access_token))
        navigate("/admin")
      })
      .catch(err=>{
        alert(err.response.data.message.message)
      })
      .finally(()=>setLoading(false))
  }
  return (
    <div className="flex flex-col text-center gap-4 mt-8">
      <h2 className="text-3xl">Login</h2>
      <form
        className="flex flex-col w-[50%] mx-auto gap-4"
        onSubmit={handleSignIn}
        action=""
      >
        <input
          className="border-2 border-blue-300 rounded-lg p-3"
          type="email"
          name="email"
        />
        <input
          className="border-2 border-blue-300 rounded-lg p-3"
          type="password"
          name="password"
        />
        <button
          className="border p-3 bg-blue-300 rounded-lg"
          disabled={loading}
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}

export default Login