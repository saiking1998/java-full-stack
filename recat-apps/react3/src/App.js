
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Button,ProgressBar} from 'react-bootstrap';
import React,{useState} from 'react';
import TableData from './data/TableData';
import Increment from './data/Increment'
import Formcomp from './data/Formcomp'


function App() {
  
  // const [show,setShow]= useState(10);
  return (
    <Container className="App">
      {/* {show &&  <TableData />}
      {show}
      <Button variant="warning" onClick={()=>setShow(show+1)}>{show}</Button>
      
     <ProgressBar now={show} label={`${show}%`} />
     <Increment show={show} setShow={setShow}/> */}
     <Formcomp />
     
    </Container>
  );
}

export default App;
