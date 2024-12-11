import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
   
  return (
    <div className='py-2 flex justify-center gap-5 bg-blue-300' id='header'>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/register"}>Register</NavLink>
      <NavLink to={"/login"}>Login</NavLink>
      <NavLink to={"/showcategories"}>Categories</NavLink>
    </div>
  );
}

export default Header