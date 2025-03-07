import dayjs from'dayjs';
function JobCard(props)
{   
    let arraySkills=["Javascript","React js" ,"Nodejs"];
    let Date1 = dayjs(Date.now());
    let  dateDiff = Date1.diff(dayjs(props.postedOn), 'day');

    
        return(
        <>
        <style>
            {`
            body{
             background-image: url('/images/Background.png');
             background-size: cover;
             background-position:center;
             height: 92vh;
             }`

            }
        </style>
        <div className= " hover:border-blue-500 hover:translate-y-1 hover:scale-103 bg-white mx-40 mb-4 rounded-md  border-amber-200">
            <div className='flex justify-between items-center px-6 py-4 border-black shadow-lg  '>
             <div className='flex flex-col items-start gap-3'>
                <h1 className='text-lg font-semibold'>{props.title}</h1>
                <p>{props.type} - {props.experience || " Not Specified"} - {props.location}</p>
                 <div className='flex items-center gap-2'>
                    {props.skills.map((ele)=>
                        <p key={ele} className='text-gray-500 py-1 px-2 border rounded-md border-black'>{ele}</p>
                    )}
                 </div>
                 </div>
                 <div className='flex items-center gap-4'>
                   <p className='text-gray-500 mt-5'>Posted {dateDiff } Days Ago</p>
                    <button href={props.jobLinks} className="text-blue-500 mt-4 border rounded-md py-2 px-10">Apply</button>
                </div>
            </div>
        </div>
        </>
        )
    }
    export default JobCard

    