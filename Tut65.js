//Synchronus or blocking
// -line by line execution

//Asynchronuous or non-blocking
//-line by line execution not guaranteed;

const fs=require("fs");
fs.readFile("addy.txt","utf-8",(err,data) =>{
    console.log(data);
})
console.log("This is message") // This will be first executed