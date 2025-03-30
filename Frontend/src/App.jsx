import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import UserLogin from "./Pages/UserLogin"
import UserSignUp from "./Pages/UserSignUp";

function App() {

  return (
   <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/user-login" element={<UserLogin/>}/>
      <Route path="/user-signup" element={<UserSignUp/>}/>
    </Routes>
   </>
  )
}

export default App
