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

//Get user by email
app.get("/user", async(req,res) => {
    const userEmail = req.body.emailId;

    try{
        console.log(userEmail);
        const user = await User.findOne({emailId: userEmail});
        if(!user) {
          res.status(404).send("User not found");
        } else{
          res.send(user);
        }
    } catch (err) {
      res.status(400).send("Something went wrong ");
    }
})

app.get("/feed", async(req,res)=>{
   try{
  const users = await User.find({});
  res.send(users);

    } catch (err) {
    res.status(400).send("Something went wrong");
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