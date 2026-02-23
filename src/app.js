const express = require('express');

const app = express();

app.get("/user",(req,res)=>{
    res.send({firsName : "Abinash", lastName: "Kuanr"});
});

app.post("/user",(req,res)=>{
      res.send("Data successfully saved to the database!");
});

app.delete("/user",(req,res)=>{
      res.send("Data Deleted syuccessfully!");
});



app.use("/test",(req,res)=>{
       res.end("Hello from the Server");
       
});


app.listen(7000, () => {

   console.log("Server is Listening");

});