import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import UserLogin from "./Pages/UserLogin"
import UserSignUp from "./Pages/UserSignUp";
import CaptionLogin from "./Pages/CaptionLogin";
import CaptionSignUp from "./Pages/CaptionSignUp";

function App() {

  return (
   <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/user-login" element={<UserLogin/>}/>
      <Route path="/user-signup" element={<UserSignUp/>}/>
      <Route path="/caption-login" element={<CaptionLogin/>}/>
      <Route path="/caption-signup" element={<CaptionSignUp/>}/>
    </Routes>
   </>
  )
}

export default App
