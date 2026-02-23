const express = require('express');

const app = express();

app.get("/user/:userId/:name/:password",(req,res)=>{
    console.log(req.params);
    res.send({firsName : "Abinash", lastName: "Kuanr"});
});



app.listen(7000, () => {

   console.log("Server is Listening");

});