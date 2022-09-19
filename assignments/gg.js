let arr = [1, 2, 1, 1, 3, 8, 2, 1, 1]
let arr2 =[]
for(let i= 0;i<arr.length;i++){
    if(arr[i]==1){
        arr2.push(arr[i])
    }
}
console.log(arr2)