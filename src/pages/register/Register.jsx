import { request } from "@/api";
import React from "react";
import { useDispatch } from "react-redux";
import { signIn } from "@/redux/slices/token-slice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let user = Object.fromEntries(formData);

    request.post("/auth/signup-admin", user).then((res) => {
      console.log(res);
      dispatch(signIn(res.data.access_token));
      navigate("/admin");
    });
  };
  return (
    <div className="flex flex-col text-center gap-4 mt-8">
      <h2 className="text-3xl">Register</h2>
      <form
        className="flex flex-col w-[50%] mx-auto gap-4"
        onSubmit={handleSignUp}
        action=""
      >
        <input className="border-2 border-blue-300 rounded-lg p-3" type="text" name="name" />
        <input className="border-2 border-blue-300 rounded-lg p-3" type="email" name="email" />
        <input className="border-2 border-blue-300 rounded-lg p-3" type="password" name="password" />
        <input className="border-2 border-blue-300 rounded-lg p-3" type="password" name="confirm_password" />
        <button className="border p-3 bg-blue-300 rounded-lg">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
