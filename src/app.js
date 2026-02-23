const express = require('express');

const app = express();

app.use("/user",(req,res,next)=>{
    console.log("Handling the route user1");
    // res.send("Response1");

    next();
},
(req,res,next)=>{
       console.log("Handling the route user2");
    // res.send("Response2");
    next();
},

(req,res,next)=>{
       console.log("Handling the route user3");
    // res.send("Response3");
    next();
},
(req,res,next)=>{
       console.log("Handling the route user4");
    res.send("Response4");
  
})

app.listen(7000, () => {

   console.log("Server is Listening");

});