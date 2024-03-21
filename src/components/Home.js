import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate=useNavigate()
  const handleclick1=()=>{
navigate("/signin")
  }
  const handleclick2=()=>{
    navigate("/signup")
      }
  return (
    <div>
      <button onClick={handleclick2}>SignUp</button>
      <br></br>
      <button onClick={handleclick1}>SignIN</button>
    </div>
  )
}

export default Home