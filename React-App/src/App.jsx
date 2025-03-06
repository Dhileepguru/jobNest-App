import { useEffect, useState } from 'react'


import './App.css'
import NavBar from './components/Navbar'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import JobCard from './components/JobCard'
import JobData from './components/JobDummyData'


import { collection, query, where, getDocs } from "firebase/firestore"; 
import { db } from './firebase.config.js'

function App() {
  const [jobs,setJobs]=useState([]);
  const fetchData = async()=>
  {
    const tempJobs=[];
    const q = query(collection(db, "jobs"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((job) => {
     tempJobs.push({...job.data(),
      id:job.id
     })
    });
    setJobs(tempJobs);
  }
  useEffect(()=>
  {
    fetchData();
  },[])
  
  return (
    <>
      <NavBar />
      <Header />
      <SearchBar />
      {jobs.map((job)=> // title={job.title}  company={job.company} type={job.type} experience={job.experience} location={job.location} skills={job.skills} jobLinks={job.jobLinks}
        <JobCard key={job.id} {...job}/>//spread operator
      )}
    </>
  )
}

export default App
