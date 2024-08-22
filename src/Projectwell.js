import React from 'react'
import projectitems from './projectitems'
import { useParams } from 'react-router-dom'
import "./Projectwell.css"
const Projectwell = () => {
    const {id}=useParams();
    const project =projectitems[id]
  return (
    <div>
    
    
    <h2 style={{color:"white"}}>{project.name}</h2>
    <div className='Box' >
    <img style={{height:200,width:350,borderRadius:10,float:"initial"}} src={project.image}/>
    <img style={{height:200,width:350,borderRadius:10,float:"initial"}} src={project.image2}/>
    <img style={{height:200,width:350,borderRadius:10,float:"initial"}} src={project.image3}/>
    <img style={{height:200,width:350,borderRadius:10,float:"initial"}} src={project.image4}/>
    <img style={{height:200,width:350,borderRadius:10,float:"initial"}} src={project.image5}/>
    <img style={{height:200,width:350,borderRadius:10,float:"initial"}} src={project.image6}/>
    <img style={{height:200,width:350,borderRadius:10,float:"initial"}} src={project.image7}/>
    <img style={{height:200,width:350,borderRadius:10,float:"initial"}} src={project.image8}/>
    <img style={{height:200,width:350,borderRadius:10,float:"initial"}} src={project.image9}/>
    
   </div>
   <h3 style={{color:"white"}}>{project.description}</h3>
   </div>
  )
}

export default Projectwell