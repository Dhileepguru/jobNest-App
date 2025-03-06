import dayjs from'dayjs';
function JobCard()
{
    let arraySkills=["Javascript","React js" ,"Nodejs"];
    let Date1 = dayjs(Date.now());
    let dateDiff= Date1.diff('2025-3-4','day');


        return(
        <div className= "bg-white mx-40 mb-4 rounded-md  border-amber-200">
            <div className='flex justify-between items-center px-6 py-4 border-black shadow-lg  hover:border-blue-500 hover:translate-y-1 hover:scale-103 '>
             <div className='flex flex-col items-start gap-3'>
                <h1>Frontend Developer - Amazon</h1>
                <p>Full Time - Fresher - In-Office</p>
                 <div>
                    {arraySkills.map((ele)=>
                        <p>{ele}</p>
                    )}
                 </div>
                 </div>
                 <div>
                   <p>Posted {dateDiff}</p>
                    <button className=" bg-gray-700 text-white">Apply</button>
                </div>
            </div>
        </div>
        )
    }
    export default JobCard

    