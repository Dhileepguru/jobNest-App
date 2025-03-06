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
      id:job.id,
      postedOn: job.data().postedOn.toDate(),
     })
    });
    setJobs(tempJobs);
  }
  useEffect(()=>
  {
    fetchData();
  },[])

  const fetchJobsCustom = async (jobCriteria) => {
    try {
      let jobsRef = collection(db, "jobs");
      let q = jobsRef;
      if (jobCriteria.title) q = query(q, where("title", "==", jobCriteria.title));
      if (jobCriteria.type) q = query(q, where("type", "==", jobCriteria.type));
      if (jobCriteria.location) q = query(q, where("location", "==", jobCriteria.location));
      if (jobCriteria.experience) q = query(q, where("experience", "==", jobCriteria.experience));
  
      const querySnapshot = await getDocs(q);
      const tempJobs = querySnapshot.docs.map((job) => ({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      }));
  
      setJobs(tempJobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };
  
  
  
  return (
    <>
      <NavBar />
      <Header />
      <SearchBar  fetchJobsCustom={fetchJobsCustom}/>
      {jobs.map((job)=> // title={job.title}  company={job.company} type={job.type} experience={job.experience} location={job.location} skills={job.skills} jobLinks={job.jobLinks}
        <JobCard key={job.id} {...job}/>//spread operator
      )}
    </>
  )
}

export default App
