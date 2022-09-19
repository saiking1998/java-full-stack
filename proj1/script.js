const inelement = document.getElementById('input');
const output = document.getElementById('output');
console.log(inelement)
let inputValue='';
inelement.addEventListener('input',getinput)


function getinput(){
    // let invalue = inelement.value;
    // output.innerText = output.value + invalue[invalue.length-1];
    // // inputValue = 
    // console.log(inputValue)
    output.innerText = inelement.value;
}
