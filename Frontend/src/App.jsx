import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"

import UserSignUp from "./Pages/UsersPages/UserSignUp";
import UserLogin from "./Pages/UsersPages/UserLogin";
import CaptionLogin from "./Pages/CaptionPages/CaptionLogin";
import CaptionSignUp from "./Pages/CaptionPages/CaptionSignUp";
import UserHome from "./Pages/UsersPages/UserHome";

function App() {

  return (
   <>
    <Routes>
      <Route path="/" element={<Home/>} />

      {/* User-Routes  */}
      <Route path="/user-login" element={<UserLogin/>}/>
      <Route path="/user-signup" element={<UserSignUp/>}/>
      <Route path="/user-home" element={<UserHome/>}/>


      {/* Caption-Routes  */}
      <Route path="/caption-login" element={<CaptionLogin/>}/>
      <Route path="/caption-signup" element={<CaptionSignUp/>}/>
    </Routes>
   </>
  )
}

export default App
