const express=require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");
app.use(cors());
app.use(express.json());

//connect to mongoose
mongoose.connect("mongodb+srv://admin_shamna:test123@cluster0.azl17.mongodb.net/signupDB")

//require route
app.use("/",require("./routes/signRoute"))

app.listen(3001, function()
{
    console.log("express is running on port 3001");
})
