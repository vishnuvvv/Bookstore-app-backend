const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require('cors')
const app = express();
require('dotenv').config()
//mongodb+srv://admin:aeqh2xDkneI5ctgu@cluster0.4gpybpv.mongodb.net/bookStore?retryWrites=true&w=majority

app.use(express.json());
app.use(cors());
app.use("/books", router); //localhost:5000/books

mongoose.set('strictQuery', false);

mongoose.connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.4gpybpv.mongodb.net/bookStore?retryWrites=true&w=majority`
).then(()=>{
    console.log("Connected to database")
}).then(()=>{
    app.listen(5000)
})
.catch((error)=>console.log(error)) 


//