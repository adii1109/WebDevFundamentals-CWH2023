//shri Ram ,swami smarth ,shri ganesha,balumama ,bhutoba,jotiba........

const http =require('http')
const fs=require("fs");
const fileContent=fs.readFileSync('tut61.html');


const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(fileContent)
})


server.listen(800,'127.0.0.1',()=>{
 Console.log('Listening on 800 Port....');
})