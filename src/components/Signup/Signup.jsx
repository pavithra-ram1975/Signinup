import  { React,useState } from "react";
// import {useNavigate} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Signup.css'
import Lottie from 'lottie-react';
import animationData from '../lotties/loginlottie.json';


const Signup=()=>{
    const navigate= useNavigate();
    const[username,setUsername]=useState('')
   const[email,setEmail]=useState('')
   const[password,setPassword]=useState("")
//    const handleSignup= async(e)=>{
//     e.preventDefault();
//     try {
//         if (email === '' || password === '') {
//               alert('Please fill the required fields.');
//               return;
//         }
//         const payload = {
//           email: email,
//           password: password
//         };
//         console.log(payload);
//    }
//    catch (error) {
//     console.error(error.response?.data?.message || "Login failed");
//   }
// }

    return(
        <div className="Signup-container">
            <div className="Signup-Body">
            <Lottie 
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    style={{ height: 100, width: 100, marginBottom: '20px',marginLeft:'110px' }} 
                />
                <h2>Signup</h2>
                <form>
                    <input 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                     <input 
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    />
                     <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    <button type="submit" onClick={()=>navigate("/Home")}>Signup</button>

                </form>
                <div className="Already">
                {/* <p>Already have an account!<button>Login</button></p> */}
                <p>Already having an account!  <a href="/Login">Signin</a></p>
            </div>
            </div>


        </div>
    )
}
export default Signup;