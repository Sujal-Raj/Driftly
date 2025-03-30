import React, { useState } from 'react'
import LogoNavbar from '../Components/LogoNavbar';
import { Link } from 'react-router-dom';


function CaptionSignUp() {
    const [fullname, setFullname] = useState("")
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
    
        const handleSubmit = async(e) =>{
            e.preventDefault();
            console.log(fullname,password,email);
        }
  return (
    <>
    <main className="min-h-screen w-full pt-10 flex flex-col items-center">
        <LogoNavbar />
        <section className="w-full px-4">
          <form onSubmit={handleSubmit} action="" className=" w-full sm:w-[75%] md:w-[50%] lg:w-[40%] mx-auto p-4">
            <p className='text-center text-xl underline'>Personal Details</p>
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
            <p className='text-center text-xl underline mb-2'>Vehicle Details</p>
            <div className="flex items-center px-2 sm:px-6 gap-2 mb-4">
              <label className="text-2xl font-semibold" htmlFor="password">
                Color:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Color"
                required
                value={password}
                onChange={(e)=>setPassword(e.target.value)} 
                className="bg-gray-300 rounded-lg p-2 text-lg w-full"
              />
            </div>
            <div className="flex items-center px-2 sm:px-6 gap-2 mb-4">
              <label className="text-2xl font-semibold" htmlFor="password">
                Number:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Number"
                required
                value={password}
                onChange={(e)=>setPassword(e.target.value)} 
                className="bg-gray-300 rounded-lg p-2 text-lg w-full"
              />
            </div>
            <div className="flex items-center px-2 sm:px-6 gap-2 mb-4">
              <label className="text-2xl font-semibold" htmlFor="password">
                Capacity:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Capacity"
                required
                value={password}
                onChange={(e)=>setPassword(e.target.value)} 
                className="bg-gray-300 rounded-lg p-2 text-lg w-full"
              />
            </div>
            <div className="flex items-center px-2 sm:px-6 gap-2 mb-4">
              <label className="text-2xl font-semibold" htmlFor="password">
                Type:
              </label>
              {/* <input
                type="password"
                id="password"
                name="password"
                placeholder="Color"
                required
                value={password}
                onChange={(e)=>setPassword(e.target.value)} 
                className="bg-gray-300 rounded-lg p-2 text-lg w-full"
              /> */}
              <select className="bg-gray-300 rounded-lg p-2 text-lg w-full">
                <option value="car">Car</option>
                <option value="bike" selected>Bike</option>
                <option value="auto">Auto</option>
              </select>
            </div>
            <div className="flex flex-col px-2 sm:px-6 gap-2 mb-4">
              <input
                type="submit"
                value={"Sign Up as Caption"}
                className="bg-emerald-400 rounded-lg p-2 text-2xl text-white cursor-pointer hover:bg-emerald-500 transition"
              />
            </div>
            
          </form>
        </section>
        <p className="text-center text-xl text-gray-500 mb-5">
          Already joined the community? 
          <Link to={"/caption-login"}>
          <span className="text-emerald-400 underline">Login</span>
          </Link>
        </p>
        <p className=' text-center text-medium text-gray-600'>This site is protected by reCAPTCHA and the <span className='underline cursor-pointer'>Google Privacy Policy</span>
         and <span className='underline cursor-pointer'> Terms of Services Apply</span>.</p>
      </main>
    </>
  )
}

export default CaptionSignUp