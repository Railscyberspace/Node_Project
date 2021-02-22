
const express = require("express");

const app = express();

app.get("/", ((req, res) =>
{
    res.send(`Hello Ruby` );
}));


app.get("/profile/:id", ((req, res) =>
{
    res.send("Welcome" + req.params.id);
}));

//Using express to send files to the broswers.

app.get("/index", ((req, res) =>
{
    res.sendFile(__dirname + "/index.html");
}));

const PORT = 8000
app.listen(8000);
console.log(`Listing at port` +" "+  PORT);