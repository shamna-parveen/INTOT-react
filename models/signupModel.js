const mongoose=require("mongoose");

const signSchema={
    name:String,
    email:String,
    psw: String,
    psw_repeat:String

}
const Sign = mongoose.model("Sign",signSchema);
module.exports=Sign;
