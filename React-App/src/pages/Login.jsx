import { useNavigate } from "react-router-dom";


function Login()
{
    return(
        <>
        
        <div className="bg-white h-screen">
            <img className="w-50" src="/images/Logo.png"></img>
            <div>
            <h1 className="mt-20  text-center text-blue-900  text-7xl font-bold text-5xl opacity-90 text-bl ">Find Your Dream Job <br></br>and Step into Job Nest !</h1>
            <p className="text-center mt-10 text-2xl">Explore job listings or find the perfect candidate</p> 
            <div className="flex justify-center mt-10 ">
                <button className="bg-blue-900 text-white font-bold font-sans rounded-3xl flex border py-5 px-10 ml-10 mt-10 mb-10 ">Find Jobs</button>
                <button className="bg-gray-900 text-white flex border  font-bold font-sans rounded-3xl py-5 m-10 px-10">Post a Job</button>
            </div>
        </div>

        </div>
        
        </>
    )
}

export default Login;