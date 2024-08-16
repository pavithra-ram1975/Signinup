import React from "react";
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";


const App =()=>{
  return(
    <BrowserRouter>
    <Routes>
     
      <Route path="/" element={<Signup/>}></Route>
      <Route path="/Login" element={<Signin/>}></Route> 
 
    </Routes>
    </BrowserRouter>
  )
}
export default App;