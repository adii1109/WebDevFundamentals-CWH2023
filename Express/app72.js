
const express = require("express");
const path = require('path');
const app = express();
const port =8000;

//static file:anyone access file:ex download
app.use('./static',express.static('static'));

//set template engine as pug
app.set('view engine', 'pug')

//set views directory
app.set('views',path.join(__dirname,'views'))

//our pug demo endpoint
app.get("/demo", (req, res)=>{ 
    res.status(200).render('demo', { title: 'Hey ,harry', message: 'Hello there! thanks to telling me how to use pubg' })
})
app.get("/", (req, res)=>{ 
    res.send("This is homepage of my first express app with Harry");
});
app.get("/about", (req, res)=>{ 
    res.send("This is about page of my first express app with Harry");
});
app.post("/about", (req, res)=>{ 
    res.send("This is post request  about page of my first express app with Harry");
});

//Status code sent:
app.post("/this", (req, res)=>{ 
    res.status(404).send("This page is not found on my website");
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
