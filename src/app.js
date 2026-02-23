const express = require('express');

const app = express();

app.use("/hello",(req,res)=>{
       res.end("Hello Abinash + Smruti");
})

app.use("/I",(req,res)=>{
       res.end("I Love U Smruti");
})

app.use("/test",(req,res)=>{
       res.end("Hello from the Server");
})


app.listen(7000, () => {

   console.log("Server is Listening");

});