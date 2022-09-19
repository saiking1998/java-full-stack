

let arraySize = document.querySelector("#arr_sz")

arraySize.addEventListener("input",()=>{
    createNewArray(parseInt(arraySize.value))
})


let array = []
createNewArray()
function createNewArray(noOfBars = 50){

    deleteChild()
    array=[]

    for(let i=0;i<noOfBars;i++){
        array.push(Math.floor(Math.random()*250)+1)
    }

    const bars = document.querySelector("#bars")
    for(let i=0;i<noOfBars;i++){
        const bar = document.createElement("div")
        bar.style.height = `${array[i]*2}px`
        bar.classList.add("bar")
        bar.classList.add("flex-item")
        bar.classList.add(`barNo${i}`)
        bars.appendChild(bar)
    }
}

function deleteChild(){
    const bars = document.querySelector("#bars")
    bars.innerHTML=''
}

const newarray = document.querySelector(".newarray")
newarray.addEventListener("click",function(){
    enablesorting()
    enablesizeslider()
    createNewArray(arraySize.value)
})
let delay = 300;
let delayelement = document.querySelector("#arr_sp")
delayelement.addEventListener("input", ()=>{
     
    delay = 320-parseInt(delayelement.value)
})













//utility functions

function waitforme(milliseconds) {
    return new Promise (resolve=>{
        setTimeout(()=>{
            resolve('')
        },milliseconds)
    })

}
function swap(ele1,ele2) {
    let temp = ele1.style.height;
    ele1.style.height = ele2.style.height
    ele2.style.height = temp

}
function disiablesorting(){
    document.querySelector(".bubblesort").disabled=true
    document.querySelector(".insertionsort").disabled=true
    document.querySelector(".mergesort").disabled=true
    document.querySelector(".selectionsort").disabled=true
}
function enablesorting(){
    document.querySelector(".bubblesort").disabled=false
    document.querySelector(".insertionsort").disabled=false
    document.querySelector(".mergesort").disabled=false
    document.querySelector(".selectionsort").disabled=false
}
function disablesizeslider(){
    document.querySelector("#arr_sz").disabled=true
}
function enablesizeslider(){
    document.querySelector("#arr_sz").disabled=false
}
function  disablearraybnutton(){
    document.querySelector(".newarray").disabled=true
}
function  enablearraybnutton(){
    document.querySelector(".newarray").disabled=false
}