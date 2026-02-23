const express = require("express");
const app = express();

const { adminAuth,userAuth  } = require("./middlewares/auth");

// Apply middleware only to /admin routes
app.use("/admin", adminAuth);

// Normal route (no middleware)
app.get("/user", userAuth, (req, res) => {
    res.send("User Data Sent");
});

// Admin routes (middleware will run first)
app.get("/admin/getAllData", (req, res) => {
    res.send("All Data Sent");
});

app.get("/admin/deleteUser", (req, res) => {
    res.send("Deleted a user");
});

app.listen(7000, () => {
    console.log("Server is Listening on port 7000");
});