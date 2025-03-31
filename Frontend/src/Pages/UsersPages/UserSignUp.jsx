import React, { useState } from 'react'
import LogoNavbar from '../../Components/LogoNavbar';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';


function UserSignUp() {
  const API_URL =
  import.meta.env.VITE_NODE_ENV === "production"
    ? `${import.meta.env.VITE_PRODUCTION_URL}/api`
    : `${import.meta.env.VITE_DEVELOPMENT_URL}/api`;

    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const notify = () => toast("Wow so easy!");

    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log(fullname,password,email);
        try {
          const response = await axios.post(`${API_URL}/users/adduser`,{
            name: fullname, password, email
          });
          toast.success("User registered successfully!");
          navigate("/user-login");
          
        } catch (error) {
          console.log(error.message);
          toast.error("Registration failed: " + error.message);
        }

    }
  return (
    <>
        <main className="h-screen w-full pt-10 flex flex-col items-center">
        <LogoNavbar />
        <section className="w-full px-4">
          <form onSubmit={handleSubmit} action="" className=" w-full sm:w-[75%] md:w-[50%] lg:w-[40%] mx-auto p-4">
          <div className="flex flex-col px-2 sm:px-6 gap-2 mb-4">
              <label className="text-2xl font-semibold" htmlFor="username">
                Enter Your Fullname:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Fullname"
                required
                value={fullname}
                onChange={(e)=>setFullname(e.target.value)}
                className="bg-gray-200 rounded-lg p-2 text-lg"
              />
            </div>
            <div className="flex flex-col px-2 sm:px-6 gap-2 mb-4">
              <label className="text-2xl font-semibold" htmlFor="email">
                What's Your Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email address"
                required
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="bg-gray-200 rounded-lg p-2 text-lg"
              />
            </div>
            <div className="flex flex-col px-2 sm:px-6 gap-2 mb-4">
              <label className="text-2xl font-semibold" htmlFor="password">
                Enter Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e)=>setPassword(e.target.value)} 
                className="bg-gray-200 rounded-lg p-2 text-lg"
              />
            </div>
            <div className="flex flex-col px-2 sm:px-6 gap-2 mb-4">
              <input
                type="submit"
                value={"Sign Up"}
                className="bg-emerald-400 rounded-lg p-2 text-2xl text-white cursor-pointer hover:bg-emerald-500 transition"
              />
            </div>
          </form>
          <ToastContainer />
        </section>
        <p className="text-center text-xl text-gray-500">
          Already have an account? 
          <Link to={"/user-login"}>
          <span className="text-emerald-400 underline">Login</span>
          </Link>
        </p>
      </main>
    </>
  )
}

export default UserSignUp