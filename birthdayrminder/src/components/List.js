import React from 'react'

const List = ({ people,DeleteThis }) => {
    
    return (
        <>
            {people.map((person,index) => {
                const { id, name, age, image } = person;
                return (
                    <div key={index} className="person">

                       <img src={image} alt={name}></img>
                       <div className="name">
                           <h4>{name}{"         "}
                           <i style={{color: 'red',marginLeft:'20px'}} onClick={()=>DeleteThis(id)} className="fa-solid fa-x"></i>
                           </h4>
                           <p>{age} Years </p>
                          
                           
                           </div>
                    </div>
                )
            })}

        </>
    )
}
export default List;