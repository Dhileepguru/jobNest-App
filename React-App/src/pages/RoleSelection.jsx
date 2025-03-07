import { Link } from "react-router-dom";

function RoleSelection()
{
    
    return (
        <>
        <style>
        {`
            body{
                background-color:black;
                background-size: cover;
                background-position:center;
                height: 92vh;
                color:white;
            }
        `}
    </style>

        <div>
          <img className=" flex w-55" src="/images/Logo2.png"></img>
            <div className="flex flex-col justify-center items-center mt-30">
              <h1 className="text-7xl flex  font-extrabold">I am a...</h1> 
                <div className="flex gap-10 mt-10 text-6xl ">
                 <Link className="flex w-100 h-25  text-center border border-0  px-15 py-4 rounded-md bg-blue-500" to="/app">Candidate</Link>
                 <Link className="flex w-100 h-25 text-center border border-0 px-20 py-4  bg-red-400 rounded-md" to="/">Recruiter</Link>
                </div>
            
            </div>
        </div>
            
        </>
        
    );
}
export default RoleSelection;