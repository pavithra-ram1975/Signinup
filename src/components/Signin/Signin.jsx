import React, { useState } from "react";
import Lottie from 'lottie-react';
import animationData from '../lotties/loginlottie.json';
import './Signin.css';

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="Login-container">
            <div className="Login-Body">
                <Lottie 
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    style={{ height: 200, width: 200, marginBottom: '20px',marginLeft:'60px' }} 
                />
                <h2>Login</h2>

                <form>
                    <input  
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>

                </form>
                <div className="Already">
                {/* <p>Already have an account!<button>Login</button></p> */}
                <p>Don't have an account!  <a href="/">Signup</a></p>
            </div>
            </div>
        </div>
    );
};

export default Signin;
