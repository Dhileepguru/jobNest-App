import { Link } from "react-router-dom";

function Home()
{
    return(
        <>
        <div className=" h-screen">
            <div className="flex justify-between">
            <img className=" flex w-50" src="/images/Logo.png"></img>
            <Link  to="/login" className="flex  pt-7 font-bold justify-end mt-5 mr-10 rounded-md ">Sign Up</Link>
            </div>
            <div>
            <h1 className="mt-20  text-center text-blue-900  text-7xl font-bold text-5xl opacity-90 text-bl ">Find Your Dream Job <br></br>and Step into Job Nest !</h1>
            <p className="text-center mt-10 text-2xl">Explore job listings or find the perfect candidate</p> 
            <div className="flex justify-center mt-10 ">
                <Link  to="/app" className="bg-blue-900 text-white font-bold font-sans rounded-3xl flex border py-5 px-10 ml-10 mt-10 mb-10 ">Find Jobs</Link>
                <Link to="/login" className="bg-gray-900 text-white flex border  font-bold font-sans rounded-3xl py-5 m-10 px-10">Post a Job</Link>
            </div>
        </div>

        </div>
        
        </>
    )
}

export default Home;