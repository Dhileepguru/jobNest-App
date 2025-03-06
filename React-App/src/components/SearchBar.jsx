import { useState } from "react";

function SearchBar(props)
{
    const [jobCriteria ,setjobCriteria]=useState({
        title:"",
        type:"",
        location:"",
        experience:""
    })
    const handleChange =(e)=>
    {
        setjobCriteria((prevState)=>({
            ...prevState,[e.target.name]:e.target.value
        }));
    
    }
    const search =async()=>{
        await props.fetchJobsCustom(jobCriteria);
    }

    return(
        <div className="flex gap-4 my-10 justify-center px-10">
            <select  onChange={handleChange} name="title" value={jobCriteria.title}className="w-64 bg-zinc-200 rounded-md py-3 pl-4 ml-2">
                <option  value="" disabled hidden selected>Job Role</option>
                <option value="Front end" >Front end</option>
                <option value="UI/UX Designer" >UI/UX Designer</option>
                <option value="Android Developer" >Android Developer</option>
                <option value="Back End Developer" >Back End Developer</option>
            </select>
            <select onChange={handleChange} name="type" value={jobCriteria.type} className="w-64 bg-zinc-200 rounded-md py-3 pl-4 ml-2">
                <option value="" disabled hidden selected>Job Type</option>
                <option value="Full Time" >Full Time</option>
                <option value="Part Time" >Part Time</option>
                <option value="Contract" >Contract</option>
            </select>
            <select onChange={handleChange} name="location" value={jobCriteria.location}className="w-64 bg-zinc-200 rounded-md py-3 pl-4 ml-2">
                <option value="" disabled hidden selected>Location</option>
                <option value="Remote" >Remote</option>
                <option value="In-Office" >In-Office</option>
                <option value="Hybrid" >Hybrid</option>
            </select>
            <select  onChange={handleChange}name="experience" value={jobCriteria.experience} className="w-64 bg-zinc-200 rounded-md py-3 pl-4 ml-2">
                <option value="" disabled hidden selected>Experience</option>
                <option value="Fresher" >Fresher</option>
                <option value="Junior Level" >Junior Level</option>
                <option value="Mid Level" >Mid Level</option>
                <option value="Senior Level" >Senior Level</option>
            </select>
            <button onClick={search}className="w-64 bg-gray-700 text-white rounded-md font-bold ">Search</button>
        </div>
        
        
    )
}

export default SearchBar;