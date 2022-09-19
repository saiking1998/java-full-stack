import React,{useState,useEffect} from 'react'
import './post.css';
import {Card,Button,Spinner} from 'react-bootstrap';
import axios from 'axios'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faThumbsUp,faComment } from '@fortawesome/free-solid-svg-icons'
function Post() {
  const button = <FontAwesomeIcon icon={faThumbsUp} />
  const comment = <FontAwesomeIcon icon={faComment} />
  const [posts,setPost]=useState([])
  useEffect(() =>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) =>{
      setPost(response.data)
      
    }).catch((error) =>{
      console.error(error)
    })

  },[])
  return (
    <div className="div">
{
posts.length?  posts.map(post=>(
  
        
    <Card className="post" key={post.id}>
  
  <Card.Img variant="top" src="https://res.cloudinary.com/practicaldev/image/fetch/s--V0ekZaVJ--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/h68x0up43hmknl5tjcww.jpg" />
  <Card.Header>User {post.id}</Card.Header>
  <Card.Body>
    <Card.Title> {post.title}</Card.Title>
    <Card.Text>
      {post.body}
    </Card.Text>
  
    <Button className="post-btn"variant="primary">{button}</Button>
    <Button variant="primary"className="post-btn comment">{comment}</Button>
    
  </Card.Body>
  <Card.Footer>
      <small className="text-muted">Last updated {Math.floor(Math.random()*60)} mins ago</small>
    </Card.Footer>
</Card>
    
  )):<Spinner className="spinner"animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
}



    </div>
  )
}

export default Post