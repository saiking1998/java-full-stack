const selection = async () => {
    const ele = document.querySelectorAll(".bar")

    for (let i = 0; i < ele.length; i++) {
        let min_index = i;
        ele[i].style.background = "blue"

        for (let j = i + 1; j < ele.length; j++) {
            ele[j].style.background = "red"
            await waitforme(delay)
            if (parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)) {
                if(min_index!==i){
                    ele[min_index].style.background = "skyblue"
                }
                min_index =j
            }else{
                ele[j].style.background = "skyblue"
            }
        }
        await waitforme(delay)
        swap(ele[i],ele[min_index])
        ele[min_index].style.background = "skyblue"
        ele[i].style.background = "green"
    }
}
const selectbtn = document.querySelector(".selectionsort")
selectbtn.addEventListener("click", async () => {
    disiablesorting()
    disablesizeslider()
    disablearraybnutton()

    await selection()

    enablesorting()
    enablesizeslider()
    enablearraybnutton()
})