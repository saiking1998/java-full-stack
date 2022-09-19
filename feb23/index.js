const fs = require('fs');


// const readFiles = async (filename) => {

//     try {
//         const data = await fs.promises.readFile(`dtat/${filename}.txt`, "utf8");
//         const arr = data.toString().split('\r\n').filter(element => element.length > 0);
//         return arr;
//     }
//     catch (e) {
//         console.log("error", e)
//     }
// }
// const main = async () => {
//     const output = await readFiles("fruits")
//     console.log(output)
// }
const readFilesSync = async (filename) => {
    try {
        const data = await fs.promises.readFile(`data/${filename}.txt`, "utf8");
        const arr = data.toString().split('\r\n').filter(element => element.length > 0)
        return arr;
    }
    catch (err) {
        console.log("error", err)
    }

}
readdirectory = async (dirname) => {
try{
   const fileNames = await fs.promises.readdir(dirname)
   return fileNames
}catch(err){
 console.log("error",err)
}
}
const main = async () => {
    const output = await readdirectory("data")
    const content = {}
    for(let i = 0; i < output.length;i++){
        const file = output[i].split(".")[0]
        const fo = await readFilesSync(file)
        content[file] = fo
    }
    console.log(content)
}
main()
