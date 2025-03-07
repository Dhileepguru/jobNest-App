import { Link } from "react-router-dom";
import '../login.css'
import { useState } from 'react';

function Login()
{
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
   
    const handleLogin=(e) => {
        e.preventDefault();
        alert("Account Created");
    }
    function NavApp(){
        window.location.href="/app";
    }

    return(
        <>
            <style>
                {`
                    body{
             background-image: url('/images/bg.jpg');
             background-size: cover;
             background-position:center;
             height: 92vh;
             }
                `}
            </style>
            
            <div className="flex justify-center items-center h-screen">
                <div className="flex w-[800px] h-[580px] rounded-2xl bg-white border shadow-lg">
                    
                    
                    <div className="w-1/2 flex justify-center items-center p-5">
                        <img src="/public/images/Login.png" className="w-full h-auto object-cover" alt="Login"/>
                    </div>

                    
                    <div className="w-1/2 flex flex-col justify-center px-10">
                        <h1 className="text-5xl font-black italic mb-8">Sign up</h1>
                        
                        <form onSubmit={handleLogin} className="flex flex-col gap-4">
                            <input className="border-0 py-2 border-b-2 px-2 focus:outline-none focus:border-blue-500" 
                                type="email" value={email}
                                onChange={(e)=>setEmail(e.target.value)} placeholder="Email" required
                            />
                            <input className="border-0 py-2 border-b-2 px-2 focus:outline-none focus:border-blue-500"
                                type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}
                            />
                            <button onClick={NavApp} type="submit" className="bg-blue-300 text-center text-white rounded-md border w-full h-10 px-5 py-1.5 mt-6">
                                Sign Up
                            </button>
                        </form>

                        <p className="text-gray-600 mt-4 text-sm">Don't have an account?
                            <Link to="/register" className="text-blue-500 ml-1">Register</Link>
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login;
