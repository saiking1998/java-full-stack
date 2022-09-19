import React,{useState} from 'react';
import data from './components/data'
import './App.css';

function App() {
  const[count,setCount] = useState(0)
  const [text,setText]=useState([])
  const handleLoremIpsum =(e)=>{
    e.preventDefault()
    let amount = parseInt(count)
    setText(data.slice(0, amount))
  }
  return (
   <section className="section-center">
     <h3>generate lorem Ipsum of your choice</h3> 
     <form className="lorem-form" onSubmit={handleLoremIpsum}>

       <label htmlFor="amount">paras:</label>
       <input type="number" name="amount" id="amount" 
       value ={count}
       onChange={(e)=>(setCount(e.target.value))}
       min={0} max ={10}/>
       <button className="btn">generate</button>
     </form>
        <article className="lorem-text">
               {
                 text.map((item,index)=>{
                   return (
                    <p key={index}>{item}</p>
                   )
                 })
               }
        </article>
   </section>
  );
}

export default App;
