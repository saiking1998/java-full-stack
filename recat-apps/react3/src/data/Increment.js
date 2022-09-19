import React,{useState} from 'react'
import {Container,Button,ProgressBar} from 'react-bootstrap';

function Increment({show,setShow}) {
   
  return (
    <div><Button variant="success" onClick={()=>setShow(show+5)}>click to increment</Button></div>
  )
}

export default Increment