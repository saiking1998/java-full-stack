import React from "react";

const ReactMemo = () => {
    let check = false;

    const [skill,setSkill] = React.useState("");
    const [skills,setSkills] = React.useState(["HTML","CSS","JavaScript","React"])

    const [error,setError] = React.useState("")

    const handleChangeInput = (e) => {
        if(e.target.value.length<=5){
            setError("The length must be greater than 5")
        }else{
            setError("")
        }
        setSkill(e.target.value)
    }

    const handleAddSkill = () => {
          skills.forEach((ele,i)=>{
              if(ele== skill){
                 
                  check = true;
              }
          })
          if(check == true){
            window.alert("sorry thst element already exists !!!!")

          }else{
            setSkills(skills.concat(skill))
            check = false

          }
        
    }
    return(
        <>
            <input type="text" onChange={handleChangeInput}/>
            {
                error.length ? <small>{error}</small> :null
            }
            <button onClick={handleAddSkill}>Add Skill</button>
            <SkillList skills={skills} />
        </>
    )
}
const SkillList = React.memo(({skills}) => {
    console.log("rerendering")
    return(
        <ul>
            {
                skills.map((skill,i)=>(<li key={i}>{skill}</li>))
            }
        </ul>
    )
})

// const SkillList = ({skills}) => {
//     console.log("rerendering")
//     return(
//         <ul>
//             {
//                 skills.map((skill,i)=>(<li key={i}>{skill}</li>))
//             }
//         </ul>
//     )
// }

export default ReactMemo;