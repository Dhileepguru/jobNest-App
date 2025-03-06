import { useState } from 'react'


import './App.css'
import NavBar from './components/Navbar'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import JobCard from './components/JobCard'
import JobData from './components/JobDummyData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Header />
      <SearchBar />
      {JobData.map((job)=> // title={job.title}  company={job.company} type={job.type} experience={job.experience} location={job.location} skills={job.skills} jobLinks={job.jobLinks}
        <JobCard key={job.id} {...job}/>//spread operator
      )}
    </>
  )
}

export default App
