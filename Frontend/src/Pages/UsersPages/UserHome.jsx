import React, { useState } from "react";
import LogoNavbar from "../../Components/LogoNavbar";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { IoIosArrowDown } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";

function UserHome() {
  const locations = [
    "Johnathan Doe, 4567 Maple Avenue, Suite 890, Downtown District, Springfield, IL 62704, USA",
    "Johnathan Doe, 4567 Maple Avenue, Suite 890, Downtown District, Springfield, IL 62704, USA",
    "Johnathan Doe, 4567 Maple Avenue, Suite 890, Downtown District, Springfield, IL 62704, USA",
  ];
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [locationDivView, setLocationDivView] = useState(false);
  const [vechilePanel, setVechilePanel] = useState(false);

  useGSAP(() => {
    if (locationDivView) {
      gsap.to(".location-div", {
        height: "70%",
        duration: 0.5,
        // ease: "elastic.inOut(1.5)",
      });
    } else {
      gsap.to(".location-div", {
        height: "0%",
        duration: 0.5,
        // ease: "elastic.inOut(1.5)",
      });
    }
  }, [locationDivView]);

  // useGSAP(() => {
  //   if (locationDivView) {
  //     gsap.to(".vechile-panel", {
  //       height: "100%",
  //       duration: 0.5,
  //       // ease: "elastic.inOut(1.5)",
  //     });
  //   } else {
  //     gsap.to(".vechile-panel", {
  //       height: "0%",
  //       duration: 0.5,
  //       // ease: "elastic.inOut(1.5)",
  //     });
  //   }
  // }, [vechilePanel]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(pickUp, destination);
  };

  return (
    <>
      <main className="h-screen w-[100%] relative">
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
          <div className="min-h-[25%] shadow-lg pt-5 bg-white rounded-t-xl md:pb-5">
            {locationDivView ? (
              <IoIosArrowDown
                onClick={() => {
                  setLocationDivView(false);
                }}
                className="text-2xl w-20 mx-auto"
              />
            ) : null}
            <h1 className="text-4xl font-semibold px-5 mt-2 mb-2">
              Find a Trip
            </h1>
            <div className="flex flex-col relative">
              <div className="w-20 bg-black h-2 rounded-lg absolute rotate-90 top-13 left-1"></div>
              <form
                action=""
                onSubmit={handleSubmit}
                className="flex flex-col px-5 gap-5"
              >
                <input
                  type="text"
                  className="w-full  bg-gray-200 rounded-lg px-10 py-2 text-lg focus:outline-none "
                  onClick={() => {
                    setLocationDivView(true);
                  }}
                  value={pickUp}
                  onChange={(e) => setPickUp(e.target.value)}
                  placeholder="Add a Pick Up location"
                />

                <input
                  type="text"
                  className="w-full  bg-gray-200 rounded-lg px-10 py-2 text-lg focus:outline-none "
                  onClick={() => {
                    setLocationDivView(true);
                  }}
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Select a Destination"
                />
              </form>
            </div>
          </div>
          <div
            className={`location-div w-full bg-white ${
              locationDivView ? "" : "hidden"
            }`}
          >
            <div className="h-full w-full pt-5 md:pt-10 md:w-[60%] md:mx-auto">
              {locations.map((items, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex items-center justify-center gap-5 p-5 rounded-lg cursor-pointer"
                    onClick={() => {
                      setVechilePanel(true);
                      setLocationDivView(false);
                    }}
                  >
                    <IoLocationSharp className="text-4xl w-20 mx-auto" />
                    <p className="text-xl">{items}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section
          className={`vechile-panel
           fixed  
           z-10 w-full bg-white rounded-t-xl transition-all duration-300 ease-in-out ${vechilePanel ? "bottom-0" : "-bottom-full"}`}
        >
          <div className="w-full bg-white px-2">
            {vechilePanel ? (
              <IoIosArrowDown
                onClick={() => {
                  setVechilePanel(false);
                }}
                className="text-2xl w-20 mx-auto"
              />
            ) : null}
            <h1 className="text-4xl font-semibold px-5 mt-2 mb-2">
              Choose a Vechile
            </h1>
            <div className="flex item-center justify-around border-2 rounded-lg mb-2 cursor-pointer">
              <img
                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png"
                alt=""
                className="h-25 w-25 object-cover"
              />
              <div className="">
                <p className="flex items-center gap-1">
                  {" "}
                  <span className="text-lg font-semibold">DriftlyGo</span>{" "}
                  <IoPersonSharp />4{" "}
                </p>
                <p>2 mins away - 15:24</p>
                <p>Affordable,Compact rides</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">₹154.20</h2>
              </div>
            </div>
            <div className="flex item-center justify-around border-2 rounded-lg mb-2 cursor-pointer">
              <img
                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
                alt=""
                className="h-25 w-25 object-cover"
              />
              <div className="">
                <p className="flex items-center gap-1">
                  {" "}
                  <span className="text-lg font-semibold">Moto</span>{" "}
                  <IoPersonSharp />1{" "}
                </p>
                <p>3 mins away - 15:25</p>
                <p>Affordable,Motorcycles rides</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">₹60.28</h2>
              </div>
            </div>
            <div className="flex item-center justify-around border-2 rounded-lg mb-2 cursor-pointer">
              <img
                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
                alt=""
                className="h-25 w-25 object-cover"
              />
              <div className="">
                <p className="flex items-center gap-1">
                  {" "}
                  <span className="text-lg font-semibold">Auto</span>{" "}
                  <IoPersonSharp />3{" "}
                </p>
                <p>4 mins away - 15:26</p>
                <p>Affordable,Safe&Comfy rides</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">₹90.28</h2>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default UserHome;
