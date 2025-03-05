function SearchBar()
{
    return(
        <div className="flex gap-4 my-10 justify-center px-10">
            <select className="w-64 bg-zinc-200 rounded-md py-3 pl-4 ml-2">
                <option  value="" disabled hidden selected>Job Role</option>
                <option value="" >Front end</option>
                <option value="" >UI/UX Designer</option>
                <option value="" >Android Developer</option>
                <option value="" >Back End</option>
            </select>
            <select className="w-64 bg-zinc-200 rounded-md py-3 pl-4 ml-2">
                <option value="" disabled hidden selected>Job Type</option>
                <option value="" >Full Time</option>
                <option value="" >Part Time</option>
                <option value="" >Contract</option>
            </select>
            <select className="w-64 bg-zinc-200 rounded-md py-3 pl-4 ml-2">
                <option value="" disabled hidden selected>Location</option>
                <option value="" >Remote</option>
                <option value="" >In-Office</option>
                <option value="" >Hybrid</option>
            </select>
            <select className="w-64 bg-zinc-200 rounded-md py-3 pl-4 ml-2">
                <option value="" disabled hidden selected>Experience</option>
                <option value="" >Fresher</option>
                <option value="" >Junior Level</option>
                <option value="" >Mid Level</option>
                <option value="" >Senior Level</option>
            </select>
            <button className="w-64 bg-gray-700 text-white rounded-md font-bold ">Search</button>
        </div>
        
        
    )
}

export default SearchBar;