const people = require('./data')
const mypromise = (id) => {
          return new Promise((resolve, reject) =>{
              const person = people.filter((peop)=>{
                  peop.id === id
              })
              if(person.lenght){
                  setTimeout(() =>{
                    resolve(person[0].name)
                  },3000)
                
              }else{
                  setTimeout(() =>{
                    reject("no person found")
                  },8000)
                  
              }
          })
}
const main = async () => {
    try{
        const answ = await mypromise(1)
        const err = await mypromise(2)
        console.log(answ,err)
    }
    catch(err){
        console.log("this is an error")
          
    }
   
    
}
main()