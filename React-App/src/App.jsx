import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/Navbar'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import JobCard from './components/JobCard'
import JobData from './components/JobDummyData'


import { collection, query, where, getDocs, orderBy } from "firebase/firestore"; 
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

  const CustomFetchData = async (jobCriteria) => {
    console.log("Fetching jobs with criteria:", jobCriteria);

    const tempJobs = [];
    const jobsRef = collection(db, "jobs");

    // Construct the query dynamically
    let q = query(jobsRef);

    if (jobCriteria.type) {
        q = query(q, where("type", "==", jobCriteria.type));
    }
    if (jobCriteria.experience) {
        q = query(q, where("experience", "==", jobCriteria.experience));
    }
    if (jobCriteria.location) {
        q = query(q, where("location", "==", jobCriteria.location));
    }
    if (jobCriteria.title) {
        q = query(q, where("title", "==", jobCriteria.title));
    }

    console.log("Final Query: ", q);

    const req = await getDocs(q);
    console.log("Query Snapshot: ", req.empty ? "No results found" : req.docs.length);

    req.forEach((job) => {
        tempJobs.push({
            ...job.data(),
            id: job.id,
            postedOn: job.data().postedOn.toDate(),
        });
    });

    setJobs(tempJobs);
};


  return (
    <>
      <NavBar />
      <Header />
      <SearchBar CustomFetchData={CustomFetchData} />
      {jobs.map((job)=> // title={job.title}  company={job.company} type={job.type} experience={job.experience} location={job.location} skills={job.skills} jobLinks={job.jobLinks}
        <JobCard key={job.id} {...job}/>//spread operator
      )}
    </>
  )
}

export default App
