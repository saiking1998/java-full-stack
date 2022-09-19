async function insertion(){
    const ele = document.querySelectorAll(".bar")
    for(let i =1;i<ele.length;i++){

        
        for(let j=i-1;j>=0;j--){
            
            ele[j + 1].style.background = "blue"
            if (parseInt(ele[j+1].style.height) < parseInt(ele[j].style.height)) {
                await waitforme(delay)
                 swap(ele[j], ele[j + 1])
                 ele[j].style.background ="green"
             }
             ele[0].style.background = "green"
             ele[j + 1].style.background = "green"
            
            
        }
       
    }
    
    
}
const insertionsortbutton = document.querySelector(".insertionsort")
insertionsortbutton.addEventListener("click", async () => {

    disiablesorting()
    disablesizeslider()
    disablearraybnutton()
    await insertion()
    enablearraybnutton()
    enablesizeslider()
    enablesorting()
})