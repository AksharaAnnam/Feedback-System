const mongoose=require('mongoose');

const CoursesSchema=new mongoose.Schema({
    cid:String,
    name:String,
    semester:Number
})

const CoursesModel=mongoose.model("Courses",CoursesSchema);
module.exports=CoursesModel;