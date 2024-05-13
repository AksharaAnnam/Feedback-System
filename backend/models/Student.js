const mongoose=require('mongoose');

const StudentSchema=new mongoose.Schema({
    id:Number,
    semester:Number,
    section:Number
})

const StudentModel=mongoose.model("Student",StudentSchema);
module.exports=StudentModel;