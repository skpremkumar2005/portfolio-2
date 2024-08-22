import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ReorderIcon from "@material-ui/icons/Reorder"
import './Navbar.css'
const Navbar = () => {
  const [bar,setbar]=useState(false);
  const location=useLocation();
  useEffect(()=>{
   setbar(false)
  },[location])
  return (
    <div className='navbar' id={bar?"open":"close"}>
    <div className='togglebutton'>
    <button onClick={()=>setbar((prev)=>!prev)}>
<ReorderIcon/>
    </button>
    </div>
    <div className='links'><Link className='link' to="/">Home</Link><Link className='link' to="/project">Project</Link><Link className='link' to="/exp">Experience</Link></div>
    
    </div>
  )
}

export default Navbar