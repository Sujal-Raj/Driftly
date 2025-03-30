import React, { useState } from 'react'
import LogoNavbar from '../Components/LogoNavbar';
import { Link } from 'react-router-dom';

function UserSignUp() {
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log(fullname,password,email);
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
                className="bg-gray-300 rounded-lg p-2 text-lg"
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
                className="bg-gray-300 rounded-lg p-2 text-lg"
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
                className="bg-gray-300 rounded-lg p-2 text-lg"
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