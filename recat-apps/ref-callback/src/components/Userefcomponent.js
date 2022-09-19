import React,{useState,useRef,useEffect} from 'react'

function Userefcomponent() {
    const [Input,setInput] = useState("")
    // const [count,setCount] = useState(0)
    // useEffect(()=>{
    //        setCount(count+1)
    // },[Input.length])

    const count = useRef(0);
    useEffect(()=>{
      count.current=count.current+1;
    })
  return (
    <div>
         <input type="text" value={Input} onChange={(e)=>setInput(e.target.value)}/>
        <h1>Render count :{count.current}</h1>
    </div>
  )
}
const Userefcomp2 = ()=>{
  const inputEle = useRef();
  const FocusedElement =()=>{
  inputEle.current.focus();  
  }
    return (
    <>
    <input type="text" ref ={inputEle}/>
    <button onClick={FocusedElement}>Focus Input</button>
    </>
  )
}


export default Userefcomp2