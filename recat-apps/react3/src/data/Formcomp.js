import React ,{useState,useEffect}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Button,ProgressBar,Form} from 'react-bootstrap';
function Formcomp() {
    const [login,setLogin] =useState({
         email:"",
         password:"",
         checkbox:false,
    });
    useEffect(() => {
        console.log(login)
    },[login])
   
  return (
    <div>
        
    
    <Form style={{width:'50%' ,margin:'5% auto'}}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={login.email} onChange={(e)=>setLogin({...login,email:e.target.value})}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={login.password} onChange={(e)=>setLogin({...login,password:e.target.value})}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="I agree to the terms and conditions" defaultChecked={login.checkbox} onChange={(e)=>setLogin({...login,checkbox:e.target.checked})}/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

    </div>
  )
}

export default Formcomp