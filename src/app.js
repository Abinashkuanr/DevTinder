const express = require("express");
const connectDB = require("./config/database");

const app = express();
const User = require("./Models/user");


 app.use(express.json());

app.post("/signup", async(req,res,) =>{

    //creating a new instance of the User model
    const user = new User(req.body);
     
    try {
          await user.save();
    res.send("User Added successfully")
    } catch(err) {
        res.ststud(400).send("Error saving the user: " + err.message);
    }
    
});



connectDB()
  .then(() => {
    console.log("Database connection established.....");
    app.listen(7000, () => {
      console.log("Server is Listening on port 7000");
    });
  })
  .catch((err) => {
    console.log("Database can not be connected!!!!");
  });