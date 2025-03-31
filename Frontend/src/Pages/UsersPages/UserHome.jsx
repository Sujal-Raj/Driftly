import React, { useState } from "react";
import LogoNavbar from "../../Components/LogoNavbar";
import  {gsap}   from "gsap";
import {useGSAP} from "@gsap/react"
import { IoIosArrowDown } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

function UserHome() {
    const [pickUp, setPickUp] = useState("");
    const [destination, setDestination] = useState("");
    const [locationDivView, setLocationDivView] = useState(false);

    useGSAP(()=>{
        if(locationDivView){
            gsap.to(".location-div", {
                height: '70%',
                duration: 0.5,
                // ease: "elastic.inOut(1.5)",
            });
        }
        else{
            gsap.to(".location-div", {
                height: '0%',
                duration: 0.5,
                // ease: "elastic.inOut(1.5)",
            });
        }
    },[locationDivView])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(pickUp, destination);
    }
    
  return (
    <>
      <main className="h-screen w-screen relative">
        <section className="absolute top-10">
          <LogoNavbar />
        </section>
        <section className="h-full w-full bg-red-500">
          <img
            src="https://i.sstatic.net/gtiI7.giff"
            alt=""
            className="h-full w-full object-cover"
          />
        </section>
        <section className="h-screen w-full flex flex-col justify-end absolute top-0 rounded-t-xl">
          <div className="h-[25%] shadow-lg pt-5  bg-white rounded-t-xl">
                {locationDivView? (
                    <IoIosArrowDown onClick={()=>{
                        setLocationDivView(false);
                    }} className="text-2xl w-20 mx-auto"/>
                ): null}
            <h1 className="text-4xl font-semibold px-5 mt-2 mb-2">
              Find a Trip
            </h1>
            <div className="flex flex-col relative">
              <div className="w-20 bg-black h-2 rounded-lg absolute rotate-90 top-13 left-1"></div>
              <form action="" onSubmit={handleSubmit} className="flex flex-col px-5 gap-5">
              <input
                type="text"
                className="w-full  bg-gray-200 rounded-lg px-10 py-2 text-lg focus:outline-none "
                onClick={()=>{
                    setLocationDivView(true);
                }}
                value={pickUp}
                onChange={(e)=>setPickUp(e.target.value)}
                placeholder="Add a Pick Up location"
              />

              <input
                type="text"
                className="w-full  bg-gray-200 rounded-lg px-10 py-2 text-lg focus:outline-none "
                onClick={()=>{
                    setLocationDivView(true);
  
                }}
                value={destination}
                onChange={(e)=>setDestination(e.target.value)}
                placeholder="Select a Destination"
              />
              </form>
            </div>
          </div>
          <div className={`location-div  w-full bg-white`}>

            <div className="h-full w-full pt-5">
            <div className="flex items-center justify-center mb-4  rounded ">
                <IoLocationSharp className="text-4xl w-20 mx-auto"/>
                <p className="text-xl">Johnathan Doe, 4567 Maple Avenue, Suite 890, Downtown District, Springfield, IL 62704, USA</p>
            </div>
            <div className="flex items-center justify-center mb-4  rounded ">
                <IoLocationSharp className="text-4xl w-20 mx-auto"/>
                <p className="text-xl">Johnathan Doe, 4567 Maple Avenue, Suite 890, Downtown District, Springfield, IL 62704, USA</p>
            </div>
            <div className="flex items-center justify-center mb-4  rounded ">
                <IoLocationSharp className="text-4xl w-20 mx-auto"/>
                <p className="text-xl">Johnathan Doe, 4567 Maple Avenue, Suite 890, Downtown District, Springfield, IL 62704, USA</p>
            </div>
            </div>
                
          </div>

        </section>
      </main>
    </>
  );
}

export default UserHome;
