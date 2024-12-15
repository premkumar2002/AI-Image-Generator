import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [state, setState] = useState("Login");
  const { setShowLogin, backendUrl, setToken, setUser } =
    useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (state === "Login") {
        const { data } = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });

        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });

        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 backdrop-blur-sm flex justify-center items-center bg-black/30 z-10">
      <motion.form
        onSubmit={onSubmitHandler}
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-white p-10 rounded-xl text-slate-500 text-center"
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          {state === "Login" ? "Login" : "Sign Up"}
        </h1>
        <p className="text-sm mt-2">
          {state === "Login"
            ? "Welcome back! Please Sign In"
            : "Please Sign Up"}{" "}
          to continue
        </p>

        {state === "Sign Up" && (
          <div className="border px-4 py-1 flex items-center gap-2 rounded-full mt-4">
            <img src={assets.profile_icon} alt="Profile Icon" className="w-6" />
            <input
              className="outline-none text-sm"
              type="text"
              placeholder="Full Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.email_icon} alt="Email Icon" />
          <input
            className="outline-none text-sm"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.lock_icon} alt="Lock Icon" />
          <input
            className="outline-none text-sm"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {state === "Login" && ( // Show Forgot Password only for Login
          <p className="text-sm my-4 text-blue-600 cursor-pointer">
            Forgot Password?
          </p>
        )}
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full w-full mt-4">
          {state === "Login" ? "Sign In" : "Create Account"}
        </button>

        {state === "Sign Up" ? (
          <p className="text-sm mt-5 text-center">
            Already have an account?{" "}
            <span
              className="text-blue-700 cursor-pointer"
              onClick={() => setState("Login")}
            >
              Sign In
            </span>
          </p>
        ) : (
          <p className="text-sm mt-5 text-center">
            Don't have an account?{" "}
            <span
              className="text-blue-700 cursor-pointer"
              onClick={() => setState("Sign Up")}
            >
              Sign Up
            </span>
          </p>
        )}

        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          alt="Close Icon"
          className="absolute top-5 right-5 cursor-pointer"
        />
      </motion.form>
    </div>
  );
};

export default Login;
