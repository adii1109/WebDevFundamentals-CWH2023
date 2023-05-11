const fs=require('fs');
// 1] readFile : print before function after 

// fs.readFile('file.txt','utf-8',(err,data)=>{
//     console.log(err,data);
// })
// console.log("Finished file ....");


//2]readFileSync:print you decide fuction after.

//  const a =fs.readFileSync('file.txt');
//  console.log(a.toString());
//  console.log("Finished file ....");

//3]writeFile:

// fs.writeFile('file2.txt','This is new data',()=>{
//     console.log('Written in your File...');
// })
// console.log('Finished Work....Thank you')


//4]writeFileSync:
//  b=fs.writeFileSync('file2.txt',"This is data2");
// console.log(b);
// console.log("Finished thank You")