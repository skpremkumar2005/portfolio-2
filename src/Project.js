import React from 'react'
import Projectitems from './projectitems'
import Projectwell from './Projectwell'
import projectitems from './projectitems'
import { useNavigate } from 'react-router-dom'
const Project = () => {
  const navigate=useNavigate();
  return (
    <div className='box'>
    { Projectitems.map((Projectitems,idx)=>
    <div key={idx}  >
    <img style={{height:100,width:150,borderRadius:10,float:"initial"}}
     src={Projectitems.image} onClick={()=>navigate("/project/"+idx)}/>
    <h2 style={{color:"white"}}>{Projectitems.name}</h2>
    
   </div>)} 
    </div>
  )
}

export default Project