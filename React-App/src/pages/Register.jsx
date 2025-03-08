import { Link } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase.config.js"; 
import { createUserWithEmailAndPassword } from "firebase/auth";



function Register() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let accCreated =async(e)=> {
    e.preventDefault();
    try
    {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account Created");
      window.location.href="/RoleSelection";
    }
    catch(e)
    {
      console.log(e);
      alert("Error in creating account");  
    }
  }

  return (
    <>
      <style>
        {`
          body {
            background-color:black;
            background-size: cover;
            background-position: center;
            height: 100vh;
            
          }
        `}
      </style>

      <div className="flex justify-center items-center h-screen">
        <div className="flex w-[800px] h-[580px] rounded-2xl bg-white border shadow-lg">
          
          <div className="w-1/2 flex flex-col justify-center px-10">
            <h1 className="text-5xl font-black italic mb-8">Register</h1>

            <form onSubmit={accCreated} className="flex flex-col gap-4">
              <input
                className="border-0 py-2 border-b-2 px-2 focus:outline-none focus:border-blue-500"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
              <input
                className="border-0 py-2 border-b-2 px-2 focus:outline-none focus:border-blue-500"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <button
                type="submit"
                className="bg-blue-300 text-center text-white rounded-md border w-full h-10 px-5 py-1.5 mt-6"
              >
                Register
              </button>
            </form>

            <p className="text-gray-600 mt-4 text-sm">
              Already have an account?
              <Link to="/login" className="text-blue-500 ml-1">
                Login
              </Link>
            </p>
          </div>

          <div className="w-1/2 flex justify-center items-center p-5">
            <img
              src="/images/Register.png"
              className="w-full h-auto object-cover"
              alt="Register"
            />
          </div>

        </div>
      </div>
    </>
  );
}

export default Register;
