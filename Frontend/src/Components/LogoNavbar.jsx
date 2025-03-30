import React from "react";
import Logo from "../assets/BlackLogo.png"
import { Link } from "react-router-dom";

function LogoNavbar() {
  return (
    <>
      <nav className="h-[10vh] flex items-center w-full overflow-hidden">
        <Link to={"/"}>
        <img src={Logo} alt="" className="h-[22vh] -ml-5" />
        </Link>
      </nav>
    </>
  );
}

export default LogoNavbar;
