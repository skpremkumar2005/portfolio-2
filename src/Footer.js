import { red } from '@material-ui/core/colors';
import React from 'react'
import Twitter from '@material-ui/icons/Twitter'
import LinkedIn from '@material-ui/icons/LinkedIn'
import FaceBook from '@material-ui/icons/Facebook'
 import Insta from '@material-ui/icons/Instagram'
const Footer = () => {
    const date=new Date(2022);

  return (
    <div style={{backgroundColor:"yellow",padding:20}}><div style={{backgroundColor:"yellow",padding:20,display:'flex',justifyContent:"center",gap:30,fontSize:40,}}>
        <Twitter style={{fontSize:40}}/>
        <LinkedIn style={{fontSize:40}} />
        <FaceBook style={{fontSize:40}}/>
        <Insta style={{fontSize:40}}/>
    </div><p>&copy;{date.getYear(2000)}</p></div>
  )
}

export default Footer