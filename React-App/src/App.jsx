import { useState } from 'react'


import './App.css'
import NavBar from './components/Navbar'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import JobCard from './components/JobCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Header />
      <SearchBar />
      <JobCard />
    </>
  )
}

export default App
