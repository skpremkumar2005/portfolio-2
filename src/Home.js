import React from 'react'
import "./Home.css"
import Email from "@material-ui/icons/Email"
import Twitter from "@material-ui/icons/Twitter"
import Github from "@material-ui/icons/GitHub"

import img from './profile.jpg'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    
    <div className='home'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"  />
    <center><div className='profile'>
    <div><img src={img}/></div>
    <div className='des'><h2>Hi,I'm Premkumar</h2>
    <p>I am a keen, hard working,
     reliable and excellent time keeper.
      I am a bright and receptive person,
       able to communicate well with people at all levels.
        I am good at working using my own initiative and
         I am flexible in my approach to work duties. 
         I have a good sense of humour and a pleasant approach.</p>
        <center><div className='lin'> <Link className='lin'><Email/></Link>
         <Link><Twitter/></Link>
         <Link><Github/></Link></div></center>
    </div></div></center><div className='frontend'>
      <h2>Front-end</h2>
      <div className='box'><div><i class="fa-brands fa-html5" style={{color:"orange"}}></i><h1>HTML</h1></div>
      <div><i class="fa-brands fa-css3" style={{color:"blue"}}></i><h1>CSS</h1></div>
      <div><i class="fa-brands fa-js" style={{color:"yellow"}}></i><h1>Javascript</h1></div>
      </div>
      <div className='rea'><i class="fa-brands fa-react react" style={{color:"blue"  }}></i><h1>React</h1></div>
    </div><div className='backend'>
      <h2>Back-end</h2>
      <div >
      <div><i class="fa-brands fa-node-js" style={{color:"green"  }}></i><h1>Node.js</h1></div>
      
      </div>
     
    </div><div className='program'>
      <h2>Programing Language</h2>
      <div className='box'><div><i>C++</i></div>
      <div><i class="fa-regular fa-c"></i></div>
      <div><i class="fa-brands fa-js" style={{color:"yellow"}}></i><h1>Javascript</h1></div>
      </div>
      
    </div>
    </div>
  )
}

export default Home