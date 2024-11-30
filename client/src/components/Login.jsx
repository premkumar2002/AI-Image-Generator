import React from "react";
import { assets } from "../assets/assets";

const Login = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur-sm flex justify-center items-center bg-black/30">
      <form className="relative bg-white p-10 rounded-xl text-slate-500 text-center">
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          Sign Up
        </h1>
        <p className="text-sm mt-2">Welcome back! Please Sign In to continue</p>

        <div className="border px-4 py-1 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.profile_icon} alt="Profile Icon" className="w-6" />
          <input
            className="outline-none text-sm"
            type="text"
            placeholder="Full Name"
            required
          />
        </div>
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.email_icon} alt="Profile Icon" className="" />
          <input
            className="outline-none text-sm"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.lock_icon} alt="Profile Icon" className="" />
          <input
            className="outline-none text-sm"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <p className="text-sm my-4 text-blue-600 cursor-pointer">
          Forgot Password?
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full w-full">
          Create Account
        </button>
        <p className="text-sm mt-5 text-center">
          Don't have an account?{" "}
          <span className="text-blue-700 cursor-pointer">Sign Up</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
