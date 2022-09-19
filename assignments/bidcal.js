let displayxyz = document.getElementById("display")
let buttonsxyz = Array.from(document.getElementsByClassName("btn"))

function clickingxyz(btnxyz){
    btnxyz.addEventListener("click",(xyz)=>{
    switch(xyz.target.innerText){
        case '←':
            displayxyz.innerText = displayxyz.innerText.slice(0,-1)
            break
        case 'C':
            displayxyz.innerText=""
            break
        case '=' :
            displayxyz.innerText = eval(displayxyz.innerText)
            break
            default :
            displayxyz.innerText = display.innerText  + xyz.target.innerText
            break
    }
})
}
buttonsxyz.map(abcdxyz=>clickingxyz(abcdxyz))