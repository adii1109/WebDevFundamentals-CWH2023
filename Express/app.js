
const exp = require("constants");
const express = require("express");
const fs=require('fs');
const path = require('path');
const { views } = require("server/src/config/schema");
const app = express();
const port =8000;


//Express specific stuff
app.use('/static',express.static('static')) //for serving static file
app.use(express.urlencoded()) //for data 

// PUG SPECIFIC STUFF
app.set('view engine','pug') //set the templete engine as pug
app.set('views',path.join(__dirname,'views')) //set the views directory
//Endpoint
app.get('/',(req,res)=>{
    const con='This is best content on Internet so far';
    const params= {'title':'PubG is best game ','content':con}
    res.status(200).render('index.pug',params);
})

app.post('/',(req,res)=>{
    // console.log(req.body)
    name=req.body.name;
    age=req.body.age;
    gender=req.body.gender;
    address=req.body.address;
    more=req.body.more;

    let outputWrite=(`the name of client is ${name},${age} years old,${gender} residing at ${address} more about him/her:${more}`)

    fs.writeFileSync('output.txt',outputWrite)
    const params={'message':'Your from has been sumbitted successfully'}
    res.status(200).render('index.pug',params);
})

//start the server:
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});