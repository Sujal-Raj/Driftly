import React from 'react'
import Bg from "../assets/HomeBg.avif"
import {Link} from "react-router-dom"
import { FaArrowRight } from "react-icons/fa";
import LogoNavbar from '../Components/LogoNavbar';

function Home() {
  return (
    <>
      <main
        style={{backgroundImage: `url(${Bg})`}}
        className={`h-screen bg-center bg-cover w-full relative`}>
          <div className='h-screen w-full bg-black opacity-30'></div>
          <div className=' absolute top-10'>

        <LogoNavbar/>
          </div>
        <section className='min-h-[20vh] flex flex-col gap-4 py-5 bg-white rounded-t-xl absolute bottom-0 w-full md:bg-gray-200'>
        <p className='text-3xl font-bold tracking-tight text-center'>Get Started with Driftly</p>
        <p className='
          text-center text-2xl italic tracking-tight
        '> 
        Rides at your fingertips
        </p>
        <Link to={"/user-login"}>
        <button className='bg-emerald-400 w-full font-bold text-white rounded-lg py-2 text-2xl flex items-center justify-center gap-1 md:w-fit md:mx-auto md:px-5 cursor-pointer hover:bg-emerald-500 transform transition-all ease-linear'>
          Continue<FaArrowRight className='mt-1'/>
        </button>
        </Link>
        </section>
      </main>
    </>
  )
}

export default Home