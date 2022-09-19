import React,{useState} from 'react';
import { FaAngleDoubleRight } from "react-icons/fa";
import './App.css';
const url ="https://course-api.com/react-tabs-project";

function App() {

  const [jobs,setJobs]=useState([])
  const [value,setValue] = useState(0 )
  const [loading,setLoading] = useState(true)
  const fetchJobs = async () =>{
    const responce = await fetch(url);
    const newJobs = await responce.json();
    setJobs(newJobs)
    setLoading(false)

  }

  useState(()=>{
    fetchJobs()
  },[]);
  if(loading) {
    return(
<section className="section loading">
  <h1>....Loading....</h1>
</section>

    );
  }
  const {company,dates,duties,title} = jobs[value]
  return (
   <section className="section">
         <div className="title">
           <h2>experience</h2>
           <div className="underline">


           </div>

         </div>

           <div className="jobs-center">

             <div className="btn-container">
               {
                 jobs.map((item,index)=>{
                   return(
                     <button className={`job-btn ${index === value && "active-btn"}`}
                     key={item.id}
                     onClick={()=>setValue(index)}
                     >
                       {item.company}
                     </button>
                   )
                 })
               }
             </div>
             <article className="job-info">
               <h3>{title}</h3>
               <h4>{title}</h4>
               <p className="job-date">{dates}</p>
               {
                 duties.map((duty,index)=>{
                   return(
                     <div className="job-desc" key ={index}>
                       <FaAngleDoubleRight className="job-icon"/>
                       <p>{duty}</p>
                     </div>
                   )
                 })
               }
               </article>
           </div>
           <button type="button" className="btn">Read More</button>
   </section>
  );
}

export default App;
